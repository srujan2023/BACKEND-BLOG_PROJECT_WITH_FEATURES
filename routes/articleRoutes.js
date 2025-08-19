const express = require('express')
const router = express.Router()
const articleModel = require('../Model/articleModel')

//List All Articles
router.get('/',async(req,res)=>{
   try {
    const Article = await articleModel.find();
    return res.json({Article})
   } catch (error) {
    console.log(error); 
   }})

//List Single Article
router.get('/:articleId',async(req,res)=>{
   try {
    const Article = await articleModel.findById(req.params.articleId,req.body)
    return res.json({Article});
   } catch (error) {
    console.log(error);
   }
})

router.post('/',async(req,res)=>{
  try {
    const Article = await articleModel.create(req.body);
    return res.json({Article});
  } catch (error) {
    console.log(error);
  }
})


router.put('/:articleId',async(req,res)=>{
   try {
    const Article = await articleModel.findByIdAndUpdate(req.params.articleId,req.body,{new:true});
    return res.json({Article})
   } catch (error) {
    console.log(error);
   }
})

router.delete('/:articleId',async(req,res)=>{
try {
    const Article = await articleModel.findByIdAndDelete(req.params.articleId,req.body)
    return res.json({Article})
} catch (error) {
    console.log(error);  
}
})

module.exports = router;