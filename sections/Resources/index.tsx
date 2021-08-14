import { redirect } from "next/dist/server/api-utils";
import React from "react";
import { Search } from "react-iconly";
import ResourceCard from "../../components/Card/resourceCard.component";
import SearchBar from "../../components/SearchBar/searchbar.component";
import { useResources } from "../../helpers/getResources";
import SideBar from "./sidebar";

const Resources: React.FC<{}> = () => {
  const { data, error }: any = useResources();

  if (data) {
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
              {data.map((_data: any, key: any) => (
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
    return <></>;
  }
};

export default Resources;
