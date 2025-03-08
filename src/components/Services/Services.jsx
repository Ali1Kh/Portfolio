import React from "react";

export default function Services() {
  return (
    <section className="services pb-5 py-2 my-5 mt-3">
      <div className="container ">
        <div className="sectionTitle text-center primaryText mb-5 my-2 pt-3">
          <h2>Services</h2>
        </div>
        <div className="row gy-3">
          <div className="col-md-4">
            <div className="serviceItem h-100 d-flex align-items-center flex-column borderGrey shadow p-5 px-4 rounded-3">
              <div
                className="serviceIcon mb-3 border rounded-circle text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "55px",
                  height: "55px",
                }}
              >
                <i className="fa fa-laptop-code fs-4"></i>
              </div>
              <h5 className="serviceTitle">Web Development</h5>
              <p className=" serviceInfo fst-normal fw-light text-center px-2">
                From front-end design to back-end architecture,
                {/* <br />*/}I build it all. Custom Web Applications Made to
                Perform.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serviceItem h-100 d-flex align-items-center flex-column borderGrey shadow p-5 px-3 rounded-3">
              <div
                className="serviceIcon mb-3 border rounded-circle text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "55px",
                  height: "55px",
                }}
              >
                <i className="fa fa-display fs-4"></i>
              </div>
              <h5 className="serviceTitle">Responsive Web Design</h5>
              <p className="serviceInfo fst-normal fw-light text-center px-1">
                Build websites that seamlessly adjust to any screen size,
                ensuring a flawless user experience across desktops, tablets,
                and mobiles.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serviceItem h-100 d-flex align-items-center flex-column borderGrey shadow p-5 px-3 rounded-3">
              <div
                className="serviceIcon mb-3 border rounded-circle text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "55px",
                  height: "55px",
                }}
              >
                <i className="fa fa-database fs-4"></i>
              </div>
              <h5 className="serviceTitle">Database Design and Management</h5>
              <p className="serviceInfo fst-normal fw-light text-center px-1">
                Design and manage databases that organize your information
                beautifully, making it easy to access, analyze, and unlock
                hidden insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
