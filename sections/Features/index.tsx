/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Calendar, Folder, Unlock } from "react-iconly";
import NewsLetter from "../Newsletter";

const Features: React.FC<{}> = () => {
  const FeatureItem = ({ name, logo }: any) => {
    return (
      <div className="flex flex-col items-center space-y-2">
        {logo}
        <span className="text-center">{name}</span>
      </div>
    );
  };

  return (
    <div className="dark-gradient w-full">
      <div className="newsletter-holder relative mx-auto 2xl:max-w-screen-2xl px-6 lg:px-48 pt-20 font-medium text-white">
        <div className="grid gap-y-12 grid-cols-2 md:grid-cols-4 lg:justify-around mb-16">
          <FeatureItem
            logo={<Calendar primaryColor="white" size="xlarge" />}
            name={
              <>
                Updated <br /> Weekly
              </>
            }
          />
          <FeatureItem
            logo={<Unlock primaryColor="white" size="xlarge" />}
            name={
              <>
                No Signup <br /> Needed
              </>
            }
          />
          <FeatureItem
            logo={<Folder primaryColor="white" size="xlarge" />}
            name={
              <>
                70+ <br /> Resources
              </>
            }
          />

          <FeatureItem
            logo={<img src="/money.svg" alt="money" />}
            name={
              <>
                Free <br /> Forever
              </>
            }
          />
        </div>
        <div className="transform -translate-y-14">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Features;
