import { BookOpen } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: string;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  if (isUser) {
    return (
      <div className="flex mb-4 justify-end">
        <div className="max-w-[80%]">
          <div className="bg-neutral-100 text-neutral-800 px-4 py-2 rounded-[18px_18px_4px_18px] inline-block mb-1">
            <p className="text-sm">{message}</p>
          </div>
          <div className="text-xs text-neutral-500 mr-1 text-right">{timestamp}</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex mb-4">
      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mr-2">
        <BookOpen className="h-4 w-4" />
      </div>
      <div className="max-w-[80%]">
        <div className="bg-primary text-white px-4 py-2 rounded-[18px_18px_18px_4px] inline-block mb-1">
          <p 
            className="text-sm" 
            dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br/>') }} 
          />
        </div>
        <div className="text-xs text-neutral-500 ml-1">{timestamp}</div>
      </div>
    </div>
  );
}
