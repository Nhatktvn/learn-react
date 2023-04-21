import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SetUpFormV2 = () => {
  // const MyInput = (label, ...props) => {
  //   <div className="flex flex-col gap-2">
  //     <label htmlFor={props.id || props.name}>{label}</label>
  //     <input
  //       type="text"
  //       className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400 "
  //       {...props}
  //     />
  //   </div>;
  // };
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        jobs: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 character")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 character")
          .required("Required"),
        email: Yup.string().email("Mail khong hop le").required("Required"),
        intro: Yup.string().required("Required"),
        jobs: Yup.string().required("Required"),
        terms: Yup.boolean(),
      })}
      onSubmit={(values, actions) => {
        actions.resetForm({
          firstName: "",
          lastName: "",
          email: "",
          intro: "",
          jobs: "",
          terms: false,
        });
        setTimeout(() => {
          actions.setSubmitting(false);
          setLoading(false);
        }, 5000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">First name</label>
            <Field
              type="text"
              name="firstName"
              className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400 "
              placeholder="Enter your first name"
            ></Field>
          </div>
          <div className="text-red-500 my-1">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>

          <div className="flex flex-col gap-2 mt-[15px]">
            <label htmlFor="lastName">Last name</label>
            <Field
              type="text"
              name="lastName"
              className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400 "
              placeholder="Enter your last name"
            ></Field>
          </div>
          <div className="text-red-500 my-1">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>

          <div className="flex flex-col gap-2 mt-[15px]">
            <label htmlFor="email">Email address</label>
            <Field
              type="text"
              name="email"
              className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400 "
              placeholder="Enter your email address"
            ></Field>
          </div>
          <div className="text-red-500 my-1">
            <ErrorMessage name="email"></ErrorMessage>
          </div>

          <div className="flex flex-col gap-2 mt-[15px]">
            <label htmlFor="intro">Email address</label>
            <Field
              name="intro"
              className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400 h-[150px] resize-none"
              placeholder="Introduce yourself"
              as="textarea"
            ></Field>
          </div>
          <div className="text-red-500 my-1">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>

          <div className="flex flex-col gap-2 mt-[15px]">
            <label htmlFor="jobs">Select your jobs</label>
            <Field
              name="jobs"
              className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400"
              placeholder="Introduce yourself"
              as="select"
            >
              <option value="fontend">Frontend Developer</option>
              <option value="=Backend">Backend Developer</option>
              <option value="fullstack">Fullstack Developer</option>
            </Field>
          </div>
          <div className="text-red-500 my-1">
            <ErrorMessage name="jobs"></ErrorMessage>
          </div>

          <div className="flex items-center gap-2 mt-[15px]">
            <Field
              name="terms"
              type="checkbox"
              className="p-3 border border-solid border-gray-300 rounded-lg focus:border-blue-400"
            ></Field>
            <p>I accept the terms and conditions</p>
          </div>
          <div className="text-red-500 my-1">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>

          <div>
            <button
              type="submit"
              className="p-3 rounded-lg text-white bg-black w-full my-[20px] cursor-pointer font-medium"
              disabled={Formik.isSubmitting}
              onClick={() => {
                setLoading(true);
              }}
            >
              {loading ? "loading" : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SetUpFormV2;
