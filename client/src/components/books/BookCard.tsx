import { Book } from "@/data/books";
import { useBookContext } from "@/context/BookContext";
import { MessageSquare, Star } from "lucide-react";
import { useLocation } from "wouter";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { setSelectedBook, setIsChatOpen, isMobileView } = useBookContext();
  const [, setLocation] = useLocation();
  
  const handleBookClick = () => {
    setSelectedBook(book);
    // Navigate to book detail page instead of opening chat
    setLocation("/book");
  };
  
  const handleChatClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedBook(book);
    setIsChatOpen(true);
    setLocation("/book"); // Navigate to book detail page
  };
  
  return (
    <div 
      className={`
        bg-white rounded-lg overflow-hidden transition-all duration-200 cursor-pointer
        ${isMobileView ? 'shadow-sm active:scale-[0.98]' : 'border border-neutral-200 hover:shadow-md'}
      `}
      onClick={handleBookClick}
    >
      <div className={`${isMobileView ? 'h-40' : 'h-48'} bg-neutral-200 relative`}>
        <img 
          src={book.coverImage} 
          alt={`${book.title} Cover`} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Gradient overlay for better text visibility on mobile */}
        {isMobileView && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        )}
        
        {/* New badge */}
        {book.isNew && (
          <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-sm">
            New
          </div>
        )}
        
        {/* Year badge */}
        {isMobileView && (
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
            {book.publishedYear}
          </div>
        )}
        
        {/* Category tag on mobile */}
        {isMobileView && (
          <div className="absolute bottom-2 left-2">
            <span className={`text-xs ${
              book.tag === 'Core' ? 'bg-primary text-white font-medium' : 
              book.tag === 'Essential' ? 'bg-red-500 text-white font-medium' :
              'bg-white text-neutral-800'
            } px-2 py-0.5 rounded-full shadow-sm`}>
              {book.tag}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-3">
        <h3 className="font-semibold text-neutral-800 line-clamp-1">{book.title}</h3>
        <p className={`${isMobileView ? 'text-xs' : 'text-sm'} text-neutral-600 mb-2 line-clamp-2`}>
          {book.description}
        </p>
        
        <div className="flex justify-between items-center">
          {/* Only show tag on desktop */}
          {!isMobileView && (
            <span className={`text-xs ${
              book.tag === 'Core' ? 'bg-primary/10 text-primary font-medium' : 
              book.tag === 'Essential' ? 'bg-red-100 text-red-700 font-medium' :
              'bg-neutral-100 text-neutral-700'
            } px-2 py-1 rounded-full`}>
              {book.tag}
            </span>
          )}
          
          {/* Show category on mobile */}
          {isMobileView && (
            <div className="flex items-center">
              <Star className="h-3 w-3 text-amber-400 mr-1" />
              <span className="text-xs text-neutral-500">{book.category}</span>
            </div>
          )}
          
          {/* Action button */}
          {isMobileView ? (
            <button 
              className="flex items-center justify-center w-7 h-7 bg-primary/10 text-primary rounded-full"
              onClick={handleChatClick}
              aria-label="Chat about this book"
            >
              <MessageSquare className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button 
              className="text-xs font-medium px-3 py-1.5 bg-neutral-100 text-neutral-800 rounded-full hover:bg-neutral-200 transition-colors"
              onClick={handleChatClick}
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
