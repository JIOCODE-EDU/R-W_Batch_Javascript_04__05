import connectDB from "./config/db.js";
import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
  path:"./.env"
})

const app = express()
const port = process.env.PORT

app.listen(port , () => {
  console.log(`http://localhost:${port}`);
})