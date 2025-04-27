import { 
  LayoutDashboard, 
  Server, 
  Link as LinkIcon, 
  Settings,
  User
} from "lucide-react";

export default function MobileNavigation() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[hsl(var(--discord-background-tertiary))] shadow-lg z-10">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1"></div>
      <nav className="flex justify-around">
        <a href="#dashboard" className="py-3 px-4 flex flex-col items-center text-[hsl(var(--discord-blurple))]">
          <LayoutDashboard className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Dashboard</span>
        </a>
        <a href="#servers" className="py-3 px-4 flex flex-col items-center text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-blurple))] transition-colors">
          <Server className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Servidores</span>
        </a>
        <a href="#profile" className="py-3 px-4 flex flex-col items-center text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-blurple))] transition-colors">
          <User className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Perfil</span>
        </a>
        <a href="#settings" className="py-3 px-4 flex flex-col items-center text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-blurple))] transition-colors">
          <Settings className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Config</span>
        </a>
      </nav>
    </div>
  );
}
