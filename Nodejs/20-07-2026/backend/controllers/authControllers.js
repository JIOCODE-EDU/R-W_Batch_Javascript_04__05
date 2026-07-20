import userModel from '../models/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator";


const register = async(req , res) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    res.status(400).json(errors.array())
  }

  const {name , email , password} = req.body

  const exist = await userModel.findOne({email})

  if(exist){
    return res.status(400).json({message:"Email Already Exists."})
  }

  const hash = await bcrypt.hash(password , 10)

  const user = await userModel.create({
    name,
    email,
    password:hash
  })

  res.status(201).json({
    success:true,
    user
  })
}