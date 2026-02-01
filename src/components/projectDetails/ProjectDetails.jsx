import React, { useEffect, useState } from "react";
import "./projectDetails.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import $ from "jquery";
import reactIcon from "../../imgs/tech/react.png";
import javascriptIcon from "../../imgs/tech/javascript.png";
import nextjsIcon from "../../imgs/tech/nextjs.png";
import reduxIcon from "../../imgs/tech/redux.png";
import jqueryIcon from "../../imgs/tech/jquery.png";
import bootstrapIcon from "../../imgs/tech/bootstrap.png";
import htmlIcon from "../../imgs/tech/html.png";
import cssIcon from "../../imgs/tech/css.png";
import sassIcon from "../../imgs/tech/sass.png";
import nodejsIcon from "../../imgs/tech/nodejs.png";
import typescriptIcon from "../../imgs/tech/typescript.png";
import expressIcon from "../../imgs/tech/express.png";
import mongoIcon from "../../imgs/tech/mongo.png";
import mysqlIcon from "../../imgs/tech/mysql.png";
import nestIcon from "../../imgs/tech/nest.png";
import socketIcon from "../../imgs/tech/socket.png";
import graphqlIcon from "../../imgs/tech/graphql.png";
import dockerIcon from "../../imgs/tech/docker.png";
import javaIcon from "../../imgs/tech/java.png";
import plsqlIcon from "../../imgs/tech/plsql.png";

export default function ProjectDetails() {
  const techIcons = {
    react: reactIcon,
    javascript: javascriptIcon,
    nextjs: nextjsIcon,
    redux: reduxIcon,
    jquery: jqueryIcon,
    bootstrap: bootstrapIcon,
    html: htmlIcon,
    css: cssIcon,
    sass: sassIcon,
    nodejs: nodejsIcon,
    typescript: typescriptIcon,
    express: expressIcon,
    mongo: mongoIcon,
    mysql: mysqlIcon,
    nest: nestIcon,
    socket: socketIcon,
    graphql: graphqlIcon,
    docker: dockerIcon,
    java: javaIcon,
    plsql: plsqlIcon,
  };

  const onInit = () => {};
  const { slug } = useParams();
  let { data, isLoading } = useQuery("projectDetails", getProjectDetails, {
    cacheTime: 0,
  });
  function getProjectDetails() {
    try {
      return axios.get(`https://api.ali1kh.com/projects/${slug}`);
    } catch (ex) {
      console.log(ex);
    }
  }
  let projectDetails = data?.data.results;

  function handleResize() {
    let imgType = projectDetails?.screenType;
    const imgContainers = document.querySelectorAll(".lg-react-element > *");
    if (window.innerWidth < 992) {
      if (imgType === "mobile") {
        imgContainers.forEach((imgContainer) => {
          imgContainer.style.setProperty("--imgCols", "2");
        });
      } else {
        imgContainers.forEach((imgContainer) => {
          imgContainer.style.setProperty("--imgCols", "1");
        });
      }
    } else {
      if (imgType === "mobile") {
        imgContainers.forEach((imgContainer) => {
          imgContainer.style.setProperty("--imgCols", "5");
        });
      } else if (imgType === "showcase") {
        imgContainers.forEach((imgContainer) => {
          imgContainer.style.setProperty("--imgCols", "1");
        });
      } else {
        imgContainers.forEach((imgContainer) => {
          imgContainer.style.setProperty("--imgCols", "2");
        });
      }
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", () => handleResize());
  }, [projectDetails]);

  return (
    <>
      <Helmet>
        <title>{projectDetails?.name}</title>
        <meta
          name="description"
          content={`Ali K. Elsaadany Project ${
            projectDetails?.name + ":" + projectDetails?.descreption
          }`}
        />
        <link
          rel="canonical"
          href={`https://ali1kh.com/projects/${projectDetails?.slug}`}
        />
        <meta
          name="keywords"
          content={`projects,${
            projectDetails?.technologies.map((skill) => skill.name).join(",") +
            "," +
            projectDetails?.name +
            "," +
            projectDetails?.slug +
            "," +
            projectDetails?.category +
            "," +
            projectDetails?.descreption +
            "," +
            projectDetails?.shortDescreption
          }`}
        />
      </Helmet>
      <div className="container d-flex flex-column p-md-5  mt-5 pt-5">
        {projectDetails ? (
          <>
            <header className="banner p-5 borderBottomGrey mb-2">
              <div className="projHeader pb-3 mb-3 d-flex flex-column align-items-center borderBottomGrey">
                <div className="title text-center">
                  <h1 className="fs-1">{projectDetails.name}</h1>
                </div>
                <div className="projCategory">
                  <span>{projectDetails.category}</span>
                </div>
              </div>
              <div className="projInfo  d-flex flex-column align-items-md-center">
                <div className="links d-flex flex-column flex-md-row justify-content-md-center  align-items-md-center align-items-start gap-md-3">
                  {projectDetails.link && (
                    <div className="demo text-white mb-3 borderGrey rounded-4 fs-7 p-2">
                      <i className="fa fa-link "></i>{" "}
                      <a
                        className="text-decoration-none text-white"
                        href={projectDetails.link}
                        target="blank"
                      >
                        Demo
                      </a>
                    </div>
                  )}
                  {projectDetails.repo && (
                    <div className="demo text-white mb-3 borderGrey rounded-4 fs-7 p-2">
                      <i className="fa-regular fa-file-code me-2"></i>
                      <a
                        className="text-decoration-none text-white"
                        href={projectDetails.repo}
                        target="blank"
                      >
                        Source Code
                      </a>
                    </div>
                  )}
                </div>

                <div className="techs row gy-3">
                  {projectDetails.technologies.map((tech) => (
                    <div className="col-md-4 w-auto">
                      <div className="techItem d-flex gap-2 align-items-center borderGrey rounded-5 px-2 py-1">
                        <div className="techImg" style={{ width: "25px" }}>
                          {
                            <img
                              className="w-100 mb-0"
                              src={techIcons[tech.slug]}
                              alt=""
                            />
                          }
                        </div>
                        <span className="mb-0 fs-7">{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </header>
            <div className="shortDescription borderBottomGrey mb-3 py-3">
              <p className="fst-italic">{projectDetails.descreption}</p>
            </div>
            <div className="projScreens">
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
              >
                {projectDetails.images.map((image) => (
                  <a className="imageItem" href={image.secure_url}>
                    <img
                      className="w-100 rounded-3 h-100"
                      alt={image.imageTitle.split(".")[0]}
                      src={image.secure_url}
                    />
                  </a>
                ))}
              </LightGallery>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
