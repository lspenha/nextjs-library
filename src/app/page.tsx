"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BookList, Loading, SearchBar } from "@/components";
import { ResponseBookItem } from "@/utils/Types/global";
import { searchBooks } from "@/utils/api";

const IndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("a");
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchResults, setSearchResults] = useState<ResponseBookItem[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  const maxResults = 9;

  useEffect(() => {
    async function fetchBooks() {
      try {
        setIsLoading(true);
        const response = await searchBooks(
          searchQuery,
          startIndex,
          category,
          startDate,
          endDate,
        );

        setSearchResults(response || []);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBooks();
  }, [searchQuery, category, startDate, endDate, startIndex]);

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
      <h1 className="text-3xl font-semibold mb-4">Lista de Livros</h1>
      <SearchBar
        onSearch={(
          query,
          selectedCategory,
          selectedStartDate,
          selectedEndDate,
        ) => {
          setSearchQuery(query);
          setCategory(selectedCategory);
          setStartDate(selectedStartDate);
          setEndDate(selectedEndDate);
          setStartIndex(0);
        }}
      />
      {isLoading ? <Loading /> : <BookList books={searchResults} />}
      {searchResults.length > 1 && (
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
