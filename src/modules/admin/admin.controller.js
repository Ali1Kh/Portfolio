import { Admin } from "../../../DB/models/admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res, next) => {
  let { username, password } = req.body;
  if (!username || !password)
    return next(new Error("Please Fill All The Fields"));
  let isAdmin = await Admin.findOne({ username });
  if (!isAdmin) return next(new Error("You Are Not Admin"));
  let checkPass = bcrypt.compareSync(password, isAdmin.password);
  if (!checkPass) return next(new Error("Invaild Password"));
  let token = jwt.sign({ id: isAdmin._id, username }, process.env.SECRET_KEY, {
    expiresIn: "60d",
  });
  return res.json({ success: true, token });
};
