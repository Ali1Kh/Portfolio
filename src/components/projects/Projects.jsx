import React, { useEffect, useRef } from "react";
import freshLogo from "../../imgs/projectsLogo/logo.svg";
import "./projects.css";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);
  return <div ref={tilt} {...rest} />;
}

export default function Projects() {
  const options = {
    speed: 9000,
    max: 15, // max tilt rotation (degrees)
    perspective: 3000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  };

  return (
    <>
      <div className="container d-flex flex-column">
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

        <div className="projects">
          <div className="row">
            <div className="col-md-4">
              <Tilt className="" options={options}>
                <div className="cardItem borderGrey rounded-4 p-4">
                  <div className="logo mb-3" style={{ width: "250px" }}>
                    <img className="w-100" src={freshLogo} alt="" />
                  </div>
                  <div className="cardTitle d-flex align-items-center justify-content-between borderBottomGrey mb-3 pb-3">
                    <div className="projName">
                      <h3>Fresh Cart</h3>
                    </div>
                    <div className="projLink">
                      <a
                        href="https://ali1kh.github.io/Fresh-Cart/"
                        target="_blank"
                      >
                        <i className="fa fa-link text-white borderGrey rounded-4 fs-7 p-2"></i>
                      </a>
                    </div>
                  </div>
                  <div className="cardInfo borderBottomGrey mb-3 pb-3">
                    <div className="projInfo d-flex justify-content-between align-items-center mb-3">
                      <div className="projCategory">
                        <h5 className="fst-italic">E-Commerce</h5>
                      </div>
                      <div className="createdFrom">
                        <span className="fs-7 borderGrey rounded-4 px-2 py-1">
                          50 Days
                        </span>
                      </div>
                    </div>
                    <div className="projDescreption text-grey fs-7 mb-3">
                      Fresh Cart is easy to use and navigate. Customers can
                      simply browse the website and add items to their cart.
                      Once they are finished shopping, they can check out and
                      choose a delivery time. Fresh Cart will then deliver the
                      groceries to their door.
                    </div>
                    <div className="projDate">
                      <span
                        style={{ fontSize: "12px" }}
                        className="borderGrey rounded-4 px-2 py-1"
                      >
                        October 2023
                      </span>
                    </div>
                  </div>
                  <div className="cardFooter">
                    <div className="technologies d-flex gap-2">
                      <div
                        className="techItem borderGrey d-flex justify-content-center align-items-center rounded-3 p-2"
                        style={{ width: "40px" }}
                      >
                        <img
                          className="w-100"
                          src={require("../../imgs/tech/js.png")}
                          alt=""
                        />
                      </div>
                      <div
                        className="techItem d-flex justify-content-center align-items-center  borderGrey rounded-3 p-2"
                        style={{ width: "40px" }}
                      >
                        <img
                          className="w-100"
                          src={require("../../imgs/tech/react.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
