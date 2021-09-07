const express=require("express");
const router=express.Router();
const signupdata=require('../src/models/signupdata');


router.post("",async(req,res)=>{

    const signup=new signupdata({
        name:req.body.name,
        phone:req.body.phone,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword
    });
    try {
        const savedsignup=await signup.save();
        res.send(savedsignup);
    } catch (error) {
        res.status(400).send(error)
    }
    
});

module.exports=router;