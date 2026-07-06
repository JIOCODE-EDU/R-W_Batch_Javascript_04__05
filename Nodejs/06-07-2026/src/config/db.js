import mongoose from "mongoose";

export const connectDB = async() => {
  try{
    let connect = await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected Successfully...." , `${connect.connection.host}`);     
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}