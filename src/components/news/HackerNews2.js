import React, { useState } from "react";
import HackerNews from "./HackerNews";
const HackerNews2 = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Button</button>
      {show && <HackerNews></HackerNews>}
    </div>
  );
};

export default HackerNews2;
