import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Callback from "@/pages/Callback";
import { useQuery } from "@tanstack/react-query";

function Router() {
  const { data: authData, isLoading } = useQuery({
    queryKey: ['/api/auth/user'],
    refetchOnWindowFocus: false,
    retry: false
  });
  
  const isAuthenticated = authData?.authenticated;

  // Show only the loading page when checking authentication status
  if (isLoading) {
    return null;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard">
        {isAuthenticated ? <Dashboard /> : () => (window.location.href = "/")}
      </Route>
      <Route path="/api/auth/callback" component={Callback} />
      {/* Fallback to 404 */}
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
