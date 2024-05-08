const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())

const PORT = 3000;
const hostName = "localhost";

app.listen(PORT, () => {
  console.log(`Server running on http://${hostName}:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/operations")
  .then(() => {
    console.log("Connected to Database.");
  })
  .catch(() => {
    console.log("Connection Failed");
  });
