import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { useBookContext } from "@/context/BookContext";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { BookOpen, Search } from "lucide-react";
import { books } from "@/data/books";
import { BookCard } from "@/components/books/BookCard";

export default function Library() {
  const { isMobileView } = useBookContext();

  return (
    <div className="mobile-container">
      {/* Sidebar - hidden on mobile */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden h-full">
        <Header />
        
        <div className="flex-1 overflow-hidden">
          {/* Library Content */}
          <div className={`
            flex-1 h-full
            ${isMobileView ? 'mobile-content scrollbar-hide' : 'overflow-y-auto p-4'} 
            bg-neutral-50
          `}>
            <div className={`${isMobileView ? 'px-4 py-2' : ''}`}>
              {/* Mobile Header */}
              {isMobileView && (
                <div className="mb-6">
                  <h1 className="text-2xl font-bold mb-2">My Library</h1>
                  <p className="text-neutral-600 text-sm mb-4">Manage your scout handbooks and materials</p>
                  
                  {/* Search bar */}
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 h-4 w-4" />
                    <input 
                      type="text" 
                      placeholder="Search your library..." 
                      className="w-full bg-white rounded-full pl-10 pr-4 py-2.5 text-sm border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              )}
              
              {/* Reading categories for mobile */}
              {isMobileView && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">Reading Now</h2>
                  <div className="flex overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
                    <div className="flex space-x-3">
                      {books.slice(0, 3).map(book => (
                        <div key={book.id} className="w-32 flex-shrink-0">
                          <div className="relative h-44 rounded-lg overflow-hidden shadow-md mb-2">
                            <img
                              src={book.coverImage}
                              alt={book.title}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white flex items-center w-fit">
                                <BookOpen className="w-3 h-3 mr-1" />
                                <span>Continue</span>
                              </div>
                            </div>
                          </div>
                          <h3 className="font-medium text-sm line-clamp-1">{book.title}</h3>
                          <p className="text-xs text-neutral-500">Last read: 2d ago</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Collections for mobile */}
              {isMobileView && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">My Collections</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary/10 rounded-lg p-3 flex flex-col">
                      <h3 className="font-medium text-primary mb-1">Scout Handbooks</h3>
                      <p className="text-xs text-neutral-600 mb-2">12 books</p>
                      <div className="mt-auto flex items-center text-xs font-medium text-primary">
                        <span>View all</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-amber-500/10 rounded-lg p-3 flex flex-col">
                      <h3 className="font-medium text-amber-600 mb-1">Saved Articles</h3>
                      <p className="text-xs text-neutral-600 mb-2">8 articles</p>
                      <div className="mt-auto flex items-center text-xs font-medium text-amber-600">
                        <span>View all</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Downloaded Books */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold">Downloaded Books</h2>
                  {isMobileView && (
                    <button className="text-primary text-sm font-medium">See All</button>
                  )}
                </div>
                <div className={`
                  grid gap-4
                  ${isMobileView 
                    ? 'grid-cols-2' 
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}
                `}>
                  {books.slice(0, 4).map(book => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
              
              {/* Extra spacing for bottom nav on mobile */}
              {isMobileView && <div className="h-16"></div>}
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile Navigation - only visible on mobile */}
      {isMobileView && <MobileNavigation activeTab="library" />}
    </div>
  );
}