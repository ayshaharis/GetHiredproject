const router=require('express').Router();
const User=require("../src/models/User");
const bcrypt=require('bcryptjs');

router.post("/register",async(req,res)=>{
  //checking the phonenumber already exits in db

const phoneExist=await User.findOne({
    phone:req.body.phone
});
if (phoneExist) return res.status(400).send("Phone already registered");



//hash password
const salt=await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(req.body.password,salt);

//create new user
    const user=new User({
    name:req.body.name,
    phone:req.body.phone,
    password:hashedPassword,
    confirmpassword:hashedPassword

    });


    try {
        const savedUser=await user.save();
        res.send(savedUser);
    } catch (error) {
         res.status(400).send(error);
    }
    res.send("user registered");

    
});

router.post("/login",async(req,res)=>{
    //checking email id in db

    const user=await User.findOne({phone:req.body.phone});
    if (!user) return res.status(400).send("phone number wrong");

    //checking password

    const  validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send("password incorrect");

});
module.exports=router;