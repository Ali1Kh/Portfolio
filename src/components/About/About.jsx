import React from "react";
import "./about.css";

export default function About() {
  let headTitles = [
    {
      name: "Full Stack Web Developer",
      image: require("../../imgs/icons/web.png"),
    },
    {
      name: "UI/UX Designer",
      image: require("../../imgs/icons/uiux.png"),
    },
    {
      name: "Desktop Application Developer",
      image: require("../../imgs/icons/desktop.png"),
    },
    {
      name: "Embedded Systems Developer",
      image: require("../../imgs/icons/embedded.png"),
    },
  ];

  let infoItems = [
    {
      title: "Client Satisfied",
      percent: 95,
    },
    {
      title: "Completed Projects",
      num: 55,
    },
    {
      title: "Year Of Experience",
      num: new Date().getFullYear() - 2022,
    },
  ];

  return (
    <div className="pb-5 py-2 my-5 mt-3">
      <div className="container">
        {/* <div className="sectionTitle text-center primaryText">
          <h2>About Me</h2>
        </div> */}
        <div className="row gy-4  flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <div className="headTitles">
              <div className="headTitlesInner d-flex flex-column gap-4">
                {headTitles.map((title, idx) => (
                  <div
                    className={`headTitleInner d-flex align-items-center gap-4 ${
                      idx == headTitles.length - 1 ? "last" : ""
                    }`}
                  >
                    <div className="titleIcon">
                      <img width={41} src={title.image} />
                    </div>
                    <span
                      className="fw-semibold"
                      style={{
                        fontSize: "17px",
                      }}
                    >
                      {title.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="sectionTitle text-start primaryText">
              <h2 className="fw-semibold">About Me</h2>
            </div>
            <div className="summary mb-3" style={{ maxWidth: "700px" }}>
              I'm a passionate Full Stack Web Developer specializing in building seamless and responsive web applications using the MERN stack. I have strong expertise in frontend technologies such as HTML, CSS, JavaScript, and React.js, as well as backend development with Node.js, Express.js, and MongoDB. In addition to web development, I also have experience in UI/UX design, desktop application development, and embedded systems.
              <b> Available for remote and freelance work.</b>
            </div>
            <div className="info d-flex justify-content-evenly">
              {infoItems.map((info, idx) => (
                <div className="infoItem d-flex flex-column align-items-center">
                  <div className="infoNum text-center d-flex justify-content-center align-items-center gap-2">
                    <span className="fw-bold fs-3">{info.num || info.percent}</span>{" "}
                    <i className={`fa fa-${info.num ? "plus" : "percent"} primaryText fs-4`}></i>
                  </div>
                  <div className="infoTitle text-center">
                    <span className="fw-semibold opacity-75">
                      {info.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
