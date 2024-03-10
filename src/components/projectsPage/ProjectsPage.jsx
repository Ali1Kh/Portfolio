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

export default function ProjectsPage() {
  const [tab, setTab] = React.useState(0);

  let [searchHidden, setSearchHidden] = React.useState(true);

  let { projects, getProjects } = useContext(projectsContext);

  const handleTabChange = (event, newValue) => {
    if (newValue == 0) {
      getProjects();
    } else if (newValue == 1) {
      getProjects({ type: "fullstack" });
    } else if (newValue == 2) {
      getProjects({ type: "frontend" });
    } else if (newValue == 3) {
      getProjects({ type: "backend" });
    } else if (newValue == 4) {
    } else {
      getProjects();
    }
    if (newValue != 4) {
      setSearchHidden(true);
    }
    setTab(newValue);
  };
  useEffect(() => {
    getProjects();
  }, []);

  const handleInputChanged = (e) => {
    handleTabChange(null, 4);
    if (e.target.value != "") {
      setSearchHidden(false);
      getProjects({ search: e.target.value });
    } else {
      setSearchHidden(true);
      handleTabChange(null, 0);
    }
  };

  return (
    <main className="pb-5 mt-5 pt-5">
      <div className="container py-4 d-flex flex-column">
        <div className="title mb-5 text-center">
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
            <div
              onClick={() => {
                $("#searchInput").val("JavaScript");
                handleInputChanged({ target: { value: "JavaScript" } });
              }}
              className="recItem fs-7 rounded-4 py-1 px-3 borderGrey"
            >
              JavaScript
            </div>
            <div
              onClick={() => {
                $("#searchInput").val("React");
                handleInputChanged({ target: { value: "React" } });
              }}
              className="recItem fs-7 rounded-4 py-1 px-3 borderGrey"
            >
              React
            </div>
            <div
              onClick={() => {
                $("#searchInput").val("Nodejs");
                handleInputChanged({ target: { value: "Nodejs" } });
              }}
              className="recItem fs-7 rounded-4 py-1 px-3 borderGrey"
            >
              Node.Js
            </div>
          </div>
        </div>
        <div className="navandtabs mb-2 p-2 ps-5">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={tab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab label={"All"} />
              <Tab label={"Full Stack"} />
              <Tab label={"Frontend"} />
              <Tab label={"Backend"} />
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
      </div>
    </main>
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
