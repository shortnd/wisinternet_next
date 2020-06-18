import { useRef } from "react";
import Head from "next/head";

import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Layout from "../components/Layout";
import FormField from "../components/FormField";

export default function Home() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const pageSubmit = () => {
    document.querySelector("form").submit();
  };

  return (
    <Layout>
      <Head>
        <title>Wisconsin Internet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h1>Wisconin Internet</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            business: false,
            streetAddress: "",
            city: "",
            state: "",
            zipCode: "",
            currentProvider: "",
            currentSpeed: "",
            maintainComputers: false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(30, "Must be 30 charaters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(30, "Must be 30 charaters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            phoneNumber: Yup.string()
              .matches(phoneRegExp, "Phone number is not valid")
              .required("Required"),
            business: Yup.boolean().notRequired(),
            streetAddress: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            state: Yup.string().required("Required"),
            zipCode: Yup.number().required("Required"),
            currentProvider: Yup.string().notRequired(),
            currentSpeed: Yup.number().notRequired(),
            maintainComputers: Yup.boolean().notRequired(),
          })}
          validateOnMount="true"
          onSubmit={pageSubmit}
        >
          <Form
            action="/success"
            method="POST"
            name="Sign Up"
            netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <div
              style={{
                display: "none",
              }}
            >
              <input name="bot-field" />
            </div>
            <div>
              <label htmlFor="firstName">
                First Name
                <Field name="firstName" type="text" id="firstName" />
              </label>
              <ErrorMessage name="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">
                Last Name
                <Field name="lastName" type="text" id="lastName" />
              </label>
              <ErrorMessage name="lastName" />
            </div>
            <div>
              <label htmlFor="email">
                Email
                <Field name="email" id="email" type="email" />
              </label>
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="phoneNumber">
                Phone Number
                <Field name="phoneNumber" id="phoneNumber" type="string" />
              </label>
              <ErrorMessage name="phoneNumber" />
            </div>
            <div>
              <label htmlFor="business">
                Business
                <Field name="business" id="business" type="checkbox" />
              </label>
              <ErrorMessage name="business" />
            </div>
            <div>
              <label htmlFor="streetAddress">
                Street Address
                <Field name="streetAddress" id="streetAddress" type="text" />
              </label>
              <ErrorMessage name="streetAddress" />
            </div>
            <div>
              <label htmlFor="city">
                City
                <Field name="city" id="city" type="text" />
              </label>
              <ErrorMessage name="city" />
            </div>
            <div>
              <label htmlFor="state">
                State
                <Field name="state" id="state" type="string" />
              </label>
              <ErrorMessage name="state" />
            </div>
            <div>
              <label htmlFor="zipCode">
                Zip Code
                <Field name="zipCode" id="zipCode" type="string" />
              </label>
              <ErrorMessage name="zipCode" />
            </div>
            <div>
              <label htmlFor="currentProvider">
                Current Provider
                <Field
                  name="currentProvider"
                  id="currentProvider"
                  type="text"
                />
              </label>
              <ErrorMessage name="currentProvider" />
            </div>
            <div>
              <label htmlFor="currentSpeed">
                Current Speed
                <Field name="currentSpeed" id="currentSpeed" type="text" />
              </label>
              <ErrorMessage name="currentSpeed" />
            </div>
            <div>
              <label htmlFor="maintainComputers">
                Computers
                <Field
                  name="maintainComputers"
                  id="maintainComputers"
                  type="checkbox"
                />
              </label>
              <ErrorMessage name="maintainComputers" />
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </>
    </Layout>
  );
}
