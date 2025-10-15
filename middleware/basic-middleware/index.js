import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// * middleware function
const myMiddleware = (req, res, next) => {
  console.log(
    `middleware function called: {method: ${req.method}} and {url: ${req.url}}`
  );
  next();
};

app.get("/about", myMiddleware, (req, res) => {
  res.send("About Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
