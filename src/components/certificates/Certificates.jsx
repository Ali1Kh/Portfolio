import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from "react-router-dom";
AOS.init();
export default function Certificates() {
  let { data, isLoading } = useQuery("certificates", getCertificates);
  function getCertificates() {
    try {
      return axios.get("https://ali1kh.onrender.com/certificates");
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <>
      <div className="container py-5 d-flex flex-column">
        <div className="title mb-5 text-center">
          <h1 style={{ fontSize: "50px" }}>Certificates</h1>
        </div>
        <div className="row gy-5">
          {data
            ? data.data.results.map((certificate, idx) => (
                <Link to={certificate.link} target="_blank" key={idx}  className="col-md-4 mx-auto m cursorPointer">
                   <div className="cetificateItem rounded-2  overflow-hidden h-100">
                    <img
                      src={certificate.images.secure_url}
                      title={certificate.name+", "+certificate.company}
                      className="w-100 h-100"
                    />
                  </div>
                </Link> 
              ))
            : ""}
        </div>
      </div>
    </>
  );
}
