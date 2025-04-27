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
          <a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }} onClick={(e) => { e.preventDefault(); window.location.hash = 'home'; }}>HOME</a>
          <a href="#como-jogar" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }} onClick={(e) => { e.preventDefault(); window.location.hash = 'como-jogar'; }}>COMO JOGAR</a>
          <a href="#noticias" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }} onClick={(e) => { e.preventDefault(); window.location.hash = 'noticias'; }}>NOTÍCIAS E EVENTOS</a>
          <a href="#pacotes" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }} onClick={(e) => { e.preventDefault(); window.location.hash = 'pacotes'; }}>PACOTES</a>
          <a href="#vips" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }} onClick={(e) => { e.preventDefault(); window.location.hash = 'vips'; }}>NOSSOS VIPS</a>
          <a href="#regras" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }} onClick={(e) => { e.preventDefault(); window.location.hash = 'regras'; }}>REGRAS</a>
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

      {/* Seções de conteúdo */}
      <div id="home" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '60px 20px', display: window.location.hash === '#home' || window.location.hash === '' ? 'block' : 'none' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1e90ff' }}>Bem-vindo ao FishGG</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', color: '#ddd' }}>
            O melhor servidor de roleplay do Brasil! Venha viver experiências incríveis e únicas em nosso servidor.
            Aqui você encontra uma comunidade ativa, economia balanceada e muito divertimento.
          </p>
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
              cursor: 'pointer'
            }}
          >
            COMEÇAR AGORA
          </button>
        </div>
      </div>

      {/* Como Jogar */}
      <div id="como-jogar" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '60px 20px', display: window.location.hash === '#como-jogar' ? 'block' : 'none' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1e90ff', textAlign: 'center' }}>Como Jogar</h2>
          
          <div style={{ background: 'rgba(30, 30, 30, 0.7)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
            <h3 style={{ color: '#1e90ff', marginBottom: '1rem', fontSize: '1.5rem' }}>Requisitos para jogar:</h3>
            <ul style={{ color: '#ddd', fontSize: '1.1rem', lineHeight: '1.6', listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#1e90ff', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Ter o GTA 5 Original instalado no seu computador
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#1e90ff', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Instalar o FiveM - plataforma para jogar servidores de RP
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#1e90ff', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Uma conta Discord para se conectar ao servidor
              </li>
            </ul>
          </div>

          <div style={{ background: 'rgba(30, 30, 30, 0.7)', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ color: '#1e90ff', marginBottom: '1rem', fontSize: '1.5rem' }}>Passos para conectar:</h3>
            <ol style={{ color: '#ddd', fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '1rem' }}>Abra o FiveM e aguarde o carregamento completo.</li>
              <li style={{ marginBottom: '1rem' }}>Clique em "Play" e depois em "Direct Connect".</li>
              <li style={{ marginBottom: '1rem' }}>Digite o endereço: <span style={{ background: '#1a1a1a', padding: '3px 8px', borderRadius: '4px' }}>cfx.re/join/fishgg</span></li>
              <li style={{ marginBottom: '1rem' }}>Faça login com sua conta Discord quando solicitado.</li>
              <li>Aproveite o jogo e siga as regras do servidor!</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Notícias e Eventos */}
      <div id="noticias" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '60px 20px', display: window.location.hash === '#noticias' ? 'block' : 'none' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1e90ff', textAlign: 'center' }}>Notícias e Eventos</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div style={{ background: 'rgba(30, 30, 30, 0.7)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #1e90ff' }}>
              <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Atualização v3.0.2 - Novos Veículos e Sistemas</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>27/04/2025</p>
              <p style={{ color: '#ddd', fontSize: '1rem', lineHeight: '1.5' }}>
                Acabamos de lançar a atualização v3.0.2 com novos veículos exclusivos, melhorias no sistema de economia
                e correções importantes de bugs. Além disso, o sistema de empregos foi totalmente reformulado!
              </p>
            </div>
            
            <div style={{ background: 'rgba(30, 30, 30, 0.7)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #1e90ff' }}>
              <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Evento de Páscoa - Prêmios Especiais</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>18/04/2025</p>
              <p style={{ color: '#ddd', fontSize: '1rem', lineHeight: '1.5' }}>
                O evento de Páscoa está acontecendo! Participe da caça aos ovos pela cidade e ganhe recompensas exclusivas.
                O evento vai até o dia 30/04. Não perca essa chance!
              </p>
            </div>
            
            <div style={{ background: 'rgba(30, 30, 30, 0.7)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #1e90ff' }}>
              <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Expansão do Mapa - Nova Área Rural</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>10/04/2025</p>
              <p style={{ color: '#ddd', fontSize: '1rem', lineHeight: '1.5' }}>
                Uma nova área rural foi adicionada ao mapa! Explore fazendas, novas atividades de pesca e caça,
                além de missões exclusivas para essa região. Perfeito para quem gosta de uma vida mais tranquila.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pacotes */}
      <div id="pacotes" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '60px 20px', display: window.location.hash === '#pacotes' ? 'block' : 'none' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1e90ff', textAlign: 'center' }}>Pacotes</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(30, 30, 30, 0.7)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Pacote Iniciante</h3>
              <p style={{ color: '#1e90ff', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>R$ 19,90</p>
              <ul style={{ color: '#ddd', fontSize: '0.9rem', textAlign: 'left', padding: '0 1rem', marginBottom: '1.5rem', listStyleType: 'none' }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  R$ 50.000 dinheiro inicial
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Carro básico
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Apartamento básico
                </li>
              </ul>
              <button style={{ backgroundColor: '#1e90ff', color: 'white', border: 'none', padding: '10px 0', width: '100%', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                COMPRAR
              </button>
            </div>
            
            <div style={{ background: 'rgba(30, 30, 30, 0.7)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Pacote Avançado</h3>
              <p style={{ color: '#1e90ff', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>R$ 49,90</p>
              <ul style={{ color: '#ddd', fontSize: '0.9rem', textAlign: 'left', padding: '0 1rem', marginBottom: '1.5rem', listStyleType: 'none' }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  R$ 200.000 dinheiro inicial
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Carro esportivo
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Casa de médio padrão
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Itens personalizados
                </li>
              </ul>
              <button style={{ backgroundColor: '#1e90ff', color: 'white', border: 'none', padding: '10px 0', width: '100%', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Nossos VIPs */}
      <div id="vips" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '60px 20px', display: window.location.hash === '#vips' ? 'block' : 'none' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1e90ff', textAlign: 'center' }}>Nossos VIPs</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(30, 30, 30, 0.7)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #1e90ff' }}>
              <div style={{ background: '#1e90ff', padding: '8px 0', margin: '-1.5rem -1.5rem 1rem', borderRadius: '8px 8px 0 0' }}>
                <h3 style={{ color: 'white', margin: 0 }}>VIP BÁSICO</h3>
              </div>
              <p style={{ color: '#1e90ff', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>R$ 29,90 <span style={{ fontSize: '0.9rem', color: '#aaa' }}>/mês</span></p>
              <ul style={{ color: '#ddd', fontSize: '0.9rem', textAlign: 'left', padding: '0 1rem', marginBottom: '1.5rem', listStyleType: 'none' }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Prioridade na fila
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  10% mais dinheiro em trabalhos
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Tag VIP no chat
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  1 veículo exclusivo
                </li>
              </ul>
              <button style={{ backgroundColor: '#1e90ff', color: 'white', border: 'none', padding: '10px 0', width: '100%', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                COMPRAR VIP
              </button>
            </div>
            
            <div style={{ background: 'rgba(30, 30, 30, 0.7)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #1e90ff' }}>
              <div style={{ background: '#1e90ff', padding: '8px 0', margin: '-1.5rem -1.5rem 1rem', borderRadius: '8px 8px 0 0' }}>
                <h3 style={{ color: 'white', margin: 0 }}>VIP PREMIUM</h3>
              </div>
              <p style={{ color: '#1e90ff', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>R$ 79,90 <span style={{ fontSize: '0.9rem', color: '#aaa' }}>/mês</span></p>
              <ul style={{ color: '#ddd', fontSize: '0.9rem', textAlign: 'left', padding: '0 1rem', marginBottom: '1.5rem', listStyleType: 'none' }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Prioridade máxima na fila
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  30% mais dinheiro em trabalhos
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Tag VIP Premium no chat
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  3 veículos exclusivos
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Casa exclusiva
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#1e90ff', marginRight: '10px' }}>✓</span> 
                  Roupas exclusivas
                </li>
              </ul>
              <button style={{ backgroundColor: '#1e90ff', color: 'white', border: 'none', padding: '10px 0', width: '100%', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                COMPRAR VIP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Regras */}
      <div id="regras" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '60px 20px', display: window.location.hash === '#regras' ? 'block' : 'none' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1e90ff', textAlign: 'center' }}>Regras do Servidor</h2>
          
          <div style={{ background: 'rgba(30, 30, 30, 0.7)', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ color: '#1e90ff', marginBottom: '1rem' }}>Regras Gerais</h3>
            <ol style={{ color: '#ddd', fontSize: '1rem', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Respeito:</strong> Trate todos os jogadores com respeito. Ofensas, discriminações e assédio de qualquer tipo não serão tolerados.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Roleplay:</strong> Mantenha o roleplay realista. Não use informações fora do jogo (metagaming) ou quebre o personagem (powergaming).
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Combate:</strong> Não realize RDM (Random Death Match) ou VDM (Vehicle Death Match). Todo combate deve ter uma motivação de roleplay.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Comunicação:</strong> Use o chat de voz para comunicação dentro do jogo. Mantenha conversas fora do personagem no Discord.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Cheats:</strong> Uso de qualquer tipo de hack, mod ou cheat resultará em banimento permanente.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bugs:</strong> Não explore bugs do jogo. Reporte-os imediatamente à administração.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Administração:</strong> Respeite as decisões da administração. Em caso de discordância, abra um ticket no Discord.
              </li>
              <li>
                <strong>Discord:</strong> É obrigatório estar no Discord do servidor enquanto joga para receber atualizações e contatar a administração.
              </li>
            </ol>
            
            <p style={{ color: '#aaa', marginTop: '2rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
              As regras podem ser atualizadas a qualquer momento. É responsabilidade dos jogadores se manterem informados sobre as regras atuais.
            </p>
          </div>
        </div>
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
