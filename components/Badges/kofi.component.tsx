/* eslint-disable @next/next/no-img-element */
import React from "react";

const Kofi: React.FC<{}> = () => {
  return (
    <a
      href="https://ko-fi.com/exwhyzee"
      target="_blank"
      rel="noreferrer"
      className="flex hover:shadow-xl navitem duration-300 fixed shadow-md bottom-0 z-40 text-2xl right-0 w-14 h-14 m-6 md:m-10 rounded-full"
    >
      <img src="/kofi.png" className="w-14 h-14 rounded-full" alt="kofi" />
    </a>
  );
};

export default Kofi;
