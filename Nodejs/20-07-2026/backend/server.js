import connectDB from "./config/db.js";
import express from 'express'
import dotenv from 'dotenv'
import dns from 'dns'

dotenv.config({
  path:"./.env"
})

dns.setServers(["8.8.8.8" , "8.8.4.4"])

const app = express()
const port = process.env.PORT

app.listen(port , () => {
  connectDB()
  console.log(`http://localhost:${port}`);
})