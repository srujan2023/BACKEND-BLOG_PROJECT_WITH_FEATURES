const articleModel = require('../Model/articleModel')

const ListArticles = async(req,res)=>{
   try {
    const articles = await articleModel.find();
    return res.json({articles})
   } catch (error) {
    console.log(error); 
   }}

   const ListSingleArticle = async(req,res)=>{
   try {
    const article = await articleModel.findById(req.params.articleId,req.body)
    return res.json({article});
   } catch (error) {
    console.log(error);
   }
}

const CreateArticle = async(req,res)=>{
  try {
    const Article = await articleModel.create(req.body);
    return res.json({Article});
  } catch (error) {
    console.log(error);
  }
}

const UpdateArticle = async(req,res)=>{
   try {
    const Article = await articleModel.findByIdAndUpdate(req.params.articleId,req.body,{new:true});
    return res.json({Article})
   } catch (error) {
    console.log(error);
   }
}

const DeleteArticle = async(req,res)=>{
try {
    const Article = await articleModel.findByIdAndDelete(req.params.articleId,req.body)
    return res.json({Article})
} catch (error) {
    console.log(error);  
}
}

   module.exports = {ListArticles,ListSingleArticle,CreateArticle,UpdateArticle,DeleteArticle}