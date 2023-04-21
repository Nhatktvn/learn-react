import React, { useEffect, useState } from "react";
const Increament = () => {
  const [message, setMessage] = useState("Minh Nhat");
  const [number, setNumber] = useState(0);
  const handleIncreament = () => {
    setNumber(number + 1);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [message]);
  return (
    <div className="p-5">
      <span className="text-xl mx-5">{number}</span>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleIncreament}
        className="bg-purple-500 text-white font-medium px-5 py-2 rounded-lg"
      >
        Increament
      </button>
    </div>
  );
};

export default Increament;
