import React, { useState } from "react";
import { Search } from "react-iconly";
import SearchResource from "../../helpers/searcher";
import { useSearch } from "../../providers/search.provider";

type Props = {
  type?: String;
};

const SearchBar: React.FC<Props> = ({ type }) => {
  const [isActive, setIsActive] = useState(false);
  const [isCrumbActive, setIsCrumbActive] = useState(false);

  const { resources, setResources } = useSearch();
  const { query, setQuery } = useSearch();

  switch (type) {
    case "crumb":
      return (
        <div
          className={`flex space-x-5 bg-white ${
            isCrumbActive ? "border-blue-500 border-2" : ""
          } text-blue-800.10 rounded-xl w-36 md:w-52 lg:w-80 light-shadow border-2 border-white hover:border-blue-500 duration-300 px-4`}
        >
          <div className="mt-2.5">
            <Search />
          </div>
          <input
            value={String(query)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(e.target.value);
              const _resources = SearchResource(resources.data, e.target.value);
              setResources({
                data: resources.data,
                searched_data: _resources,
                isLoading: false,
                error: false,
              });
            }}
            autoComplete="off"
            onFocus={() => setIsCrumbActive(true)}
            onBlur={() => setIsCrumbActive(false)}
            className="text-blue-800 rounded-full outline-none h-12 bg-transparent text-base w-full"
            type="text"
            name="query"
            placeholder="Search from over 70+ resources"
          />
        </div>
      );
    default:
      return (
        <form
          onSubmit={(e) => {
            if (query.length > 0) {
              e.preventDefault();
              var myDiv = document.getElementById("resources");
              myDiv?.scrollIntoView(true);
              const _resources = SearchResource(resources.data, query);
              setResources({
                data: resources.data,
                searched_data: _resources,
                isLoading: false,
                error: false,
              });
            }
          }}
          className={`hover:border-blue-500 ${
            isActive ? "border-blue-500 border" : "theme-border"
          } duration-300 flex space-x-5 text-blue-800.10 inner-shadow rounded-full md:w-96 h-16 px-8 py-2`}
        >
          <div className="mt-2.5">
            <Search />
          </div>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(e.target.value);
            }}
            autoComplete="off"
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            className="search-input rounded-full outline-none bg-transparent text-base w-full"
            type="text"
            name="query"
            placeholder="Search from over 70+ resources"
          />
        </form>
      );
  }
};

export default SearchBar;
