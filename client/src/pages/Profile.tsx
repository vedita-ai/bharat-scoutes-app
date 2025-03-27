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
            bg-neutral-50
          `}>
            <div className={`${isMobileView ? 'px-4 py-2' : ''}`}>
              {/* Profile header */}
              <div className="mb-6 flex flex-col items-center pt-4">
                <Avatar className="h-20 w-20 mb-4 border-4 border-white shadow-md">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback className="bg-primary text-white text-xl">BS</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-bold text-center">Bharat Scout</h1>
                <p className="text-neutral-600 text-sm">Scout ID: BS12345678</p>
                <div className="mt-3 flex space-x-3">
                  <button className="bg-primary text-white rounded-full text-sm px-4 py-1.5 font-medium shadow-sm">
                    Edit Profile
                  </button>
                  <button className="bg-white text-neutral-800 rounded-full text-sm px-4 py-1.5 font-medium shadow-sm border border-neutral-200">
                    View Badge Card
                  </button>
                </div>
              </div>
              
              {/* Scout Stats */}
              <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
                <div className="grid grid-cols-3 divide-x divide-neutral-100">
                  <div className="flex flex-col items-center py-4">
                    <p className="text-xs text-neutral-500 mb-1">Books Read</p>
                    <p className="text-xl font-bold text-neutral-800">12</p>
                  </div>
                  <div className="flex flex-col items-center py-4">
                    <p className="text-xs text-neutral-500 mb-1">Badges</p>
                    <p className="text-xl font-bold text-neutral-800">8</p>
                  </div>
                  <div className="flex flex-col items-center py-4">
                    <p className="text-xs text-neutral-500 mb-1">Days Active</p>
                    <p className="text-xl font-bold text-neutral-800">45</p>
                  </div>
                </div>
              </div>
              
              {/* Recently Read */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold">Recently Read</h2>
                  <button className="text-primary text-sm font-medium">See All</button>
                </div>
                <div className="flex overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
                  <div className="flex space-x-3">
                    {books.slice(0, 3).map(book => (
                      <div key={book.id} className="w-28 flex-shrink-0">
                        <div className="h-36 rounded-lg overflow-hidden shadow-sm mb-2">
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h3 className="font-medium text-xs line-clamp-1">{book.title}</h3>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 text-neutral-400 mr-1" />
                          <span className="text-xs text-neutral-500">2d ago</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Settings Menu */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b border-neutral-100">
                  <h2 className="font-semibold">Settings</h2>
                </div>
                <nav>
                  <button className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 border-b border-neutral-100">
                    <div className="flex items-center">
                      <div className="bg-blue-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                        <User className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Account Settings</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 border-b border-neutral-100">
                    <div className="flex items-center">
                      <div className="bg-purple-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                        <Bell className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Notifications</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 border-b border-neutral-100">
                    <div className="flex items-center">
                      <div className="bg-green-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                        <Download className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Downloaded Content</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 hover:bg-neutral-50">
                    <div className="flex items-center">
                      <div className="bg-amber-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                        <History className="h-4 w-4 text-amber-600" />
                      </div>
                      <span className="text-sm font-medium">Reading History</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </button>
                </nav>
              </div>
              
              {/* Logout Button */}
              <button className="w-full flex items-center justify-center gap-2 p-4 bg-white rounded-xl mb-8 text-red-600 font-medium">
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