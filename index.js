const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const pageRouter = require("./router/pageRouter");
const app = express();
const port = process.env.PORT || 3004;
app.use(express.urlencoded());
app.use(express.static(__dirname+ "/public/"))
const layout = require("express-ejs-layouts");
app.set("view engine","ejs");
app.set("views", __dirname + "/views");
app.set("layout","layout");
app.use(layout);
mongoose
  .connect(process.env.key)
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error("MongoDB connection error", err));

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});
app.use(express.json());
app.use("/pages", pageRouter);
app.get("/", (req, res) => {
  res.status(200);
  res.render("index",{title: "home"})
});
app.get("/about",(req,res)=>{
  res.status(200).render("about",{title:"about"})
})
app.listen(port, () => {
  console.log("Server activated on port", port);
});
