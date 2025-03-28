import { Home, BookOpen, User } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

interface MobileNavigationProps {
  activeTab?: string;
}

export function MobileNavigation({ activeTab: propActiveTab }: MobileNavigationProps) {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState(propActiveTab || "home");
  
  // Update active tab if prop changes
  useEffect(() => {
    if (propActiveTab) {
      setActiveTab(propActiveTab);
    }
  }, [propActiveTab]);
  
  // Handle tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Navigate to appropriate page
    switch (tab) {
      case "home":
        navigate("/");
        break;
      case "library":
        navigate("/library");
        break;
      case "profile":
        navigate("/profile");
        break;
    }
  };
  
  return (
    <div className="md:hidden mobile-nav flex justify-around items-center">
      <button 
        className={`flex flex-col items-center justify-center w-full h-full ${activeTab === "home" ? "text-[#FFD700]" : "text-white"}`}
        onClick={() => handleTabChange("home")}
      >
        <Home className={`h-6 w-6 ${activeTab === "home" ? "stroke-[#FFD700]" : "stroke-white"}`} />
        <span className="text-xs mt-1 font-medium">Home</span>
        {activeTab === "home" && (
          <div className="absolute bottom-[52px] w-8 h-1 bg-[#FFD700] rounded-t-full"></div>
        )}
      </button>
      
      <button 
        className={`flex flex-col items-center justify-center w-full h-full ${activeTab === "library" ? "text-[#FFD700]" : "text-white"}`}
        onClick={() => handleTabChange("library")}
      >
        <BookOpen className={`h-6 w-6 ${activeTab === "library" ? "stroke-[#FFD700]" : "stroke-white"}`} />
        <span className="text-xs mt-1 font-medium">Library</span>
        {activeTab === "library" && (
          <div className="absolute bottom-[52px] w-8 h-1 bg-[#FFD700] rounded-t-full"></div>
        )}
      </button>
      
      <button 
        className={`flex flex-col items-center justify-center w-full h-full ${activeTab === "profile" ? "text-[#FFD700]" : "text-white"}`}
        onClick={() => handleTabChange("profile")}
      >
        <User className={`h-6 w-6 ${activeTab === "profile" ? "stroke-[#FFD700]" : "stroke-white"}`} />
        <span className="text-xs mt-1 font-medium">Profile</span>
        {activeTab === "profile" && (
          <div className="absolute bottom-[52px] w-8 h-1 bg-[#FFD700] rounded-t-full"></div>
        )}
      </button>
    </div>
  );
}
