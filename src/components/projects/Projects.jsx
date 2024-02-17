import React, { useContext, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../projectsPage/projects.css";
import $ from "jquery";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);
  return <div ref={tilt} {...rest} />;
}
const options = {
  speed: 9000,
  max: 15, // max tilt rotation (degrees)
  perspective: 3000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
};
export default function Projects({ projects }) {
  function convertDate(date) {
    let dateObj = new Date(date);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    let monthDiff = (currentYear - year) * 12 + (currentMonth - month);
    if (monthDiff < 0) {
      monthDiff = 0;
    }
    const years = Math.floor(monthDiff / 12);
    const months = monthDiff % 12;
    let output = "";
    if (years > 0) {
      output += `${years} year${years > 1 ? "s" : ""}`;
    }
    if (months > 0) {
      if (years > 0) {
        output += " and ";
      }
      output += `${months} month${months > 1 ? "s" : ""}`;
    }
    output += " ago";
    return output;
  }
  const navigate = useNavigate();

  let location = useLocation();

  useEffect(() => {
    if (location.pathname == "/projects") {
      $(".nav-link.active").removeClass("active");
      $("#projectsNavItem").addClass("active");
    }
  });

  function applinkClicked(e) {
    e.stopPropagation();
  }

  return (
    <div className="projects">
      <div className="row gy-3">
        {projects
          ? projects.map((project) => (
              <div key={project._id} className="col-xl-4 col-md-6">
                <Tilt className="h-100" options={options}>
                  <div
                    onClick={() => {
                      navigate(`/projects/projectDetails/${project._id}`);
                    }}
                    className="cardItem h-100 d-flex flex-column borderGrey rounded-4 p-4"
                  >
                    <div
                      className="logo rounded-3 overflow-hidden mb-3 h-100"
                      style={{ width: "70px" }}
                    >
                      <img
                        className="w-100 img-fluid"
                        src={project.logo?.secure_url}
                        alt=""
                      />
                    </div>
                    <div className="cardTitle d-flex align-items-center justify-content-between borderBottomGrey mb-3 pb-3">
                      <div className="projName">
                        <h3>{project.name}</h3>
                      </div>
                      <div
                        onClick={(e) => applinkClicked(e)}
                        className="projLink"
                      >
                        <Link to={project.link} target="_blank">
                          <i className="fa fa-link text-white borderGrey rounded-4 fs-7 p-2"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="cardInfo h-100 d-flex flex-column  borderBottomGrey mb-3 pb-3">
                      <div className="projInfo d-flex justify-content-between align-items-center mb-3">
                        <div className="projCategory">
                          <h5 className="fst-italic">{project.category}</h5>
                        </div>
                        <div className="createdFrom text-end">
                          <span className="fs-7 borderGrey rounded-4 px-2 py-1">
                            {convertDate(project.date)}
                          </span>
                        </div>
                      </div>
                      <div className="projDescreption text-grey fs-7 mb-3 my-auto">
                        {project.shortDescreption}
                      </div>
                      <div className="projDate mt-auto">
                        <span
                          style={{ fontSize: "12px" }}
                          className="borderGrey rounded-4 px-2 py-1"
                        >
                          {project.date}
                        </span>
                      </div>
                    </div>
                    <div className="cardFooter ">
                      <div className="technologies d-flex gap-2">
                        {project.technologies.map((tech, idx) => (
                          <div
                            className="techItem d-flex justify-content-center align-items-center  borderGrey rounded-3 p-2"
                            style={{ width: "40px" }}
                          >
                            <img
                              className="w-100"
                              src={require(`../../imgs/tech/${tech.slug}.png`)}
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
