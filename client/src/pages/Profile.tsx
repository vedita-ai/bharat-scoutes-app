import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { useBookContext } from "@/context/BookContext";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Bell, BookOpen, ChevronRight, Clock, Download, History, LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { books } from "@/data/books";

export default function Profile() {
  const { isMobileView } = useBookContext();

  return (
    <div className="mobile-container">
      {/* Sidebar - hidden on mobile */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden h-full">
        <Header />
        
        <div className="flex-1 overflow-hidden">
          {/* Profile Content */}
          <div className={`
            flex-1 h-full
            ${isMobileView ? 'mobile-content scrollbar-hide' : 'overflow-y-auto p-4'} 
            bg-[#f4f6fa]
          `}>
            <div className={`${isMobileView ? 'px-4 py-2' : ''}`}>
              {/* Profile header with full Indian flag theme */}
              <div className="mb-6 text-white rounded-xl shadow-md overflow-hidden">
                <div className="relative bg-gradient-to-b from-[#FF9933] via-white to-[#138808]">
                  {/* Overlay to improve text readability */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Ashoka Chakra representation in the center */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#000080] flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="relative w-8 h-8">
                        {/* Simulating the spokes of the Ashoka Chakra with lines */}
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i} 
                            className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-white"
                            style={{ transform: `translate(-50%, -50%) rotate(${i * 15}deg)` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Profile content with the flag background */}
                  <div className="relative pt-20 pb-6 flex flex-col items-center z-10">
                    <Avatar className="h-20 w-20 mb-4 border-4 border-white shadow-md">
                      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                      <AvatarFallback className="bg-[#1D4289] text-white text-xl">BS</AvatarFallback>
                    </Avatar>
                    <h1 className="text-xl font-bold text-center text-[#1D4289]">Bharat Scout</h1>
                    <p className="text-[#1D4289] text-sm">Scout ID: BS12345678</p>
                    <div className="mt-3 flex space-x-3">
                      <button className="bg-[#FFD700] text-[#1D4289] rounded-full text-sm px-4 py-1.5 font-medium shadow-sm">
                        Edit Profile
                      </button>
                      <button className="bg-[#1D4289] text-white rounded-full text-sm px-4 py-1.5 font-medium shadow-sm">
                        View Badge Card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scout Stats */}
              <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
                <div className="grid grid-cols-3 divide-x divide-neutral-100">
                  <div className="flex flex-col items-center py-4">
                    <p className="text-xs text-[#1D4289] mb-1 font-medium">Books Read</p>
                    <p className="text-xl font-bold text-[#1D4289]">12</p>
                  </div>
                  <div className="flex flex-col items-center py-4">
                    <p className="text-xs text-[#1D4289] mb-1 font-medium">Badges</p>
                    <p className="text-xl font-bold text-[#1D4289]">8</p>
                  </div>
                  <div className="flex flex-col items-center py-4">
                    <p className="text-xs text-[#1D4289] mb-1 font-medium">Days Active</p>
                    <p className="text-xl font-bold text-[#1D4289]">45</p>
                  </div>
                </div>
              </div>
              
              {/* Recently Read */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold text-[#1D4289]">Recently Read</h2>
                  <button className="text-[#1D4289] text-sm font-medium">See All</button>
                </div>
                <div className="flex overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
                  <div className="flex space-x-3">
                    {books.slice(0, 3).map(book => (
                      <div key={book.id} className="w-28 flex-shrink-0">
                        <div className="h-36 rounded-lg overflow-hidden shadow-sm mb-2 border-2 border-white">
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h3 className="font-medium text-xs line-clamp-1">{book.title}</h3>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 text-[#1D4289] mr-1" />
                          <span className="text-xs text-[#1D4289]/70">2d ago</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Settings Menu */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b border-neutral-100 bg-[#1D4289] text-white">
                  <h2 className="font-semibold">Scout Settings</h2>
                </div>
                <nav>
                  <button className="w-full flex items-center justify-between p-4 hover:bg-[#1D4289]/5 border-b border-neutral-100">
                    <div className="flex items-center">
                      <div className="bg-[#1D4289]/10 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                        <User className="h-4 w-4 text-[#1D4289]" />
                      </div>
                      <span className="text-sm font-medium text-neutral-700">Account Settings</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-[#1D4289]" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 hover:bg-[#1D4289]/5 border-b border-neutral-100">
                    <div className="flex items-center">
                      <div className="bg-[#1D4289]/10 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                        <Bell className="h-4 w-4 text-[#1D4289]" />
                      </div>
                      <span className="text-sm font-medium text-neutral-700">Notifications</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-[#1D4289]" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 hover:bg-[#1D4289]/5 border-b border-neutral-100">
                    <div className="flex items-center">
                      <div className="bg-[#1D4289]/10 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                        <Download className="h-4 w-4 text-[#1D4289]" />
                      </div>
                      <span className="text-sm font-medium text-neutral-700">Downloaded Content</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-[#1D4289]" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 hover:bg-[#1D4289]/5">
                    <div className="flex items-center">
                      <div className="bg-[#1D4289]/10 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                        <History className="h-4 w-4 text-[#1D4289]" />
                      </div>
                      <span className="text-sm font-medium text-neutral-700">Reading History</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-[#1D4289]" />
                  </button>
                </nav>
              </div>
              
              {/* Logout Button */}
              <button className="w-full flex items-center justify-center gap-2 p-4 bg-white rounded-xl mb-8 text-[#1D4289] font-medium border border-[#1D4289]/20 hover:bg-[#1D4289]/5">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
              
              {/* Extra spacing for bottom nav on mobile */}
              {isMobileView && <div className="h-16"></div>}
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile Navigation - only visible on mobile */}
      {isMobileView && <MobileNavigation activeTab="profile" />}
    </div>
  );
}