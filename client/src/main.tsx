import { createRoot } from "react-dom/client";
import "./index.css";
import { useState } from "react";

// Componente de Landing Page estilo LUZ conforme imagem
function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
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

  // Dashboard quando o usuário está logado
  if (isLoggedIn) {
    return <Dashboard />;
  }

  // Landing page quando o usuário não está logado
  return (
    <div style={{ 
      backgroundColor: '#000', 
      minHeight: '100vh',
      color: 'white',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: 'rgba(0,0,0,0.7)'
      }}>
        <div style={{ 
          color: '#1e90ff', 
          fontWeight: 'bold', 
          fontSize: '2rem',
          fontFamily: 'impact, sans-serif'
        }}>
          FishGG
        </div>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>HOME</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>COMO JOGAR</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>NOTÍCIAS E EVENTOS</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>PACOTES</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>NOSSOS VIPS</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>REGRAS</a>
        </nav>
        <button 
          onClick={handleLogin}
          style={{
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 127.14 96.36" fill="white">
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
          </svg>
          ENTRAR
        </button>
      </div>

      {/* Hero Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 70px)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          textShadow: '0 0 10px rgba(0,0,0,0.8)',
          margin: '0 0 2rem 0'
        }}>
          VIVA O INIMAGINÁVEL!
        </h1>
        
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: '#1e90ff',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(30,144,255,0.5)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(30,144,255,0.7)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(30,144,255,0.5)';
          }}
        >
          CONECTE AGORA
        </button>
      </div>
    </div>
  );
}

// Componente Dashboard conforme imagem
function Dashboard() {
  const handleAllowlist = () => {
    alert("Função de allowlist acionada!");
  };

  const handleBuyVIP = () => {
    alert("Função de compra VIP acionada!");
  };

  return (
    <div style={{ 
      backgroundColor: '#0f0f0f', 
      minHeight: '100vh',
      display: 'flex'
    }}>
      {/* Sidebar/perfil do usuário */}
      <div style={{ 
        width: '300px',
        backgroundColor: '#1a1a1a',
        padding: '20px',
        borderRight: '1px solid #333'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ 
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto 15px',
            border: '3px solid #1e90ff'
          }}>
            <img 
              src="https://i.imgur.com/tdi3NGa.jpg" 
              alt="Perfil" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          
          <h2 style={{ 
            color: '#1e90ff',
            fontSize: '28px',
            margin: '0 0 5px 0',
            fontWeight: 'bold'
          }}>
            Cami
          </h2>
          
          <p style={{ color: '#aaa', fontSize: '14px', margin: '0 0 5px 0' }}>
            Username: camilly.amv
          </p>
          
          <p style={{ color: '#aaa', fontSize: '14px', margin: '0 0 20px 0' }}>
            User ID: 540926875235789552
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 0 20px 0',
            backgroundColor: '#222',
            padding: '8px 15px',
            borderRadius: '20px'
          }}>
            <span style={{ 
              width: '10px',
              height: '10px',
              backgroundColor: '#5bef3c',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '8px'
            }}></span>
            <span style={{ color: '#aaa', fontSize: '14px' }}>Allowlist ativa</span>
          </div>
          
          <button
            onClick={handleAllowlist}
            style={{
              backgroundColor: '#1e90ff',
              color: 'white',
              border: 'none',
              padding: '10px 0',
              width: '100%',
              borderRadius: '4px',
              fontWeight: 'bold',
              marginBottom: '25px',
              cursor: 'pointer'
            }}
          >
            REALIZAR ALLOWLIST
          </button>
          
          <div style={{
            textAlign: 'center',
            margin: '0 0 15px 0'
          }}>
            <span style={{
              fontFamily: 'impact, sans-serif',
              fontSize: '30px',
              color: '#ccc',
              letterSpacing: '1px',
              fontStyle: 'italic'
            }}>FREE</span>
            <span style={{
              display: 'block',
              fontFamily: 'arial',
              fontSize: '16px',
              color: '#aaa',
              marginTop: '-5px'
            }}>VIP</span>
          </div>
          
          <button
            onClick={handleBuyVIP}
            style={{
              backgroundColor: '#1e90ff',
              color: 'white',
              border: 'none',
              padding: '10px 0',
              width: '100%',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            COMPRAR VIP
          </button>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <div style={{ 
        flex: 1,
        padding: '20px',
        backgroundImage: 'url("https://i.imgur.com/CL2JExJ.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          background: 'rgba(0,0,0,0.6)',
          padding: '50px',
          borderRadius: '8px'
        }}>
          <div style={{
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h2 style={{
              color: 'white',
              marginRight: '15px',
              fontSize: '18px'
            }}>Novidades da V.3.0.2</h2>
            
            <div style={{ 
              fontSize: '16px',
              padding: '4px 10px',
              backgroundColor: '#222',
              borderRadius: '4px',
              color: 'white'
            }}>
              Notícias
            </div>
            
            <div style={{ 
              marginLeft: '15px',
              width: '100px',
              height: '80px'
            }}>
              <img 
                src="https://i.imgur.com/ePQtcfT.jpg"
                alt="LUZ" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'brightness(1.5) contrast(1.2)'
                }} 
              />
            </div>
          </div>
          
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#333',
            margin: '30px 0'
          }}></div>
          
          <h2 style={{
            color: '#1e90ff',
            fontSize: '32px',
            margin: '0 0 20px 0',
            fontWeight: 'bold'
          }}>
            ALLOWLIST NÃO REALIZADA
          </h2>
          
          <button
            onClick={handleAllowlist}
            style={{
              backgroundColor: '#1e90ff',
              color: 'white',
              border: 'none',
              padding: '12px 25px',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            REALIZAR ALLOWLIST
          </button>
        </div>
      </div>
    </div>
  );
}

// Verifica se o usuário já está autenticado
fetch('/api/auth/user')
  .then(response => response.json())
  .then(data => {
    // Renderiza a página apropriada baseada no status de autenticação
    createRoot(document.getElementById("root")!).render(
      data.authenticated ? <Dashboard /> : <LandingPage />
    );
  })
  .catch(error => {
    console.error('Erro ao verificar autenticação:', error);
    // Se houver erro, mostra a landing page por padrão
    createRoot(document.getElementById("root")!).render(<LandingPage />);
  });
