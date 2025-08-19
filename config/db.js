const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
      const conn =  await mongoose.connect("mongodb+srv://nodeApi:UYGjrcq3Lb0EXj07@nodeapi-cluster.umxhbid.mongodb.net/MERN02")
      console.log(`MongoDB Connected To ${conn.connection.host}`);
      
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;     