import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("2222");
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const handleUpdateText = (e) => {
    setTextAreaHeight("auto");
    setText(e.target.value);
  };

  useLayoutEffect(() => {
    setTextAreaHeight(`${textAreaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5">
      <textarea
        ref={textAreaRef}
        className="transition-all overflow-hidden p-5 border-2 border-gray-300 border-solid w-full max-w-[400px] resize-none focus:border-blue-400 leading-normal"
        placeholder="input text your content..."
        value={text}
        onChange={handleUpdateText}
        style={{
          minHeight: textAreaHeight,
        }}
      >
        {text}
      </textarea>
    </div>
  );
};

export default TextareaAutoResize;
