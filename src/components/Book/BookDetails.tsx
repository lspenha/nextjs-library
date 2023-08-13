import React from "react";
import Image from "next/image";
import { Book } from "@/interface/global";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface BookDetailsProps {
  book: Book;
}

export const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const unavailable = "N/A";

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-12 2xl:px-20 md:px-6 px-4">
      <Link href="/">
        <ArrowLeftIcon className="h-10 w-10 mr-5 cursor-pointer" />
      </Link>
      <div className="md:hidden mb-6">
        <Image
          alt={book.title}
          src={book.imageLinks ? book.imageLinks.thumbnail : "/no-photo.jpg"}
          width={200}
          height={200}
        />
      </div>
      <div className="md:w-2/3 lg:w-1/2 md:ml-6 mt-6 md:mt-0">
        <div className="border-b pb-6">
          <p className="text-base lg:text-xl font-semibold mt-2 leading-tight">
            {book.title}
          </p>
          <h2 className="text-lg lg:text-2xl mt-2 font-semibold leading-tight">
            Author: {book.authors ? book.authors : unavailable}
          </h2>
        </div>
        <div className="mt-6">
          <p className="text-sm md:text-base leading-tight">
            {book.description ? book.description : unavailable}
          </p>
          <p className="text-sm md:text-base leading-tight mt-2">
            Editora: {book.publisher ? book.publisher : unavailable}
          </p>
          <p className="text-sm md:text-base leading-tight mt-2">
            Língua: {book.language ? book.language.toUpperCase() : unavailable}
          </p>
          {book.dimensions && (
            <div className="mt-2">
              <p className="text-sm md:text-base leading-tight">
                Altura: {book.dimensions.height || unavailable}
              </p>
              <p className="text-sm md:text-base leading-tight mt-2">
                Largura: {book.dimensions.width || unavailable}
              </p>
              <p className="text-sm md:text-base leading-tight mt-2">
                Espessura: {book.dimensions.thickness || unavailable}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:block ml-6">
        <Image
          alt={book.title}
          src={book.imageLinks ? book.imageLinks.thumbnail : "/no-photo.jpg"}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
