import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },

  item:[
    {
      product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
      },
      quantity:{
        type:Number,
        required:true,
        min:1
      },
      price:{
        type:Number,
        required:true
      }
    }
  ],

  // total bill amount

  totalAmount:{
    type:Number,
    reuired:true
  },

  // order status

  status:{
    type:String,
    enum:["Pending" , "Processing" , "Shiped" , "Delivered" , "Cancelled"],
    default:"Pending"
  },

  address:{
    type:String,
    required:true
  }
} , {timestamps:true})