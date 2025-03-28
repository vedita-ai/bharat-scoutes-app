import { useBookContext } from "@/context/BookContext";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { ArrowLeft, Book, MessageSquare, ChevronRight, ChevronLeft } from "lucide-react";
import { bookContents } from "@/data/bookContent";

interface Chapter {
  id: number;
  title: string;
  content: string;
}

export default function BookReader() {
  const { selectedBook, isChatOpen, setIsChatOpen, isMobileView } = useBookContext();
  const [, setLocation] = useLocation();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // If no book is selected, redirect to home
    if (!selectedBook) {
      setLocation("/");
      return;
    }
    
    // Prevent scrolling on the body when chat is open on mobile
    if (isMobileView && isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Get book content for the selected book
    const bookContent = bookContents.find(content => content.bookId === selectedBook.id);
    if (bookContent) {
      setChapters(bookContent.chapters);
      setCurrentChapter(bookContent.chapters[0]);
    }
    
    setIsLoading(false);
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedBook, isMobileView, isChatOpen, setLocation]);
  
  const navigateToChapter = (chapterId: number) => {
    const chapter = chapters.find(c => c.id === chapterId);
    if (chapter) {
      setCurrentChapter(chapter);
      window.scrollTo(0, 0);
    }
  };
  
  const navigateToPreviousChapter = () => {
    if (currentChapter && chapters.length > 0) {
      const currentIndex = chapters.findIndex(c => c.id === currentChapter.id);
      if (currentIndex > 0) {
        navigateToChapter(chapters[currentIndex - 1].id);
      }
    }
  };
  
  const navigateToNextChapter = () => {
    if (currentChapter && chapters.length > 0) {
      const currentIndex = chapters.findIndex(c => c.id === currentChapter.id);
      if (currentIndex < chapters.length - 1) {
        navigateToChapter(chapters[currentIndex + 1].id);
      }
    }
  };
  
  if (!selectedBook || isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  
  if (!currentChapter) return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Book className="h-16 w-16 text-neutral-300 mb-4" />
      <h1 className="text-xl font-semibold text-neutral-700">No content available</h1>
      <p className="text-neutral-500 mt-2 mb-6">This book doesn't have any readable content yet.</p>
      <button 
        onClick={() => setLocation("/book")}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
      >
        Back to Book Details
      </button>
    </div>
  );
  
  return (
    <div className="flex flex-col h-full relative">
      {/* Header with navigation */}
      <div className="sticky top-0 bg-white z-10 border-b border-neutral-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => setLocation("/book")}
            className="p-2 -ml-2 rounded-full hover:bg-neutral-100"
            aria-label="Back to book details"
          >
            <ArrowLeft className="h-5 w-5 text-neutral-700" />
          </button>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
              <img 
                src={selectedBook.coverImage} 
                alt={selectedBook.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-lg font-semibold text-neutral-800 truncate max-w-[150px]">
              {selectedBook.title}
            </h1>
          </div>
          <div className="w-8"></div> {/* Spacer for alignment */}
        </div>
      </div>
      
      {/* Chapter Navigation */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-primary/20">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <select 
              className="bg-white border border-primary/20 rounded-md px-3 py-1.5 text-sm flex-1 mr-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={currentChapter.id}
              onChange={(e) => navigateToChapter(Number(e.target.value))}
            >
              {chapters.map(chapter => (
                <option key={chapter.id} value={chapter.id}>{chapter.title}</option>
              ))}
            </select>
            <div className="flex">
              <button 
                onClick={navigateToPreviousChapter}
                disabled={chapters.indexOf(currentChapter) === 0}
                className="p-1.5 bg-white border border-primary/20 rounded-md mr-1 disabled:opacity-50 hover:bg-primary/5 active:bg-primary/10"
                aria-label="Previous chapter"
              >
                <ChevronLeft className="h-4 w-4 text-primary" />
              </button>
              <button 
                onClick={navigateToNextChapter}
                disabled={chapters.indexOf(currentChapter) === chapters.length - 1}
                className="p-1.5 bg-white border border-primary/20 rounded-md disabled:opacity-50 hover:bg-primary/5 active:bg-primary/10"
                aria-label="Next chapter"
              >
                <ChevronRight className="h-4 w-4 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className={`flex-1 overflow-y-auto pb-24 ${isChatOpen ? 'hidden' : ''}`}>
        <div className="p-4 bg-gradient-to-b from-blue-50 to-white">
          <article className="prose prose-blue max-w-none bg-white rounded-lg shadow-sm p-6 mb-4">
            <div dangerouslySetInnerHTML={{ 
              __html: currentChapter.content
                .replace(/^# (.*$)/gim, '<h1 class="text-primary">$1</h1>')
                .replace(/^## (.*$)/gim, '<h2 class="text-primary/90">$1</h2>')
                .replace(/^### (.*$)/gim, '<h3 class="text-primary/80">$1</h3>')
                .replace(/^#### (.*$)/gim, '<h4 class="text-primary/70">$1</h4>')
                .replace(/^##### (.*$)/gim, '<h5 class="text-primary/60">$1</h5>')
                .replace(/\n/gim, '<br>')
                .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/gim, '<em>$1</em>')
                .replace(/^\d\. (.*$)/gim, '<ol><li>$1</li></ol>')
                .replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>')
            }} />
          </article>
        </div>
        
        {/* Chapter navigation at bottom */}
        <div className="border-t border-primary/10 bg-gradient-to-r from-primary/5 to-primary/10 p-4 rounded-b-lg shadow-inner">
          <div className="flex justify-between items-center">
            {chapters.indexOf(currentChapter) > 0 ? (
              <button 
                onClick={navigateToPreviousChapter} 
                className="flex items-center bg-white py-2 px-3 rounded-md shadow-sm border border-primary/20 text-primary hover:bg-primary/5"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous Chapter
              </button>
            ) : <div />}
            
            <div className="text-xs text-primary/60 font-medium">
              Chapter {chapters.indexOf(currentChapter) + 1} of {chapters.length}
            </div>
            
            {chapters.indexOf(currentChapter) < chapters.length - 1 ? (
              <button 
                onClick={navigateToNextChapter} 
                className="flex items-center bg-white py-2 px-3 rounded-md shadow-sm border border-primary/20 text-primary hover:bg-primary/5"
              >
                Next Chapter
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            ) : <div />}
          </div>
        </div>
      </div>
      
      {/* Floating Chat Button (only when chat is not open) */}
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center z-20"
          aria-label="Chat about this book"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
      
      {/* Chat Interface (only when chat is open) */}
      {isChatOpen && (
        <div className="fixed inset-0 z-30 bg-white">
          <ChatInterface />
        </div>
      )}
    </div>
  );
}