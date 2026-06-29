import mongoose from "mongoose";

const connectDB = async() => {
  try{
    let connect = mongoose.connect(process.env.MONGODB_URI)
  }
  catch(err){
    console.log();
    
  }
}