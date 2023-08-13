import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Book } from "@/interface/global";

interface BookItemProps {
  id: string;
  book: Book;
}

export const BookItem: React.FC<BookItemProps> = ({ book, id }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <Link href={`/details/${id}`}>
        <div className="flex justify-center items-center">
          <Image
            src={book.imageLinks ? book.imageLinks.thumbnail : "/no-photo.jpg"}
            alt={book.title}
            width={158}
            height={150}
            className="mb-2 rounded-lg hover:opacity-75"
          />
        </div>
        <h2 className="text-lg font-semibold mb-1">{book.title}</h2>
        <p className="text-gray-500">
          Author: {book.authors ? book.authors : "N/A"}
        </p>
      </Link>
    </div>
  );
};
