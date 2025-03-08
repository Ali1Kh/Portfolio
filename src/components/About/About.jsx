import React from "react";
import PDFViewer from "../pdf/PDFViewer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
export default function About() {
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
      <section className="about overflow-hidden d-flex justify-content-center align-items-center mb-md-5 py-md-5 mt-0 pt-0">
        <div className="container py-md-5">
          <div className="aboutInner  d-flex  gap-5 justify-content-center  align-items-center">
            <div className="overview mt-5">
              <div className="row">
                <div className="col-lg-9 animate__animated animate__lightSpeedInLeft">
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
                </div>

                <div className="col-lg-2 animate__animated animate__lightSpeedInRight">
                  <div class="container">
                    <div class="laptop">
                      <div class="laptop__screen">
                        <div id="techsContainer" className="tech text-center">
                          {/* <span className="sunFont">Technologies</span> */}
                          <div
                            className="mt-1 slidesContainer mx-auto text-center"
                            style={{
                              width: "110px",
                            }}
                          >
                            <Slider {...techSlider}>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/react.png")}
                                  alt="React"
                                />
                                <h6 className="">React</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/nodejs.png")}
                                  alt="Nodejs"
                                />
                                <h6 className="">Node.js</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/express.png")}
                                  alt="Express.js"
                                />
                                <h6 className="">Express.js</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent rounded-1"
                                  src={require("../../imgs/tech/mongo.png")}
                                  alt="Mongo"
                                />
                                <h6 className="">MongoDB</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent rounded-1"
                                  src={require("../../imgs/tech/nest.png")}
                                  alt="Mongo"
                                />
                                <h6 className="">NestJs</h6>
                              </div>

                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent rounded-1"
                                  src={require("../../imgs/tech/graphql.png")}
                                  alt="GraphQL
                              "
                                />
                                <h6 className="mt-auto">GraphQL</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent rounded-1"
                                  src={require("../../imgs/tech/socket.png")}
                                  alt="Socket"
                                />
                                <h6 className="">Socket IO</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent rounded-1"
                                  src={require("../../imgs/tech/docker.png")}
                                  alt="Docker"
                                />
                                <h6 className="mt-auto">Docker</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/nextjs.png")}
                                  alt="NextJS"
                                />
                                <h6 className="">Next.JS</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/redux.png")}
                                  alt="Redux"
                                />
                                <h6 className="">Redux</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/javascript.png")}
                                  alt="JavaScript"
                                />
                                <h6>JavaScript</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/typescript.png")}
                                  alt="TypeScript"
                                />
                                <h6 className="">TypeScript</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/html.png")}
                                  alt="html"
                                />
                                <h6 className="">HTML</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/css.png")}
                                  alt="css"
                                />
                                <h6 className="">CSS</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/sass.png")}
                                  alt="sass"
                                />
                                <h6 className="">Sass</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/bootstrap.png")}
                                  alt="bootstrap"
                                />
                                <h6 className="">BootStrap</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/jquery.png")}
                                  alt="jquery"
                                />
                                <h6 className="">JQuery</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/java.png")}
                                  alt="java"
                                />
                                <h6 className="">JAVA</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/plsql.png")}
                                  alt="plsql"
                                />
                                <h6 className="small">Oracle Pl/SQL</h6>
                              </div>
                              <div className="p-2 cursorGrab">
                                <img
                                  className="w-100 mb-2 bg-transparent"
                                  src={require("../../imgs/tech/mysql.png")}
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
          <PDFViewer
            pdfUrl={require("../../pdf/Ali Elsaadany(MERN STACK).pdf")}
          />
        </div>
      </div>
    </>
  );
}
