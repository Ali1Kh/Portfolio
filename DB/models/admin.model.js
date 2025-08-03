import { Schema, model } from "mongoose";

let AdminSchema = new Schema({
  username: String,
  password: String,
});

export const Admin = model("Admin", AdminSchema);
