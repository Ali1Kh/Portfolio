import React from "react";
import "./projects.css";
import Projects from "../projects/Projects";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

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

export default function ProjectsPage() {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <main className="pb-5">
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
                placeholder="Search"
                aria-label="Search"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="recommended px-3 py-2 d-flex gap-2">
            <div className="recItem fs-7 rounded-4 py-1 px-3 borderGrey">
              JavaScript
            </div>
            <div className="recItem fs-7 rounded-4 py-1 px-3 borderGrey">
              React
            </div>
          </div>
        </div>
        <div className="navandtabs mb-2 p-2 ps-5">
          <Box sx={{ width: "100%" }}>
            <Tabs value={tab} onChange={handleTabChange}>
              <Tab label={"All"} />
              <Tab label={"Full Stack"} />
              <Tab label={"Frontend"} />
              <Tab label={"Backend"} />
            </Tabs>
          </Box>
        </div>
        <CustomTabPanel value={tab} index={0}>
          <Projects />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          Fullstack
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={2}>
          <Projects />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={3}>
          Backend
        </CustomTabPanel>
      </div>
    </main>
  );
}
