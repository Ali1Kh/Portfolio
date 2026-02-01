import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import microsoftLogo from "../../imgs/certificatedFrom/microsoft.png";
import oracleLogo from "../../imgs/certificatedFrom/oracle.png";
import routeLogo from "../../imgs/certificatedFrom/route.jpg";
import itiLogo from "../../imgs/companies/iti.png";
import ntiLogo from "../../imgs/companies/nti.png";
import itidaLogo from "../../imgs/certificatedFrom/itida.png";
import sprintsLogo from "../../imgs/certificatedFrom/sprints.png";
import innovegyptLogo from "../../imgs/certificatedFrom/innovegypt.png";
import tiecLogo from "../../imgs/certificatedFrom/tiec.png";
import nvidiaLogo from "../../imgs/certificatedFrom/nvidia.png";
import hackerrankLogo from "../../imgs/certificatedFrom/hackerrank.png";
import freecodecampLogo from "../../imgs/certificatedFrom/freecodecamp.jpeg";
import micaLogo from "../../imgs/certificatedFrom/mica.jpg";
import soloLearnLogo from "../../imgs/certificatedFrom/sololearn.jpg";

export default function CertificatedIn() {
  const companiesSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
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
      img: microsoftLogo,
    },
    {
      name: "Oracle Academy",
      img: oracleLogo,
    },
    {
      name: "Route Academy",
      img: routeLogo,
    },
    {
      name: "Information Technology Institute (ITI)",
      img: itiLogo,
    },
    {
      name: "National telecommunicarion institute",
      img: ntiLogo,
    },
    {
      name: "Information Technology Industry Development Agency (ITIDA)",
      img: itidaLogo,
    },
    {
      name: "Sprints",
      img: sprintsLogo,
    },
    {
      name: "Innovegypt",
      img: innovegyptLogo,
    },
    {
      name: "Technology Innovation & Entrepreneurship Center (TIEC)",
      img: tiecLogo,
    },
    {
      name: "NVIDIA",
      img: nvidiaLogo,
    },
    {
      name: "HackerRank",
      img: hackerrankLogo,
    },
    {
      name: "freeCodeCamp",
      img: freecodecampLogo,
    },
    {
      name: "Mica Egypt",
      img: micaLogo,
    },
    {
      name: "SoloLearn",
      img: soloLearnLogo,
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
            style={{ width: "700px" }}
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
