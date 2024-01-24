import { Schema, model } from "mongoose";

const certificatesSchema = new Schema(
    {
        name: String,
        company: String,
        images: { secure_url: String, public_id: String },
    },
    {
        timestamps: true,
    }
);

export const Certificates = model("certificates", certificatesSchema);
