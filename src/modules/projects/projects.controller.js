import { Projects } from "../../../DB/models/projects.model.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const getProjects = async (req, res, next) => {
  let projects = await Projects.find();
  return res.json({ success: true, results: projects });
};

export const addProject = asyncHandler(async (req, res, next) => {
  const {
    logo,
    name,
    link,
    category,
    descreption,
    daysAgo,
    date,
    technologies,
    shortDescreption,
    images,
  } = req.body;
  console.log(req.body);
  let project = await Projects.create({
    logo,
    name,
    link,
    category,
    descreption,
    daysAgo,
    date,
    technologies,
    shortDescreption,
    images,
  });
  return res.json({
    success: true,
    message: "Project Added Successfully",
    project,
  });
});
