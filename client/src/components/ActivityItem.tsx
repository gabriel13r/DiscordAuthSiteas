import { LogIn, User, Link, Lock } from "lucide-react";

interface ActivityItemProps {
  title: string;
  description: string;
  icon: "login" | "user" | "link" | "lock";
  iconColor: string;
}

export default function ActivityItem({ title, description, icon, iconColor }: ActivityItemProps) {
  const getIcon = () => {
    switch (icon) {
      case "login":
        return <LogIn className={`h-5 w-5 ${iconColor} mt-1 mr-3`} />;
      case "user":
        return <User className={`h-5 w-5 ${iconColor} mt-1 mr-3`} />;
      case "link":
        return <Link className={`h-5 w-5 ${iconColor} mt-1 mr-3`} />;
      case "lock":
        return <Lock className={`h-5 w-5 ${iconColor} mt-1 mr-3`} />;
      default:
        return <LogIn className={`h-5 w-5 ${iconColor} mt-1 mr-3`} />;
    }
  };
  
  return (
    <div className="border-b border-gray-700 py-3 last:border-b-0 last:pb-0">
      <div className="flex items-start">
        {getIcon()}
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-[hsl(var(--discord-text-muted))]">{description}</div>
        </div>
      </div>
    </div>
  );
}
