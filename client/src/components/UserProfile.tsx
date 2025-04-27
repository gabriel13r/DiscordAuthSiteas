import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Mail, Calendar, ExternalLink, Shield } from "lucide-react";
import { Session } from "@shared/schema";
import { Button } from "@/components/ui/button";

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
  const formattedJoinDate = `Entrou ${formatDistanceToNow(createdAt, { addSuffix: true })}`;
  
  return (
    <Card className="bg-[hsl(var(--discord-background-secondary))] border-none shadow-md mb-6 overflow-hidden rounded-xl">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2"></div>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-6 px-4 flex justify-center">
        <div className="relative">
          <img 
            src={avatarUrl} 
            alt="User Avatar" 
            className="w-28 h-28 rounded-full border-4 border-[hsl(var(--discord-background))]"
          />
          <span className="status-dot bg-[hsl(var(--discord-green))]"></span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-1 mt-2">{username}</h2>
          <div className="bg-[hsl(var(--discord-blurple))] text-white text-xs px-2 py-1 rounded-full mb-3 flex items-center">
            <Shield className="h-3 w-3 mr-1" />
            Usuário Discord
          </div>
          
          <p className="text-sm text-[hsl(var(--discord-text-muted))] mb-4">
            ID: {user.discordId}
          </p>
          
          <Button 
            className="w-full bg-[hsl(var(--discord-blurple))] hover:bg-[hsl(var(--discord-blurple-dark))] mb-4 text-sm h-9"
            onClick={() => window.open(`https://discord.com/users/${user.discordId}`, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" /> 
            Ver perfil no Discord
          </Button>
          
          <div className="w-full border-t border-gray-700 my-2"></div>
          
          <div className="flex items-center mb-2 w-full mt-3">
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
