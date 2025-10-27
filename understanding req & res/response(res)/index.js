import express from "express";
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
