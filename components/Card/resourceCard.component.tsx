import React from "react";

type Props = {
  title: String;
  description: String;
  tags: String[];
  image: String;
  redirect: string;
};

const ResourceCard: React.FC<Props> = ({
  title,
  description,
  tags,
  image,
  redirect,
}) => {
  const TagItem = ({ name }: any) => {
    return (
      <div className="hover:bg-blue-600 hover:text-blue-200 duration-200 bg-blue-300 text-blue-600 font-regular py-1 px-3 rounded-full">
        {name}
      </div>
    );
  };

  return (
    <div className="card shadow-sm cursor-pointer w-full p-5 duration-300 bg-white rounded-xl">
      <a href={redirect} target="_blank" rel="noreferrer">
        <div
          style={{
            backgroundImage: `url("${image}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="border-2 border-gray-100 w-full h-40 md:h-52 lg:h-40 bg-gray-400 rounded-xl mb-4"
        ></div>
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
