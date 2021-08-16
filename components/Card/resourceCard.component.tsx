/* eslint-disable @next/next/no-img-element */
import React from "react";
import SearchResource from "../../helpers/searcher";
import { useSearch } from "../../providers/search.provider";

type Props = {
  title: String;
  description: String;
  tags: String[];
  image: String;
  redirect: string;
  isFeatured?: boolean;
  isAdvertised?: boolean;
};

const ResourceCard: React.FC<Props> = ({
  title,
  description,
  tags,
  image,
  redirect,
  isFeatured,
  isAdvertised,
}) => {
  const { query, setQuery, resources, setResources } = useSearch();

  const TagItem = ({ name }: any) => {
    return (
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
        className="hover:bg-blue-600 hover:text-blue-200 duration-200 bg-blue-300 text-blue-600 font-regular py-1 px-3 rounded-full"
      >
        {name}
      </div>
    );
  };

  return (
    <div className="relative card shadow-sm cursor-pointer w-full p-5 duration-300 bg-white rounded-xl">
      {isFeatured ? (
        <img
          src="/featured.svg"
          alt="featured"
          className="z-10 absolute top-3 left-0"
        />
      ) : (
        <></>
      )}
      <a href={redirect} target="_blank" rel="noreferrer">
        <div className="card-container relative overflow-hidden rounded-xl border-2 border-gray-100 mb-4">
          <div
            style={{
              backgroundImage: `url("${image}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="card-holder duration-300 w-full h-40 md:h-52 lg:h-40 bg-gray-300 rounded-xl"
          ></div>
        </div>
      </a>
      <a href={redirect} target="_blank" rel="noreferrer">
        <div className="font-bold text-blackDisplay">{title}</div>
        <div className="text-blackBody font-body font-regular mb-4">
          {description}
        </div>
      </a>
      <div className="flex flex-wrap space-x-2">
        {tags.map((data, key) => (
          <TagItem key={key} name={data} />
        ))}
      </div>
    </div>
  );
};

export default ResourceCard;
