import { useBookContext } from "@/context/BookContext";
import { useBookChat } from "@/hooks/useBookChat";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, BookOpen, X, ArrowLeft } from "lucide-react";

export function ChatInterface() {
  const { selectedBook, isMobileView, setIsChatOpen } = useBookContext();
  const { messages, sendMessage } = useBookChat(selectedBook?.id || 0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  // Close chat function
  const handleCloseChat = () => {
    setIsChatOpen(false);
  };
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle scroll to bottom button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!chatContainerRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isScrolledUp = scrollHeight - scrollTop - clientHeight > 150;
      setShowScrollButton(isScrolledUp);
    };
    
    const container = chatContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  // Scroll to bottom function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  if (!selectedBook) return null;
  
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-neutral-200">
        <div className="px-4 py-3 flex items-center justify-between">
          <button 
            onClick={handleCloseChat}
            className="p-2 -ml-2 rounded-full hover:bg-neutral-100"
            aria-label="Close chat"
          >
            {isMobileView ? (
              <X className="h-5 w-5 text-neutral-700" />
            ) : (
              <ArrowLeft className="h-5 w-5 text-neutral-700" />
            )}
          </button>
          
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
              <img 
                src={selectedBook.coverImage} 
                alt={selectedBook.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-semibold text-neutral-800">Book Chat</h2>
          </div>
          
          <div className="w-8"></div> {/* Spacer for alignment */}
        </div>
      </div>
      
      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Book info chip */}
        <div className="px-4 py-3">
          <div className="flex items-center bg-primary/10 rounded-lg p-2.5 shadow-sm">
            <div className="w-10 h-12 rounded overflow-hidden mr-3 flex-shrink-0">
              <img 
                src={selectedBook.coverImage} 
                alt={selectedBook.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs text-primary font-medium flex items-center">
                <BookOpen className="h-3 w-3 mr-1" />
                Chatting with
              </p>
              <p className="text-sm font-semibold text-neutral-800 mb-0.5">{selectedBook.title}</p>
              <p className="text-xs text-neutral-500">Ask any question about this book</p>
            </div>
          </div>
        </div>
        
        {/* Messages Container */}
        <div 
          ref={chatContainerRef}
          className="flex-1 p-4 overflow-y-auto"
          id="chatMessages"
        >
          {/* System Message */}
          <div className="text-center my-4">
            <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
          <div className="text-center mb-4">
            <p className="text-sm text-neutral-500">Ask questions about "{selectedBook.title}"</p>
          </div>
          
          {/* Chat Messages */}
          {messages.map((message, index) => (
            <ChatMessage 
              key={index} 
              message={message.text} 
              isUser={message.isUser} 
              timestamp={message.timestamp} 
            />
          ))}
          
          {/* Extra space at the bottom */}
          <div className="h-4" />
          
          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Scroll to Bottom Button */}
        {showScrollButton && (
          <button 
            onClick={scrollToBottom}
            className="absolute z-10 bg-white shadow-md rounded-full p-2 bottom-24 right-4"
            aria-label="Scroll to bottom"
          >
            <ChevronDown className="h-5 w-5 text-neutral-500" />
          </button>
        )}
        
        {/* Chat Input */}
        <div className="border-t border-neutral-100">
          <ChatInput onSendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
}
