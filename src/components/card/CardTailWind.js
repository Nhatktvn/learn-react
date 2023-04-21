import React from "react";

const CardTailWind = (props) => {
  return (
    <div className="relative">
      <div className="w-full h-[400px] rounded-lg">
        <img
          className="block w-full height-full rounded-lg"
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=400x300&vertical=top"
          alt=""
        />
      </div>
      <div className="absolute w-[calc(100%-38px)] left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white z-10 rounded-[20px] p-5 box-border">
        <div className="flex justify-between items-center mb-[30px]">
          <div className="flex items-center gap-x-3">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=400x300&vertical=top"
              alt=""
            />
            <span className="text-base font-light">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img
              className="flex items-center gap-x-3"
              src="/coolicon.svg"
              alt=""
            />
            <span className="text-base font-normal ">256</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium text-[#000] m-0">
            Cosmic Perspective
          </div>
          <span
            className={`font-bold ${
              props.secondary ? "bg-secondary-gradient" : "bg-primary-gradient"
            } text-transparent bg-clip-text ${
              props.fontSize ? props.fontSize : "text-lg"
            }`}
          >
            12,000 PSL{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTailWind;
