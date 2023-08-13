"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BookList, Loading, SearchBar } from "@/components";
import { ResponseBookItem } from "@/interface/global";
import { searchBooks } from "@/utils/api";

const IndexPage: React.FC = () => {
  const [query, setQuery] = useState("*");
  const [filters, setFilters] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchTotalItems, setSearchTotalItems] = useState(0);
  const [searchResults, setSearchResults] = useState<ResponseBookItem[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  const maxResults = 9;

  useEffect(() => {
    async function fetchBooks() {
      setIsLoading(true);
      const response = await searchBooks(query, filters, startIndex);
      setSearchResults(response.books || []);
      setSearchTotalItems(response.totalItems);
      setIsLoading(false);
    }
    fetchBooks();
  }, [query, filters, startIndex]);

  const handleNextPage = useCallback(
    () => setStartIndex(startIndex + maxResults),
    [startIndex],
  );

  const handlePreviousPage = useCallback(() => {
    if (startIndex - maxResults >= 0) {
      setStartIndex(startIndex - maxResults);
    }
  }, [startIndex]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-6">
        Lista de Livros
      </h1>
      <SearchBar
        onSearch={(query, filters) => {
          setQuery(query);
          setFilters(filters);
          setStartIndex(0);
        }}
      />
      {isLoading ? <Loading /> : <BookList books={searchResults} />}
      {searchTotalItems > 9 && (
        <div className="mt-4 flex justify-between">
          <button
            onClick={handlePreviousPage}
            disabled={startIndex === 0}
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Página Anterior
          </button>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Próxima Página
          </button>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
