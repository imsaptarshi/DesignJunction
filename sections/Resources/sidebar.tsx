import React from "react";

const SideBar: React.FC<{}> = () => {
  const Categories = [
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
    "Accesibility",
  ];

  const SideBarItem = ({ name }: any) => {
    return <div className="font-regular text-base text-blue-800">{name}</div>;
  };

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
          {Categories.map((data, key) => (
            <SideBarItem key={key} name={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
