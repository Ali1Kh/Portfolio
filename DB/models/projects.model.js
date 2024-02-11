import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    name: String,
    link: String,
    category: String,
    descreption: String,
    daysAgo: String,
    date: String,
    technologies: [{ name: String, slug: String }],
    shortDescreption: String,
    logo: { secure_url: String, public_id: String },
    images: [{ secure_url: String, public_id: String, imageTitle: String }],
  },
  {
    timestamps: true,
    // strictQuery:true
  }
);

export const Projects = model("projects", projectSchema);
