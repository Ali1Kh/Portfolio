import { Projects } from "../../../DB/models/projects.model.js";
import cloudinary from "../../utils/cloudinary.js";
import slugify from "slugify";

export const getProjects = async (req, res, next) => {

  let projects = await Projects.find({ ...req.query }).select("-images");
  return res.json({ success: true, results: projects });
};
export const getProjectDetails = async (req, res, next) => {
  let { projectId } = req.params;

  let projects = await Projects.findById(projectId);

  return res.json({ success: true, results: projects });
};

export const addProject = async (req, res, next) => {
  const {
    name,
    link,
    category,
    descreption,
    daysAgo,
    date,
    technologies,
    type,
    shortDescreption,
  } = req.body;
  technologies.map((tech) => {
    tech.slug = slugify(tech.name).toLowerCase();
  });

  let logoUpload = await cloudinary.uploader.upload(req.files.logo[0].path, {
    folder: `portfolio/projects/${name}/logo/`,
  });

  let coverImagesArr = [];
  for (let index = 0; index < req.files.coverImages.length; index++) {
    let coverImages = await cloudinary.uploader.upload(
      req.files.coverImages[index].path,
      { folder: `portfolio/projects/${name}/coverImages/` }
    );
    coverImagesArr.push({
      secure_url: coverImages.secure_url,
      public_id: coverImages.public_id,
      imageTitle: req.files.coverImages[index].originalname,
    });
  }

  let project = await Projects.create({
    name,
    link,
    category,
    descreption,
    daysAgo,
    date,
    technologies,
    shortDescreption,
    type,
    images: coverImagesArr,
    logo: {
      secure_url: logoUpload.secure_url,
      public_id: logoUpload.public_id,
    },
  });
  return res.json({
    success: true,
    message: "Project Added Successfully",
    project,
  });
};
