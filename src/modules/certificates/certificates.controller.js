import { Certificates } from "../../../DB/models/certificates.model.js";
import cloudinary from '../../utils/cloudinary.js';
export const addCertificate = async (req, res, next) => {

    let certificatesImages = await cloudinary.uploader.upload(req.file.path,
        { folder: `portfolio/certificates/${req.body.company}/${req.body.name}/` })

    await Certificates.create({
        name: req.body.name,
        company: req.body.company,
        images: { secure_url: certificatesImages.secure_url, public_id: certificatesImages.public_id },
    });
    return res.json({
        success: true,
        message: "Certificate Added Successfully"
    });
}

export const getCertificates = async (req, res, next) => {
    let certificates = await Certificates.find();
    return res.json({ success: true, results: certificates })
}