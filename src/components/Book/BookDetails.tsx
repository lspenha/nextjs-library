import React from "react";
import Image from "next/image";
import { Book } from "@/utils/Types/global";

interface BookDetailsProps {
  book: Book;
}

export const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const unavailable = "N/A";
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <Image
          className="w-1/3"
          alt={book.title}
          src={book.imageLinks ? book.imageLinks.thumbnail : "/no-photo.jpg"}
          width={200}
          height={200}
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b pb-6">
          <p className="text-sm leading-none ">{book.title}</p>
          <h2 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7  mt-2">
            Author: {book.authors ? book.authors : unavailable}
          </h2>
        </div>
        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal mt-7">
            {book.description ? book.description : unavailable}
          </p>
          <p className="text-base leading-4 mt-7">
            Editora: {book.publisher ? book.publisher : unavailable}
          </p>
          <p className="md:w-96 text-base leading-normal  mt-4">
            Língua: {book.language ? book.language.toUpperCase() : unavailable}
          </p>
          <p className="text-base leading-4 mt-4">
            Altura: {book.dimensions ? book.dimensions.height : unavailable}s
          </p>
          <p className="text-base leading-4 mt-4">
            Largura: {book.dimensions ? book.dimensions.width : unavailable}
          </p>
          <p className="text-base leading-4 mt-4">
            Espessura:{" "}
            {book.dimensions ? book.dimensions.thickness : unavailable}
          </p>
        </div>
      </div>
    </div>
  );
};
