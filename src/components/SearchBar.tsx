"use client";

import React, { useCallback, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string, filters: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState("");

  const handleSearch = useCallback(() => {
    onSearch(query, filters);
  }, [onSearch, query, filters]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Pesquisar livros..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
        <select
          value={filters}
          onChange={(e) => setFilters(e.target.value)}
          className="w-full md:w-auto px-3 py-2 border rounded-md"
        >
          <option value="">Filtros</option>
          <option value="full">Todos</option>
          <option value="partial">Parcial</option>
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">eBooks gratuitos </option>
          <option value="paid-ebooks">eBooks Pagos</option>
        </select>
        <button
          onClick={handleSearch}
          className="w-full md:w-auto px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
};
