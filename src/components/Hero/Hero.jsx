import React from "react";
import PDFViewer from "../pdf/PDFViewer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "./hero.css";
import { Link } from "react-router-dom";
import reactLogo from "../../imgs/tech/react.png";
import nodejsLogo from "../../imgs/tech/nodejs.png";
import expressLogo from "../../imgs/tech/express.png";
import mongoLogo from "../../imgs/tech/mongo.png";
import nestLogo from "../../imgs/tech/nest.png";
import graphqlLogo from "../../imgs/tech/graphql.png";
import socketLogo from "../../imgs/tech/socket.png";
import dockerLogo from "../../imgs/tech/docker.png";
import nextjsLogo from "../../imgs/tech/nextjs.png";
import reduxLogo from "../../imgs/tech/redux.png";
import javascriptLogo from "../../imgs/tech/javascript.png";
import typescriptLogo from "../../imgs/tech/typescript.png";
import htmlLogo from "../../imgs/tech/html.png";
import cssLogo from "../../imgs/tech/css.png";
import sassLogo from "../../imgs/tech/sass.png";
import bootstrapLogo from "../../imgs/tech/bootstrap.png";
import jqueryLogo from "../../imgs/tech/jquery.png";
import javaLogo from "../../imgs/tech/java.png";
import plsqlLogo from "../../imgs/tech/plsql.png";
import mysqlLogo from "../../imgs/tech/mysql.png";

