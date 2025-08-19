const express = require('express');
const app = express();


const PORT = 5000;


app.get('/',(req,res)=>{
    res.json({Message:"Server is Running"});
})


app.use('/api/blog/articles',require('./routes/articleRoutes'))

app.listen(PORT,()=>{
    console.log(`Port Running on ${PORT}`);
    
})
