const express = require("express");
const app = express();

app.get("/api/times", (req, res) => {
  res.send("Welcome to the api!!");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
