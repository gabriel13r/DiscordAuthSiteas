import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, type DiscordTokenResponse, type DiscordUser } from "@shared/schema";
import session from "express-session";
import MemoryStore from "memorystore";
import fetch from "node-fetch";
import { z } from "zod";

const MemoryStoreInstance = MemoryStore(session);

// Discord OAuth2 config
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || "";
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || "";
let REDIRECT_URI = "http://localhost:5000/api/auth/callback";

// Use REPLIT_DOMAINS environment variable for callback URL if available
if (process.env.REPLIT_DOMAINS) {
  const domains = process.env.REPLIT_DOMAINS.split(",");
  if (domains.length > 0) {
    REDIRECT_URI = `https://${domains[0]}/api/auth/callback`;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up session middleware
  app.use(
    session({
      name: "discord_auth_session",
      secret: process.env.SESSION_SECRET || "discord_oauth_secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      },
      store: new MemoryStoreInstance({
        checkPeriod: 86400000, // prune expired entries every 24h
      }),
    })
  );

  // Auth routes
  app.get("/api/auth/login", (req, res) => {
    const scopes = ["identify", "email"];
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_type=code&scope=${encodeURIComponent(scopes.join(" "))}`;
    
    res.json({ url: authUrl });
  });

  app.get("/api/auth/callback", async (req, res) => {
    const { code } = req.query;
    
    if (!code || typeof code !== "string") {
      return res.status(400).json({ error: "Invalid code parameter" });
    }

    try {
      // Exchange code for token
      const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: DISCORD_CLIENT_ID,
          client_secret: DISCORD_CLIENT_SECRET,
          grant_type: "authorization_code",
          code,
          redirect_uri: REDIRECT_URI,
        }),
      });

      if (!tokenResponse.ok) {
        const errorData = await tokenResponse.text();
        console.error("Discord token error:", errorData);
        return res.redirect("/?error=token_exchange_failed");
      }

      const tokenData = await tokenResponse.json() as DiscordTokenResponse;

      // Get user data from Discord
      const userResponse = await fetch("https://discord.com/api/users/@me", {
        headers: {
          Authorization: `${tokenData.token_type} ${tokenData.access_token}`,
        },
      });

      if (!userResponse.ok) {
        const errorData = await userResponse.text();
        console.error("Discord user data error:", errorData);
        return res.redirect("/?error=user_data_failed");
      }

      const userData = await userResponse.json() as DiscordUser;

      // Calculate token expiry time
      const tokenExpires = Math.floor(Date.now() / 1000) + tokenData.expires_in;

      // Check if user exists
      let user = await storage.getUserByDiscordId(userData.id);

      if (user) {
        // Update existing user
        user = await storage.updateUser(user.id, {
          username: userData.username,
          discriminator: userData.discriminator,
          avatar: userData.avatar || undefined,
          email: userData.email,
          accessToken: tokenData.access_token,
          refreshToken: tokenData.refresh_token,
          tokenExpires,
        });
      } else {
        // Create new user
        const newUser = insertUserSchema.parse({
          discordId: userData.id,
          username: userData.username,
          discriminator: userData.discriminator,
          avatar: userData.avatar || undefined,
          email: userData.email,
          accessToken: tokenData.access_token,
          refreshToken: tokenData.refresh_token,
          tokenExpires,
        });

        user = await storage.createUser(newUser);
      }

      // Set session
      if (user) {
        const sessionId = await storage.createSession(user.id);
        req.session.sessionId = sessionId;
      }

      // Redirect to front-end dashboard
      res.redirect("/dashboard");
    } catch (error) {
      console.error("Auth callback error:", error);
      res.redirect("/?error=auth_failed");
    }
  });

  app.get("/api/auth/user", async (req, res) => {
    try {
      const sessionId = req.session.sessionId;
      
      if (!sessionId) {
        return res.status(401).json({ authenticated: false });
      }
      
      const session = await storage.getSession(sessionId);
      
      if (!session) {
        return res.status(401).json({ authenticated: false });
      }
      
      // Return user data without sensitive tokens
      const { accessToken, refreshToken, ...userData } = session;
      
      res.json({
        authenticated: true,
        user: userData
      });
    } catch (error) {
      console.error("User data error:", error);
      res.status(500).json({ error: "Failed to get user data" });
    }
  });

  app.post("/api/auth/logout", async (req, res) => {
    try {
      const sessionId = req.session.sessionId;
      
      if (sessionId) {
        await storage.deleteSession(sessionId);
      }
      
      req.session.destroy((err) => {
        if (err) {
          console.error("Session destruction error:", err);
          return res.status(500).json({ error: "Failed to destroy session" });
        }
        
        res.json({ success: true });
      });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({ error: "Failed to logout" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
