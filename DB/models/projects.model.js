import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    logo: String,
    name: String,
    link: String,
    category: String,
    descreption: String,
    daysAgo: String,
    date: String,
    technologies: Array,
    shortDescreption: String,
    images: String,
  },
  {
    timestamps: true,
  }
);

export const Projects = model("projects", projectSchema);
