import React, { useEffect } from "react";

const EventScroll = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 200) header.classList.add("fixed");
      else header.classList.remove("fixed");
    };
    window.addEventListener("scroll", handleFixedHeader);
    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    };
  });
  return <div className="p-5 bg-black h-[20px] w-full" id="header"></div>;
};

export default EventScroll;
