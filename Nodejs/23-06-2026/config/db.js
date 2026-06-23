import mongoose from "mongoose";

const uri = "mongodb+srv://rw5vivekmk_db_user:ifmdac800@cluster0.6vyxvpz.mongodb.net/?appName=Cluster0"

const connectDB = async() => {
  try{
    await mongoose.connect(uri)
    console.log("MongoDB Connected Successfully.");
  }catch(err){
    console.error("MongoDB Connection Error :", err.message);
    process.exit(1);
  }
}

export default connectDB


