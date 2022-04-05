import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import blogRouter from "./routers/blogRouter.js";

const port = 5000;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/blogs", blogRouter);

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("db has connected");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});
