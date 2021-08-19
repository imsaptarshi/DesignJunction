import axios from "axios";
import React from "react";
import SearchResource from "../../helpers/searcher";
import { useSearch } from "../../providers/search.provider";

export const Categories = [
  "Illustration",
  "Inspiration",
  "Icon",
  "Color",
  "Miscellaneous",
  "Stock Photo/Video",
  "Podcast",
  "Design System",
  "Job",
  "Font",
  "Accessibility",
];

export const SideBarItem = ({ name }: any) => {
  const { query, setQuery, resources, setResources } = useSearch();

  return (
    <div className="relative flex items-center">
      {query == name ? (
        <div className="absolute -left-3 bg-blue-600 w-0.5 h-4"></div>
      ) : (
        <></>
      )}
      <div
        onClick={() => {
          setQuery(name);
          const _resources = SearchResource(resources.data, name);
          setResources({
            data: resources.data,
            searched_data: _resources,
            isLoading: false,
            error: false,
          });
          window.location.href = "#resources";
        }}
        className="navitem duration-200 cursor-pointer hover:font-medium font-regular text-base text-blue-800"
      >
        {name}
      </div>
    </div>
  );
};

const SideBar: React.FC<{}> = () => {
  const { query, resources, setResources, setQuery } = useSearch();
  return (
    <div
      style={{ height: "fit-content", zIndex: 100 }}
      className="sticky left-0 top-10 hidden md:block"
    >
      <div className="light-shadow bg-white rounded-xl p-8 w-60">
        <div className="font-semibold text-lg text-blue-600 mb-4">
          All Resources
        </div>
        <div className="flex flex-col space-y-2">
          <div className="relative flex items-center">
            {query == "Newly Added" ? (
              <div className="bg-blue-600 absolute -left-3 w-0.5 h-4"></div>
            ) : (
              <></>
            )}
            <div
              onClick={() => {
                setQuery("Newly Added");
                const _resources = SearchResource(resources.data, "", true);
                setResources({
                  data: resources.data,
                  searched_data: _resources,
                  isLoading: false,
                  error: false,
                });
                window.location.href = "#resources";
              }}
              className="navitem duration-200 cursor-pointer hover:font-medium font-regular text-base text-blue-800"
            >
              Newly Added
            </div>
          </div>
          {Categories.map((data, key) => (
            <SideBarItem key={key} name={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
