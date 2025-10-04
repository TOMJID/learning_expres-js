import express from "express";

const Server = express();
const port = process.env.PORT || 3000;

// setting the middleware to parse JSON request bodies
Server.use(express.json());

// get request
Server.get("/", (req, res) => {
  res.send("Hello!");
});

// post request
Server.post("/contact", (req, res) => {
  res.send("Massage received");
  console.log(req.body);
});

// put request
Server.put("/edit-post/:id", (req, res) => {
  console.log("Editing post by PUT request");
  res.send("Editing Complete");
});

// patch request
Server.patch("/edit-post/:id", (req, res) => {
  console.log("Editing post by PATCH request");
  res.send("Editing Complete");
});

// patch request
Server.delete("/comments/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  console.log("Deleting comments by DELETE request");
  res.send(`Deleted comment of ${commentId} successfully`);
});

Server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
