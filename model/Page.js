const mongoose = require("mongoose");

const pagesSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, trim: true },
  author: { type: String, required: true, minlength: 3, trim: true },
  content: { type: String, required: true, minlength: 2, trim: true },
});

const Page = mongoose.model("Page", pagesSchema);
module.exports = Page;
