import { useState, useEffect } from "react";
import { bookResponses, generalResponses } from "@/data/chatResponses";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: string;
}

export function useBookChat(bookId: number) {
  const [messages, setMessages] = useState<Message[]>([]);
  
  // Initialize chat with welcome message
  useEffect(() => {
    if (bookId) {
      setMessages([
        {
          text: "Hello Scout! I'm your Bharat Scouts Handbook assistant. How can I help you learn about scouting today?",
          isUser: false,
          timestamp: formatTime(new Date())
        }
      ]);
    }
  }, [bookId]);
  
  // Format time for chat messages
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };
  
  // Find the best matching response
  const findResponse = (question: string): string => {
    const bookData = bookResponses.find(book => book.bookId === bookId);
    
    if (!bookData) {
      return getRandomResponse(generalResponses);
    }
    
    // Convert question to lowercase and remove punctuation for matching
    const normalizedQuestion = question.toLowerCase().replace(/[^\w\s]/gi, '');
    
    // Find a matching response based on keywords
    const matchedResponse = bookData.responses.find(response => 
      normalizedQuestion.includes(response.question)
    );
    
    if (matchedResponse) {
      return matchedResponse.answer;
    }
    
    // Return a default response if no match
    return getRandomResponse(bookData.defaultResponses);
  };
  
  // Get a random response from an array
  const getRandomResponse = (responses: string[]): string => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };
  
  // Send a new message
  const sendMessage = (text: string) => {
    const currentTime = new Date();
    const formattedTime = formatTime(currentTime);
    
    // Add user message
    setMessages(prev => [
      ...prev,
      {
        text,
        isUser: true,
        timestamp: formattedTime
      }
    ]);
    
    // Simulate typing delay before response
    setTimeout(() => {
      const responseText = findResponse(text);
      
      setMessages(prev => [
        ...prev,
        {
          text: responseText,
          isUser: false,
          timestamp: formatTime(new Date())
        }
      ]);
    }, 1000);
  };
  
  return {
    messages,
    sendMessage
  };
}
