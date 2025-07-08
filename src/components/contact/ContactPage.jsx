import React, { useEffect } from "react";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
export default function ContactPage() {
  let navigate = useNavigate();
  let urlParams = new URLSearchParams(window.location.search);
  let hiring = urlParams.get("hiring");

  return (
    <div className="">
      <div className="container py-xxl-5 py-4 d-flex flex-column  mt-5 pt-5">
        <div className="title mb-5 mt-5 text-center animate__animated animate__zoomIn">
          <h1 style={{ fontSize: "3.125rem" }}>Get In Touch</h1>
          <small className="sunFont">Start Your Project With us Today</small>
        </div>
        <Contact hiring={hiring} />
      </div>
    </div>
  );
}
