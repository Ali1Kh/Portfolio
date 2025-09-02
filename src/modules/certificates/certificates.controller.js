import { Certificates } from "../../../DB/models/certificates.model.js";
import cloudinary from "../../utils/cloudinary.js";
export const addCertificate = async (req, res, next) => {
  let certificatesImages = await cloudinary.uploader.upload(req.file.path, {
    folder: `portfolio/certificates/${req.body.company}/${req.body.name}/`,
  });

  await Certificates.create({
    name: req.body.name,
    company: req.body.company,
    link: req.body.link,
    images: {
      secure_url: certificatesImages.secure_url,
      public_id: certificatesImages.public_id,
    },
  });
  return res.json({
    success: true,
    message: "Certificate Added Successfully",
  });
};

export const getCertificates = async (req, res, next) => {
  let certificates = await Certificates.find().sort({ createdAt: -1 });
  return res.json({ success: true, results: certificates });
};

export const deleteCertificate = async (req, res, next) => {
  let { id } = req.params;
  if (!id) return next(new Error("Invalied Certificate ID"));
  let certificate = await Certificates.findById(id);
  if (!certificate) return next(new Error("Invalied Certificate ID"));
  await cloudinary.uploader.destroy(certificate.images.public_id);
  await Certificates.deleteOne({ _id: id });
  return res.json({
    success: true,
    message: "Certificate Deleted Successfully",
  });
};
