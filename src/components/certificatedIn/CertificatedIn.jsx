import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
export default function CertificatedIn() {
  const companiesSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const navigate = useNavigate();

  let companies = [
    {
      name: "Microsoft",
      img: require("../../imgs/certificatedFrom/microsoft.png"),
    },
    {
      name: "Oracle Academy",
      img: require("../../imgs/certificatedFrom/oracle.png"),
    },
    {
      name: "Route Academy",
      img: require("../../imgs/certificatedFrom/route.jpg"),
    },
    {
      name: "Information Technology Institute (ITI)",
      img: require("../../imgs/companies/iti.png"),
    },
    {
      name: "National telecommunicarion institute",
      img: require("../../imgs/companies/nti.png"),
    },
    {
      name: "Information Technology Industry Development Agency (ITIDA)",
      img: require("../../imgs/certificatedFrom/itida.png"),
    },
    {
      name: "Sprints",
      img: require("../../imgs/certificatedFrom/sprints.png"),
    },
    {
      name: "Innovegypt",
      img: require("../../imgs/certificatedFrom/innovegypt.png"),
    },
    {
      name: "Technology Innovation & Entrepreneurship Center (TIEC)",
      img: require("../../imgs/certificatedFrom/tiec.png"),
    },
    {
      name: "NVIDIA",
      img: require("../../imgs/certificatedFrom/nvidia.png"),
    },
    {
      name: "HackerRank",
      img: require("../../imgs/certificatedFrom/hackerrank.png"),
    },
    {
      name: "freeCodeCamp",
      img: require("../../imgs/certificatedFrom/freecodecamp.jpeg"),
    },
    {
      name: "Mica Egypt",
      img: require("../../imgs/certificatedFrom/mica.jpg"),
    },
    {
      name: "SoloLearn",
      img: require("../../imgs/certificatedFrom/sololearn.jpg"),
    },
  ];
  return (
    <section className="certificates secBg my-5 mt-3  overflow-hidden">
      <div className="container py-5">
        <div className="sectionTitle text-center primaryText mb-5 my-3">
          <h2>Certificated In</h2>
        </div>
        <div className="companies gap-4 mb-3 d-flex flex-column justify-content-center align-items-center">
          <div
            className="slidesContainer text-center"
            style={{ width: "520px" }}
          >
            <Slider {...companiesSlider}>
              {companies.map((company, index) => (
                <div className="companyItem d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded-circle cursorGrab"
                    src={company.img}
                    alt={company.name}
                    title={company.name}
                    style={{ maxWidth: "80px" }}
                  />
                </div>
              ))}
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
