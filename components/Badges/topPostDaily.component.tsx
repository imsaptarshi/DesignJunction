/* eslint-disable @next/next/no-img-element */
import React from "react";

const TopPostDaily: React.FC<{}> = () => {
  return (
    <a
      href="https://www.producthunt.com/posts/design-junction-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-design-junction-2"
      target="_blank"
      rel="noreferrer"
    >
      <img
        id="PH"
        className="hidden lg:block shadow-xl"
        src="/topDailyPH.svg"
        alt="Design Junction - One-stop resource library for designers and creatives | Product Hunt"
        style={{ width: "250px", height: "54px" }}
        width="250"
        height="54"
      />
      <img
        className="block lg:hidden"
        src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=307333&theme=light&period=daily"
        alt="Design Junction - One-stop resource library for designers and creatives | Product Hunt"
        style={{ width: "250px", height: "54px" }}
        width="250"
        height="54"
      />
    </a>
  );
};

export default TopPostDaily;
