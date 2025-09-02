import { Router } from "express";
import { isAuthorized } from "../../middlewares/authorization.middleware.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import * as visitorsController from "./visitors.controller.js";

let router = Router();

router.get("/", isAuthorized(), asyncHandler(visitorsController.getVisitors));

export default router;