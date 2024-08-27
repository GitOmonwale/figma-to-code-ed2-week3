import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="py-4">
      <input
        type="text"
        placeholder="Search for a coin..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded-md w-full"
      />
    </div>
  );
};

export default SearchBar;
