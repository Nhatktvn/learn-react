import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropDown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative m-5">
      <div
        ref={nodeRef}
        className="p-2 border border-solid border-gray-300 w-[300px]"
        onClick={() => setShow(!show)}
      >
        DROPDOWN
      </div>
      {show && (
        <div
          id="dropDown"
          className="absolute left-0 top-full px-2 pb-2 border border-solid border-gray-300 w-[300px]"
        >
          <div className="py-2 border-b border-solid border-b-gray-300">
            Javascript
          </div>
          <div className="py-2 border-b border-solid border-b-gray-300">
            ReactJs
          </div>
          <div className="py-2 border-b border-solid border-b-gray-300">
            NodeJs
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
