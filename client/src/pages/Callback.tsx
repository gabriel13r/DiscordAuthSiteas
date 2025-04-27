import { useEffect } from "react";
import { useLocation } from "wouter";
import LoadingState from "@/components/LoadingState";
import { useQueryClient } from "@tanstack/react-query";

// This component handles the OAuth callback
export default function Callback() {
  const [location, setLocation] = useLocation();
  const queryClient = useQueryClient();
  
  useEffect(() => {
    // The server handles the actual OAuth code exchange
    // After the callback is processed, the server redirects to /dashboard
    // This component just shows a loading state while that happens
    
    // If we're here directly without being redirected from the server,
    // redirect back to home
    if (!window.location.search.includes('code=')) {
      setLocation('/');
    }
    
    // Invalidate the user query so it refreshes when we get to the dashboard
    queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
    
    // Set a timeout to redirect if the server doesn't respond
    const timeoutId = setTimeout(() => {
      setLocation('/');
    }, 10000); // 10 seconds
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [setLocation, queryClient]);
  
  return <LoadingState message="Processing authentication..." />;
}
