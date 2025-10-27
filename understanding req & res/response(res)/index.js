import express from "express";
import path from "path";
const app = express();
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("Hello from Express Js");
});

app.get("/json", (req, res) => {
  res.json({
    massage: "hello i am from response page",
  });
});

app.get("/redirect", (req, res) => {
  res.redirect("/json");
});

app.get("/status", (req, res) => {
  res.status(404).send("statue - 404");
});

// * set different types of file (json data, html elements,statics file etc..)
app.get("/api/user", (req, res) => {
  const user = {
    id: 1,
    name: "tomjid",
    age: 21,
  };
  res.status(200).json({
    massage: " user created successfully",
    user: user,
  });
});

// * sending html files
app.get("/html", (req, res) => {
  const filePath = path.join(process.cwd(), "index.html");
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
