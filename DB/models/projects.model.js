import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    name: String,
    link: String,
    category: String,
    descreption: String,
    daysAgo: String,
    date: String,
    technologies: Array,
    shortDescreption: String,
    logo: { secure_url: String, public_id: String },
    images: [{ secure_url: String, public_id: String , imageTitle:String }],
  },
  {
    timestamps: true,
  }
);

export const Projects = model("projects", projectSchema);
