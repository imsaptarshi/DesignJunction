import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Navbar: React.FC<{}> = () => {
  const Desktop = () => {
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl flex font-display items-center space-x-8 px-20">
        <div
          id="logo"
          className="cursor-pointer flex items-center text-xl space-x-3"
        >
          <Image width="30" height="30" src={logo} alt="Design junction" />
          <div>
            <span className="font-black">Design</span>
            <span className="font-medium">Junction</span>
          </div>
        </div>
        <div className="cursor-pointer duration-300 hover:text-blue-600 font-medium text-sm">
          Twitter
        </div>
        <div className="cursor-pointer duration-300 font-bold text-blue-600 text-sm mt-1">
          Submit a resource
        </div>
      </div>
    );
  };

  const Mobile = () => {
    return (
      <>
        <div
          className="fixed justify-between w-full flex mobile-navbar py-4 px-6"
          style={{ zIndex: 100 }}
        >
          <div
            id="logo"
            className="cursor-pointer flex items-center text-base space-x-2"
          >
            <Image width="20" height="20" src={logo} alt="Design junction" />
            <div>
              <span className="font-black">Design</span>
              <span className="font-medium">Junction</span>
            </div>
          </div>
          <div className="cursor-pointer duration-300 font-bold text-blue-700 text-xs mt-1.5">
            Submit a resource &gt;
          </div>
        </div>
        <div className="h-24"></div>
      </>
    );
  };

  return (
    <>
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="block lg:hidden">
        <Mobile />
      </div>
    </>
  );
};

export default Navbar;
