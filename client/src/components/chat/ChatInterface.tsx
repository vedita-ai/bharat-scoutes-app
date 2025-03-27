import { useBookContext } from "@/context/BookContext";
import { useBookChat } from "@/hooks/useBookChat";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { useEffect, useRef } from "react";
import { X, BookOpen } from "lucide-react";

export function ChatInterface() {
  const { selectedBook, setIsChatOpen, isMobileView } = useBookContext();
  const { messages, sendMessage } = useBookChat(selectedBook?.id || 0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  if (!selectedBook) return null;
  
  return (
    <>
      {/* Book Detail Header */}
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
        
        {isMobileView && (
          <button 
            className="p-1 rounded-md hover:bg-neutral-100"
            onClick={() => setIsChatOpen(false)}
          >
            <X className="h-5 w-5 text-neutral-500" />
          </button>
        )}
      </div>
      
      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto scrollbar-hide" id="chatMessages">
          {/* System Message */}
          <div className="text-center my-4">
            <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">Today</span>
          </div>
          <div className="text-center mb-4">
            <p className="text-sm text-neutral-500">You can ask questions about "{selectedBook.title}"</p>
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
          
          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Chat Input */}
        <ChatInput onSendMessage={sendMessage} />
      </div>
    </>
  );
}
