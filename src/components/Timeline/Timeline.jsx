import React, { useEffect } from "react";

export default function Timeline({ isLimited, type }) {
  const timelineItems = [
    {
      startYear: "2021",
      endYear: "2024",
      title: "Diploma in Computer Programming",
      logo: require("../../imgs/certificatedFrom/mica.jpg"),
      company: "Misr International Computer & Ai Academy",
      description:
        "Completed a three year diploma in Computer Programming during high school, acquiring practical experience in Java, database management, and Oracle systems.",
      progress: 100,
      completed: true,
      type: "education",
    },
    {
      startYear: "2023",
      endYear: "2024",
      startMonth: "May",
      endMonth: "April",
      title: "Full Stack Development - Route Academy",
      logo: require("../../imgs/certificatedFrom/route.jpg"),
      company: "Route Academy",
      description:
        "Completed a one year course covering full stack web development, from basics to advanced applications.",
      progress: 100,
      completed: true,
      type: "courses",
    },
    {
      startYear: "2024",
      endYear: "2028",
      title: "Bachelor's Degree in Information Technology",
      logo: require("../../imgs/companies/nctu.png"),
      company: "New Cairo Technological University",
      description:
        "Studying Information Technology with a focus on practical skills and real world applications. Gaining experience in various IT fields.",
      // progress: Math.round(
      //   ((new Date().getFullYear() - 2024) / (2028 - 2024)) * 100
      progress: Math.round(
        100 -
          ((new Date("2028-06-01") - new Date()) /
            (1000 * 60 * 60 * 24) /
            ((new Date("2028-06-01") - new Date("2024-10-01")) /
              (1000 * 60 * 60 * 24))) *
            100
      ),
      completed:
        Math.round(
          100 -
            ((new Date("2028-06-01") - new Date()) /
              (1000 * 60 * 60 * 24) /
              ((new Date("2028-06-01") - new Date("2024-10-01")) /
                (1000 * 60 * 60 * 24))) *
              100
        ) >= 100,
      type: "education",
    },
    {
      startYear: "2024",
      endYear: "2025",
      startMonth: "January",
      endMonth: "July",
      title: "Full Stack Web Developer (Remote)",
      logo: require("../../imgs/companies/mc.jpg"),
      company: "MediCapital Group",
      description:
        "Working remotely on multiple projects, handling full stack development from frontend to backend using modern technologies like React, Node.js, and MongoDB..",
      progress: 100,
      completed: true,
      type: "experience",
    },
    {
      startYear: "2025",
      endYear: "2025",
      startMonth: "June",
      endMonth: "July",
      title: "Web Development using React.js Internship",
      logo: require("../../imgs/companies/iti.png"),
      company: "ITI - Information Technology Institute",
      description:
        "Summer training program focused on building modern web applications using React.js. Gained experience with components, state management, and API integration.",
      progress: 100,
      completed: true,
      type: "experience",
    },
    {
      startYear: "2025",
      endYear: "2025",
      startMonth: "July",
      endMonth: "August",
      title: "UI/UX Design Internship",
      logo: require("../../imgs/companies/nti.png"),
      company: "NTI – National Telecommunication Institute",
      description:
        "UI/UX design internship covering the full design process from user research to wireframing and prototyping. Worked with tools like Figma to create user interfaces.",
      progress: 100,
      completed: true,
      type: "experience",
    },
    {
      startYear: "2025",
      endYear: "2025",
      startMonth: "August",
      endMonth: "October",
      title: "Frontend & UI/UX Internship",
      logo: require("../../imgs/companies/zagsystem.png"),
      company: "ZagSystems",
      description:
        "Frontend and UI/UX internship covering frontend development and user interface design. Worked with tools like React.js and Figma to create user interfaces.",
      type: "experience",
      progress: Math.round(
        100 -
          ((new Date("2025-11-01") - new Date()) /
            (1000 * 60 * 60 * 24) /
            ((new Date("2025-11-01") - new Date("2025-08-06")) /
              (1000 * 60 * 60 * 24))) *
            100
      ),
      completed:
        Math.round(
          100 -
            ((new Date("2025-11-01") - new Date()) /
              (1000 * 60 * 60 * 24) /
              ((new Date("2025-11-01") - new Date("2025-08-06")) /
                (1000 * 60 * 60 * 24))) *
              100
        ) >= 100,
    },
  ];
  timelineItems.reverse();
  let limit = 4;
  let [timelineItemsState, setTimelineItemsState] =
    React.useState(timelineItems);

  useEffect(() => {
    if (type != "all") {
      setTimelineItemsState(timelineItems.filter((item) => item.type == type));
    } else {
      setTimelineItemsState(timelineItems);
    }
  }, [type]);

  return (
    <div>
      {" "}
      <div className="timeline d-flex flex-column gap-4  overflow-hidden">
        {timelineItemsState
          .slice(0, isLimited ? limit : timelineItemsState.length)
          .map((item, index) => (
            <div
              className={`timeline-item d-flex gap-4 ${
                isLimited && index == limit - 1 && "lastLimitedItem"
              }`}
            >
              <div className="progressIcon mt-1">
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    border: "1px solid white",
                  }}
                  className="IconItem rounded-circle d-flex justify-content-center align-items-center"
                >
                  {item.completed ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-circle-check h-4 w-4 text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  ) : (
                    <div
                      style={{
                        width: "7px",
                        height: "7px",
                        border: "1px solid white",
                        backgroundColor: "white",
                        borderRadius: "50%",
                      }}
                      className="progressDot"
                    ></div>
                  )}

                  {/* <i
                    className={`fa-regular fa-circle-${
                      item.completed ? "check" : "dot"
                    }`}
                  ></i> */}
                </div>
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between mb-1">
                  <div>
                    <h5>{item.title}</h5>
                    <div className="companyDetails d-flex gap-2 align-items-center mt-3">
                      <img
                        style={{
                          width: "55px",
                          height: "55px",
                          objectFit: "contain",
                        }}
                        className="rounded-2"
                        src={item.logo}
                        alt=""
                      />
                      <h6>{item.company}</h6>
                    </div>
                  </div>
                  <span className="opacity-75">
                    {item.startMonth ? item.startMonth + " " : ""}{" "}
                    {item.startYear} -{" "}
                    {item.endYear < new Date().getFullYear() || item.completed
                      ? (item.endMonth ? item.endMonth + " " : "") +
                        item.endYear
                      : "Present"}
                  </span>
                </div>
                <span className="opacity-50">{item.description}</span>
                <div className="d-flex small opacity-50 justify-content-between mt-3 mb-1">
                  <span>
                    {item.endYear < new Date().getFullYear()
                      ? "Completed"
                      : "Progress"}
                  </span>
                  <span> {item.progress}%</span>
                </div>
                <div
                  className="progress secBg"
                  style={{
                    height: "8px",
                    width: "100%",
                    borderRadius: "3px",
                  }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: item.progress + "%",
                      transition: "width 0.5s ease-in-out",
                      backgroundColor: "var(--mainColor)",
                    }}
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
