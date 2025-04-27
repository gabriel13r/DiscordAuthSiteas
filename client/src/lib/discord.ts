import { Session, DiscordUser } from "@shared/schema";

// Format the Discord user data for display
export function formatDiscordUser(user: Session) {
  return {
    id: user.discordId,
    username: user.discriminator 
      ? `${user.username}#${user.discriminator}` 
      : user.username,
    avatar: getDiscordAvatarUrl(user.discordId, user.avatar),
    email: user.email || "",
    createdAt: new Date(user.createdAt),
    lastLogin: new Date(user.lastLogin)
  };
}

// Get the Discord avatar URL
export function getDiscordAvatarUrl(userId: string, avatarHash?: string | null): string {
  if (!avatarHash) {
    // Return default avatar based on user discriminator
    const discriminatorMod = userId.length > 0 ? parseInt(userId.slice(-1)) % 5 : 0;
    return `https://cdn.discordapp.com/embed/avatars/${discriminatorMod}.png`;
  }
  
  return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png`;
}

// Get Discord status text from status code
export function getStatusText(status?: string): { text: string; color: string } {
  switch (status) {
    case "online":
      return { text: "Online", color: "bg-[hsl(var(--discord-green))]" };
    case "idle":
      return { text: "Idle", color: "bg-[hsl(var(--discord-yellow))]" };
    case "dnd":
      return { text: "Do Not Disturb", color: "bg-[hsl(var(--discord-red))]" };
    case "offline":
      return { text: "Offline", color: "bg-gray-500" };
    default:
      return { text: "Online", color: "bg-[hsl(var(--discord-green))]" };
  }
}
