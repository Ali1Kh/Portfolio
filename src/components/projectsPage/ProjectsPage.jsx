import React from "react";
import "./projects.css";
import Projects from "../projects/Projects";
export default function ProjectsPage() {
  return (
    <>
      <div className="container pt-4 d-flex flex-column">
        <div className="title mb-5 text-center">
          <h1 style={{ fontSize: "55px" }}>Projects</h1>
        </div>
        <div className="search w-75 mb-5 align-self-center">
          <div className="searchBar">
            <div className="input-group flex-nowrap mb-2">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fa fa-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="recommended px-3 py-2 d-flex gap-2">
            <div className="recItem fs-7 rounded-4 py-1 px-3 borderGrey">
              JavaScript
            </div>
            <div className="recItem fs-7 rounded-4 py-1 px-3 borderGrey">
              React
            </div>
          </div>
        </div>
        <Projects />
      </div>
    </>
  );
}