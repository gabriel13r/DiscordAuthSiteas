import { Card } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Server, 
  Link as LinkIcon, 
  Settings 
} from "lucide-react";

export default function SidebarNavigation() {
  return (
    <Card className="bg-[hsl(var(--discord-background-secondary))] border-none shadow-md hidden lg:block">
      <nav>
        <ul>
          <li>
            <a 
              href="#dashboard" 
              className="flex items-center px-4 py-3 bg-[hsl(var(--discord-blurple))] bg-opacity-20 border-l-4 border-[hsl(var(--discord-blurple))]"
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Dashboard
            </a>
          </li>
          <li>
            <a 
              href="#servers" 
              className="flex items-center px-4 py-3 hover:bg-[hsl(var(--discord-background-tertiary))] transition-colors"
            >
              <Server className="mr-3 h-5 w-5" />
              Servers
            </a>
          </li>
          <li>
            <a 
              href="#connections" 
              className="flex items-center px-4 py-3 hover:bg-[hsl(var(--discord-background-tertiary))] transition-colors"
            >
              <LinkIcon className="mr-3 h-5 w-5" />
              Connections
            </a>
          </li>
          <li>
            <a 
              href="#settings" 
              className="flex items-center px-4 py-3 hover:bg-[hsl(var(--discord-background-tertiary))] transition-colors"
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </Card>
  );
}
