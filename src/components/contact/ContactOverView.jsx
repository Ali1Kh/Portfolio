import React from "react";
import Contact from "./Contact";

export default function ContactOverView() {
  return (
    <section className="contact my-5 mt-3">
      <div className="container">
        <div className="sectionTitle text-center primaryText pt-4">
          <h2 className="mb-5">
            Have Any Project in Mind?
            <span className="text-white fs-6">Contact Us</span>
          </h2>
        </div>
        <div className="contactContainer">
          <Contact />
        </div>
      </div>
    </section>
  );
}
