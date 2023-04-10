const express = require("express");

const app = express();

const port = 3010;

app.get("/abc", (req, res) => {
  res.send("ABC / Hello, Express!");
});

app.post("/", (req, res) => {
  res.json("This is Post Request!");
});

app.put("/", (req, res) => {
  res.json("This is Put Request!");
});

app.delete("/", (req, res) => {
  res.json("This is Delete Request!");
});

// 서버가 실행되었을 때 실행되는 내용
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