export default function Hero() {
  const techSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 900,
    arrows: false,
  };

  function viewCv(e) {
    e.stopPropagation();
    $(".pdfContainer").css("display", "block");
    $("body").css("overflow", "hidden");
  }
  return (
    <>
      <section className="about w-100 position-relative overflow-hidden d-flex justify-content-center align-items-center mb-md-5 py-md-5 mt-0 pt-0">
        <div className="container px-5 pb-md-5">
          <div className="aboutInner d-flex  gap-5 justify-content-center  align-items-center">
            <div className="overview w-100 mt-5">
              <div className="row">
                <div className="col-lg-7 text-start  animate__animated animate__lightSpeedInLeft">
                  <div className="aboutContentCol">
                    <div className="hello">
                      <span style={{ fontSize: "40px" }} className="">
                        Hello!
                      </span>
                    </div>
                    <div className="myName primaryText ">
                      <h1 style={{ fontSize: "50px" }} className="">
                        I'm Ali Elsaadany,
                      </h1>
                    </div>
                    <div className="title">
                      <h2 style={{ fontSize: "40px" }} className="">
                        Full Stack Developer
                      </h2>
                    </div>

                    {/* <div className="summary mb-3" style={{ maxWidth: "700px" }}>
                    I'm Full Stack Web Developer building seamless web
                    experiences with proficiency in the MERN stack. Proficient
                    in front-end technologies like HTML, CSS, JavaScript,
                    React.js, and back-end development with Node.js, Express.js
                    and MongoDB. Passionate about creating user friendly and
                    visually appealing and functional web applications.
                    <b> Available for remote and freelance work.</b>
                  </div> */}

                    <div class="sectionFooter d-flex align-items-center gap-4 my-4 ">
                      <Link
                        to="/contact?hiring=true"
                        class="btn mainBgColor text-white"
                      >
                        Hire Me
                      </Link>
                      <button
                        onClick={(e) => viewCv(e)}
                        class="btn text-white borderGrey"
                      >
                        View Resume
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-9 animate__animated animate__lightSpeedInLeft">
                  <div className="title primaryText ">
                    <h1 className=" ">Ali Elsaadany,</h1>
                  </div>
                  <div className="summary mb-3" style={{ maxWidth: "700px" }}>
                    I'm Full Stack Web Developer building seamless web
                    experiences with proficiency in the MERN stack. Proficient
                    in front-end technologies like HTML, CSS, JavaScript,
                    React.js, and back-end development with Node.js, Express.js
                    and MongoDB. Passionate about creating user friendly and
                    visually appealing and functional web applications.
                    <b> Available for remote and freelance work.</b>
                  </div>

                  <div class="sectionFooter d-flex align-items-center gap-4 my-4 ">
                    <button
                      onClick={(e) => viewCv(e)}
                      class="btn text-white borderGrey"
                    >
                      View Resume
                    </button>
                  </div>
                </div> */}

                <div className="col-lg-5  animate__animated animate__lightSpeedInRight">
                  <div class="container d-flex justify-content-center">
                    <div>
                      <div class="laptop">
                        <div class="laptop__screen">
                          <div id="techsContainer" className="tech text-center">
                            {/* <span className="sunFont">Technologies</span> */}
                            <div
                              className="mt-1 slidesContainer mx-auto text-center"
                              style={{
                                width: "170px",
                              }}
                            >
                              <Slider {...techSlider}>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={reactLogo}
                                    alt="React"
                                  />
                                  <h6 className="">React</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={nodejsLogo}
                                    alt="Nodejs"
                                  />
                                  <h6 className="">Node.js</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={expressLogo}
                                    alt="Express.js"
                                  />
                                  <h6 className="">Express.js</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent rounded-1"
                                    src={mongoLogo}
                                    alt="Mongo"
                                  />
                                  <h6 className="">MongoDB</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent rounded-1"
                                    src={nestLogo}
                                    alt="Mongo"
                                  />
                                  <h6 className="">NestJs</h6>
                                </div>

                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent rounded-1"
                                    src={graphqlLogo}
                                    alt="GraphQL
                              "
                                  />
                                  <h6 className="mt-auto">GraphQL</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent rounded-1"
                                    src={socketLogo}
                                    alt="Socket"
                                  />
                                  <h6 className="">Socket IO</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent rounded-1"
                                    src={dockerLogo}
                                    alt="Docker"
                                  />
                                  <h6 className="mt-auto">Docker</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={nextjsLogo}
                                    alt="NextJS"
                                  />
                                  <h6 className="">Next.JS</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={reduxLogo}
                                    alt="Redux"
                                  />
                                  <h6 className="">Redux</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={javascriptLogo}
                                    alt="JavaScript"
                                  />
                                  <h6>JavaScript</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={typescriptLogo}
                                    alt="TypeScript"
                                  />
                                  <h6 className="">TypeScript</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={htmlLogo}
                                    alt="html"
                                  />
                                  <h6 className="">HTML</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={cssLogo}
                                    alt="css"
                                  />
                                  <h6 className="">CSS</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={sassLogo}
                                    alt="sass"
                                  />
                                  <h6 className="">Sass</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={bootstrapLogo}
                                    alt="bootstrap"
                                  />
                                  <h6 className="">BootStrap</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={jqueryLogo}
                                    alt="jquery"
                                  />
                                  <h6 className="">JQuery</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={javaLogo}
                                    alt="java"
                                  />
                                  <h6 className="">JAVA</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={plsqlLogo}
                                    alt="plsql"
                                  />
                                  <h6 className="small">Oracle Pl/SQL</h6>
                                </div>
                                <div className="p-2 cursorGrab">
                                  <img
                                    className="w-100 mb-2 bg-transparent"
                                    src={mysqlLogo}
                                    alt="jquery"
                                  />
                                  <h6 className="">My SQL</h6>
                                </div>
                              </Slider>
                            </div>
                          </div>
                        </div>
                        <div class="laptop__bottom">
                          <div class="laptop__under"></div>
                        </div>
                        <div class="laptop__shadow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scrollDown">
          <div
            onClick={() => window.scrollTo(0, window.innerHeight - 100)}
            className="downArrow cursorPointer"
          >
            <div className="arrowItem">
              <div className="angleDown"></div>
            </div>
            <div className="arrowItem">
              <div className="angleDown"></div>
            </div>
            <div className="arrowItem">
              <div className="angleDown"></div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="pdfContainer rounded-3 pt-5 overflow-auto container position-fixed start-50 z-3 translate-middle-x p-2"
        style={{ width: "100%", height: "95vh", top: "25px" }}
      >
        <i
          style={{ backgroundColor: "#323639" }}
          className="fa fa-xmark rounded-3 me-3 position-absolute top-0 end-0 mb-5 p-2 fs-5 z-3 cursorPointer"
        ></i>
        <div className="pdfView h-100 w-100">
          <PDFViewer pdfUrl={"/cv.pdf"} />
        </div>
      </div>
    </>
  );
}
