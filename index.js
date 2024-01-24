import express from "express";
import { dbConnect } from "./DB/connection.js";
import dotenv from "dotenv";
import projectsRouter from "./src/modules/projects/projects.router.js";
import certificatesRouter from "./src/modules/certificates/certificates.router.js";

import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
await dbConnect();
app.use("/projects", projectsRouter);
app.use("/certificates", certificatesRouter);

app.use((error, req, res, next) => {
    return res.json({ success: false, error: { message: error.message, stack: error.stack } })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
