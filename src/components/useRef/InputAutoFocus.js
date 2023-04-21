import React, { useEffect, useRef } from "react";

const InputAutoFocus = () => {
  const input = useRef(null);
  useEffect(() => {
    if (input.current) input.current.focus();
  });
  return (
    <div>
      <input
        ref={input}
        type="text"
        className="m-5 p-3 border-2 border-solid border-[#999] rounded-lg focus:border-blue-600"
        placeholder="input text"
      />
    </div>
  );
};

export default InputAutoFocus;
