import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./layout.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import $ from "jquery";
export default function Layout() {
  return (
    <>
      <Stack
        className="overflow-hidden alertContainer  "
        sx={{
          width: "100%",
          position: "relative",
          zIndex: 9999999999999,
          top: "0px",
        }}
        spacing={2}
      >
        <Alert
          className="rounded-0"
          severity="warning"
          onClose={(e) => {
            $(".alertContainer").remove();
          }}
        >
          This Portfolio Is Under Development. Some features and content may not
          be finalized yet. But we're excited to share our progress with you.
        </Alert>
      </Stack>
      <Navbar />
      <Outlet />
      <div className="socialmedia my-2 animate__animated animate__flipInX animate__fast">
        <p className="followMe sunFont m-0 animate__animated /animate__rollIn ">
          Follow Me
        </p>
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
          <a
            href="https://twitter.com/aly1kh"
            target="_blank"
            className="text-white"
          >
            <i className="fa-brands fs-5 fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}
