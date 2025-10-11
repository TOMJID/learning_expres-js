import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsAPIPath = path.join(__dirname, "../blogs.json");

// Function to read blogs from JSON file
const readBlogsAPI = () => {
  try {
    const data = fs.readFileSync(blogsAPIPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log("Error reading blogsAPI:", err);
    return [];
  }
};

// GET all blogs
router.get("/", (req, res) => {
  const blogs = readBlogsAPI();
  res.send(blogs);
});

// GET a single blog
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const blogs = readBlogsAPI();

  // finding the blog with the given id
  const blog = blogs.find((data) => data.id === parseInt(id));
  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
});

export default router;
