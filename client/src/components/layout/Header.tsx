import { Menu, Search } from "lucide-react";
import { useBookContext } from "@/context/BookContext";
import { useState } from "react";

export function Header() {
  const { isMobileView } = useBookContext();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // Toggle mobile sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <>
      <header className="bg-white border-b border-neutral-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center md:hidden">
          <button 
            className="p-1 rounded-md hover:bg-neutral-100"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6 text-neutral-800" />
          </button>
          <h1 className="font-semibold text-primary ml-2 text-lg">Bharat Scouts</h1>
        </div>
        
        <div className="hidden md:block">
          <h2 className="font-semibold text-neutral-800">Handbook Library</h2>
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-2">
            <input 
              type="text" 
              placeholder="Search books..." 
              className="w-40 md:w-64 pl-8 pr-2 py-1 text-sm border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
            <Search className="h-4 w-4 text-neutral-500 absolute left-2 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </header>
      
      {/* Mobile Sidebar */}
      {isMobileView && (
        <div className={`fixed inset-0 z-50 ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <div 
            className="absolute inset-0 bg-neutral-900 bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className={`absolute top-0 left-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-4 border-b border-neutral-200 flex justify-between items-center">
              <h1 className="font-semibold text-primary text-xl flex items-center">
                <BookOpen className="h-6 w-6 mr-2" />
                Bharat Scouts
              </h1>
              <button 
                className="p-1 rounded-md text-neutral-500 hover:bg-neutral-100"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="p-4">
              <h2 className="font-semibold text-neutral-800 mb-2">Book Categories</h2>
              <ul>
                <li className="mb-1">
                  <a href="#" className="block px-2 py-2 rounded hover:bg-neutral-100 text-neutral-700 hover:text-primary">
                    Scout Guides
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="block px-2 py-2 rounded hover:bg-neutral-100 text-neutral-700 hover:text-primary">
                    Training Manuals
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="block px-2 py-2 rounded bg-primary/10 text-primary font-semibold">
                    Handbooks
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="block px-2 py-2 rounded hover:bg-neutral-100 text-neutral-700 hover:text-primary">
                    Activity Books
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="block px-2 py-2 rounded hover:bg-neutral-100 text-neutral-700 hover:text-primary">
                    History & Heritage
                  </a>
                </li>
              </ul>
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
          </div>
        </div>
      )}
    </>
  );
}

// Fix missing imports
import { BookOpen, X } from "lucide-react";
