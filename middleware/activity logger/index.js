import express from "express";
// importing the activity logger middleware
import ActivityLogger from "./src/middleware/logger.js";

// creating an express application
const app = express();
const PORT = process.env.PORT || 3030;

// using the activity logger middleware globally
app.use(ActivityLogger);

// defining routes
app.get("/", (req, res) => {
  res.send("Activity Logger Middleware application");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
