import { Book } from "@/data/books";
import { useBookContext } from "@/context/BookContext";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { setSelectedBook, setIsChatOpen } = useBookContext();
  
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
      className="bg-white rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden"
      onClick={handleBookClick}
    >
      <div className="h-48 bg-neutral-200 relative">
        <img 
          src={book.coverImage} 
          alt={`${book.title} Cover`} 
          className="w-full h-full object-cover"
        />
        {book.isNew && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
            New
          </div>
        )}
      </div>
      
      <div className="p-3">
        <h3 className="font-semibold text-neutral-800">{book.title}</h3>
        <p className="text-sm text-neutral-600 mb-2">{book.description}</p>
        
        <div className="flex justify-between items-center">
          <span className={`text-xs ${
            book.tag === 'Core' ? 'bg-primary/10 text-primary' : 
            book.tag === 'Essential' ? 'bg-red-100 text-red-700' :
            'bg-neutral-200 text-neutral-700'
          } px-2 py-1 rounded-full`}>
            {book.tag}
          </span>
          
          <button 
            className="text-xs font-medium px-2 py-1 bg-secondary text-neutral-800 rounded hover:bg-secondary-dark transition-colors"
            onClick={handleChatClick}
          >
            Chat
          </button>
        </div>
      </div>
    </div>
  );
}
