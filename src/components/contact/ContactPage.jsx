import React from "react";
import Contact from "./Contact";

export default function ContactPage() {
  return (
    <div className="mt-2">
      <div className="container py-xxl-5 py-4 d-flex flex-column  mt-5 pt-5">
        <div className="title mb-5 text-center">
          <h1 style={{ fontSize: "3.125rem" }}>Get In Touch</h1>
          <small className="sunFont">Start Your Project With us Today</small>
        </div>
        <Contact />
      </div>
    </div>
  );
}
