import express from "express";
// routes
import putRoutes from "./routes/putRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const Server = express();
const port = process.env.PORT || 3000;

Server.use(express.json());

Server.get("/", (req, res) => {
  res.send("Home Page");
});

// Mount get & put routes for blogs page
Server.use("/blogs", putRoutes);

// Mount get & post routes for blogs page
Server.use("/users/v1", userRoutes);

Server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
