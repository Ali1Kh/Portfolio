import React from "react";
import favLogo from "../../imgs/fav.png";

export default function Footer() {
  return (
    <>
      {/* <ParticlesComponent /> */}
      <div className="container" style={{ borderTop: "1px solid #434445" }}>
        <div className="footerInner py-3 d-flex justify-content-between align-items-center">
          <div className="Logoo fs-4 d-flex align-items-center gap-2 text-white  w-100">
            <div className="logo">
              <img
                src={favLogo}
                alt="Logo"
                width="35"
                className="d-inline-block align-text-top me-s2 m-0 p-0 "
              />
              <span className="m-0 p-0 ms-2 d-none d-sm-inline">
                Ali Elsaadany
              </span>
            </div>
          </div>
          <span className="w-100 text-nowrap">
            © {new Date().getFullYear()} Ali Elsaadany. All Rights Reserved.
          </span>
          <div className="footerEnd d-none d-sm-flex gap-3  w-100 justify-content-end align-items-center">
            <div className="socialItems d-flex align-items-center gap-2">
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
