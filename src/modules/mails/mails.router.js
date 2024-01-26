import { validation } from "../../middlewares/validation.middleware.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { uploadFiles } from "../../utils/multer.js";
import * as mailsController from "./mails.controller.js";
import { Router } from "express";
import { mailSchema } from "./mails.schema.js";
const router = Router();

router.post("/", validation(mailSchema), asyncHandler(mailsController.sendMail));

export default router;