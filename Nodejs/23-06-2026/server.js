import express from 'express'
import connectDB from './config/db.js'
import Student from './models/studentModel.js'

const port = 8001

const app = express()

app.use(express.json())


app.get("/" , (req , res) => {
  res.send("Server Running....")
})

app.listen(port , () => {
  console.log(`Server start on port ${port}`);
  connectDB()
})