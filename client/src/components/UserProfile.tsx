import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Mail, Calendar } from "lucide-react";
import { Session } from "@shared/schema";

interface UserProfileProps {
  user: Session;
}

export default function UserProfile({ user }: UserProfileProps) {
  // Generate Discord avatar URL or use default if not available
  const avatarUrl = user.avatar
    ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/${Number(user.discriminator) % 5}.png`;
    
  const username = user.discriminator
    ? `${user.username}#${user.discriminator}`
    : user.username;
    
  const createdAt = new Date(user.createdAt);
  const formattedJoinDate = `Joined Discord ${formatDistanceToNow(createdAt, { addSuffix: true })}`;
  
  return (
    <Card className="bg-[hsl(var(--discord-background-secondary))] border-none shadow-md mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img 
              src={avatarUrl} 
              alt="User Avatar" 
              className="w-24 h-24 rounded-full border-4 border-[hsl(var(--discord-background))]"
            />
            <span className="status-dot bg-[hsl(var(--discord-green))]"></span>
          </div>
          
          <h2 className="text-xl font-bold mb-1">{username}</h2>
          <p className="text-sm text-[hsl(var(--discord-text-muted))] mb-4">
            ID: {user.discordId}
          </p>
          
          <div className="w-full border-t border-gray-700 my-4"></div>
          
          <div className="flex items-center mb-2 w-full">
            <Calendar className="h-4 w-4 mr-2 text-[hsl(var(--discord-text-muted))]" />
            <span className="text-sm">{formattedJoinDate}</span>
          </div>
          
          {user.email && (
            <div className="flex items-center mb-2 w-full">
              <Mail className="h-4 w-4 mr-2 text-[hsl(var(--discord-text-muted))]" />
              <span className="text-sm">{user.email}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
