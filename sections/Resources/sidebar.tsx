import React from "react";

const SideBar: React.FC<{}> = () => {
  const SideBarItem = ({ name }: any) => {
    return <div className="font-regular text-base text-blue-800">{name}</div>;
  };

  return (
    <div className="sticky left-0 top-0 hidden md:block">
      <div className="shadow-md bg-white rounded-xl p-8 w-60">
        <div className="font-semibold text-lg text-blue-600 mb-4">
          All Resources
        </div>
        <div className="flex flex-col space-y-2">
          <SideBarItem name="Accessibility" />
          <SideBarItem name="Animation" />
          <SideBarItem name="Accessibility" />
          <SideBarItem name="Animation" />
          <SideBarItem name="Accessibility" />
          <SideBarItem name="Animation" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
