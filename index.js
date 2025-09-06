const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3004;

mongoose
  .connect(process.env.key)
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error("MongoDB connection error", err));

mongoose.connection.on("disconnect", () => {
  console.warn("MongoDB disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

app.get("/", (req, res) => {
  res.send("Working Database connected");
});

app.listen(port, () => {
  console.log("server activated");
});
