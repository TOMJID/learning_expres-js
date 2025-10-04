import express from "express";

// Creating an instance
const Server = express();

// Setting the port number
const port = process.env.PORT || 3000;

// Creating a Route (GET)
Server.get("/", (req, res) => {
  res.send("Hello, How are you?");
});

// starting the server
Server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
