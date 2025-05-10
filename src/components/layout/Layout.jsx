import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./layout.css";
import FollowMe from "../FollowMe/FollowMe";
import Footer from "../Footer/Footer";
export default function Layout() {
  return (
    <>
      {/*       <Stack
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
      </Stack> */}
      <Navbar />

      <Outlet />
      <FollowMe />
      <Footer />
    </>
  );
}
