import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
export default function Contact() {
  let initValues = {
    name: "",
    email: "",
    subject: "",
    text: "",
  };
  const formik = useFormik({
    initialValues: initValues,
    onSubmit: sendContactMail,
    validateOnChange: false,
    validate(values) {
      let errors = {};
      if (values.name == "") {
        errors.name = "Name is Required";
      } else if (!values.name.match(/^[a-zA-Z\s]{3,}$/)) {
        errors.name = "Name Must Be At least 3 Charchters";
      }
      if (values.email == "") {
        errors.email = "Email Is Required";
      } else if (
        !values.email.match(
          /^[a-zA-Z]{1,}[a-zA-Z0-9]{2,15}@[a-z]{3,15}\.[a-z]{3,9}$/
        )
      ) {
        errors.email = "Email Is Invaild";
      }
      if (values.subject == "") {
        errors.subject = "Subject Is Required";
      }
      if (values.text == "") {
        errors.text = "Message Is Required";
      }
      console.log(errors);
      return errors;
    },
  });

  async function sendContactMail(values) {
    try {
      let { data } = await axios.post(
        `https://ali1kh.onrender.com/mails`,
        values
      );
      if (data.success) {
        toast.success(data.message, {
          duration: 4000,
          position: "top-right",
          style: {
            backgroundColor: "#0d0d0d",
            color: "white",
          },
        });
        formik.resetForm();
      }
    } catch (error) {
      toast.error("Something Went Wrong", {
        duration: 4000,
        position: "top-right",
        style: {
          backgroundColor: "#0d0d0d",
          color: "white",
        },
      });
    }
  }

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column gap-4 mt-md-1 w-75 mx-auto">
          <div className="contactInfo">
            <h6 className="mb-3 text-white opensansFont">
              Contact Information
            </h6>
            <div className="row gap-2">
              <div className="col-md ">
                <div className="infoItem d-flex align-items-center">
                  <i className="primaryText cursorPointer fa-solid fa-envelope me-3"></i>
                  <a
                    href="mailto:alielsaadany94@gmail.com"
                    className="cursorPointer text-decoration-none mutedText"
                  >
                    alielsaadany94@gmail.com
                  </a>
                </div>
              </div>

              <div className="col-md">
                <div className="infoItem d-flex align-items-center">
                  <i className="primaryText cursorPointer fa fa-phone me-3"></i>
                  <span className="mutedText" style={{ cursor: "grabbing" }}>
                    +201551068849
                  </span>
                </div>
              </div>

              <div className="col-md">
                <div className="infoItem d-flex align-items-center">
                  <i className="primaryText cursorPointer fa-brands fa-linkedin-in me-3"></i>
                  <a
                    href="https://www.linkedin.com/in/ali1kh/"
                    target="_blank"
                    className="text-decoration-none mutedText"
                  >
                    ali1kh
                  </a>
                </div>
              </div>

              <div className="col-md">
                <div className="infoItem d-flex align-items-center">
                  <i className="primaryText cursorPointer fa fa-location-dot me-3"></i>
                  <p className="text-decoration-none mutedText m-0">
                    Cairo,Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contactform text-center">
            <h6 className="mb-3 text-white text-start opensansFont">
              Send Message
            </h6>
            <div className="row g-3">
              <div className="col-md-6 text-start">
                <input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="name"
                  type="text"
                  className={
                    formik.errors.name && formik.touched.name
                      ? "form-control py-2 border-danger is-invalid"
                      : "form-control py-2"
                  }
                  placeholder="Your Name"
                />
                {formik.errors.name && formik.touched.name ? (
                  <small className="px-2 text-danger">
                    {formik.errors.name}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 text-start">
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="email"
                  type="email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "form-control py-2 border-danger is-invalid"
                      : "form-control py-2"
                  }
                  placeholder="Your Email"
                />
                {formik.errors.email && formik.touched.email ? (
                  <small className="px-2 text-danger">
                    {formik.errors.email}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-12 text-start">
                <input
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="subject"
                  type="text"
                  className={
                    formik.errors.subject && formik.touched.subject
                      ? "form-control py-2 border-danger is-invalid"
                      : "form-control py-2"
                  }
                  placeholder="Subject"
                />
                {formik.errors.subject && formik.touched.subject ? (
                  <small className="px-2 text-danger">
                    {formik.errors.subject}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div className="col-12 text-start">
                <textarea
                  value={formik.values.text}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="text"
                  className={
                    formik.errors.text && formik.touched.text
                      ? "form-control py-2 border-danger is-invalid"
                      : "form-control py-2"
                  }
                  rows={"7"}
                  placeholder="Message"
                  style={{ maxHeight: "250px" }}
                />
                {formik.errors.text && formik.touched.text ? (
                  <small className="px-2 text-danger">
                    {formik.errors.text}
                  </small>
                ) : (
                  ""
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={formik.handleSubmit}
              disabled={!formik.dirty}
              className="contactBtn btn text-white borderGrey mt-3"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
