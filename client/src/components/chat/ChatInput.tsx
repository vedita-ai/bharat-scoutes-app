import { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };
  
  return (
    <div className="p-3 border-t border-neutral-200">
      <form onSubmit={handleSubmit} className="flex items-center bg-neutral-100 rounded-full px-3 py-1">
        <input 
          type="text" 
          placeholder="Ask about this book..." 
          className="flex-1 bg-transparent border-0 focus:outline-none py-2 px-1 text-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button 
          type="submit"
          className="p-1.5 rounded-full bg-primary text-white flex-shrink-0 focus:outline-none hover:bg-primary-dark"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
