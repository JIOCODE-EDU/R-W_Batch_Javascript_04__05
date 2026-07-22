import mongoose from 'mongoose'

const connectDB = async() => {
  try{
    let res = await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB Connected!" , res.connection.host);
    
  }catch(err){
    console.log(err.message);
    process.exit(1)
  }
}

export default connectDB