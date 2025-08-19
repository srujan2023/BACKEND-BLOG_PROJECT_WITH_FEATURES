const express = require('express');
const app = express();
const connectDB = require('./config/db')
const dotenv = require('dotenv')
dotenv.config()



const PORT = 5000;

connectDB()



app.get('/',(req,res)=>{
    res.json({Message:"Server is Running"});
})


app.use('/api/blog/articles',require('./routes/articleRoutes'))

app.listen(PORT,()=>{
    console.log(`Port Running on ${PORT}`);
    
})
