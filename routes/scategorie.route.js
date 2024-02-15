const express=require("express")
const router=express.Router()
const SCategorie=require("../models/scategorie")

router.get("/",async(req,res)=>{
    try {
        const scat = await SCategorie.find({}, null, {sort: {'_id': -1}}).populate("categorieID")
        res.status(200).json(scat);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
})

router.post("/",async(req,res)=>{
    const newSCategorie = new SCategorie(req.body)
    try {
    await newSCategorie.save();
    res.status(200).json(newSCategorie );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    
})
router.put("/:scategorieID",async(req,res)=>{

})
router.get("/:scategorieID",async(req,res)=>{
    try {
        const scat = await SCategorie.findById(req.params.scategorieID);
        res.status(200).json(scat);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
})
router.delete("/scategorieID",async(req,res)=>{

})
module.exports=router