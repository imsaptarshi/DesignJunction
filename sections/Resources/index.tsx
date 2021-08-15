import React from "react";
import ResourceCard from "../../components/Card/resourceCard.component";
import SearchBar from "../../components/SearchBar/searchbar.component";
import CardSkeleton from "../../components/Skeletons/card.skeleton";
import { useSearch } from "../../providers/search.provider";
import SideBar from "./sidebar";

type Props = {};

const Resources: React.FC<Props> = () => {
  const { query, resources } = useSearch();

  if (resources.data !== []) {
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl bg-blue-200 px-6 md:px-10 lg:px-20">
        <div className="h-80 md:h-40 lg:h-48 xl:h-44"></div>
        <div className="flex md:space-x-10">
          <SideBar />
          <div id="resources" className="w-full">
            <div className="flex items-center text-gray-400 justify-between font-bold text-2xl">
              <div className="text-blue-600">
                {query.length < 1 ? (
                  <>All Resources</>
                ) : (
                  <> &quot;{query}&quot;</>
                )}
              </div>
              <SearchBar type="crumb" />
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 auto-cols-auto">
              {query.length < 1
                ? resources.data.map((_data: any, key: any) => (
                    <ResourceCard
                      key={key}
                      title={_data.title}
                      description={_data.description}
                      tags={_data.tags}
                      image={_data.image}
                      redirect={_data.redirect}
                    />
                  ))
                : resources.searched_data.map((_data: any, key: any) => (
                    <ResourceCard
                      key={key}
                      title={_data.title}
                      description={_data.description}
                      tags={_data.tags}
                      image={_data.image}
                      redirect={_data.redirect}
                    />
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
