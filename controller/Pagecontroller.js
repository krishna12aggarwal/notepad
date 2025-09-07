const Page = require("../model/Page");

async function createData(params) {
  if (!params.title || !params.content||!params.author) {
    throw Error("Cant be Empty!");
  }
  const sav = await Page.create({
    title: params.title,
    author: params.author,
    content: params.content,
  });
}
async function getAllData() {
  const data = await Page.find();
  if(data)
  return data;
else throw Error("server error");
}
module.exports = { createData,getAllData };
