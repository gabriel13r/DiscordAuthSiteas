import { LogIn, User, Link, Lock, Shield, Bell } from "lucide-react";

interface ActivityItemProps {
  title: string;
  description: string;
  icon: "login" | "user" | "link" | "lock" | "shield" | "bell";
  iconColor: string;
}

export default function ActivityItem({ title, description, icon, iconColor }: ActivityItemProps) {
  const getIcon = () => {
    switch (icon) {
      case "login":
        return <LogIn className={`h-5 w-5 ${iconColor}`} />;
      case "user":
        return <User className={`h-5 w-5 ${iconColor}`} />;
      case "link":
        return <Link className={`h-5 w-5 ${iconColor}`} />;
      case "lock":
        return <Lock className={`h-5 w-5 ${iconColor}`} />;
      case "shield":
        return <Shield className={`h-5 w-5 ${iconColor}`} />;
      case "bell":
        return <Bell className={`h-5 w-5 ${iconColor}`} />;
      default:
        return <LogIn className={`h-5 w-5 ${iconColor}`} />;
    }
  };
  
  return (
    <div className="border-b border-gray-700 py-4 last:border-b-0 last:pb-0 hover:bg-[#2a2c3380] transition-colors px-2 rounded-lg">
      <div className="flex items-start">
        <div className="bg-[#2a2c3380] p-2 rounded-lg mr-3">
          {getIcon()}
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-[hsl(var(--discord-text-muted))]">{description}</div>
        </div>
      </div>
    </div>
  );
}
