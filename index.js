import express from "express";
import { dbConnect } from "./DB/connection.js";
import dotenv from "dotenv";
import projectsRouter from "./src/modules/projects/projects.router.js";
dotenv.config();
const app = express();
const port = process.env.port;
app.use(express.json());

await dbConnect();

app.use("/projects", projectsRouter);

app.use((error,req,res,next)=>{
    return res.json({success:false,error})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
