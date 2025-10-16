import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3030;
// 3rd party middleware
app.use(morgan("combined"));
// built-in middleware
app.use(express.json());
// built-in middleware
app.use(express.static("public"));

app.get("/", (req, res) => res.send("hello world!"));
app.post("/new-blog", (req, res) => res.json(req.body));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
