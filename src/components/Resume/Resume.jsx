import React, { useEffect } from "react";
import Timeline from "../Timeline/Timeline";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import PDFViewer from "../pdf/PDFViewer";

export default function Resume() {
  let tabs = ["all", "experience", "education", "courses", "cv"];
  const [tab, setTab] = React.useState(0);
  let [type, setType] = React.useState("all");
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
    setTab(newValue);
    setType(tabs[newValue]);
    if (newValue != 0) {
      queryParams.set("type", tabs[newValue]);
      window.history.pushState({}, "", `?type=${tabs[newValue]}`);
    } else {
      queryParams.delete("type");
      window.history.pushState({}, "", window.location.pathname);
    }
  };

  return (
    <>
      <div className=" mt-5 pt-5">
        <div className="container py-5 d-flex flex-column">
          <div className="title text-center animate__animated animate__zoomIn">
            <h1 style={{ fontSize: "50px" }}>Resume</h1>
          </div>
          <div className="navandtabs p-2 ps-5">
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={tab}
                onChange={(e, value) => handleTabChange(value)}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
              >
                {tabs.map((tab, index) => (
                  <Tab label={tab} />
                ))}
              </Tabs>
            </Box>
          </div>
          {tabs.map((tabItem, index) => (
            <>
              {index !== tabs.length - 1 && (
                <CustomTabPanel value={tab} index={index}>
                  <Timeline isLimited={false} type={type} />
                </CustomTabPanel>
              )}
            </>
          ))}
          <CustomTabPanel value={tab} index={tabs.length - 1}>
            <div
              className="rounded-3 overflow-auto container z-3 p-2"
              style={{ width: "100%", height: "1990px" }}
            >
              <div className="pdfView h-100 w-100">
                <PDFViewer pdfUrl={"/cv.pdf"} />
              </div>
            </div>
          </CustomTabPanel>
        </div>
      </div>
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
