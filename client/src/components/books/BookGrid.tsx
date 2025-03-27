import { books } from "@/data/books";
import { BookCard } from "@/components/books/BookCard";
import { useBookContext } from "@/context/BookContext";

export function BookGrid() {
  const { isMobileView } = useBookContext();
  
  return (
    <div className={`${isMobileView ? 'px-4 pt-2' : ''}`}>
      {/* Desktop Header */}
      {!isMobileView && (
        <div className="mb-4">
          <h2 className="font-semibold text-lg text-neutral-800">Handbooks</h2>
          <p className="text-sm text-neutral-600">Explore official Bharat Scouts handbooks</p>
        </div>
      )}
      
      {/* Categories Scroll for Mobile */}
      {isMobileView && (
        <div className="mb-4">
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex space-x-2 py-2 w-max">
              <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                All Books
              </button>
              <button className="bg-white text-neutral-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm">
                Scout Guides
              </button>
              <button className="bg-white text-neutral-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm">
                Training Manuals
              </button>
              <button className="bg-white text-neutral-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm">
                Activity Books
              </button>
              <button className="bg-white text-neutral-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm">
                History
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Header */}
      {isMobileView && (
        <h2 className="text-xl font-bold text-neutral-800 mb-4">Bharat Scouts Handbooks</h2>
      )}
      
      {/* Featured Book for Mobile */}
      {isMobileView && (
        <div className="mb-6">
          <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
            <img 
              src={books[0].coverImage} 
              alt="Featured Book" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
              <span className="text-white text-xs font-medium bg-primary/80 px-2 py-1 rounded-full w-fit mb-2">
                Featured
              </span>
              <h3 className="text-white font-bold text-lg">{books[0].title}</h3>
              <p className="text-white/90 text-sm line-clamp-2">{books[0].description}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Book Categories for Mobile */}
      {isMobileView && (
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-neutral-800 mb-3">Popular Handbooks</h3>
        </div>
      )}
      
      {/* Grid Layout */}
      <div className={`
        grid gap-4
        ${isMobileView 
          ? 'grid-cols-2' 
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}
      `}>
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      
      {/* Extra spacing for bottom nav on mobile */}
      {isMobileView && <div className="h-16"></div>}
    </div>
  );
}
