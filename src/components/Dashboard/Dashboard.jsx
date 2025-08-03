import React, { useEffect } from "react";
import "./dashboard.css";
import $ from "jquery";
import { jwtDecode } from "jwt-decode";

export default function Dashboard() {
  let [isSuperAdmin, setIsSuperAdmin] = React.useState(false);
  useEffect(() => {
    let token = localStorage.getItem("adminPanel");
    let { isSuperAdmin } = jwtDecode(token);
    setIsSuperAdmin(isSuperAdmin);
  }, []);

  let sections = [
    // { title: "Overview", key: "overview", icon: "home" },
    {
      title: "Projects",
      key: "projects",
      nested: [
        { title: "All Projects", key: "allCompanies", icon: "list" },
        { title: "Add Project", key: "addCompany", icon: "plus" },
        {
          title: "Update Project",
          key: "pendingCompanies",
          icon: "edit",
        },
      ],
      icon: "building",
    },
    {
      title: "Skills",
      key: "skills",
      nested: [
        { title: "All Skills", key: "allSkills", icon: "list" },
        { title: "Add Skill", key: "addSkill", icon: "plus" },
        {
          title: "Update Skill",
          key: "updateSkill",
          icon: "edit",
        },
      ],
      icon: "tools",
    },
    {
      title: "Certificates",
      key: "certificates",
      nested: [
        { title: "All Certificates", key: "allCertificates", icon: "list" },
        { title: "Add Certificate", key: "addCertificate", icon: "plus" },
        {
          title: "Update Certificate",
          key: "updateCertificate",
          icon: "edit",
        },
      ],
      icon: "file-alt",
    },
    {
      title: "Resume",
      key: "resume",
      nested: [
        { title: "View Resume", key: "viewResume", icon: "eye" },
        { title: "Edit Resume", key: "editResume", icon: "edit" },
      ],
      icon: "file",
    },
    { title: "Visitors", key: "members", icon: "users" },
  ];

  let [selectedSection, setSelectedSection] = React.useState(
    sections[0].nested[0]
  );

  const handleSelectSection = (section) => {
    setSelectedSection(section);
    let params = new URLSearchParams(window.location.search);
    params.set("selected", section.key);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  const showNestedSection = (section) => {
    let id = section.key + "Accordian";
    $(`#${id}`).toggle("show");
    $(`#${id}`).attr(
      "data-show",
      $(`#${id}`).attr("data-show") == "true" ? "false" : "true"
    );
    $(`#${section.key}Arrow`).css(
      "transform",
      `rotate(${$(`#${id}`).attr("data-show") == "true" ? 180 : 0}deg)`
    );
  };

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let selected = params.get("selected");
    if (selected) {
      sections.find((section) => {
        if (section?.key === selected) {
          setSelectedSection(section);
        } else if (
          section?.nested?.map((nested) => nested.key).includes(selected)
        ) {
          setSelectedSection(
            section?.nested?.find((nested) => nested.key === selected)
          );
        }
      });
    }
  }, []);

  return (
    <div dir="ltr">
      <div className="d-flex gap-0 g-0 mx-0">
        {/* Panel SideBar */}
        <div
          id="panelSideBar"
          style={{
            width: "250px",
            height: "100vh",
          }}
          className="panelSideBar border-end position-fixed d-flex flex-column align-items-center"
        >
          <div className="panelLogo mt-3">
            <img
              src={require("../../imgs/fav.png")}
              alt="Logo"
              width="60"
              className="d-inline-block align-text-top me-s2 m-0 p-0 "
            />
          </div>
          <div className="panelSections mt-3 px-3 w-100 d-flex flex-column gap-1 overflow-y-auto">
            {sections.map((section, index) => (
              <div
                onClick={() =>
                  section.nested?.length > 0
                    ? showNestedSection(section)
                    : handleSelectSection(section)
                }
                key={index}
                className="panelSection d-flex flex-column gap-2"
                data-selected={selectedSection.title === section.title}
              >
                <div className="panelSectionTitle d-flex align-items-center gap-1">
                  <div
                    className="panelSectionIcon"
                    style={{
                      width: "25px",
                    }}
                  >
                    <i className={`fa fa-${section.icon}`}></i>
                  </div>
                  <span>{section.title}</span>
                  {section.nested?.length > 0 && (
                    <i
                      id={section.key + "Arrow"}
                      className="fa fa-chevron-down ms-auto"
                    ></i>
                  )}
                </div>

                <div
                  data-show={
                    section.nested
                      ?.map((nested) => nested.key)
                      ?.includes(selectedSection.key)
                      ? "true"
                      : "false"
                  }
                  className="sectionAccordian"
                  id={section.key + "Accordian"}
                  style={{
                    display: section.nested
                      ?.map((nested) => nested.key)
                      ?.includes(selectedSection.key)
                      ? "block"
                      : "none",
                  }}
                >
                  {section.nested?.length > 0 && (
                    <div className="nestedSections  d-flex flex-column gap-1">
                      {section.nested.map((nestedSection, index) => (
                        <div
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectSection(nestedSection);
                          }}
                          className="nestedSection panelSection d-flex align-items-center gap-1"
                          data-selected={
                            selectedSection.title === nestedSection.title
                          }
                        >
                          <div
                            className="nestedSectionIcon"
                            style={{
                              width: "25px",
                            }}
                          >
                            <i className={`fa fa-${nestedSection.icon}`}></i>
                          </div>
                          <span
                            style={{
                              textWrap: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "100%",
                            }}
                            title={nestedSection.title}
                            className="nestedSectionTitle"
                          >
                            {nestedSection.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div
            id="closePanelBtn"
            onClick={() => {
              $("#panelSideBar").animate({ left: "-250px" }, 500);
              $("#panelContent").animate({ marginLeft: "0" }, 500);
              $("#closePanelBtn").hide();
              $("#openPanelBtn").show();
            }}
            style={{
              top: "20px",
            }}
            className="closePanel cursorPointer position-absolute border border-end-0 p-2 rounded-3 rounded-end-0  end-0"
          >
            <i className="fa fa-chevron-left"></i>
          </div>
          <div
            id="openPanelBtn"
            style={{
              top: "61px",
              display: "none",
            }}
            onClick={() => {
              $("#panelSideBar").animate({ left: "0" }, 500);
              $("#panelContent").animate({ marginLeft: "250px" }, 500);
              $("#closePanelBtn").show();
              $("#openPanelBtn").hide();
            }}
            className="openPanel cursorPointer position-absolute border border-start-0 p-2 rounded-bottom-3 rounded-start-0 start-100"
          >
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="logout cursorPointer mt-auto mb-2">
            <div
              onClick={() => {
                localStorage.removeItem("adminPanel");
                window.location.reload();
              }}
            >
              <i className="fa fa-sign-out fa-rotate-180"></i> Logout
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div
          id="panelContent"
          style={{
            marginLeft: "250px",
            width: "100%",
          }}
        >
          <div className="min-vh-100 innerSection ">
            <div className="header border-bottom p-3">
              <h4
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "400",
                  textTransform: "uppercase",
                }}
                className="m-0"
              >
                {selectedSection.title}
              </h4>
            </div>
            <div className="sectionRender ">
              {selectedSection.key == "overview" ? (
                "Soon"
              ) : selectedSection.key == "mainCategories" ? (
                <>xx</>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
