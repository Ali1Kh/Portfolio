import React, { useEffect } from "react";
import "./ResumeTimeLine.css";
import { useNavigate } from "react-router-dom";
import Timeline from "../Timeline/Timeline";
export default function ResumeTimeLine() {
  let [isLimited, setIsLimited] = React.useState(true);
  let navigate = useNavigate();
  return (
    <div className="py-2 my-5 mt-3">
      <div className="container">
        <div className="sectionTitle text-center primaryText mb-4">
          <h2>My Journey</h2>
        </div>
        <Timeline isLimited={isLimited} type={"all"} />
        <div className="sectionFooter mt-5 text-center">
          <button
            onClick={() =>  navigate("/resume") }
            className="btn text-white borderGrey"
          >
            Show {isLimited ? "More" : "Less"}
          </button>
        </div>
      </div>
    </div>
  );
}
