import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { BookGrid } from "@/components/books/BookGrid";
import { useBookContext } from "@/context/BookContext";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { useEffect } from "react";

export default function Home() {
  const { isMobileView, setSelectedBook } = useBookContext();
  
  // Reset selected book when returning to home page
  useEffect(() => {
    setSelectedBook(null);
  }, [setSelectedBook]);

  return (
    <div className="mobile-container">
      {/* Sidebar - hidden on mobile */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden h-full">
        <Header />
        
        <div className="flex-1 overflow-hidden">
          {/* Books Grid Section */}
          <div className={`
            flex-1 h-full
            ${isMobileView ? 'mobile-content scrollbar-hide' : 'overflow-y-auto p-4'} 
            bg-neutral-50
          `}>
            <BookGrid />
          </div>
        </div>
      </main>
      
      {/* Mobile Navigation - only visible on mobile */}
      {isMobileView && <MobileNavigation />}
    </div>
  );
}
