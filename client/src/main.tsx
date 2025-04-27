import { createRoot } from "react-dom/client";
import "./index.css";

// Componente simples para testar se a renderização está funcionando
function SimpleApp() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', background: '#2c2f33', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
        Teste de Renderização do Discord
      </h1>
      <p style={{ fontSize: '16px', color: '#b9bbbe', marginBottom: '30px' }}>
        Se você está vendo esta mensagem, o React está funcionando corretamente!
      </p>
      <button
        style={{
          background: '#5865f2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
        onClick={() => alert('Botão clicado!')}
      >
        Clique aqui
      </button>
    </div>
  );
}

// Renderiza diretamente o componente SimpleApp
createRoot(document.getElementById("root")!).render(<SimpleApp />);
