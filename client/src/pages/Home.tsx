import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { BookGrid } from "@/components/books/BookGrid";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { useBookContext } from "@/context/BookContext";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { useEffect } from "react";

export default function Home() {
  const { isChatOpen, isMobileView, selectedBook } = useBookContext();
  
  // Prevent scrolling on the body when chat is open on mobile
  useEffect(() => {
    if (isMobileView && isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileView, isChatOpen]);

  return (
    <div className="mobile-container">
      {/* Sidebar - hidden on mobile */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden h-full">
        <Header />
        
        <div className="flex-1 flex overflow-hidden">
          {/* Books Grid Section */}
          <div className={`
            flex-1 
            ${isMobileView ? 'mobile-content scrollbar-hide' : 'overflow-y-auto p-4'} 
            bg-neutral-50 
            ${isMobileView && isChatOpen ? 'hidden' : ''}
          `}>
            <BookGrid />
          </div>

          {/* Book Detail with Chat Section */}
          <div 
            className={`
              ${!selectedBook || (!isChatOpen && isMobileView) ? 'hidden' : ''}
              ${isMobileView ? 'fixed inset-0 z-30 bg-white slide-in' : 'w-full md:w-1/2 lg:w-2/5'}
              flex flex-col border-l border-neutral-200 bg-white
            `}
          >
            <ChatInterface />
          </div>
        </div>
      </main>
      
      {/* Mobile Navigation - only visible on mobile */}
      {isMobileView && <MobileNavigation />}
    </div>
  );
}
