import { createRoot } from "react-dom/client";
import "./index.css";

// Componente de Login Discord idêntico ao vídeo
function DiscordLogin() {
  const handleLogin = () => {
    fetch("/api/auth/login")
      .then(response => response.json())
      .then(data => {
        if (data.url) {
          window.location.href = data.url;
        }
      })
      .catch(error => {
        console.error("Erro ao fazer login:", error);
      });
  };

  return (
    <div style={{ backgroundColor: '#2c2f33', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="discord-animation">
        <img 
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" 
          alt="Discord Logo" 
          style={{ width: '160px', height: 'auto', marginBottom: '32px' }}
        />
      </div>
      
      <div style={{ 
        backgroundColor: '#36393f', 
        maxWidth: '450px', 
        width: '100%', 
        borderRadius: '12px', 
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        border: '1px solid #202225'
      }}>
        <div style={{ 
          height: '8px', 
          background: 'linear-gradient(to right, #5865f2, #8d5bf7, #eb459e)'
        }}></div>
        
        <div style={{ padding: '32px' }}>
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '16px',
            background: 'linear-gradient(to right, #5865f2, #eb459e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Discord Login
          </h2>
          
          <p style={{ 
            color: '#b9bbbe', 
            marginBottom: '32px', 
            textAlign: 'center'
          }}>
            Entre com sua conta do Discord para acessar todos os recursos
          </p>
          
          <button 
            style={{ 
              width: '100%', 
              backgroundColor: '#5865f2', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              padding: '14px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
              transform: 'scale(1)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onClick={handleLogin}
          >
            <svg 
              style={{ width: '24px', height: '24px', marginRight: '12px' }}
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 127.14 96.36"
            >
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
            Entrar com Discord
          </button>
          
          <div style={{ 
            marginTop: '24px', 
            textAlign: 'center', 
            fontSize: '14px', 
            color: '#b9bbbe' 
          }}>
            Ao conectar-se, você concorda em compartilhar suas informações de perfil do Discord.
          </div>
          
          <div style={{ 
            marginTop: '32px', 
            paddingTop: '24px', 
            borderTop: '1px solid #40444b',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: '12px', 
              color: '#b9bbbe' 
            }}>
              Desenvolvido com 💜 por Replit AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Renderiza o componente de Login do Discord
createRoot(document.getElementById("root")!).render(<DiscordLogin />);
