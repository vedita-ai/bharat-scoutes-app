import React, { createContext, useContext, useState } from "react";
import { Book } from "@/data/books";

interface BookContextType {
  selectedBook: Book | null;
  setSelectedBook: (book: Book | null) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  isMobileView: boolean;
  setIsMobileView: (mobile: boolean) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  // Update isMobileView when window is resized
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BookContext.Provider
      value={{
        selectedBook,
        setSelectedBook,
        isChatOpen,
        setIsChatOpen,
        isMobileView,
        setIsMobileView,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBookContext() {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
}
