import express from "express";
import { timestamp, activityLogger } from "./src/loggerMiddleware.js";
const app = express();
const PORT = process.env.PORT || 3000;

// Global custom middleware
app.use(activityLogger);
app.get("/", (req, res) => {
  res.send("Hello World");
});

// custom middleware for specific route
const logger = (req, res, next) => {
  console.log(`[ at: ${timestamp()}] \n [method: ${req.method}]`);
  next();
};

app.get("/about", logger, (req, res) => {
  res.send("This is about page");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
