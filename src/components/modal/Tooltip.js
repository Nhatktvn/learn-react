import React, { useState } from "react";
import ReactDOM from "react-dom";
const Tooltip = ({ children, text }) => {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setShow(true);
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div className="tooltip m-16  flex flex-col gap-1 w-max">
      {show && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span
        onMouseOver={handleHover}
        onMouseOut={() => setShow(false)}
        className="m-auto cursor-pointer"
      >
        {text}
      </span>
    </div>
  );
};

function TooltipContent({ children, coords }) {
  return ReactDOM.createPortal(
    <div>
      <p
        className="bg-black p-2 text-white font-medium rounded-lg w-max absolute -translate-y-full -translate-x-2/4"
        style={{
          top: coords.top + window.scrollY,
          left: coords.left + coords.width / 2,
        }}
      >
        {children}
      </p>
    </div>,
    document.querySelector("body")
  );
}

export default Tooltip;
