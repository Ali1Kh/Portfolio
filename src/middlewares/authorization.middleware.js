import { Admin } from "../../DB/models/admin.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const isAuthorized = () => {
  return asyncHandler(async (req, res, next) => {
    let { token } = req.headers;
    if (!token) return next(new Error("You Must Enter Token"));
    let payload = jwt.verify(token, process.env.SECRET_KEY);
    let isAdmin = await Admin.findOne({
      _id: payload.id,
      username: payload.username,
    });
    if (!isAdmin) return next(new Error("You Are Not Admin"));
    next();
  });
};
