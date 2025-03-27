import { Book } from "@/data/books";
import { useBookContext } from "@/context/BookContext";
import { MessageSquare } from "lucide-react";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { setSelectedBook, setIsChatOpen, isMobileView } = useBookContext();
  
  const handleBookClick = () => {
    setSelectedBook(book);
    setIsChatOpen(true);
  };
  
  const handleChatClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedBook(book);
    setIsChatOpen(true);
  };
  
  return (
    <div 
      className={`
        bg-white rounded-lg overflow-hidden transition-all duration-200 cursor-pointer
        ${isMobileView ? 'shadow-sm' : 'border border-neutral-200 hover:shadow-md'}
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
        {book.isNew && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-sm">
            New
          </div>
        )}
      </div>
      
      <div className="p-3">
        <h3 className="font-semibold text-neutral-800 line-clamp-1">{book.title}</h3>
        <p className="text-sm text-neutral-600 mb-2 line-clamp-2">{book.description}</p>
        
        <div className="flex justify-between items-center">
          <span className={`text-xs ${
            book.tag === 'Core' ? 'bg-primary/10 text-primary font-medium' : 
            book.tag === 'Essential' ? 'bg-red-100 text-red-700 font-medium' :
            'bg-neutral-100 text-neutral-700'
          } px-2 py-1 rounded-full`}>
            {book.tag}
          </span>
          
          {isMobileView ? (
            <button 
              className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full"
              onClick={handleChatClick}
              aria-label="Chat about this book"
            >
              <MessageSquare className="h-4 w-4" />
            </button>
          ) : (
            <button 
              className="text-xs font-medium px-3 py-1.5 bg-secondary text-neutral-800 rounded-full hover:bg-neutral-200 transition-colors"
              onClick={handleChatClick}
            >
              Chat
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
