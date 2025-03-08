import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
export default function CertificatedIn() {
  const companiesSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const navigate = useNavigate();

  return (
    <section className="certificates secBg my-5 mt-3">
      <div className="container py-5">
        <div className="sectionTitle text-center primaryText mb-5 my-3">
          <h2>Certificated In</h2>
        </div>
        <div className="companies gap-4 mb-3 d-flex flex-column justify-content-center align-items-center">
          <div
            className="slidesContainer text-center"
            style={{ width: "350px" }}
          >
            <Slider {...companiesSlider}>
              <div className="companyItem d-flex justify-content-center align-items-center">
                <img
                  className="w-100 rounded-circle cursorGrab"
                  src={require("../../imgs/certificatedFrom/microsoft.png")}
                  alt=""
                  title="Microsoft"
                  style={{ maxWidth: "80px" }}
                />
              </div>
              <div className="companyItem  d-flex justify-content-center align-items-center">
                <img
                  className="w-100 rounded-circle cursorGrab"
                  src={require("../../imgs/certificatedFrom/oracle.png")}
                  alt=""
                  title="Oracle Academy"
                  style={{ maxWidth: "80px" }}
                />
              </div>
              <div className="companyItem d-flex justify-content-center align-items-center">
                <img
                  className="w-100 rounded-circle cursorGrab"
                  src={require("../../imgs/certificatedFrom/freecodecamp.jpeg")}
                  alt=""
                  title="freeCodeCamp"
                  style={{ maxWidth: "80px" }}
                />
              </div>
              <div className="companyItem d-flex justify-content-center align-items-center">
                <img
                  className="w-100 rounded-circle cursorGrab"
                  src={require("../../imgs/certificatedFrom/hackerrank.png")}
                  alt=""
                  title="HackerRank"
                  style={{ maxWidth: "80px" }}
                />
              </div>
              <div className="companyItem d-flex justify-content-center align-items-center">
                <img
                  className="w-100 rounded-circle cursorGrab"
                  src={require("../../imgs/certificatedFrom/route.jpg")}
                  alt=""
                  title="Route Academy"
                  style={{ maxWidth: "80px" }}
                />
              </div>
              <div className="companyItem d-flex justify-content-center align-items-center">
                <img
                  className="w-100 rounded-circle cursorGrab"
                  src={require("../../imgs/certificatedFrom/sololearn.jpg")}
                  alt=""
                  title="SoloLearn"
                  style={{ maxWidth: "80px" }}
                />
              </div>
              <div className="companyItem d-flex justify-content-center align-items-center">
                <img
                  className="w-100 rounded-circle cursorGrab"
                  src={require("../../imgs/certificatedFrom/mica.jpg")}
                  alt=""
                  title="Mica Egypt"
                  style={{ maxWidth: "80px" }}
                />
              </div>
            </Slider>
          </div>
          <div className="sectionFooter mt-4 mb-0 text-center">
            <button
              onClick={() => navigate("/certificates")}
              className="btn text-white borderGrey"
            >
              Show Certificates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
