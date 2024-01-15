import { asyncHandler } from "../../utils/asyncHandler.js";
import * as projectsController from "./projects.controller.js";
import { Router } from "express";
const router = Router();

router.post("/", projectsController.addProject);
router.get("/", asyncHandler(projectsController.getProjects));

export default router;
