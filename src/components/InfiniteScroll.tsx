"use client";

import { useEffect } from "react";
import debounce from "lodash.debounce";

type Props = {
  handleLoadmore: () => void;
};

const InfiniteScroll = ({ handleLoadmore }: Props) => {
  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY; 
      const windowHeight = window.innerHeight; 
      const documentHeight = document.documentElement.scrollHeight; 

      // Check on end of bottom
      if (scrollTop + windowHeight >= documentHeight - 5) {
        // console.log("end");
        handleLoadmore();
      }
    }, 300);

    // add event listener
    window.addEventListener("scroll", handleScroll);
    // Remove event listener when handleScroll
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="h-[6vh]" />;
};

export default InfiniteScroll;
