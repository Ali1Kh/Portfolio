import { Schema, model } from "mongoose";

const visitorSchema = new Schema(
  {
    ip: { type: String, unique: true },
    hostname: String,
    city: String,
    region: String,
    country: String,
    loc: String,
    timezone: String,
    count: Number,
    device: String,
  },
  {
    timestamps: true,
    strictQuery: true,
  }
);

export const Visitors = model("Visitors", visitorSchema);
