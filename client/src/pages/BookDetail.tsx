import { useBookContext } from "@/context/BookContext";
import { MessageSquare, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { ChatInterface } from "@/components/chat/ChatInterface";

export default function BookDetail() {
  const { selectedBook, isChatOpen, setIsChatOpen, isMobileView } = useBookContext();
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // If no book is selected, redirect to home
    if (!selectedBook) {
      setLocation("/");
    }
    
    // Prevent scrolling on the body when chat is open on mobile
    if (isMobileView && isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedBook, isMobileView, isChatOpen, setLocation]);
  
  if (!selectedBook) return null;
  
  return (
    <div className="flex flex-col h-full relative">
      {/* Back button and book title */}
      <div className="sticky top-0 bg-white z-10 border-b border-neutral-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => setLocation("/")}
            className="p-2 -ml-2 rounded-full hover:bg-neutral-100"
            aria-label="Back to books"
          >
            <ArrowLeft className="h-5 w-5 text-neutral-700" />
          </button>
          <h1 className="text-lg font-semibold text-neutral-800 truncate">Book Details</h1>
          <div className="w-8"></div> {/* Spacer for alignment */}
        </div>
      </div>
      
      {/* Book Detail Content */}
      <div className={`flex-1 overflow-y-auto pb-24 ${isChatOpen ? 'hidden' : ''}`}>
        {/* Cover image with gradient overlay */}
        <div className="relative h-60 bg-neutral-200">
          <img 
            src={selectedBook.coverImage} 
            alt={`${selectedBook.title} Cover`} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Bottom content over image */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <span className={`inline-block text-xs font-medium rounded-full px-2 py-0.5 mb-2 ${
              selectedBook.tag === 'Core' ? 'bg-primary' : 
              selectedBook.tag === 'Essential' ? 'bg-red-500' :
              'bg-neutral-700'
            }`}>
              {selectedBook.tag}
            </span>
            <h1 className="text-2xl font-bold">{selectedBook.title}</h1>
            <p className="text-sm text-white/90 mt-1">{selectedBook.category} • {selectedBook.publishedYear}</p>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-around border-b border-neutral-200 p-2">
          <button className="flex flex-col items-center p-2 text-neutral-700">
            <Share2 className="h-5 w-5 mb-1" />
            <span className="text-xs">Share</span>
          </button>
          <button className="flex flex-col items-center p-2 text-neutral-700">
            <Bookmark className="h-5 w-5 mb-1" />
            <span className="text-xs">Save</span>
          </button>
        </div>
        
        {/* Book description */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">About this book</h2>
          <p className="text-neutral-700 leading-relaxed">{selectedBook.description}</p>
          
          {/* More book details */}
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-neutral-500 mb-1">Year Published</h3>
              <p className="text-neutral-900">{selectedBook.publishedYear}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-neutral-500 mb-1">Category</h3>
              <p className="text-neutral-900">{selectedBook.category}</p>
            </div>
          </div>
          
          {/* Additional content - placeholder */}
          <div className="mt-8 border-t border-neutral-200 pt-4">
            <h2 className="text-lg font-semibold mb-4">Key Topics</h2>
            <div className="flex flex-wrap gap-2">
              {['Scouting', 'Skills', 'Outdoor', 'Leadership', 'First Aid'].map((topic) => (
                <span key={topic} className="bg-neutral-100 text-neutral-800 px-3 py-1 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Chat Button (only when chat is not open) */}
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center z-20"
          aria-label="Chat about this book"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
      
      {/* Chat Interface (only when chat is open) */}
      {isChatOpen && (
        <div className="fixed inset-0 z-30 bg-white">
          <ChatInterface />
        </div>
      )}
    </div>
  );
}