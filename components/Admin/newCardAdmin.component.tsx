/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useState } from "react";

const NewCardAdmin: React.FC<{}> = ({}) => {
  const [isEditing, setIsEditing] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState("");
  const [tags, setTags] = useState<String[]>([]);
  const [isFeatured, setFeatured] = useState(false);
  const [isAdvertised, setAdvertised] = useState(false);

  const TagItem = ({ name }: any) => {
    return (
      <div className="hover:bg-blue-600 hover:text-blue-200 duration-200 bg-blue-300 text-blue-600 font-normal py-1 px-3 rounded-full">
        {name}
      </div>
    );
  };
  if (!isEditing) {
    return (
      <div className="relative card shadow-sm cursor-pointer w-full p-5 duration-300 bg-white rounded-xl">
        <div className="absolute top-3 left-0 z-10">
          {isFeatured ? (
            <img src="/featured.svg" alt="featured" className="mb-1" />
          ) : (
            <></>
          )}
          {isAdvertised ? <img src="/advertised.svg" alt="promoted" /> : <></>}
        </div>
        <a href={String(redirect)} target="_blank" rel="noreferrer">
          <div className="card-container relative overflow-hidden rounded-xl border-2 border-gray-100 mb-4">
            <div
              style={{
                backgroundImage: `url("${image}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="card-holder duration-300 w-full h-40 md:h-52 lg:h-40 bg-gray-200 rounded-xl"
            ></div>
          </div>
        </a>
        <a href={String(redirect)} target="_blank" rel="noreferrer">
          <div className="font-bold text-blackDisplay">{title}</div>
          <div className="text-blackBody font-body font-normal mb-4">
            {description}
          </div>
        </a>
        <div className="flex flex-wrap space-x-2">
          {tags.map((data, key) => (
            <TagItem key={key} name={data} />
          ))}
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-6 py-1 hover:bg-blue-700 duration-200 rounded-xl"
          >
            Edit
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative card shadow-sm cursor-pointer w-full p-5 duration-300 bg-white rounded-xl">
        Editing
        <form className="flex flex-col mt-2 space-y-2">
          <div className="flex flex-col">
            Title
            <input
              className="border-2 px-4 py-1 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="flex flex-col">
            Description
            <input
              className="border-2 px-4 py-1 rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className="flex flex-col">
            Image
            <input
              className="border-2 px-4 py-1 rounded-lg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image"
            />
          </div>
          <div className="flex flex-col">
            Redirect
            <input
              className="border-2 px-4 py-1 rounded-lg"
              value={redirect}
              onChange={(e) => setRedirect(e.target.value)}
              placeholder="redirect"
            />
          </div>
          <div className="flex flex-col">
            Tags
            <input
              className="border-2 px-4 py-1 rounded-lg"
              value={tags.join(", ")}
              onChange={(e) => {
                setTags(e.target.value.split(", "));
              }}
              placeholder="Tags"
            />
          </div>
          <div className="flex items-center">
            Featured
            <input
              type="checkbox"
              onChange={(e) => {
                setFeatured(!isFeatured);
              }}
              className="ml-2 border-2 px-4 py-1 rounded-lg"
              defaultChecked={isFeatured}
            />
          </div>
          <div className="flex items-center">
            Advertised
            <input
              type="checkbox"
              className="ml-2 border-2 px-4 py-1 rounded-lg"
              onChange={(e) => {
                setAdvertised(!isAdvertised);
              }}
              defaultChecked={isAdvertised}
            />
          </div>
        </form>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => {
              setIsEditing(false);
              setTitle(title);
              setDescription(description);
              setImage(image);
              setRedirect(redirect);
              setFeatured(isFeatured);
              setAdvertised(isAdvertised);
              setTags(tags);
            }}
            className="bg-gray-200 text-black px-6 py-1 hover:bg-gray-300 duration-200 rounded-xl"
          >
            Preview
          </button>
          <button
            onClick={() => {
              axios
                .post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/post/`, {
                  title,
                  description,
                  image,
                  redirect,
                  tags,
                  isAdvertised,
                  isFeatured,
                })
                .then((res: any) => {
                  console.log(res);
                  alert(
                    "Document saved, Reload the page for changes to take effect"
                  );
                  setIsEditing(false);
                })
                .catch((err: any) => {
                  console.log(err);
                });
            }}
            className="bg-blue-600 text-white px-6 py-1 hover:bg-blue-700 duration-200 rounded-xl"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
};

export default NewCardAdmin;
