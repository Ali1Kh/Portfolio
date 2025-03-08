import React, { useContext, useEffect } from "react";
import { projectsContext } from "../context/projectsContext";
import { useNavigate } from "react-router-dom";
import Projects from "../projects/Projects";

export default function LatestProjects() {
  let { projects: latestProjects, getProjects: getLatestProjects } =
    useContext(projectsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getLatestProjects({ limit: 3 });
  }, []);

  return (
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
  );
}
