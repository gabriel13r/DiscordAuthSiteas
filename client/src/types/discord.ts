// Discord OAuth2 scopes
export type DiscordScope = 
  | "identify" 
  | "email" 
  | "connections" 
  | "guilds" 
  | "guilds.join" 
  | "guilds.members.read" 
  | "gdm.join" 
  | "rpc" 
  | "rpc.notifications.read" 
  | "rpc.voice.read" 
  | "rpc.voice.write" 
  | "rpc.activities.write" 
  | "bot" 
  | "webhook.incoming" 
  | "messages.read" 
  | "applications.builds.upload" 
  | "applications.builds.read" 
  | "applications.commands" 
  | "applications.commands.update" 
  | "applications.store.update" 
  | "applications.entitlements" 
  | "activities.read" 
  | "activities.write" 
  | "relationships.read";

// User flags
export enum DiscordUserFlags {
  DISCORD_EMPLOYEE = 1 << 0,
  PARTNERED_SERVER_OWNER = 1 << 1,
  HYPESQUAD_EVENTS = 1 << 2,
  BUG_HUNTER_LEVEL_1 = 1 << 3,
  HOUSE_BRAVERY = 1 << 6,
  HOUSE_BRILLIANCE = 1 << 7,
  HOUSE_BALANCE = 1 << 8,
  EARLY_SUPPORTER = 1 << 9,
  TEAM_USER = 1 << 10,
  BUG_HUNTER_LEVEL_2 = 1 << 14,
  VERIFIED_BOT = 1 << 16,
  EARLY_VERIFIED_BOT_DEVELOPER = 1 << 17,
  DISCORD_CERTIFIED_MODERATOR = 1 << 18,
  BOT_HTTP_INTERACTIONS = 1 << 19,
  ACTIVE_DEVELOPER = 1 << 22
}

// Premium types
export enum DiscordPremiumType {
  NONE = 0,
  NITRO_CLASSIC = 1,
  NITRO = 2,
  NITRO_BASIC = 3
}

// Guild (server) object
export interface DiscordGuild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
  features: string[];
}

// Connection object
export interface DiscordConnection {
  id: string;
  name: string;
  type: string;
  revoked?: boolean;
  verified: boolean;
  friend_sync: boolean;
  show_activity: boolean;
  visibility: 0 | 1;
}
