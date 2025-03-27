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
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar - hidden on mobile */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 flex overflow-hidden">
          {/* Books Grid Section */}
          <div className={`flex-1 overflow-y-auto scrollbar-hide p-4 bg-neutral-50 ${isMobileView && isChatOpen ? 'hidden' : ''}`}>
            <BookGrid />
          </div>

          {/* Book Detail with Chat Section */}
          <div 
            className={`
              ${!selectedBook || (!isChatOpen && isMobileView) ? 'hidden' : ''}
              ${isMobileView ? 'fixed inset-0 z-30 bg-white' : 'w-full md:w-1/2 lg:w-2/5'}
              flex flex-col border-l border-neutral-200 bg-white
            `}
          >
            <ChatInterface />
          </div>
        </div>
      </main>
      
      {/* Mobile Navigation */}
      {isMobileView && <MobileNavigation />}
    </div>
  );
}
