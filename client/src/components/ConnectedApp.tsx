import { Trash2 } from "lucide-react";

interface ConnectedAppProps {
  name: string;
  icon: string;
  connectedDate: string;
  onRemove?: () => void;
}

export default function ConnectedApp({ name, icon, connectedDate, onRemove }: ConnectedAppProps) {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-700 last:border-b-0">
      <div className="flex items-center">
        <img src={icon} alt={name} className="w-8 h-8 mr-3" />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-[hsl(var(--discord-text-muted))]">Connected on {connectedDate}</div>
        </div>
      </div>
      {onRemove && (
        <button 
          className="text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-red))] transition-colors"
          onClick={onRemove}
          aria-label={`Remove ${name} connection`}
        >
          <Trash2 className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
