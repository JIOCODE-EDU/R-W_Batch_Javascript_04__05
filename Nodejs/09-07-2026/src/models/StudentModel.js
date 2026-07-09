import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  }
} , {timestamps:true})

const Students = mongoose.model("Student" , studentSchema)

export default Students