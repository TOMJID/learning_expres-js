import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/inspect", (req, res) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  // http://localhost:3000/inspect?test=hello&t2=hi
  console.log(`Request Query: ${JSON.stringify(req.query)}`);
  console.log(`Request headers: ${JSON.stringify(req.headers)}`);
  res.send("inspect route");
});
app.get("/params/:id", (req, res) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Parameters: ${req.params.id}`);
  res.send("param route");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
