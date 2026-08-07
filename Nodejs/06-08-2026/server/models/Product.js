import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  description:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true,
    min:0
  },
  category:{
    type:String,
    required:true,
    enum:["Electronics" , "Books" , "Clothing" , "Food" , "Sports"],
  },
  image:{
    type:String,
    default:"https://static.thenounproject.com/png/default-image-icon-4595376-512.png"
  },
  stock:{
    type:Number,
    default:0,
    min:0
  },

  // admin added product

  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

} , {timestamps:true})

const Product = mongoose.model("Product" , productSchema)

export default Product