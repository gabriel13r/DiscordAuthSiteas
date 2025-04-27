import { Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConnectedAppProps {
  name: string;
  icon: string;
  connectedDate: string;
  onRemove?: () => void;
}

export default function ConnectedApp({ name, icon, connectedDate, onRemove }: ConnectedAppProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700 last:border-b-0 hover:bg-[#2a2c3380] transition-colors rounded-lg">
      <div className="flex items-center">
        <div className="relative mr-4">
          <img src={icon} alt={name} className="w-10 h-10 rounded-md" />
          <div className="absolute -bottom-1 -right-1 bg-[hsl(var(--discord-blurple))] h-4 w-4 rounded-full flex items-center justify-center">
            <ExternalLink className="h-2.5 w-2.5 text-white" />
          </div>
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-[hsl(var(--discord-text-muted))]">Conectado em {connectedDate}</div>
        </div>
      </div>
      {onRemove && (
        <Button 
          variant="ghost"
          className="h-8 w-8 p-0 rounded-full text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-red))] hover:bg-[#ff000020] transition-colors"
          onClick={onRemove}
          aria-label={`Remove ${name} connection`}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
