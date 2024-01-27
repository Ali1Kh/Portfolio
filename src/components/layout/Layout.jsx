import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./layout.css";
import $ from "jquery";
export default function Layout() {
  // useEffect(() => {
  //   $(document).mousemove(function (e) {
  //     $("#follow").css({
  //       left: e.pageX - 17,
  //       top: e.pageY - 18,
  //     });
  //   });
  // });

  return (
    <>
      <Navbar />
      <Outlet />
      <div className="socialmedia my-2 animate__animated animate__flipInX animate__fast">
        <p className="followMe sunFont m-0 animate__animated /animate__rollIn ">Follow Me</p>
        <div className="socialItems pb-3 d-flex flex-column gap-2">
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
          <a href="https://twitter.com/aly1kh" target="_blank" className="text-white">
            <i className="fa-brands fs-5 fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}
