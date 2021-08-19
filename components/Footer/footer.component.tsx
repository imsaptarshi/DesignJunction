import Image from "next/image";
import logo from "../../public/footer-logo.svg";
import React from "react";

const Footer: React.FC<{}> = () => {
  return (
    <div className=" z-40 dark-gradient w-full absolute bottom-0">
      <div className="mx-auto 2xl:max-w-screen-2xl flex justify-between items-center w-full px-6 py-6 lg:px-32 md:py-8">
        <div className="cursor-pointer flex items-center text-2xl space-x-3 text-white">
          <Image width="35" height="35" src={logo} alt="Design junction" />
          <div className="hidden md:block">
            <span className="font-bold">Design</span>
            <span className="font-normal">Junction.</span>
          </div>
        </div>
        <div className="hidden md:block font-body text-white text-lg font-light">
          #FreeForever
        </div>
        <div className="text-white font-body text-lg font-light">
          with 🤍 by{" "}
          <a
            className="underline"
            href="https://twitter.com/exxyzee"
            target="_blank"
            rel="noreferrer"
          >
            @exxyzee
          </a>{" "}
          and{" "}
          <a className="underline" target="_blank" rel="noreferrer">
            team
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
