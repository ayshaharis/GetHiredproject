const router=require("express").Router();
const Listing=require("../src/models/Listing");
const verifyToken=require('../routes/verifyToken');
//get all listings
router.get("/",async (req,res)=>{
   try {
       const listing=await Listing.find();
       res.json(listing)
   } catch (error) {
       res.json({message:error});
   }
});


//add a listing

router.post("/",verifyToken,async(req,res)=>{
    const listing=new Listing({
        title:req.body.title,
        price:req.body.price,
        locality:req.body.locality,
        details:req.body.details
    });
    try {
        const savedListing=await listing.save();
        res.send(savedListing)
    } catch (error) {
        res.status(400).send(error);
        
    }
});



//single listing
router.get("/:listingId",verifyToken,async(req,res)=>{
    try {
        const listing=await Listing.findById(req.params.listingId)
        res.json(listing);
    } catch (error) {
        res.json({message:error})
    }
});

//update listing

router.put("/:listingId",verifyToken,async(req,res)=>{
    try {
        const listing={
            title:req.body.title,
            price:req.body.price,
            locality:req.body.locality,
            details:req.body.details
        };
        const updatedListing=await Listing.findByIdAndUpdate({_id : req.params.listingId},listing);
        res.json(updatedListing);
    } catch (error) {
        res.json({message:error});
        
    }
});

//delete listing
router.delete("/:listingId",verifyToken,async(req,res)=>{
    try {
        const removeListing=await Listing.findByIdAndDelete(req.params.listingId);
        res.json(removeListing);
        
    } catch (error) {
        res.json({message:error});
        
    }
});


module.exports=router;


