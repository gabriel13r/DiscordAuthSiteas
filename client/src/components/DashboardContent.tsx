import { Card, CardContent } from "@/components/ui/card";
import { Session } from "@shared/schema";
import StatCard from "@/components/StatCard";
import ConnectedApp from "@/components/ConnectedApp";
import ActivityItem from "@/components/ActivityItem";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DashboardContentProps {
  user: Session;
}

export default function DashboardContent({ user }: DashboardContentProps) {
  // Format last login date
  const lastLoginDate = new Date(user.lastLogin);
  const formattedLastLogin = formatDistanceToNow(lastLoginDate, { 
    addSuffix: true,
    locale: ptBR 
  });
  
  return (
    <Card className="bg-[hsl(var(--discord-background-secondary))] border-none shadow-md mb-6 overflow-hidden rounded-xl">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2"></div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Dashboard
        </h2>
        <p className="text-[hsl(var(--discord-text-muted))] mb-6">
          Bem-vindo ao seu dashboard de integração Discord. Aqui você pode gerenciar sua conta e preferências.
        </p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <StatCard 
            title="Status Atual" 
            value="Online" 
            statusColor="bg-[hsl(var(--discord-green))]" 
          />
          
          <StatCard 
            title="Servidores" 
            value={Math.floor(Math.random() * 5) + 1 + ""} 
          />
          
          <StatCard 
            title="Último Acesso" 
            value={formattedLastLogin}
          />
          
          <StatCard 
            title="Tipo de Conta" 
            value="Usuário Discord" 
          />
        </div>
        
        {/* Connected Applications */}
        <div className="bg-[hsl(var(--discord-background-tertiary))] rounded-lg p-5 mb-6 shadow-inner">
          <h3 className="font-bold mb-3 text-lg">Aplicações Conectadas</h3>
          
          <ConnectedApp 
            name="Spotify" 
            icon="https://cdn-icons-png.flaticon.com/512/732/732244.png" 
            connectedDate="12 Fev, 2023" 
            onRemove={() => alert('Esta é apenas uma demonstração')}
          />
          <ConnectedApp 
            name="Twitch" 
            icon="https://cdn-icons-png.flaticon.com/512/5968/5968919.png" 
            connectedDate="3 Jan, 2023" 
            onRemove={() => alert('Esta é apenas uma demonstração')}
          />
        </div>
        
        {/* Recent Activities */}
        <div className="bg-[hsl(var(--discord-background-tertiary))] rounded-lg p-5 shadow-inner">
          <h3 className="font-bold mb-3 text-lg">Atividades Recentes</h3>
          
          <ActivityItem 
            title="Login com Discord"
            description={`Hoje, ${new Date().toLocaleTimeString()}`}
            icon="login"
            iconColor="text-[hsl(var(--discord-green))]"
          />
          
          <ActivityItem 
            title="Conectou aplicativo"
            description="há 2 dias atrás"
            icon="link"
            iconColor="text-[hsl(var(--discord-purple))]"
          />
          
          {/* Show when account was created */}
          <ActivityItem 
            title="Conta criada"
            description={formatDistanceToNow(new Date(user.createdAt), { 
              addSuffix: true,
              locale: ptBR 
            })}
            icon="user"
            iconColor="text-[hsl(var(--discord-blurple))]"
          />
        </div>
      </CardContent>
    </Card>
  );
}
