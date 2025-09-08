import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import toast from "react-hot-toast";

export default function ManageCertificates() {
  let { data, isLoading } = useQuery("certificates", getCertificates);
  function getCertificates() {
    try {
      return axios.get("https://api.ali1kh.com/certificates");
    } catch (ex) {
      console.log(ex);
    }
  }

  async function deleteCertificate(id) {
    try {
      let { data } = await axios.delete(
        `https://api.ali1kh.com/certificates/${id}`,
        { headers: { token: localStorage.getItem("adminPanel") } }
      );
      if (data.success) {
        toast.success("Certificate Deleted Successfully");
        getCertificates();
      }
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <div className="container py-5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="row gy-5">
          {data.data.results.map((certificate, idx) => (
            <div className="col-md-4 mx-auto" key={idx}>
              <div className="card shadow-sm h-100">
                <img
                  className="card-img-top h-100"
                  style={{maxHeight:"325px"}}
                  src={certificate.images.secure_url}
                  alt={certificate.name}
                />
                <div className="card-body border-top">
                  <h6 className="card-title">{certificate.name}</h6>
                  <p className="card-text">{certificate.company}</p>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary me-2"
                  >
                    View
                  </a>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCertificate(certificate._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
