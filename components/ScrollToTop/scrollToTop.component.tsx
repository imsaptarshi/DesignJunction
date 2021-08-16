import React, { useEffect, useState } from "react";
import { ChevronUp } from "react-feather";

const ScrollToTopButton: React.FC<{}> = () => {
  const [display, setDisplay] = useState("hidden");
  const [active, setActive] = useState("");

  const toTop = () => {
    window.location.href = "#resources";
  };

  const getDisplay = () => {
    if (
      document.body.scrollTop > 1500 ||
      document.documentElement.scrollTop > 1500
    ) {
      setDisplay("block");
      setActive("active");
    } else {
      setDisplay("hidden");
      setActive("notactive");
    }
  };

  useEffect(() => {
    window.onscroll = function () {
      getDisplay();
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <button
      className={`flex hover:shadow-xl navitem duration-300 justify-center items-center totop fixed ${display} ${active} shadow-md focus:outline-none bottom-0 z-40 text-2xl right-0 bg-blue-600 w-12 h-12 m-6 md:m-10 rounded-full font-display font-bold text-white`}
      onClick={toTop}
    >
      <ChevronUp size="35" />
    </button>
  );
};

export default ScrollToTopButton;
