const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
},{
    timestamps:true
})
module.exports = mongoose.model('Article02',ArticleSchema)