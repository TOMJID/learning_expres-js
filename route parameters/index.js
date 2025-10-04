import express from "express";

const Server = express();
const port = process.env.PORT || 3000;

// First Route - Homepage
Server.get("/", (req, res) => {
  res.send("Hello!");
});

// Second Route - User by ID
// "/users/:id": Dynamic route with URL parameter
// :id is a placeholder (/users/69 => id = "69")
// req.params.id: Extracts the id from the URL
Server.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  res.send(`User id ${userId}`);
});
Server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
