import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="discord-animation mb-8">
        <img 
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" 
          alt="Discord Logo" 
          className="w-40 h-auto"
        />
      </div>

      <Card className="bg-[hsl(var(--discord-background-secondary))] max-w-md w-full border-none shadow-xl rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2"></div>
        <CardContent className="p-8">
          <h2 className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Discord Login
          </h2>
          <p className="text-[hsl(var(--discord-text-muted))] mb-8 text-center">
            Entre com sua conta do Discord para acessar todos os recursos
          </p>
          
          <Button 
            className="w-full bg-[hsl(var(--discord-blurple))] hover:bg-[hsl(var(--discord-blurple-dark))] py-6 text-lg font-semibold rounded-md transition-all duration-200 hover:scale-105"
            onClick={onLogin}
          >
            <svg 
              className="w-7 h-7 mr-3" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 127.14 96.36"
            >
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
            Entrar com Discord
          </Button>
          
          <div className="mt-6 text-center text-sm text-[hsl(var(--discord-text-muted))]">
            Ao conectar-se, você concorda em compartilhar suas informações de perfil do Discord.
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-xs text-center text-[hsl(var(--discord-text-muted))]">
              Desenvolvido com 💜 por Replit AI
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
