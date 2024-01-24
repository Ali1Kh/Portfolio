import React from "react";

export default function Contact() {
  return (
    <>
      <div className="row gy-5 mt-md-1">
        <div className="col-md-3 mx-auto">
          <div className="contactInfo">
            <h5 className="mb-3 text-white opensansFont">
              Contact Information
            </h5>
            <div className="infoItems gap-3 d-flex flex-column">
              <div className="infoItem">
                <i className="primaryText cursorPointer fa-solid fa-envelope me-3"></i>
                <a
                  href="mailto:alielsaadany94@gmail.com"
                  className="cursorPointer text-decoration-none mutedText"
                >
                  alielsaadany94@gmail.com
                </a>
              </div>
              <div className="infoItem">
                <i className="primaryText cursorPointer fa fa-phone me-3"></i>
                <span className="mutedText" style={{ cursor: "grabbing" }}>
                  +201551068849
                </span>
              </div>
              <div className="infoItem">
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
          </div>
        </div>
        <div className="col-md-9 mx-auto">
          <div className="contactform text-center">
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control py-2"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Subject"
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control py-2"
                  rows={"7"}
                  placeholder="Message"
                  style={{ maxHeight: "250px" }}
                />
              </div>
            </div>
            <button className="contactBtn btn text-white borderGrey mt-3">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
