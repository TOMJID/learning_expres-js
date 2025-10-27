import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 3030;
// for reading cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello!");
});

app.get("/headers", (req, res) => {
  res.set("custom-header-1", "THis is my custom header");
  res.send("Headers created successfully");
});

// setting cookies
app.get("/cookies", (req, res) => {
  const token = "awdawidawpodkawdawda";
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 300000), // 30000 = 5 minutes
    secure: true,
  });
  res.send("cookies created successfully");
});

// reading cookies
app.get("/read-cookies", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    res.send("you are authenticated");
  } else {
    console.log(token);
    res.send("reading cookies successfully");
  }
});

// clearing cookies
app.get("/clear-cookies", (req, res) => {
  res.clearCookie("token");
  res.send("Cookies clear successfully");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
