import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
const SetUpFormHook = () => {
  const schemaValidate = yup.object({
    firstName: yup.string().required().max(10),
    lastName: yup.string().required().max(10),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schemaValidate),
  });
  console.log(isSubmitting);
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400 "
          {...register("firstName")}
        />
      </div>
      {errors.firstName && (
        <div className="text-red-500 my-1">{errors.firstName.message}</div>
      )}
      <div className="flex flex-col gap-2 mt-[15px]">
        <label htmlFor="firstName">Last name</label>
        <input
          type="text"
          id="lastName"
          className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400 "
          {...register("lastName")}
        />
      </div>
      {errors.lastName && (
        <div className="text-red-500 my-1">{errors.lastName.message}</div>
      )}
      <div>
        <button
          type="submit"
          className=" flex justify-center p-3 rounded-lg text-white bg-black w-full my-[20px] cursor-pointer font-medium"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-4 border-white border-solid border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SetUpFormHook;
