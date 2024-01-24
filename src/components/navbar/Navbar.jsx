import React, { useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import $ from "jquery";
export default function Navbar() {
  useEffect(() => {
    $(".nav-link").click((e) => {
      $(".nav-link.active").removeClass("active");
      $(e.target).addClass("active");
    });
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg position-sticky z-2 mb-5 ">
        <div className="container rounded-4 px-3 py-2 border shadow">
          <a className="navbar-brand fs-4 d-flex align-items-center gap-2 text-white">
            <img
              src={require("../../imgs/logo.png")}
              alt="Logo"
              width="50"
              className="d-inline-block align-text-top"
            />
            Ali Elsaadany
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  data-category=""
                  role="button"
                  aria-current="page"
                  to={"/overview"}
                >
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="projectsNavItem"
                  role="button"
                  aria-current="page"
                  to={"/projects"}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"

                  role="button"
                  aria-current="page"
                  to={"/skills"}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"

                  role="button"
                  aria-current="page"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
