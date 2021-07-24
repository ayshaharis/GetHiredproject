const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@gethiredfiles.bpm79.mongodb.net/gethired?retryWrites=true&w=majority');
const Schema=mongoose.Schema;

var SignupSchema=new Schema({
    name:String,
    phone:Number,
    password:String,
    confirmpassword:String

});

var SignUpData= mongoose.model('SignUp',SignupSchema);
module.exports=SignUpData;
