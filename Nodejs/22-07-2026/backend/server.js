import connectDB from "./src/config/db.js";
import express from 'express'
import dotenv from 'dotenv'
import dns from 'dns'
import router from "./src/routes/authRoutes.js";
import cors from 'cors'

dotenv.config({path:"./.env"})

dns.setServers(["8.8.8.8" , "8.8.4.4"])

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use(cors())

app.use("/api/auth" , router)

app.get("/" , (req , res) => {
  res.send("Welcome to Register and Login API")
})

app.listen(port , () => {
  connectDB()
  console.log(`http://localhost:${port}`);
})