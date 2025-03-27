import { Home, BookOpen, MessageSquare, User } from "lucide-react";
import { useBookContext } from "@/context/BookContext";

export function MobileNavigation() {
  const { setIsChatOpen, selectedBook } = useBookContext();
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 flex justify-around py-2">
      <button className="flex flex-col items-center justify-center px-3 py-1 rounded-md text-primary">
        <Home className="h-6 w-6" />
        <span className="text-xs mt-1">Home</span>
      </button>
      
      <button className="flex flex-col items-center justify-center px-3 py-1 rounded-md text-neutral-500 hover:text-primary">
        <BookOpen className="h-6 w-6" />
        <span className="text-xs mt-1">Books</span>
      </button>
      
      <button 
        className="flex flex-col items-center justify-center px-3 py-1 rounded-md text-neutral-500 hover:text-primary"
        onClick={() => {
          if (selectedBook) {
            setIsChatOpen(true);
          }
        }}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="text-xs mt-1">Chat</span>
      </button>
      
      <button className="flex flex-col items-center justify-center px-3 py-1 rounded-md text-neutral-500 hover:text-primary">
        <User className="h-6 w-6" />
        <span className="text-xs mt-1">Profile</span>
      </button>
    </div>
  );
}
