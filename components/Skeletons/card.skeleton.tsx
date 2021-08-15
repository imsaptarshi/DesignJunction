import React from "react";

const CardSkeleton: React.FC<{}> = ({}) => {
  return (
    <div className="card shadow-sm cursor-pointer w-full p-5 duration-300 bg-white rounded-xl">
      <div className="w-full h-40 md:h-52 lg:h-40 animate-pulse bg-gray-300 rounded-xl mb-4"></div>
      <div className="font-bold text-blackDisplay rounded-full w-60 h-6 bg-gray-300 animate-pulse mb-2"></div>
      <div className="text-blackBody font-body font-regular mb-4 rounded-full w-40 h-6 bg-gray-300 animate-pulse"></div>
      <div className="flex flex-wrap space-x-2">
        <div className="animate-pulse duration-200 bg-blue-300 text-blue-600 font-regular w-20 h-6 rounded-full"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
