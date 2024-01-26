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
export default function ProjectDetails() {
  const onInit = () => {};
  const { id } = useParams();
  let { data, isLoading } = useQuery("projectDetails", getProjectDetails, {
    cacheTime: 0,
  });
  function getProjectDetails() {
    try {
      return axios.get(`https://ali1kh.onrender.com/projects/${id}`);
    } catch (ex) {
      console.log(ex);
    }
  }
  let projectDetails = data?.data.results;
  return (
    <>
      <div className="container d-flex flex-column p-md-5">
        {projectDetails ? (
          <>
            <header className="banner p-5 borderBottomGrey mb-2">
              <div className="projHeader pb-3 mb-3 d-flex flex-column align-items-center borderBottomGrey">
                <div className="title text-center">
                  <h1 className="fs-1">{projectDetails.name}</h1>
                </div>
                <div className="projCategory">
                  <span>E-Commerce</span>
                </div>
              </div>
              <div className="projInfo  d-flex flex-column align-items-md-center">
                <div className="links d-flex flex-column flex-md-row justify-content-md-center  align-items-md-center align-items-start gap-md-3">
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
                </div>

                <div className="techs row gy-3">
                  {projectDetails.technologies.map((tech) => (
                   <div className="col-md-4 w-auto">
                     <div className="techItem d-flex gap-2 align-items-center borderGrey rounded-5 px-2 py-1">
                      <div className="techImg" style={{ width: "25px" }}>
                        {
                          <img
                            className="w-100 mb-0"
                            src={require(`../../imgs/tech/${tech.slug}.png`)}
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
