import express from 'express'
import DBconnect from './config/db.js'

const app = express()

app.use(express.json())

app.get("/" , (req , res) => {
  res.send("Welcome to Express....")
})

export default app