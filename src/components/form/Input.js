import React, { useState } from "react";

const Input = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    rules: false,
  });
  const handleChangeInput = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventdefault();
    if (values.fullname === "") {
      setNameError("Your fullname is empty");
    } else {
      setNameError("");
    }
  };
  return (
    <div className="p-5">
      <form onSubmit={handleSubmitForm} className="flex gap-5">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-3 border border-gray-300 border-solid rounded-lg focus:border-blue-400"
          placeholder="Enter your name..."
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-300 border-solid rounded-lg focus:border-blue-400"
          placeholder="Enter your email..."
          onChange={handleChangeInput}
        />
        <input
          type="checkbox"
          name="rules"
          id=""
          onChange={handleChangeInput}
        />
        <button type="submit" className="p-3 bg-blue-500 text-white rounded-lg">
          Submit
        </button>
      </form>
      {nameError}
    </div>
  );
};

export default Input;
