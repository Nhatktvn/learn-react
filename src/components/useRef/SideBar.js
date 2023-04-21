import React, { useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const SideBar = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div>
      <button
        ref={nodeRef}
        onClick={() => setShow(!show)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
      >
        Show menu
      </button>
      <div
        className={`w-[300px] bg-slate-500 shadow-md fixed top-0 left-0 bottom-0 z-10 ${
          !show ? "-translate-x-full" : ""
        } transition-all`}
      ></div>
    </div>
  );
};

export default SideBar;
