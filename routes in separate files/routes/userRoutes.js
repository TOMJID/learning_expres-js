import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Welcome to the User page");
});

routes.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User id: ${id}`);
});
routes.post("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Post id:${id} was successful`);
});

export default routes;
