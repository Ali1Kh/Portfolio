import React from "react";

export default function Services() {
  let services = [
    {
      icon: "laptop-code",
      tile: "Web Development",
      description:
        "Full featured websites that turn ideas into real working solutions.",
    },
    {
      imageIcon: require("../../imgs/icons/rwd.png"),
      tile: "Responsive Web Design",
      description: "Fully responsive websites designed to work on any device.",
    },
    {
      icon: "database",
      tile: "Database Design and Management",
      description: "Easy to manage systems that keep your business data safe.",
    },
    {
      icon: "palette",
      tile: "UI/UX Design",
      description:
        "Simple and clean interfaces crafted for smooth user experiences.",
    },
    {
      icon: "microchip",
      tile: "Embedded Systems",
      description:
        "Smart embedded hardware solutions for real world systems.",
    },
    {
      icon: "desktop",
      tile: "Desktop Application Development",
      description:
        "Custom desktop applications that run smoothly and offline.",
    },
  ];
  return (
    <section className="services pb-5 py-2 my-5 mt-3">
      <div className="container ">
        <div className="sectionTitle text-center primaryText mb-5 my-2 pt-3">
          <h2>Services</h2>
        </div>
        <div className="row gy-3 justify-content-center">
          {services.map((serviceItem) => (
            <>
              <div className="col-md-6 col-xl-4">
                <div className="serviceItem text-center h-100 d-flex align-items-center flex-column borderGrey shadow p-5 pb-4 px-4 rounded-3">
                  <div
                    className="serviceIcon mb-3 border rounded-circle text-white d-flex justify-content-center align-items-center"
                    style={{
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    {serviceItem.icon ? (
                      <i className={`fa fa-${serviceItem.icon} fs-4`}></i>
                    ) : (
                      <img
                        src={serviceItem.imageIcon}
                        width={30}
                        height={30}
                        alt=""
                      />
                    )}
                  </div>
                  <h5
                    style={{
                      whiteSpace: "nowrap",
                    }}
                    className="serviceTitle"
                  >
                    {serviceItem.tile}
                  </h5>
                  <p className="serviceInfo fst-normal fw-light text-center px-2">
                    {serviceItem.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
