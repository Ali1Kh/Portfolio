import { Certificates } from "../../../DB/models/certificates.model.js";
import cloudinary from '../../utils/cloudinary.js';
export const addCertificate = async (req, res, next) => {
    let certificatesImagesArr = [];
    for (let index = 0; index < req.files.length; index++) {
        let certificatesImages = await cloudinary.uploader.upload(req.files[index].path,
            { folder: `portfolio/certificates/${req.body.company}/${req.body.name}/` })
        certificatesImagesArr.push({ secure_url: certificatesImages.secure_url, public_id: certificatesImages.public_id })
    }
    await Certificates.create({
        name: req.body.name,
        company: req.body.company,
        images: certificatesImagesArr,
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