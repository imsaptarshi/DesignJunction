import { redirect } from "next/dist/server/api-utils";
import React from "react";
import { Search } from "react-iconly";
import ResourceCard from "../../components/Card/resourceCard.component";
import SearchBar from "../../components/SearchBar/searchbar.component";
import SideBar from "./sidebar";

const Resources: React.FC<{}> = () => {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl bg-blue-200 px-6 md:px-10 lg:px-20">
      <div className="h-80 md:h-32 lg:h-40"></div>
      <div className="flex md:space-x-10">
        <SideBar />
        <div className="w-full">
          <div className="flex items-center text-gray-400 justify-between font-bold text-2xl">
            <div className="text-blue-600">All Resources</div>
            <SearchBar type="crumb" />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 auto-cols-auto">
            <ResourceCard
              title="Humaan Illustrations"
              description="An hand drawn Illustration Library"
              tags={["Illustration", "Logo"]}
              redirect="s"
              image="https://dl.airtable.com/.attachmentThumbnails/9e3ecc443537fa89196621636fb15b8b/6d2aae09"
            />
            <ResourceCard
              title="Humaan Illustrations"
              description="An hand drawn Illustration Library"
              tags={["Illustration", "Logo"]}
              redirect="s"
              image="https://dl.airtable.com/.attachmentThumbnails/9e3ecc443537fa89196621636fb15b8b/6d2aae09"
            />
            <ResourceCard
              title="Humaan Illustrations"
              description="An hand drawn Illustration Library"
              tags={["Illustration", "Logo"]}
              redirect="s"
              image="https://dl.airtable.com/.attachmentThumbnails/9e3ecc443537fa89196621636fb15b8b/6d2aae09"
            />
            <ResourceCard
              title="Humaan Illustrations"
              description="An hand drawn Illustration Library"
              tags={["Illustration", "Logo"]}
              redirect="s"
              image="https://dl.airtable.com/.attachmentThumbnails/9e3ecc443537fa89196621636fb15b8b/6d2aae09"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
