import React, { useContext, useEffect } from "react";
import "./projects.css";
import Projects from "../projects/Projects";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { projectsContext } from "../context/projectsContext";
import $ from "jquery";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {
  let tabs = ["all", "fullstack", "frontend", "backend", "ui-ux"];

  let searchKeyWords = ["JavaScript", "React", "Nodejs", "Figma"];
  const [tab, setTab] = React.useState(0);

  let [searchHidden, setSearchHidden] = React.useState(true);

  let { projects, getProjects } = useContext(projectsContext);
  let navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const tabParams = queryParams.get("type");

  useEffect(() => {
    if (tabParams) {
      if (tabs.indexOf(tabParams) >= 0) {
        handleTabChange(tabs.indexOf(tabParams));
      } else {
        handleTabChange(0);
        queryParams.delete("type");
        window.history.pushState({}, "", window.location.pathname);
      }
    } else {
      handleTabChange(0);
    }
  }, []);

  const handleTabChange = (newValue) => {
    if (newValue == 0) {
      getProjects();
    } else if (newValue == 1) {
      getProjects({ type: "fullstack" });
    } else if (newValue == 2) {
      getProjects({ type: "frontend" });
    } else if (newValue == 3) {
      getProjects({ type: "backend" });
    } else if (newValue == 4) {
      getProjects({ type: "ui-ux" });
    } else if (newValue == 5) {
    } else {
      getProjects();
    }
    if (newValue != 5) {
      setSearchHidden(true);
    }
    setTab(newValue);
    if (newValue != 5) {
      queryParams.set("type", tabs[newValue]);
      window.history.pushState({}, "", `?type=${tabs[newValue]}`);
    } else {
      queryParams.delete("type");
      window.history.pushState({}, "", window.location.pathname);
    }
  };

  const handleInputChanged = (e) => {
    handleTabChange(5);
    if (e.target.value != "") {
      setSearchHidden(false);
      getProjects({ search: e.target.value });
    } else {
      setSearchHidden(true);
      handleTabChange(0);
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="Ali K. Elsaadany Projects" />
        <link rel="canonical" href="https://ali1kh.com/projects" />
        <meta
          name="keywords"
          content={`projects,${projects
            ?.map(
              (proj) =>
                proj.technologies.map((skill) => skill.name).join(",") +
                "," +
                proj.name +
                "," +
                proj.slug +
                "," +
                proj.category +
                "," +
                proj.descreption +
                "," +
                proj.shortDescreption
            )
            .join(",")}`}
        />
      </Helmet>
      <main className="pb-5 mt-5 pt-5">
        <div className="container py-4 d-flex flex-column">
          <div className="title mb-5 text-center animate__animated animate__zoomIn">
            <h1 style={{ fontSize: "55px" }}>Projects</h1>
          </div>
          <div className="search w-75 mb-5 align-self-center">
            <div className="searchBar">
              <div className="input-group flex-nowrap mb-2">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="addon-wrapping"
                  onInput={handleInputChanged}
                />
              </div>
            </div>
            <div className="recommended px-3 py-2 d-flex gap-2">
              {searchKeyWords.map((word) => (
                <div
                  onClick={() => {
                    $("#searchInput").val(word);
                    handleInputChanged({ target: { value: word } });
                  }}
                  className="recItem fs-7 rounded-4 py-1 px-3 borderGrey"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
          <div className="navandtabs mb-2 p-2 ps-5">
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={tab}
                onChange={(e, value) => handleTabChange(value)}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
              >
                <Tab label={"All"} />
                <Tab label={"Full Stack"} />
                <Tab label={"Frontend"} />
                <Tab label={"Backend"} />
                <Tab label={"UI/UX"} />
                <Tab label={"Search"} hidden={searchHidden} />
              </Tabs>
            </Box>
          </div>
          <CustomTabPanel value={tab} index={0}>
            <Projects projects={projects} />
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={1}>
            <Projects projects={projects} />
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={2}>
            <Projects projects={projects} />
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={3}>
            <Projects projects={projects} />
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={4}>
            <Projects projects={projects} />
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={5}>
            <Projects projects={projects} />
          </CustomTabPanel>
        </div>
      </main>
    </>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
