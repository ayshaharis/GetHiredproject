
const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:String,
    phone:Number,
    password:String,
    confirmpassword:String

});
module.exports=mongoose.model("User",userSchema);