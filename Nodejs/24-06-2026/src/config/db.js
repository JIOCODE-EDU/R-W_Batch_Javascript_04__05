import mongoose from "mongoose";

const connectDB = async() => {
  try{
    let connect = await mongoose.connect(`${process.env.MONGODB_URI}`, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    })
    console.log(`MongoDB connected!! ${connect.connection.host}`);
    
  }catch(error){
    console.log("MongoDb Connection Error" , error.message);
    process.exit(1)
  }
}

export default connectDB