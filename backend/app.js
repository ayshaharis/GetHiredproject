const express=require('express');
const SignupData=require('./src/models/signupdata')
const cors=require('cors');
var bodyparser=require('body-parser');
const app=express();
app.use(cors());
app.use(bodyparser.json())






app.listen(3000,()=>console.log("server up and running on port 4000!"));
module.exports=app;
