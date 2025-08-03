import { Router } from "express";
import * as adminController from "./admin.controller.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const router = Router();

router.post("/login", asyncHandler(adminController.loginAdmin));

export default router;
