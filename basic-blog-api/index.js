import express from "express";
// importing routes
import blogsRoutes from "./routes/blogRoutes.js";

const server = express();

const port = process.env.PORT || 3030;

// middleware
server.use(express.json());

// root | home page
server.get("/", (req, res) => {
  res.send("Welcome tho blog api !");
});

// blogs page
server.use("/blogs", blogsRoutes);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
