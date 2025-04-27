import { 
  LayoutDashboard, 
  Server, 
  Link as LinkIcon, 
  Settings 
} from "lucide-react";

export default function MobileNavigation() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[hsl(var(--discord-background-tertiary))] shadow-lg z-10">
      <nav className="flex justify-around">
        <a href="#dashboard" className="py-3 px-4 flex flex-col items-center text-[hsl(var(--discord-blurple))]">
          <LayoutDashboard className="h-5 w-5" />
          <span className="text-xs mt-1">Dashboard</span>
        </a>
        <a href="#servers" className="py-3 px-4 flex flex-col items-center text-[hsl(var(--discord-text-muted))]">
          <Server className="h-5 w-5" />
          <span className="text-xs mt-1">Servers</span>
        </a>
        <a href="#connections" className="py-3 px-4 flex flex-col items-center text-[hsl(var(--discord-text-muted))]">
          <LinkIcon className="h-5 w-5" />
          <span className="text-xs mt-1">Connections</span>
        </a>
        <a href="#settings" className="py-3 px-4 flex flex-col items-center text-[hsl(var(--discord-text-muted))]">
          <Settings className="h-5 w-5" />
          <span className="text-xs mt-1">Settings</span>
        </a>
      </nav>
    </div>
  );
}
