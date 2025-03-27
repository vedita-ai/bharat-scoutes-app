import { books } from "@/data/books";
import { BookCard } from "@/components/books/BookCard";

export function BookGrid() {
  return (
    <>
      <div className="mb-4">
        <h2 className="font-semibold text-lg text-neutral-800">Handbooks</h2>
        <p className="text-sm text-neutral-600">Explore official Bharat Scouts handbooks</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}
