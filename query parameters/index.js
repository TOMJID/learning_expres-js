import express from "express";

const App = express();
const port = process.env.PORT || 3000;

App.get("/", (req, res) => {
  res.send("Hello!");
});

// query string parameters
// http://localhost:3000/search?category=mobile&title=iphone
App.get("/search", (req, res) => {
  // console.log(req.query);
  const { category } = req.query;
  const { title } = req.query;
  console.log(category);
  console.log(title);
  res.send(`searching for ${title} in ${category} category `);
});
App.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
