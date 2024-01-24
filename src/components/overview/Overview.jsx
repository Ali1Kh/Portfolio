import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./overview.css";
import Projects from "../projects/Projects";
import { useNavigate } from "react-router-dom";
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
  const companiesSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const navigate = useNavigate();
  return (
    <>
      <section className="about mb-5 py-5 mt-3">
        <div className="container py-5">
          {/* <div className="sectionTitle primaryText">
            <h2>About</h2>
          </div> */}
          <div className="aboutInner  d-flex gap-5 justify-content-center  align-items-center">
            <div className="overview mt-5">
              <div className="title primaryText">
                <h1>Ali Elsaadany,</h1>
              </div>
              <div className="summary mb-3" style={{ maxWidth: "700px" }}>
                I'm Full Stack Web Developer building seamless web experiences
                with proficiency in the MERN stack. Proficient in front-end
                technologies like HTML, CSS, JavaScript, React.js, and back-end
                development with Node.js, Express.js and MongoDB. Passionate
                about creating user friendly and visually appealing and
                functional web applications.
                <b>Available for remote and freelance work.</b>
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
                <a
                  href="mailto:alielsaadany94@gmail.com"
                  className="text-white"
                >
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
                  <div className="p-2 cursorGrab">
                    <img
                      className="w-100 mb-2"
                      src={require("../../imgs/tech/javascript.png")}
                      alt="JavaScript"
                    />
                    <h6>JavaScript</h6>
                  </div>
                  <div className="p-2 cursorGrab">
                    <img
                      className="w-100 mb-2"
                      src={require("../../imgs/tech/react.png")}
                      alt="React"
                    />
                    <h6 className="">React</h6>
                  </div>
                  <div className="p-2 cursorGrab">
                    <img
                      className="w-100 mb-2"
                      src={require("../../imgs/tech/typescript.png")}
                      alt="TypeScript"
                    />
                    <h6 className="">TypeScript</h6>
                  </div>
                  <div className="p-2 cursorGrab">
                    <img
                      className="w-100 mb-2"
                      src={require("../../imgs/tech/nextjs.png")}
                      alt="NextJS"
                    />
                    <h6 className="">Next.JS</h6>
                  </div>
                  <div className="p-2 cursorGrab">
                    <img
                      className="w-100 mb-2"
                      src={require("../../imgs/tech/redux.png")}
                      alt="Redux"
                    />
                    <h6 className="">Redux</h6>
                  </div>
                  <div className="p-2 cursorGrab">
                    <img
                      className="w-100 mb-2"
                      src={require("../../imgs/tech/html.png")}
                      alt="html"
                    />
                    <h6 className="">HTML</h6>
                  </div>
                  <div className="p-2 cursorGrab">
                    <img
                      className="w-100 mb-2"
                      src={require("../../imgs/tech/css.png")}
                      alt="css"
                    />
                    <h6 className="">CSS</h6>
                  </div>
                  <div className="p-2 cursorGrab">
                    <img
                      className="w-100 mb-2"
                      src={require("../../imgs/tech/sass.png")}
                      alt="sass"
                    />
                    <h6 className="">Sass</h6>
                  </div>
                  <div className="p-2 cursorGrab">
                    <img
                      className="w-100 mb-2"
                      src={require("../../imgs/tech/bootstrap.png")}
                      alt="bootstrap"
                    />
                    <h6 className="">BootStrap</h6>
                  </div>
                  <div className="p-2 cursorGrab">
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
      </section>
      <section className="projects py-2 my-5 mt-3">
        <div className="container ">
          <div className="sectionTitle text-center primaryText my-5 pt-5">
            <h2>Projects</h2>
          </div>
          <div className="projectsCards">
            <Projects test="?" />
          </div>
          <div className="sectionFooter my-4 text-center">
            <button
              onClick={() => navigate("/projects")}
              className="btn text-white borderGrey"
            >
              Show More
            </button>
          </div>
        </div>
      </section>
      <section className="certificates secBg my-5 mt-3">
        <div className="container py-5">
          <div className="sectionTitle text-center primaryText mb-5 my-3">
            <h2>Certificated In</h2>
          </div>
          <div className="companies gap-4 mb-3 d-flex flex-column justify-content-center align-items-center">
            <div
              className="slidesContainer text-center"
              style={{ width: "350px" }}
            >
              <Slider {...companiesSlider}>
                <div className="companyItem d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded-circle cursorGrab"
                    src={require("../../imgs/certificatedFrom/microsoft.png")}
                    alt=""
                    title="Microsoft"
                    style={{ maxWidth: "80px" }}
                  />
                </div>
                <div className="companyItem  d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded-circle cursorGrab"
                    src={require("../../imgs/certificatedFrom/oracle.png")}
                    alt=""
                    title="Oracle Academy"
                    style={{ maxWidth: "80px" }}
                  />
                </div>
                <div className="companyItem d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded-circle cursorGrab"
                    src={require("../../imgs/certificatedFrom/freecodecamp.jpeg")}
                    alt=""
                    title="freeCodeCamp"
                    style={{ maxWidth: "80px" }}
                  />
                </div>
                <div className="companyItem d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded-circle cursorGrab"
                    src={require("../../imgs/certificatedFrom/hackerrank.png")}
                    alt=""
                    title="HackerRank"
                    style={{ maxWidth: "80px" }}
                  />
                </div>
                <div className="companyItem d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded-circle cursorGrab"
                    src={require("../../imgs/certificatedFrom/route.jpg")}
                    alt=""
                    title="Route Academy"
                    style={{ maxWidth: "80px" }}
                  />
                </div>
                <div className="companyItem d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded-circle cursorGrab"
                    src={require("../../imgs/certificatedFrom/sololearn.jpg")}
                    alt=""
                    title="SoloLearn"
                    style={{ maxWidth: "80px" }}
                  />
                </div>
                <div className="companyItem d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded-circle cursorGrab"
                    src={require("../../imgs/certificatedFrom/mica.jpg")}
                    alt=""
                    title="SoloLearn"
                    style={{ maxWidth: "80px" }}
                  />
                </div>
              </Slider>
            </div>
            <div className="sectionFooter mt-4 mb-0 text-center">
            <button
              onClick={() => navigate("/certificates")}
              className="btn text-white borderGrey"
            >
              Show Certificates
            </button>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
