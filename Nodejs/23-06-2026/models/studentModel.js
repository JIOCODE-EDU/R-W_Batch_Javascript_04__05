import mongoose from "mongoose";
import { type } from "node:os";

const studentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  course:{
    type:String,
    required:true
  }
})

const Student = mongoose.model("Student" , studentSchema)

export default Student