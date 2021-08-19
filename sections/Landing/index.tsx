import React from "react";
import SearchBar from "../../components/SearchBar/searchbar.component";
import TopPostDaily from "../../components/Badges/topPostDaily.component";

const Landing: React.FC<{}> = () => {
  return (
    <div className="landing-page mx-auto 2xl:max-w-screen-2xl relative lg:flex px-10 lg:px-20">
      <div className="herotext xl:text-6xl lg:text-5xl text-4xl text-blue-800 font-black lg:mt-20 lg:ml-10 xl:ml-20">
        <span>
          {" "}
          Quality Free <br />
          Resources <br />
          for Designers{" "}
        </span>
        <br />
        <span className="text-bg-blue-gradient-2 ">by Designers</span>
        <div className="md:w-6/12 lg:w-5/12 text-blue-800.5 font-medium xl:text-base text-sm mt-4 mb-8 font-body">
          Design Junction is a one-stop resource library for Designers and
          Creatives with curated list of best resources handpicked from around
          the web.
        </div>
        <SearchBar />
        <div className="block transform scale-150 translate-y-12 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/heroImageMobile.png" className="" alt="Hero Image" />
        </div>
        <div className="hidden md:block md:h-24 lg:h-44 w-full"></div>
      </div>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          style={{
            right: 0,
            top: -145,
          }}
          id="heroimage"
          src="/heroImage.png"
          className="absolute xl:mr-16 w-7/12 h-7/12 hidden lg:block lg:w-8/12 lg:h-8/12 xl:w-7/12 xl:h-7/12"
          alt="Hero Image"
        />
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          id="heroimage"
          src="/heroImage.png"
          className="heroimage right-0 -top-16 absolute xl:mr-16 w-7/12 h-7/12 hidden md:block lg:hidden lg:w-8/12 lg:h-8/12 xl:w-7/12 xl:h-7/12"
          alt="Hero Image"
        />
      </div>
      <div className="hidden lg:block absolute bottom-0 transform translate-y-6 lg:translate-y-0 lg:pl-16">
        <TopPostDaily />
      </div>
    </div>
  );
};

export default Landing;
