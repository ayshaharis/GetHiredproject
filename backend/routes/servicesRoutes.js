const express=require("express");
const router=express.Router();
const Servicesdata=require('../src/models/Servicesdata');


//add new services
router.post("/",async(req,res)=>{
    const services=new Servicesdata({
        name:req.body.name,
        details:req.body.details
    });
    try {
        const savedServices=await services.save();
        res.send(savedServices);
    } catch (error) {
        res.status(400).send(error)
    }
});


//get all services
router.get("/",(req,res)=>{
    res.send("all services");
});

//single service
router.get("/:serviceId",(req,res)=>{
    res.send("single service");
});

//single service
router.put("/:serviceId",(req,res)=>{
    res.send("update service");
});

//delete service
router.delete("/:serviceId",(req,res)=>{
    res.send("update service");
});


module.exports=router;