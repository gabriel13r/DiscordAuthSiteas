import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";

interface HeaderProps {
  isAuthenticated: boolean;
}

export default function Header({ isAuthenticated }: HeaderProps) {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const handleLogout = async () => {
    try {
      await apiRequest("POST", "/api/auth/logout");
      queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
      toast({
        title: "Desconectado",
        description: "Você foi desconectado com sucesso.",
      });
      setLocation("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Falha ao Desconectar",
        description: "Não foi possível desconectar. Tente novamente.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <header className="bg-[hsl(var(--discord-background-tertiary))] shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" 
            alt="Discord Logo" 
            className="h-10 w-auto mr-3"
          />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent text-2xl font-extrabold">
            Discord Auth
          </span>
        </div>
        
        {isAuthenticated && (
          <Button 
            className="bg-red-500 hover:bg-red-600 text-white font-medium transition-all duration-200 flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        )}
      </div>
    </header>
  );
}
