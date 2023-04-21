import React, { useEffect, useRef, useState } from "react";

const StopWacth = () => {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <div className="p-5">
      <p className="mb-[15px]">{count}s</p>
      <div className="flex gap-5">
        <span>
          <button
            className="border-2 border-solid border-blue-600 px-5 py-2 rounded-lg"
            onClick={handleStart}
          >
            Start
          </button>
        </span>
        <span>
          <button
            className="border-2 border-solid border-red-600 px-5 py-2 rounded-lg"
            onClick={handleStop}
          >
            Stop
          </button>
        </span>
      </div>
    </div>
  );
};

export default StopWacth;
