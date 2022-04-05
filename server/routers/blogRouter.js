import express from "express";
import mongoose from "mongoose";
import Blog from "../db/blogModel.js";

const router = express.Router();

//Get all memories
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch (error) {
    console.log(error);
    res.status(404).send("blogs are not found");
  }
});

//Get single memory
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).send("blog is not found // id is not valid");
    }
    const blog = await Blog.findById(id);
    if (!blog) return;
    res.status(200).send(blog);
  } catch (error) {
    console.log(error);
    res.status(404).send("blog is not found");
  }
});

//Post memory
router.post("/", async (req, res) => {
  try {
    const blog = req.body;
    const createdBlog = await Blog.create(blog);
    res.status(201).send(createdBlog);
  } catch (error) {
    console.log(error);
    res.status(404).send("blog is not created");
  }
});

//Update memory
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: "blog id is not valid" });
    }

    const { title, content, creator, image } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, creator, image, _id: id },
      { new: true }
    );

    res.status(200).json(updatedBlog);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Somethings went wrong :(( //Update failed" });
    console.log(error.message);
  }
});

//Delete the memory
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: "Blog id is not valid" });
    }

    await Blog.findByIdAndDelete(id);

    res.status(200).json({ message: "Blog has deleted" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Somethings went wrong :(( // delete failed." });
    console.log(error.message);
  }
});

export default router;
