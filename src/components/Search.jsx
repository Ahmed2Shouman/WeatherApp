// src/components/Search.jsx
import React, { useState } from 'react';
import search_icon from '../assets/search.png';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim() !== '') {
      onSearch(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex w-full align-center space-between">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className="flex-1 px-6 py-3 mr-4 text-lg text-gray-600 bg-blue-100 border-none outline-none h-14 rounded-3xl"
      />
      <button
        onClick={handleSearch}
        className="text-gray-600 bg-blue-100 border-none rounded-full outline-none w-14 h-14"
      >
        <img src={search_icon} alt="Search" className="w-6 h-6 mx-auto" />
      </button>
    </div>
  );
};

export default Search;