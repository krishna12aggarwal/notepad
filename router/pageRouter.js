const express = require("express");
const router = express.Router();
const handler = require("../controller/Pagecontroller");
router.use(express.urlencoded({extended:true}));
router.get("/", async (req, res) => {
  res.render("form",{title: "New Note"});
});
router.use(express.json());
router.post("/new",async(req,res)=>{
  try{
await handler.createData(req.body);
res.render("new",{title: "added new post"})
  }
  catch(err) {
    res.status(404);
    res.render("err",{title:"Error",Error:err})}
})
router.get("/get",async(req,res)=>{
  try{
const data  = await handler.getAllData();
res.json(data);
  }
  catch(err){
    res.status(501);
    res.render("err", { title: "Error", Error: err });
  }
})


module.exports = router;
