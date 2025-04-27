import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Callback from "@/pages/Callback";
import { useQuery } from "@tanstack/react-query";

function SimpleTest() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "white", marginBottom: "20px" }}>Teste de Renderização</h1>
      <p style={{ color: "#aaa" }}>Se você está vendo esta mensagem, o React está funcionando!</p>
      <button 
        style={{ 
          background: "#5865F2", 
          color: "white", 
          border: "none", 
          padding: "10px 20px", 
          borderRadius: "4px",
          marginTop: "20px",
          cursor: "pointer"
        }}
        onClick={() => alert("Clicado!")}
      >
        Clique-me
      </button>
    </div>
  );
}

function Router() {
  const { data: authData, isLoading } = useQuery({
    queryKey: ['/api/auth/user'],
    refetchOnWindowFocus: false,
    retry: false
  });
  
  const isAuthenticated = authData?.authenticated;

  return (
    <Switch>
      <Route path="/" component={SimpleTest} />
      <Route path="/dashboard">
        {isAuthenticated ? <Dashboard /> : () => (window.location.href = "/")}
      </Route>
      <Route path="/api/auth/callback" component={Callback} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
