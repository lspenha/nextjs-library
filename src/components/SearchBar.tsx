import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (
    query: string,
    category: string,
    startDate: string,
    endDate: string,
  ) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery, selectedCategory, selectedStartDate, selectedEndDate);
  };

  return (
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 mb-2">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Título do livro"
        className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="text"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        placeholder="Categoria"
        className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="text"
        value={selectedStartDate}
        onChange={(e) => setSelectedStartDate(e.target.value)}
        placeholder="Ano de início"
        className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="text"
        value={selectedEndDate}
        onChange={(e) => setSelectedEndDate(e.target.value)}
        placeholder="Ano de término"
        className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Pesquisar
      </button>
    </div>
  );
};
