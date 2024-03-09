import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./overview.css";
import Projects from "../projects/Projects";
import { useNavigate } from "react-router-dom";
import Contact from "../contact/Contact";
import axios from "axios";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import PDFViewer from "../pdf/PDFViewer";
import $ from "jquery";
import { projectsContext } from "../context/projectsContext";

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

  let [hours, setHours] = useState(1000);
  const getHours = async () => {
    try {
      const { data } = await axios.get(
        "https://ali1kh.onrender.com/wakatime/getHours"
      );
      setHours(data.data.text.split("hrs")[0]);
    } catch (error) {
      console.log("Error fetching", error);
    }
  };

  let [projects, setProjects] = useState(50);
  const getProjects = async () => {
    try {
      const { data } = await axios.get(
        "https://api.github.com/user/repos?per_page=50&visibility=all",
        {
          headers: {
            Authorization: process.env.REACT_APP_git_token,
            Accept: "application/vnd.github.v3+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );
      setProjects(data.length);
    } catch (error) {
      console.log("Error fetching projects", error.response);
    }
  };

  useEffect(() => {
    getHours();
    getProjects();
    getLatestProjects({ limit: 3 });
  }, []);



  function viewCv(e) {
    e.stopPropagation();
    $(".pdfContainer").css("display", "block");
    $("body").css("overflow", "hidden");
  }

  const navigate = useNavigate();
  let [counterOn, setCounterOn] = useState(false);

  let { projects: latestProjects, getProjects: getLatestProjects } =
    useContext(projectsContext);

  return (
    <>
      <section className="about mb-md-5 py-md-5 mt-3">
        <div className="container py-md-5">
          <div className="aboutInner  d-flex  gap-5 justify-content-center  align-items-center">
            <div className="overview mt-5">
              <div className="row">
                <div className="col-md-11">
                  <div className="title primaryText">
                    <h1>Ali Elsaadany,</h1>
                  </div>
                  <div className="summary mb-3" style={{ maxWidth: "700px" }}>
                    I'm Full Stack Web Developer building seamless web
                    experiences with proficiency in the MERN stack. Proficient
                    in front-end technologies like HTML, CSS, JavaScript,
                    React.js, and back-end development with Node.js, Express.js
                    and MongoDB. Passionate about creating user friendly and
                    visually appealing and functional web applications.
                    <b>Available for remote and freelance work.</b>
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

                <div className="col-md-1 ">
                  <div className="tech mt-5">
                    {/* <h5>Technologies</h5> */}
                    <div
                      className="slidesContainer mx-auto text-center"
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
            </div>
          </div>
        </div>
      </section>
      <section className="projects py-2 my-5 mt-3">
        <div className="container ">
          <div className="sectionTitle text-center primaryText my-5 pt-5">
            <h2>Latest Projects</h2>
          </div>
          <div className="projectsCards">
            <Projects projects={latestProjects} />
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
      <section className="info secBg my-5 mt-3">
        <div className="container py-5">
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
            }}
            onExit={() => {
              setCounterOn(false);
            }}
          >
            <div className="info">
              <div className="row justify-content-center gy-4">
                <div className="col-md-3">
                  <div className="infoItem d-flex align-items-center flex-column">
                    <div
                      className="infoIcon mb-3 rounded-circle  text-white d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "var(--mainColor)",
                      }}
                    >
                      <i className="fa fa-diagram-project fs-4"></i>
                    </div>
                    <h2>{counterOn && <CountUp start={0} end={projects} />}</h2>
                    <small>Projects Completed</small>
                  </div>
                </div>
                <div className="col-md-3 d-none">
                  <div className="infoItem d-flex align-items-center flex-column">
                    <div
                      className="infoIcon  mb-3 rounded-circle  text-white d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "var(--mainColor)",
                      }}
                    >
                      <i className="fa fa-code fs-4"></i>
                    </div>
                    <h2> {counterOn && <CountUp start={0} end={350000} />}</h2>
                    <small>Lines Of Codes</small>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="infoItem d-flex align-items-center flex-column">
                    <div
                      className="infoIcon mb-3 rounded-circle  text-white d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "var(--mainColor)",
                      }}
                    >
                      <i className="fa fa-hourglass-half fs-4"></i>
                    </div>
                    <h2>{counterOn && <CountUp start={0} end={hours} />}</h2>
                    <small>Coding Hours</small>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="infoItem d-flex align-items-center flex-column">
                    <div
                      className="infoIcon mb-3 rounded-circle  text-white d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "var(--mainColor)",
                      }}
                    >
                      <i className="fa fa-award fs-4"></i>
                    </div>
                    <h2>{counterOn && <CountUp start={0} end={22} />}</h2>
                    <small>Awards</small>
                  </div>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
      <section className="services pb-5 py-2 my-5 mt-3">
        <div className="container ">
          <div className="sectionTitle text-center primaryText mb-5 my-2 pt-3">
            <h2>Services</h2>
          </div>
          <div className="row gy-3">
            <div className="col-md-4">
              <div className="serviceItem h-100 d-flex align-items-center flex-column secBg shadow p-5 px-4 rounded-3">
                <div
                  className="serviceIcon mb-3 border rounded-circle text-white d-flex justify-content-center align-items-center"
                  style={{
                    width: "55px",
                    height: "55px",
                  }}
                >
                  <i className="fa fa-laptop-code fs-4"></i>
                </div>
                <h5 className="serviceTitle">Web Development</h5>
                <p className=" serviceInfo fst-normal fw-light text-center px-2">
                  From front-end design to back-end architecture,
                  {/* <br />*/}I build it all. Custom Web Applications Made to
                  Perform.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serviceItem h-100 d-flex align-items-center flex-column secBg shadow p-5 px-3 rounded-3">
                <div
                  className="serviceIcon mb-3 border rounded-circle text-white d-flex justify-content-center align-items-center"
                  style={{
                    width: "55px",
                    height: "55px",
                  }}
                >
                  <i className="fa fa-display fs-4"></i>
                </div>
                <h5 className="serviceTitle">Responsive Web Design</h5>
                <p className="serviceInfo fst-normal fw-light text-center px-1">
                  Build websites that seamlessly adjust to any screen size,
                  ensuring a flawless user experience across desktops, tablets,
                  and mobiles.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serviceItem h-100 d-flex align-items-center flex-column secBg shadow p-5 px-3 rounded-3">
                <div
                  className="serviceIcon mb-3 border rounded-circle text-white d-flex justify-content-center align-items-center"
                  style={{
                    width: "55px",
                    height: "55px",
                  }}
                >
                  <i className="fa fa-database fs-4"></i>
                </div>
                <h5 className="serviceTitle">Database Design and Management</h5>
                <p className="serviceInfo fst-normal fw-light text-center px-1">
                  Design and manage databases that organize your information
                  beautifully, making it easy to access, analyze, and unlock
                  hidden insights.
                </p>
              </div>
            </div>
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
                    title="Mica Egypt"
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
      <footer className="py-05 secBg overflow-hidden">
        {/* <ParticlesComponent /> */}
      </footer>

      <div
        className="pdfContainer rounded-3 pt-5 overflow-auto container position-fixed start-50 z-3 translate-middle-x p-2"
        style={{ width: "100%", height: "95vh", top: "25px" }}
      >
        <i
          style={{ backgroundColor: "#323639" }}
          className="fa fa-xmark rounded-3 me-3 position-absolute top-0 end-0 mb-5 p-2 fs-5 z-3 cursorPointer"
        ></i>
        <div className="pdfView h-100 w-100">
          <PDFViewer pdfUrl={require("../../pdf/Ali-Elsaadany.CV.pdf")} />
        </div>
      </div>
    </>
  );
}
