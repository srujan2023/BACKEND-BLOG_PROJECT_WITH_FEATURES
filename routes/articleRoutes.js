const express = require('express')
const router = express.Router()
const articleModel = require('../Model/articleModel')

//List All Articles
router.get('/',(req,res)=>{
    res.json({Message:"List All Articles"})
})

//List Single Article
router.get('/:articleId',(req,res)=>{
    res.json({Message:"List Single Article"})
})

router.post('/',(req,res)=>{
    res.json({Message:"Create Article"})
})


router.put('/:articleId',(req,res)=>{
    res.json({Message:"Update Article"})
})

router.delete('/:articleId',(req,res)=>{
    res.json({Message:"Delete Article"})
})

module.exports = router;