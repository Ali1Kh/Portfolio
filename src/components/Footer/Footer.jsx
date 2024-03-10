import React from "react";

export default function Footer() {
  return (
    <>
      {/* <ParticlesComponent /> */}
      <div className="container" style={{ borderTop: "1px solid #434445" }}>
        <div className="footerInner py-3 d-flex justify-content-between align-items-center">
          <div className="Logoo fs-4 d-flex align-items-center gap-2 text-white">
            <div className="logo">
              <img
                src={require("../../imgs/fav.png")}
                alt="Logo"
                width="35"
                className="d-inline-block align-text-top me-s2 m-0 p-0 "
              />
              <span className="m-0 p-0 ms-2">Ali Elsaadany</span>
            </div>
          </div>
          <div className="footerEnd d-flex gap-3">
            <span>+201551068849</span>
            <span>alielsaadany94@gmail.com</span>

            <div className="socialItems pb-3 d-flex gap-2">
              <a
                className="text-white"
                href="https://www.linkedin.com/in/ali1kh/"
                target="_blank"
              >
                <i className="fa fs-5 fa-brands fa-linkedin-in"></i>
              </a>
              <a
                className="text-white"
                href="https://www.github.com/ali1kh"
                target="_blank"
                s
              >
                <i className="fa fs-5 fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
