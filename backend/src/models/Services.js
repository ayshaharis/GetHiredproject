const mongoose=require('mongoose');
const serviceSchema=new mongoose.Schema({
    name:String,
    phone:String,
    location:String,
    skill:String
});
module.exports=mongoose.model("Service",serviceSchema);