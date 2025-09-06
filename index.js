const express = require('express')
const app = express();
const fs = require('fs');
const os = require('os');
const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
  res.end("Working");
})
app.listen(port,()=>{
  console.log("server activated")
})