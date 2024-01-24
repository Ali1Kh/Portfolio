import React from "react";
import Contact from "./Contact";

export default function ContactPage() {
  return (
    <>
      <div className="container py-5 d-flex flex-column">
        <div className="title mb-5 text-center">
          <h1 style={{ fontSize: "50px" }}>Get In Touch</h1>
        </div>
        <Contact />
      </div>
    </>
  );
}
