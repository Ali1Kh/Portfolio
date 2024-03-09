import express from "express";
import { dbConnect } from "./DB/connection.js";
import dotenv from "dotenv";
import projectsRouter from "./src/modules/projects/projects.router.js";
import certificatesRouter from "./src/modules/certificates/certificates.router.js";
import mailsRouter from "./src/modules/mails/mails.router.js";
import cors from "cors";
import axios from "axios";
import requestIp  from "request-ip"
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

app.enable('trust proxy'); // Enable trusting the X-Forwarded-For header

app.get('/visit', (req, res) => {
  const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send (`Your IP address is: ${ipAddress}`);
});

app.use((error, req, res, next) => {
  return res.json({
    success: false,
    error: { message: error.message, stack: error.stack },
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
