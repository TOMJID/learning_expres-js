// routes/postRoutes.js
import express from "express";
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("blogs page");
});
routes.put("/edit-post/:id", (req, res) => {
  const id = req.params.id;
  console.log("PUT request received. ID:", id);
  res.send(`Editing done! Post ID: ${id}`);
});

export default routes;
