const router=require('express').Router();
const { Router } = require('express');
const { isImportEqualsDeclaration } = require('typescript');
const Services=require('../src/models/Services');



//get all services 

router.get('/',async(req,res)=>{
    try {
        const services=await Services.find();
        res.json(services);
    } catch (error) {
        res.json({message:error})
    }
});


//get all electrical workers
router.get('/electrical',async(req,res)=>{
    try {
        const electricalservice=await Services.find({})
        .where('skill').equals('electrical');
        res.json(electricalservice);
    } catch (error) {
        res.json({message:error});
    }
});

//get all photographers

router.get('/photography',async(req,res)=>{
    try {
        const photographyservice=await Services.find({})
        .where('skill').equals('photography');
        res.json(photographyservice);
    } catch (error) {
        res.json({message:error});
    }
});

//get all plumbers
router.get('/plumbing',async (req,res)=>{
    try {
        const plumbingservices=await Services.find({})
    .where('skill').equals('plumbing');
    res.send(plumbingservices);
    } catch (error) {
        res.json({message:error});
    }
   
});
//get all carpenters
router.get('/carpenter',async (req,res)=>{
    try {
        const carpentryservice=await Services.find({})
        .where('skill').equals('carpenter');
        res.send(carpentryservice);
    } catch (error) {
       res.json({message:error}) 
    }
})



//get all painters

router.get('/painter',async(req,res)=>{
    try {
        const paintingservice=await Services.find({})
        .where('skill').equals('painter');
        res.send(paintingservice);
    } catch (error) {
        res.json({message:error})
    }
});


//get all landscape designers

router.get('landscapedesigners',async (req,res)=>{
    try {
        const landscapedesigner=await Services.find({})
        .where('skill').equals('landscape designer');
        res.send(landscapedesigner);
    } catch (error) {
        res.json({message:error})
    }
});

//post a service

router.post('/',async(req,res)=>{
    const services=new Services({
        name:req.body.name,
        phone:req.body.phone,
        location:req.body.location,
        skill:req.body.skill
    });
    try {
        const savedServices=await services.save();
        res.send(savedServices);
    } catch (error) {
        res.status(400).send(error);
    }
});









module.exports=router;