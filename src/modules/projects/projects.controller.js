import { Projects } from "../../../DB/models/projects.model.js";
import cloudinary from "../../utils/cloudinary.js";
import slugify from "slugify";

export const getProjects = async (req, res, next) => {
  let searchConditions = [];

  if (req.query.search) {
    searchConditions.push(
      { name: { $regex: req.query.search, $options: "i" } },
      { category: { $regex: req.query.search, $options: "i" } },
      { descreption: { $regex: req.query.search, $options: "i" } },
      { shortDescreption: { $regex: req.query.search, $options: "i" } },
      {
        "technologies.name": { $regex: req.query.search, $options: "i" },
      }
    );
  }
  let query = {
    ...req.query,
    $or: searchConditions,
  };
  if (searchConditions.length == 0) {
   delete query.$or 
  }
  let projects = await Projects.find(query)
    .select("-images")
    .limit(req.query.limit);
  return res.json({ success: true, count: projects.length, results: projects });
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
    repo,
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

  let coverImages = [];
  let coverImagesArr = [];
  let logoUpload = await cloudinary.uploader.upload(req.files.logo[0].path, {
    folder: `portfolio/projects/${name}/logo/`,
  });
  if (req.body.type != "backend") {
    for (let index = 0; index < req.files.coverImages.length; index++) {
      coverImages = await cloudinary.uploader.upload(
        req.files.coverImages[index].path,
        { folder: `portfolio/projects/${name}/coverImages/` }
      );
      coverImagesArr.push({
        secure_url: coverImages.secure_url,
        public_id: coverImages.public_id,
        imageTitle: req.files.coverImages[index].originalname,
      });
    }
  }

  let project = await Projects.create({
    name,
    link,
    repo,
    category,
    descreption,
    daysAgo,
    date,
    technologies,
    shortDescreption,
    type,
    images: coverImagesArr,
    logo: {
      secure_url: logoUpload?.secure_url,
      public_id: logoUpload?.public_id,
    },
  });
  return res.json({
    success: true,
    message: "Project Added Successfully",
    project,
  });
};
