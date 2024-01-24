import { asyncHandler } from "../../utils/asyncHandler.js";
import { uploadFiles } from "../../utils/multer.js";
import * as certificatesController from "./certificates.controller.js";
import { Router } from "express";
const router = Router();

// router.post("/",
//     uploadFiles().single("certificates"),
//     asyncHandler(certificatesController.addCertificate));

router.get("/", asyncHandler(certificatesController.getCertificates));

export default router;
