import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import DashboardContent from "@/components/DashboardContent";
import UserProfile from "@/components/UserProfile";
import SidebarNavigation from "@/components/SidebarNavigation";
import MobileNavigation from "@/components/MobileNavigation";
import LoadingState from "@/components/LoadingState";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
  const [location, setLocation] = useLocation();
  
  // Fetch user data
  const { data: authData, isLoading, error } = useQuery({
    queryKey: ['/api/auth/user'],
    refetchOnWindowFocus: false
  });
  
  const user = authData?.user;
  
  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isLoading && (!authData || !authData.authenticated)) {
      setLocation("/");
    }
  }, [authData, isLoading, setLocation]);
  
  if (isLoading) {
    return (
      <>
        <Header isAuthenticated={true} />
        <LoadingState message="Loading your dashboard..." />
      </>
    );
  }
  
  if (error || !user) {
    setLocation("/");
    return null;
  }
  
  return (
    <>
      <Header isAuthenticated={true} />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <UserProfile user={user} />
            <SidebarNavigation />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-9">
            <DashboardContent user={user} />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <MobileNavigation />
      </main>
    </>
  );
}
