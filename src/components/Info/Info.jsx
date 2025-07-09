import React, { useContext, useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import axios from "axios";
import { projectsContext } from "../context/projectsContext";

export default function Info() {
  let [counterOn, setCounterOn] = useState(false);

  let [hours, setHours] = useState(1000);

  let [projectsCount, setProjectsCount] = useState(55);
  const getProjectsCount = async () => {
    try {
      const { data } = await axios.get(
        "https://api.github.com/user/repos?per_page=50&visibility=all",
        {
          headers: {
            Authorization: process.env.REACT_APP_git_token,
            Accept: "application/vnd.github.v3+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );
      setProjectsCount(data.length);
    } catch (error) {
      console.log("Error fetching projects", error.response);
    }
  };

  const getHours = async () => {
    try {
      const { data } = await axios.get(
        "https://ali1kh.onrender.com/wakatime/getHours"
      );
      setHours(data.data.decimal);
    } catch (error) {
      console.log("Error fetching", error);
    }
  };

  useEffect(() => {
    getHours();
    getProjectsCount();
  }, []);

  let infoItmes = [
    {
      title: "Projects Completed",
      num: projectsCount,
      icon: "diagram-project",
    },
    {
      title: "Coding Hours",
      num: hours,
      icon: "hourglass-half",
    },
    {
      title: "Awards",
      num: 25,
      icon: "award",
    },
  ];

  return (
    <section className="info secBg my-5 mt-3">
      <div className="container py-5">
        <ScrollTrigger
          onEnter={() => {
            setCounterOn(true);
          }}
          onExit={() => {
            setCounterOn(false);
          }}
        >
          <div className="info">
            <div className="row justify-content-center gy-4">
              {infoItmes.map((item) => (
                <div className="col-md-3">
                  <div className="infoItem text-center d-flex justify-content-center align-items-center flex-column cursorPointer">
                    <div
                      className="infoIcon mb-3 rounded-circle  text-white d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "var(--mainColor)",
                      }}
                    >
                      <i className="fa fa-diagram-project fs-4"></i>
                    </div>
                    <h2 className="w-100 text-center">
                      +{counterOn && <CountUp start={0} end={item.num} />}
                    </h2>
                    <small className="w-100 text-center">{item.title}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
}
