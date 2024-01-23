import { asyncHandler } from "../../utils/asyncHandler.js";
import { uploadFiles } from "../../utils/multer.js";
import * as projectsController from "./projects.controller.js";
import { Router } from "express";
const router = Router();

router.post("/",
    uploadFiles().fields([{ name: "logo" },{ name: "coverImages" }]),
    asyncHandler(projectsController.addProject));

router.get("/", asyncHandler(projectsController.getProjects));
router.get("/:projectId", asyncHandler(projectsController.getProjectDetails));

export default router;
