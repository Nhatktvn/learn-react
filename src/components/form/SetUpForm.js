import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// const validate = (values) => {
//   const error = {};
//   if (!values.firstName) {
//     error.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     error.firstName = "Must be 20 character";
//   }
//   if (!values.lastName) {
//     error.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     error.lastName = "Must be 20 character";
//   }
//   return error;
// };
const SetUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 character")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 character")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400 "
          {...formik.getFieldProps("firstName")}
        />
      </div>
      {formik.errors.firstName && formik.touched.firstName && (
        <div className="text-red-500 my-1">{formik.errors.firstName}</div>
      )}
      <div className="flex flex-col gap-2 mt-[15px]">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400 "
          {...formik.getFieldProps("lastName")}
        />
      </div>
      {formik.errors.lastName && formik.touched.lastName && (
        <div className="text-red-500 my-1">{formik.errors.lastName}</div>
      )}
      <div>
        <button
          type="submit"
          className="p-3 rounded-lg text-white bg-black w-max my-[20px] cursor-pointer font-medium"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SetUpForm;
