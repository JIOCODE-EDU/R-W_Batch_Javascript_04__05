import mongoose from "mongoose";

const DBconnect = async() => {
  try{
    let res = await mongoose.connect(process.env.MONGODB_URI)
    console.log("✅ MongoDB Conected : " , res.connection.host);
  }catch(err){
    console.log("❌ MongoDB Connection Error : " , err.message);
    process.exit(1)
  }
}

export default DBconnect