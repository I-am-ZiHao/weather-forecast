"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "../../../public/icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // display button after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-5 p-3 z-40 rounded-[50%] border border-solid border-[#E0E0E0] hover:border-white hover:text-white cursor-pointer animate-fadeInRight"
        >
          <ArrowUpIcon />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
