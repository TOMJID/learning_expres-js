import express from "express";

// Creating an instance
const Server = express();

// Setting the port number
const port = process.env.PORT || 3000;

// middleware to parse JSON request bodies
//  When someone sends JSON data in a POST request, this converts it into a   JavaScript object
// Without it: req.body would be undefined
Server.use(express.json());

// Creating a Route (GET) for root page
Server.get("/", (req, res) => {
  res.send("Hello, You are on root page!");
});

// Creating a Route (GET) for about
Server.get("/about", (req, res) => {
  res.send("Now you are in about page!");
});

// Creating a Route (POST) for contact page
// using postman to post
Server.post("/contact", (req, res) => {
  console.log("posting on the way");
  res.send("massage send");
  console.log("posting complete");
  console.log(req.body);
});
// starting the server
Server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
