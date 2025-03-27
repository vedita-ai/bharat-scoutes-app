import { books } from "@/data/books";
import { useBookContext } from "@/context/BookContext";
import { BookOpen } from "lucide-react";

export function Sidebar() {
  const { isMobileView, setSelectedBook, setIsChatOpen } = useBookContext();
  
  // Get distinct categories
  const categories = Array.from(new Set(books.map(book => book.category)));
  
  // Get 3 recent books
  const recentBooks = books.slice(0, 3);
  
  // Select book handler
  const handleSelectRecentBook = (bookId: number) => {
    const book = books.find(b => b.id === bookId);
    if (book) {
      setSelectedBook(book);
      setIsChatOpen(true);
    }
  };
  
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-neutral-200">
      <div className="p-4 border-b border-neutral-200">
        <h1 className="font-semibold text-primary text-xl flex items-center">
          <BookOpen className="h-6 w-6 mr-2" />
          Bharat Scouts Books
        </h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="p-4">
          <h2 className="font-semibold text-neutral-800 mb-2">Book Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li className="mb-1" key={index}>
                <a 
                  href="#" 
                  className={`block px-2 py-1 rounded ${
                    category === 'Handbooks' 
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'hover:bg-neutral-100 text-neutral-700 hover:text-primary'
                  }`}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-4 border-t border-neutral-200">
          <h2 className="font-semibold text-neutral-800 mb-2">Recent Books</h2>
          <ul>
            {recentBooks.map((book) => (
              <li className="mb-2 flex items-center" key={book.id}>
                <div className="w-8 h-10 bg-neutral-200 rounded flex-shrink-0 mr-2 flex items-center justify-center text-xs">
                  <BookOpen className="h-5 w-5 text-neutral-700" />
                </div>
                <a 
                  href="#" 
                  className="text-sm hover:text-primary truncate"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectRecentBook(book.id);
                  }}
                >
                  {book.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      <div className="p-4 border-t border-neutral-200">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">
            <span className="text-sm font-semibold">BS</span>
          </div>
          <div>
            <p className="text-sm font-semibold">Scout User</p>
            <p className="text-xs text-neutral-500">Basic Member</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
