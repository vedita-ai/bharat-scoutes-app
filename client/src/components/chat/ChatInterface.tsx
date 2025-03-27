import { useBookContext } from "@/context/BookContext";
import { useBookChat } from "@/hooks/useBookChat";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, BookOpen } from "lucide-react";

export function ChatInterface() {
  const { selectedBook, isMobileView } = useBookContext();
  const { messages, sendMessage } = useBookChat(selectedBook?.id || 0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  
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
    <div className="flex flex-col h-full">
      {/* Book Detail Header on desktop */}
      {!isMobileView && (
        <div className="p-4 border-b border-neutral-200 flex items-start">
          <div className="w-16 h-20 bg-neutral-200 rounded flex-shrink-0 mr-3 overflow-hidden">
            <img 
              src={selectedBook.coverImage} 
              alt={`${selectedBook.title} Cover`} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="flex-1">
            <h2 className="font-semibold text-neutral-800">{selectedBook.title}</h2>
            <p className="text-sm text-neutral-600">{selectedBook.description}</p>
            <div className="flex mt-1">
              <span className={`text-xs ${
                selectedBook.tag === 'Core' ? 'bg-primary/10 text-primary' : 
                selectedBook.tag === 'Essential' ? 'bg-red-100 text-red-700' :
                'bg-neutral-200 text-neutral-700'
              } px-2 py-0.5 rounded-full mr-2`}>
                {selectedBook.tag}
              </span>
              <span className="text-xs text-neutral-500">Published: {selectedBook.publishedYear}</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Section */}
      <div className={`flex-1 flex flex-col ${isMobileView ? 'pt-14' : ''}`}>
        {/* Book info chip for mobile */}
        {isMobileView && (
          <div className="px-4 py-3">
            <div className="flex items-center bg-primary/10 rounded-lg p-2 shadow-sm">
              <div className="w-8 h-8 rounded overflow-hidden mr-2">
                <img 
                  src={selectedBook.coverImage} 
                  alt={selectedBook.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-primary font-medium flex items-center">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Chatting with book
                </p>
                <p className="text-sm font-semibold text-neutral-800 line-clamp-1">{selectedBook.title}</p>
              </div>
            </div>
          </div>
        )}
        
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
            className={`
              absolute z-10 bg-white shadow-md rounded-full p-2
              ${isMobileView ? 'bottom-24 right-4' : 'bottom-20 right-6'}
            `}
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
