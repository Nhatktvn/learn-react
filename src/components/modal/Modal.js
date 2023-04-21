import React from "react";
import ReactDOM from "react-dom";
const modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`fixed flex inset-0 modal justify-center items-center ${
        open ? "" : "hidden"
      }`}
    >
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      ></div>
      <div className=" w-[466px] h-[610px] bg-white rounded-xl z-10 relative">
        <span
          className="absolute top-0 right-0 cursor-pointer"
          onClick={handleClose}
        >
          close
        </span>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default modal;
