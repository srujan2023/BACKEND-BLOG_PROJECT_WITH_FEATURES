const express = require('express');
const app = express();
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
dotenv.config()



const PORT = 5000;

connectDB()
app.use(cors())

app.use(express.json());



app.get('/',(req,res)=>{
    res.json({Message:"Server is Running"});
})


app.use('/api/blog/articles',require('./routes/articleRoutes'))
app.use('api/upload',require('./routes/uploadRoutes'))

//app.use('uploads',express.static('uploads'))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(PORT,()=>{
    console.log(`Port Running on ${PORT}`);
    
})
