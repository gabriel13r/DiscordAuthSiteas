import { Card } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Server, 
  Link as LinkIcon, 
  Settings,
  Bell,
  ShieldCheck
} from "lucide-react";

export default function SidebarNavigation() {
  return (
    <Card className="bg-[hsl(var(--discord-background-secondary))] border-none shadow-md hidden lg:block overflow-hidden rounded-xl">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2"></div>
      <nav className="py-2">
        <div className="px-4 py-3 text-sm font-semibold text-[hsl(var(--discord-text-muted))] uppercase">
          Menu Principal
        </div>
        <ul>
          <li>
            <a 
              href="#dashboard" 
              className="flex items-center px-4 py-3 bg-[hsl(var(--discord-blurple))] bg-opacity-20 border-l-4 border-[hsl(var(--discord-blurple))] font-medium"
            >
              <LayoutDashboard className="mr-3 h-5 w-5 text-[hsl(var(--discord-blurple))]" />
              Dashboard
            </a>
          </li>
          <li>
            <a 
              href="#servers" 
              className="flex items-center px-4 py-3 hover:bg-[hsl(var(--discord-background-tertiary))] transition-colors hover:border-l-4 hover:border-[hsl(var(--discord-blurple))] border-l-4 border-transparent"
            >
              <Server className="mr-3 h-5 w-5 text-[hsl(var(--discord-text-muted))]" />
              Servidores
            </a>
          </li>
          <li>
            <a 
              href="#connections" 
              className="flex items-center px-4 py-3 hover:bg-[hsl(var(--discord-background-tertiary))] transition-colors hover:border-l-4 hover:border-[hsl(var(--discord-blurple))] border-l-4 border-transparent"
            >
              <LinkIcon className="mr-3 h-5 w-5 text-[hsl(var(--discord-text-muted))]" />
              Conexões
            </a>
          </li>
          
          <div className="px-4 py-3 mt-2 text-sm font-semibold text-[hsl(var(--discord-text-muted))] uppercase">
            Configurações
          </div>
          
          <li>
            <a 
              href="#notifications" 
              className="flex items-center px-4 py-3 hover:bg-[hsl(var(--discord-background-tertiary))] transition-colors hover:border-l-4 hover:border-[hsl(var(--discord-blurple))] border-l-4 border-transparent"
            >
              <Bell className="mr-3 h-5 w-5 text-[hsl(var(--discord-text-muted))]" />
              Notificações
            </a>
          </li>
          
          <li>
            <a 
              href="#privacy" 
              className="flex items-center px-4 py-3 hover:bg-[hsl(var(--discord-background-tertiary))] transition-colors hover:border-l-4 hover:border-[hsl(var(--discord-blurple))] border-l-4 border-transparent"
            >
              <ShieldCheck className="mr-3 h-5 w-5 text-[hsl(var(--discord-text-muted))]" />
              Privacidade
            </a>
          </li>
          
          <li>
            <a 
              href="#settings" 
              className="flex items-center px-4 py-3 hover:bg-[hsl(var(--discord-background-tertiary))] transition-colors hover:border-l-4 hover:border-[hsl(var(--discord-blurple))] border-l-4 border-transparent"
            >
              <Settings className="mr-3 h-5 w-5 text-[hsl(var(--discord-text-muted))]" />
              Configurações
            </a>
          </li>
        </ul>
      </nav>
    </Card>
  );
}
