import React from "react";
import withLoading from "./withLoading";
const FetchingData = ({ data }) => {
  return (
    <div>
      <h2>Picture Dog</h2>
      <img
        className="w-[200px] h-[200px] object-cover"
        src={data.message}
        alt=""
      />
    </div>
  );
};

export default withLoading(FetchingData);
