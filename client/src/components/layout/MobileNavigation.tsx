import { Home, BookOpen, MessageSquare, User } from "lucide-react";
import { useBookContext } from "@/context/BookContext";
import { useState, useEffect } from "react";

export function MobileNavigation() {
  const { setIsChatOpen, selectedBook } = useBookContext();
  const [activeTab, setActiveTab] = useState("home");
  
  // Handle tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Handle chat tab
    if (tab === "chat" && selectedBook) {
      setIsChatOpen(true);
    }
  };
  
  // Add active indicator for tab
  useEffect(() => {
    // If chat is opened, set active tab to chat
    if (selectedBook) {
      setActiveTab("chat");
    }
  }, [selectedBook]);
  
  return (
    <div className="md:hidden mobile-nav flex justify-around items-center">
      <button 
        className={`flex flex-col items-center justify-center w-full h-full ${activeTab === "home" ? "text-primary" : "text-neutral-500"}`}
        onClick={() => handleTabChange("home")}
      >
        <Home className={`h-6 w-6 ${activeTab === "home" ? "fill-primary" : ""}`} />
        <span className="text-xs mt-1 font-medium">Home</span>
      </button>
      
      <button 
        className={`flex flex-col items-center justify-center w-full h-full ${activeTab === "books" ? "text-primary" : "text-neutral-500"}`}
        onClick={() => handleTabChange("books")}
      >
        <BookOpen className={`h-6 w-6 ${activeTab === "books" ? "fill-primary" : ""}`} />
        <span className="text-xs mt-1 font-medium">Library</span>
      </button>
      
      <button 
        className={`flex flex-col items-center justify-center w-full h-full ${activeTab === "chat" ? "text-primary" : "text-neutral-500"}`}
        onClick={() => handleTabChange("chat")}
      >
        <MessageSquare className={`h-6 w-6 ${activeTab === "chat" ? "fill-primary" : ""}`} />
        <span className="text-xs mt-1 font-medium">Chat</span>
        {activeTab === "chat" && (
          <div className="absolute bottom-[52px] w-8 h-1 bg-primary rounded-t-full"></div>
        )}
      </button>
      
      <button 
        className={`flex flex-col items-center justify-center w-full h-full ${activeTab === "profile" ? "text-primary" : "text-neutral-500"}`}
        onClick={() => handleTabChange("profile")}
      >
        <User className={`h-6 w-6 ${activeTab === "profile" ? "fill-primary" : ""}`} />
        <span className="text-xs mt-1 font-medium">Profile</span>
      </button>
    </div>
  );
}
