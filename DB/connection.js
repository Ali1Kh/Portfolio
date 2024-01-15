import mongoose from "mongoose";

export const dbConnect = async () => {
  return await mongoose
    .connect(process.env.CONNECTION_URL + "/portfolio")
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((err) => {
      console.log("Failed To Connect To Db :", err);
    });
};
