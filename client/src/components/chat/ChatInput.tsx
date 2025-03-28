import { useState } from "react";
import { Send, Paperclip, Mic } from "lucide-react";
import { useBookContext } from "@/context/BookContext";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const { isMobileView } = useBookContext();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };
  
  return (
    <div className={`p-3 border-t border-neutral-200 ${isMobileView ? 'safe-area-inset' : ''}`}>
      <form onSubmit={handleSubmit} className="flex items-center">
        {/* Mobile Attachment Button */}
        {isMobileView && (
          <button
            type="button"
            className="p-2 text-neutral-500 rounded-full hover:bg-neutral-100 mr-1"
            aria-label="Add attachment"
          >
            <Paperclip className="h-5 w-5" />
          </button>
        )}
        
        {/* Input Field */}
        <div className={`
          flex-1 bg-neutral-100 rounded-full px-4 py-1 flex items-center
          ${message.trim() ? 'bg-neutral-100 ring-1 ring-primary/30' : ''}
        `}>
          <input 
            type="text" 
            placeholder="Ask about this book..." 
            className="flex-1 bg-transparent border-0 focus:outline-none py-2 text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          
          {/* Voice Input for Mobile */}
          {isMobileView && !message.trim() && (
            <button
              type="button"
              className="p-1 text-neutral-500"
              aria-label="Voice input"
            >
              <Mic className="h-5 w-5" />
            </button>
          )}
        </div>
        
        {/* Send Button */}
        <button 
          type="submit"
          className={`
            rounded-full focus:outline-none transition-colors duration-200 ml-2
            ${message.trim() 
              ? 'bg-primary text-white hover:bg-primary-dark' 
              : 'bg-neutral-200 text-neutral-400'}
            ${isMobileView ? 'p-2.5' : 'p-2'}
          `}
          disabled={!message.trim()}
          aria-label="Send message"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
