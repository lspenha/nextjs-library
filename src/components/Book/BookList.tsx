import React from "react";
import { BookItem } from "./BookItem";
import { ResponseBookItem } from "@/utils/Types/global";

interface BookListProps {
  books: ResponseBookItem[];
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookItem book={book.volumeInfo} key={book.id} id={book.id} />
      ))}
    </div>
  );
};
