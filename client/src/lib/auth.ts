import { queryClient } from "./queryClient";
import { apiRequest } from "./queryClient";
import { Session } from "@shared/schema";

// Get the current user from the query cache
export function getCurrentUser(): Session | null {
  const data = queryClient.getQueryData<{ authenticated: boolean, user: Session }>(['/api/auth/user']);
  return data?.authenticated ? data.user : null;
}

// Check if the user is authenticated based on the query cache
export function isAuthenticated(): boolean {
  const data = queryClient.getQueryData<{ authenticated: boolean }>(['/api/auth/user']);
  return !!data?.authenticated;
}

// Logout the user
export async function logout(): Promise<boolean> {
  try {
    await apiRequest("POST", "/api/auth/logout");
    queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
    return true;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
}

// Initiate the Discord OAuth2 login flow
export async function initiateDiscordLogin(): Promise<string | null> {
  try {
    const response = await fetch("/api/auth/login");
    const data = await response.json();
    
    if (data.url) {
      return data.url;
    }
    return null;
  } catch (error) {
    console.error("Login initiation error:", error);
    return null;
  }
}
