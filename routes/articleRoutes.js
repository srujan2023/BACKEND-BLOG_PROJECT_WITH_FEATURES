const express = require('express')
const { ListArticles, ListSingleArticle, CreateArticle, UpdateArticle, DeleteArticle } = require('../Controllers/articleController')
const router = express.Router()

//List All Articles
router.get('/',ListArticles)


//List Single Article
router.get('/:articleId',ListSingleArticle)

//Create Article
router.post('/',CreateArticle)


router.put('/:articleId',UpdateArticle)

router.delete('/:articleId',DeleteArticle)

module.exports = router;