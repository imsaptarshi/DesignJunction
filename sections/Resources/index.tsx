import React from "react";
import { ChevronDown } from "react-iconly";
import { X } from "react-feather";
import ResourceCard from "../../components/Card/resourceCard.component";
import SearchBar from "../../components/SearchBar/searchbar.component";
import CardSkeleton from "../../components/Skeletons/card.skeleton";
import { useSearch } from "../../providers/search.provider";
import SideBar from "./sidebar";
import { Categories, SideBarItem } from "./sidebar";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import SearchResource from "../../helpers/searcher";

type Props = {};

const Resources: React.FC<Props> = () => {
  const { query, resources, setQuery, setResources } = useSearch();

  if (resources.data !== []) {
    return (
      <div className="relative mx-auto 2xl:max-w-screen-2xl bg-blue-200 px-6 md:px-10 lg:px-20">
        <div className="h-60 md:h-20 lg:h-48 xl:h-44"></div>
        <div id="resources" className="h-20 lg:h-8"></div>
        <div className="flex md:space-x-10">
          <SideBar />
          <div className="w-full">
            <div className="flex items-center text-gray-400 justify-between font-bold text-xl md:text-2xl">
              <div className="text-blue-600">
                {query.length < 1 ? (
                  <>
                    <div className="flex items-center space-x-1">
                      <div>All Resources</div>{" "}
                      <Menu
                        className="font-medium"
                        menuButton={
                          <div className="cursor-pointer block md:hidden">
                            <ChevronDown />
                          </div>
                        }
                      >
                        <MenuItem
                          onClick={() => {
                            setQuery("Newly Added");
                            const _resources = SearchResource(
                              resources.data,
                              "",
                              true
                            );
                            setResources({
                              data: resources.data,
                              searched_data: _resources,
                              isLoading: false,
                              error: false,
                            });
                            window.location.href = "#resources";
                          }}
                        >
                          <div className="navitem duration-200 cursor-pointer hover:font-medium font-regular text-base text-blue-800">
                            Newly Added
                          </div>
                        </MenuItem>
                        {Categories.map((data, key) => (
                          <MenuItem
                            onClick={() => {
                              setQuery(data);
                              const _resources = SearchResource(
                                resources.data,
                                data
                              );
                              setResources({
                                data: resources.data,
                                searched_data: _resources,
                                isLoading: false,
                                error: false,
                              });
                              window.location.href = "#resources";
                            }}
                            key={key}
                          >
                            <SideBarItem name={data} />
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-wrap items-center space-x-2">
                      <div className="truncate w-32 md:w-40 lg:w-auto lg:max-w-xs xl:max-w-lg">
                        {'"'}
                        {query}
                        {'"'}
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => setQuery("")}
                      >
                        <X className="text-blue-800" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <SearchBar type="crumb" />
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 auto-cols-auto">
              {query.length < 1
                ? resources.data.map((_data: any, key: any) => (
                    <ResourceCard key={key} {..._data} />
                  ))
                : resources.searched_data.map((_data: any, key: any) => (
                    <ResourceCard key={key} {..._data} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl bg-blue-200 px-6 md:px-10 lg:px-20">
        <div className="h-80 md:h-40 lg:h-48 xl:h-44"></div>
        <div className="flex md:space-x-10">
          <SideBar />
          <div className="w-full">
            <div className="flex items-center text-gray-400 justify-between font-bold text-2xl">
              <div className="text-blue-600">All Resources</div>
              <SearchBar type="crumb" />
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 auto-cols-auto">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Resources;
