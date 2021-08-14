import React from "react";
import { ArrowDown } from "react-iconly";

const NewsLetter: React.FC<{}> = () => {
  return (
    <div>
      <div className="mx-auto pt-4 w-16 h-16 bg-white rounded-full transform translate-y-8">
        <div className="flex justify-center">
          <ArrowDown primaryColor="black" size="large" />
        </div>
      </div>
      <div className="px-10 lg:px-0 text-center light-gradient rounded-xl text-xl md:text-2xl lg:text-3xl font-medium lg:font-bold pt-20 pb-10 lg:mx-20">
        <div className="px-4 md:px-20 xl:px-60">
          Be the first to be notified about newly added resources!
        </div>
        <div className="mx-auto mt-8 flex h-14 md:w-96 shadow-inner bg-blue-500.5 rounded-full">
          <input
            type="email"
            name="email"
            className="rounded-full newsletter-input pl-8 w-5/12 md:w-60 bg-transparent outline-none text-base lg:text-lg"
            placeholder="Enter your email"
          />
          <button className="ml-auto hover:bg-blue-900 hover:shadow-lg duration-200 bg-blue-700 rounded-full text-sm font-medium lg:text-base lg:font-semibold px-6 py-2">
            Count me in
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
