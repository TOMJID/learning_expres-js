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
  // Reading the blogs from the JSON file
  const blogs = readBlogsAPI();

  // finding the blog with the given id
  const blog = blogs.find((data) => data.id === parseInt(id));

  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
});

// POST a new blog
router.post("/add-blog", (req, res) => {
  // Extracting title and description from the request body
  const { title, description } = req.body;

  // Reading the existing blogs from the JSON file
  const blogs = readBlogsAPI();

  // Create new blog with ID
  const newBlog = {
    id: blogs.length + 1,
    title,
    description,
  };

  // Adding the new blog to the existing blogs array
  blogs.push(newBlog);

  // Writing the updated blogs array back to the JSON file
  fs.writeFileSync(blogsAPIPath, JSON.stringify(blogs, null, 2));

  res.status(201).json({ message: "Blog added successfully" });
});

// UPDATE an existing blog with PUT method
router.put("/update-blog/:id", (req, res) => {
  // Extracting id from the request parameters
  const { id } = req.params;

  // Extracting title and description from the request body
  const { title, description, author } = req.body;

  // Reading the existing blogs from the JSON file
  const blogs = readBlogsAPI();
  const blog = blogs.find((data) => data.id === parseInt(id));
  if (!blog) return res.send(`message: Blog with id ${id} not found`);

  // Updating the blog's title and description
  blog.title = title || blog.title;
  blog.description = description || blog.description;
  blog.author = author || "Unknown";

  // Writing the updated blogs array back to the JSON file
  fs.writeFileSync(blogsAPIPath, JSON.stringify(blogs, null, 2));

  res.status(200).json({ message: "Blog updated successfully" });
});

// DELETE a blog
router.delete("/delete-blog/:id", (req, res) => {
  const { id } = req.params;
  const blogs = readBlogsAPI();
  const blogIndex = blogs.findIndex((data) => data.id === parseInt(id));

  if (blogIndex === -1)
    return res.send(`message: Blog with id ${id} not found`);
  else {
    blogs.splice(blogIndex, 1);

    // Writing the updated blogs array back to the JSON file
    fs.writeFileSync(blogsAPIPath, JSON.stringify(blogs, null, 2));

    res.status(200).json({ message: "Blog deleted successfully" });
  }
});
export default router;
