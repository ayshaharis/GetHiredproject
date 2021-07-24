const router=require("express").Router();

//add new services
router.post("/",(req,res)=>{
    res.send("add new services");
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