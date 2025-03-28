import { Menu, Search, BookOpen, X, ArrowLeft, Bell } from "lucide-react";
import { useBookContext } from "@/context/BookContext";
import { useState, useEffect } from "react";

export function Header() {
  const { isMobileView, selectedBook, setSelectedBook, setIsChatOpen } = useBookContext();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  
  // Toggle mobile sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  // Detect scroll for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle back button in chat
  const handleBackFromChat = () => {
    setIsChatOpen(false);
  };
  
  return (
    <>
      <header className="mobile-header z-20">
        <div className="flex items-center">
          {selectedBook ? (
            <button 
              className="p-2 rounded-full hover:bg-[#1c3671]"
              onClick={handleBackFromChat}
            >
              <ArrowLeft className="h-5 w-5 text-white" />
            </button>
          ) : (
            <button 
              className="md:hidden p-2 rounded-full hover:bg-[#1c3671]"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5 text-white" />
            </button>
          )}
          
          <h1 className="font-semibold ml-1 text-lg text-white">
            {selectedBook ? selectedBook.title : "Bharat Scouts"}
          </h1>
        </div>
        
        <div className="hidden md:block">
          <h2 className="font-semibold text-white">Handbook Library</h2>
        </div>
        
        <div className="flex items-center">
          {searchActive ? (
            <div className="absolute inset-x-0 top-0 bg-[#1D4289] z-30 flex items-center px-4 h-14">
              <ArrowLeft 
                className="h-5 w-5 text-white mr-2" 
                onClick={() => setSearchActive(false)}
              />
              <input 
                type="text" 
                placeholder="Search scout books..." 
                className="flex-1 py-2 bg-transparent border-none focus:outline-none text-white placeholder-gray-300"
                autoFocus
              />
            </div>
          ) : (
            <>
              <button 
                className="p-2 rounded-full hover:bg-[#1c3671]"
                onClick={() => setSearchActive(true)}
              >
                <Search className="h-5 w-5 text-white" />
              </button>
              
              <button 
                className="p-2 rounded-full hover:bg-[#1c3671]"
              >
                <Bell className="h-5 w-5 text-white" />
              </button>
            </>
          )}
        </div>
      </header>
      
      {/* Mobile Sidebar */}
      {isMobileView && (
        <div className={`fixed inset-0 z-50 ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <div 
            className="absolute inset-0 bg-neutral-900 bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className={`absolute top-0 left-0 bottom-0 w-[85%] max-w-xs bg-white shadow-xl transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} slide-in`}>
            <div className="p-4 border-b border-neutral-200 flex justify-between items-center bg-[#1D4289] text-white">
              <h1 className="font-semibold text-xl flex items-center">
                <BookOpen className="h-6 w-6 mr-2" />
                Bharat Scouts
              </h1>
              <button 
                className="p-1 rounded-full text-white hover:bg-[#1c3671]"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="overflow-y-auto h-[calc(100%-64px)]">
              <div className="p-4 border-b border-neutral-100">
                <div className="bg-[#1D4289]/10 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1D4289] text-white flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold">BS</span>
                    </div>
                    <div>
                      <p className="font-semibold">Scout User</p>
                      <p className="text-xs text-neutral-500">Basic Member</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <nav className="p-4">
                <h2 className="font-semibold text-neutral-800 mb-2">Book Categories</h2>
                <ul>
                  <li className="mb-1">
                    <a href="#" className="block px-4 py-3 rounded-lg hover:bg-neutral-100 text-neutral-700 hover:text-[#1D4289]">
                      Guides
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="block px-4 py-3 rounded-lg hover:bg-neutral-100 text-neutral-700 hover:text-[#1D4289]">
                      Leadership
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="block px-4 py-3 rounded-lg bg-[#1D4289]/10 text-[#1D4289] font-semibold">
                      Handbooks
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="block px-4 py-3 rounded-lg hover:bg-neutral-100 text-neutral-700 hover:text-[#1D4289]">
                      Skills
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="block px-4 py-3 rounded-lg hover:bg-neutral-100 text-neutral-700 hover:text-[#1D4289]">
                      Cubs
                    </a>
                  </li>
                </ul>
              </nav>
              
              <div className="p-4">
                <h2 className="font-semibold text-neutral-800 mb-2">Settings</h2>
                <ul>
                  <li className="mb-1">
                    <a href="#" className="block px-4 py-3 rounded-lg hover:bg-neutral-100 text-neutral-700">
                      Profile Settings
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="block px-4 py-3 rounded-lg hover:bg-neutral-100 text-neutral-700">
                      Notifications
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="block px-4 py-3 rounded-lg hover:bg-neutral-100 text-neutral-700">
                      Help & Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
