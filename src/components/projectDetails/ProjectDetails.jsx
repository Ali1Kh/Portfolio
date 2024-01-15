import React, { useEffect, useState } from "react";
import "./projectDetails.css";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";

export default function ProjectDetails() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  const photos = [
    {
      src: require("../../imgs//projScreens/Products.png"),
      width: 900,
      height: 600,
    },
    {
      src: require("../../imgs//projScreens/Product-Details.png"),
      width: 900,
      height: 600,
    },
    {
      src: require("../../imgs//projScreens/Cart.png"),
      width: 900,
      height: 600,
    },
    {
      src: require("../../imgs//projScreens/Cart.png"),
      width: 900,
      height: 600,
    },
    {
      src: require("../../imgs//projScreens/Cart.png"),
      width: 900,
      height: 600,
    },
    {
      src: require("../../imgs//projScreens/Cart.png"),
      width: 900,
      height: 600,
    },
  ];
  return (
    <>
      <div className="container d-flex flex-column p-5">
        <header className="banner p-5 borderBottomGrey mb-2">
          <div
            style={{ marginInline: "200px" }}
            className="projHeader pb-3 mb-3 d-flex flex-column align-items-center borderBottomGrey"
          >
            <div className="title text-center">
              <h1 style={{ fontSize: "55px" }}>Fresh Cart</h1>
            </div>
            <div className="projCategory">
              <span>E-Commerce</span>
            </div>
          </div>
          <div className="projInfo  d-flex flex-column align-items-center">
            <div className="demo text-white mb-3 borderGrey rounded-4 fs-7 p-2">
              <i className="fa fa-link "></i>{" "}
              <a
                className="text-decoration-none text-white"
                href="https://ali1kh.github.io/Fresh-Cart"
                target="blank"
              >
                Demo
              </a>
            </div>
            <div className="techs d-flex justify-content-center align-items-center gap-3">
              <div className="techItem d-flex gap-2 align-items-center borderGrey rounded-5 px-2 py-1">
                <div className="techImg" style={{ width: "25px" }}>
                  <img
                    className="w-100 mb-0"
                    src={require("../../imgs/tech/react.png")}
                    alt=""
                  />
                </div>
                <span className="mb-0 fs-7">React</span>
              </div>
              <div className="techItem d-flex gap-2 align-items-center borderGrey rounded-5 px-3 py-1">
                <div className="techImg" style={{ width: "25px" }}>
                  <img
                    className="w-100 mb-0"
                    src={require("../../imgs/tech/js.png")}
                    alt=""
                  />
                </div>
                <span className="mb-0 fs-7">JavaScript</span>
              </div>
            </div>
          </div>
        </header>
        <div className="shortDescription borderBottomGrey mb-3 py-3">
          <p className="fst-italic">
            Online grocery shopping made simple - browse, add, checkout, get
            delivered!
          </p>
        </div>
        <div className="projScreens">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a
              className="imageItem"
              href={require("../../imgs/projScreens/Home.png")}
            >
              <img
                className="w-100 rounded-3 h-100"
                alt="Home"
                src={require("../../imgs/projScreens/Home.png")}
              />
            </a>

            <a
              className="imageItem"
              href={require("../../imgs/projScreens/Cart.png")}
            >
              <img
                className="w-100 rounded-3 h-100"
                alt="Cart"
                src={require("../../imgs/projScreens/Cart.png")}
              />
            </a>

            <a
              className="imageItem"
              href={require("../../imgs/projScreens/Categories.png")}
            >
              <img
                className="w-100 rounded-3 h-100"
                alt="Categories"
                src={require("../../imgs/projScreens/Categories.png")}
              />
            </a>

            <a
              className="imageItem"
              href={require("../../imgs/projScreens/Brands.png")}
            >
              <img
                className="w-100 rounded-3 h-100"
                alt="Brands"
                src={require("../../imgs/projScreens/Brands.png")}
              />
            </a>

            <a href={require("../../imgs/projScreens/Brands.png")}>
              <img
                className="w-100 rounded-3 h-100"
                alt="Brands"
                src={require("../../imgs/projScreens/Brands.png")}
              />
            </a>
          </LightGallery>
        </div>
      </div>
    </>
  );
}
