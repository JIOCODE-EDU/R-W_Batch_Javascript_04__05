import userModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

const register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json(errors.array());
  }

  const { name, email, password } = req.body;

  const exist = await userModel.findOne({ email });

  if (exist) {
    return res.status(400).json({ message: "Email Already Exists." });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    name,
    email,
    password: hash,
  });

  res.status(201).json({
    success: true,
    user,
  });
};

const login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json(errors.array());
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User Not Found!",
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({
      message: "Invalid Password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  res.json({
    success:true,
    token
  })
};

const dashboard = async(req , res) => {
  const user = await User.findById(req.user.id).select("_password")
  res.json({
    success:true,
    user
  })
}


