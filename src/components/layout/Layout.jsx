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
      {/* <div id="follow"></div> */}
    </>
  );
}
