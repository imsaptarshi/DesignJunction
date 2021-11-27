import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Navbar: React.FC<{}> = () => {
  const Desktop = () => {
    return (
      <div className="relative z-10 mx-auto 2xl:max-w-screen-2xl flex font-display items-center space-x-8 px-20">
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
        <div className="navitem cursor-pointer duration-300 font-medium text-sm">
          <a
            href="https://www.twitter.com/exxyzee"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
        <div className="navitem cursor-pointer duration-300 font-medium text-sm">
          <a href="https://ko-fi.com/exwhyzee" target="_blank" rel="noreferrer">
            Donate
          </a>
        </div>
        <div className="navitem cursor-pointer duration-300 font-bold text-blue-600 text-sm">
          <a
            href={String(process.env.NEXT_PUBLIC_RESOURCE_FORM)}
            target="_blank"
            rel="noreferrer"
          >
            Suggest a resource &gt;
          </a>
        </div>
      </div>
    );
  };

  const Mobile = () => {
    return (
      <>
        <div
          className="fixed justify-between w-full flex mobile-navbar py-4 px-6"
          style={{ zIndex: 200 }}
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
            <a
              href={String(process.env.NEXT_PUBLIC_RESOURCE_FORM)}
              target="_blank"
              rel="noreferrer"
            >
              Suggest a resource &gt;
            </a>
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
