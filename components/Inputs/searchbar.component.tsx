import React from "react";
import { Search } from "react-iconly";

const SearchBar: React.FC<{}> = () => {
  return (
    <div className="flex space-x-5 text-blue-800.10 inner-shadow rounded-full md:w-96 theme-border mt-6 h-16 px-8 py-2">
      <Search className="mt-2.5" />
      <input
        className="outline-none bg-transparent text-base w-full"
        type="text"
        name="query"
        placeholder="Search from over 70+ resources"
      />
    </div>
  );
};

export default SearchBar;
