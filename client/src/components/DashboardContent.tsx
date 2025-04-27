import { Card, CardContent } from "@/components/ui/card";
import { Session } from "@shared/schema";
import StatCard from "@/components/StatCard";
import ConnectedApp from "@/components/ConnectedApp";
import ActivityItem from "@/components/ActivityItem";
import { formatDistanceToNow } from "date-fns";

interface DashboardContentProps {
  user: Session;
}

export default function DashboardContent({ user }: DashboardContentProps) {
  // Format last login date
  const lastLoginDate = new Date(user.lastLogin);
  const formattedLastLogin = formatDistanceToNow(lastLoginDate, { addSuffix: true });
  
  return (
    <Card className="bg-[hsl(var(--discord-background-secondary))] border-none shadow-md mb-6">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p className="text-[hsl(var(--discord-text-muted))] mb-6">
          Welcome to your Discord integration dashboard. Here you can manage your connected account and preferences.
        </p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <StatCard 
            title="Current Status" 
            value="Online" 
            statusColor="bg-[hsl(var(--discord-green))]" 
          />
          
          <StatCard 
            title="Servers Joined" 
            value="--" 
          />
          
          <StatCard 
            title="Last Login" 
            value={formattedLastLogin}
          />
          
          <StatCard 
            title="Account Type" 
            value="Discord User" 
          />
        </div>
        
        {/* Connected Applications */}
        <div className="bg-[hsl(var(--discord-background-tertiary))] rounded-lg p-4 mb-6">
          <h3 className="font-bold mb-3">Connected Applications</h3>
          
          {/* Since we don't have real connected apps data, 
              we'll show a message that no apps are connected */}
          <p className="text-[hsl(var(--discord-text-muted))] italic">
            No applications are currently connected to your Discord account.
          </p>
          
          {/* Example of what a connected app would look like
          <ConnectedApp 
            name="Spotify" 
            icon="https://cdn-icons-png.flaticon.com/512/732/732244.png" 
            connectedDate="Feb 12, 2023" 
          />
          <ConnectedApp 
            name="Twitch" 
            icon="https://cdn-icons-png.flaticon.com/512/5968/5968919.png" 
            connectedDate="Jan 3, 2023" 
          /> */}
        </div>
        
        {/* Recent Activities */}
        <div className="bg-[hsl(var(--discord-background-tertiary))] rounded-lg p-4">
          <h3 className="font-bold mb-3">Recent Activities</h3>
          
          <ActivityItem 
            title="Logged in with Discord"
            description={`Today, ${new Date().toLocaleTimeString()}`}
            icon="login"
            iconColor="text-[hsl(var(--discord-green))]"
          />
          
          {/* Show when account was created */}
          <ActivityItem 
            title="Account created"
            description={formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}
            icon="user"
            iconColor="text-[hsl(var(--discord-blurple))]"
          />
        </div>
      </CardContent>
    </Card>
  );
}
