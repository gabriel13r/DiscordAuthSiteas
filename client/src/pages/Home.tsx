import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import LoginScreen from "@/components/LoginScreen";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import Header from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [location, setLocation] = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Check if user is already authenticated
  const { data: authData, isLoading: authLoading } = useQuery({
    queryKey: ['/api/auth/user'],
    refetchOnWindowFocus: false
  });
  
  // Check for error URL parameters (e.g., from failed OAuth)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get("error");
    
    if (error) {
      setErrorMessage(
        error === "token_exchange_failed"
          ? "We couldn't authenticate you with Discord. The token exchange failed."
          : error === "user_data_failed"
          ? "We couldn't retrieve your user data from Discord."
          : "We couldn't authenticate you with Discord. Please try again."
      );
      
      toast({
        title: "Authentication Failed",
        description: "Could not complete authentication with Discord",
        variant: "destructive"
      });
      
      // Clean URL
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, [toast]);
  
  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (authData?.authenticated) {
      setLocation("/dashboard");
    }
  }, [authData, setLocation]);
  
  // Handle login
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login");
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No authorization URL provided");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Could not initiate Discord login. Please try again.");
      setIsLoading(false);
    }
  };
  
  // Handle retry from error state
  const handleRetry = () => {
    setErrorMessage("");
  };
  
  // Show loading state while checking authentication
  if (authLoading) {
    return (
      <>
        <Header isAuthenticated={false} />
        <LoadingState message="Checking authentication status..." />
      </>
    );
  }
  
  // Show error state if error occurred
  if (errorMessage) {
    return (
      <>
        <Header isAuthenticated={false} />
        <ErrorState message={errorMessage} onRetry={handleRetry} />
      </>
    );
  }
  
  // Show loading state during login process
  if (isLoading) {
    return (
      <>
        <Header isAuthenticated={false} />
        <LoadingState message="Connecting to Discord..." />
      </>
    );
  }
  
  // Show login screen
  return (
    <>
      <Header isAuthenticated={false} />
      <LoginScreen onLogin={handleLogin} />
    </>
  );
}
