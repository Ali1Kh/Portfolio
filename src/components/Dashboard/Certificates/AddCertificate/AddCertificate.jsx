import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";

export default function AddCertificate() {
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [link, setLink] = React.useState("");
  const [certificates, setCertificates] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const handleSubmit = async (e) => {
    try {
      setIsSubmitting(true);
      e.preventDefault();
      if (!name || !company || !link || !certificates) {
        toast.error("All Fields are required");
        setIsSubmitting(false);
        return;
      }
      const formData = new FormData();
      formData.append("name", name);
      formData.append("company", company);
      formData.append("link", link);
      formData.append("certificates", certificates);
      let { data } = await axios.post(
        "https://api.ali1kh.com/certificates",
        formData,
        {
          headers: {
            token: localStorage.getItem("adminPanel"),
          },
        }
      );
      if (data.success) {
        toast.success("Certificate Added Successfully");
        setName("");
        setCompany("");
        setLink("");
        setCertificates("");
      } else {
        toast.error(data.message);
      }
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }
  };

  const handleInput = (e, setState) => {
    setState(e.target.value);
  };

  const handleFileInput = (e) => {
    setCertificates(e.target.files[0]);
  };

  return (
    <div className="container py-5">
      <form
        className="d-flex gap-3 w-75 mx-auto flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="form-group w-100">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Certificate Name"
            value={name}
            onChange={(e) => handleInput(e, setName)}
          />
        </div>
        <div className="form-group w-100">
          <label>Company</label>
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
            value={company}
            onChange={(e) => handleInput(e, setCompany)}
          />
        </div>
        <div className="form-group w-100">
          <label>Link</label>
          <input
            type="text"
            className="form-control"
            placeholder="Certificate Link"
            value={link}
            onChange={(e) => handleInput(e, setLink)}
          />
        </div>
        <div className="form-group w-100">
          <label>Certificate</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileInput}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn mainBgColor text-white mt-3 mx-auto w-100"
        >
          Add Certificate
        </button>
      </form>
    </div>
  );
}
