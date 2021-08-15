import { createContext, useContext, useState } from "react";

interface Props {
  query: String;
  setQuery: (arg1: String) => any;
  resources: {
    data: Array<any>;
    searched_data: Array<any>;
    isLoading: Boolean;
    error: Boolean;
  };
  setResources: (arg1: Object) => any;
}

const SearchContext = createContext<Props>({
  query: "",
  setQuery: () => {},
  resources: {
    data: [],
    searched_data: [],
    isLoading: true,
    error: false,
  },
  setResources: () => {},
});

export const SearchProvider = ({ children }: any) => {
  const [query, setQuery]: any = useState("");
  const [resources, setResources]: any = useState({
    data: [],
    searched_data: [],
    isLoading: true,
    error: false,
  });

  return (
    <SearchContext.Provider
      value={{ query, setQuery, resources, setResources }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
