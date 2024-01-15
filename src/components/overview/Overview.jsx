import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './overview.css';
export default function Overview() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <>
      <div className="container p-5 mt-3">
        <div className="main d-flex gap-5 justify-content-center  align-items-center">
          <div className="overview mt-5">
            <div className="title">
              <h1>Ali Elsaadany,</h1>
            </div>
            <div className="summary mb-2" style={{ maxWidth: "700px" }}>
              Front-end developer building High Quality, User Friendly web
              applications. Proficient in HTML, CSS, JavaScript, and React.
              Passionate about creating visually appealing and functional web
              applications. <b>Available for remote and freelance work.</b>
            </div>
            <div className="social d-flex gap-2 ">
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
              <a href="mailto:alielsaadany94@gmail.com" className="text-white">
                <i className="fa fs-5 fa-at"></i>
              </a>
            </div>
          </div>
          <div className="tech  mt-5">
            {/* <h5>Technologies</h5> */}
            <div
              className="slidesContainer text-center"
              style={{ width: "110px" }}
            >
              <Slider {...settings}>
                <div className="p-2">
                  <img
                    className="w-100 mb-2"
                    src={require("../../imgs/tech/js.png")}
                    alt="JavaScript"
                  />
                  <h6>JavaScript</h6>
                </div>
                <div className="p-2">
                  <img
                    className="w-100 mb-2"
                    src={require("../../imgs/tech/react.png")}
                    alt="React"
                  />
                  <h6 className="">React</h6>
                </div>
                <div className="p-2">
                  <img
                    className="w-100 mb-2"
                    src={require("../../imgs/tech/typescript.png")}
                    alt="TypeScript"
                  />
                  <h6 className="">TypeScript</h6>
                </div>
                <div className="p-2">
                  <img
                    className="w-100 mb-2"
                    src={require("../../imgs/tech/nextjs.png")}
                    alt="NextJS"
                  />
                  <h6 className="">Next.JS</h6>
                </div>
                <div className="p-2">
                  <img
                    className="w-100 mb-2"
                    src={require("../../imgs/tech/redux.png")}
                    alt="Redux"
                  />
                  <h6 className="">Redux</h6>
                </div>
                <div className="p-2">
                  <img
                    className="w-100 mb-2"
                    src={require("../../imgs/tech/html.png")}
                    alt="html"
                  />
                  <h6 className="">HTML</h6>
                </div>
                <div className="p-2">
                  <img
                    className="w-100 mb-2"
                    src={require("../../imgs/tech/css.png")}
                    alt="css"
                  />
                  <h6 className="">CSS</h6>
                </div>
                <div className="p-2">
                  <img
                    className="w-100 mb-2"
                    src={require("../../imgs/tech/sass.png")}
                    alt="sass"
                  />
                  <h6 className="">Sass</h6>
                </div>
                <div className="p-2">
                  <img
                    className="w-100 mb-2"
                    src={require("../../imgs/tech/bootstrap.png")}
                    alt="bootstrap"
                  />
                  <h6 className="">BootStrap</h6>
                </div>
                <div className="p-2">
                  <img
                    className="w-100 mb-2"
                    src={require("../../imgs/tech/jquery.png")}
                    alt="jquery"
                  />
                  <h6 className="">JQuery</h6>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
