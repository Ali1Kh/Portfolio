import express from "express";
import { dbConnect } from "./DB/connection.js";
import dotenv from "dotenv";
import projectsRouter from "./src/modules/projects/projects.router.js";
import certificatesRouter from "./src/modules/certificates/certificates.router.js";
import mailsRouter from "./src/modules/mails/mails.router.js";
import cors from "cors";
import axios from "axios";
import { asyncHandler } from "./src/utils/asyncHandler.js";
import { Visitors } from "./DB/models/visitors.model.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
await dbConnect();
app.use("/projects", projectsRouter);
app.use("/certificates", certificatesRouter);
app.use("/mails", mailsRouter);
app.all("/uptime", (req, res) => {
  console.log("Up Time Requested");
  res.status(200).send("success");
});

app.get("/wakatime/getHours", async (req, res) => {
  try {
    const response = await axios.get(process.env.WAKATIMELINK);
    res.json(response.data);
  } catch (error) {
    res.json({ success: false });
  }
});

app.enable("trust proxy"); // Enable trusting the X-Forwarded-For header

app.get(
  "/visit",
  asyncHandler(async (req, res) => {
    const ipAddress =
      req.ip || req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    let { data } = await axios.get(`https://ipinfo.io/${ipAddress}/json`);
    let isVisitor = await Visitors.findOne({ ip: data.ip });
    if (isVisitor) {
      isVisitor.count += 1;
      await isVisitor.save();
      return res.json({
        success: true,
      });
    }
    await Visitors.create({ ...data, count: 1 });
    return res.json({
      success: true,
    });
  })
);

app.use((error, req, res, next) => {
  return res.json({
    success: false,
    error: { message: error.message, stack: error.stack },
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
