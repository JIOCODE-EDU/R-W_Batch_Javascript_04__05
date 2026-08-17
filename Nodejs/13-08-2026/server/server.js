import express from 'express'
import dotenv from 'dotenv'
import dns from 'dns'
import app from './app.js'
import DBconnect from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import authRouter from './routes/authRoutes.js'
import cors from 'cors'

const server = dns.setServers(['8.8.8.8' , '8.4.8.4'])

dotenv.config({
  path:"./.env"
})

const app = express()

DBconnect()

app.use(cors())

app.use(express.json())

app.use('/api/auth' , authRouter)
app.use('/api/products',  productRoutes)
app.use('/api/orders' , orderRoutes)

app.get('/' , (req , res) => {
  res.json({
    message:"E-commerce API running!.",
    routes:{
      auth:'/api/auth',
      products:'/api/products',
      orders:'/api/orders'
    }
  })
})

app.use((err , req , res , next) => {
  console.error("Error:" , err.message);
  res.status(500).json({success:false , message:err.message})
})

const port = process.env.PORT

app.listen(port , () => {
  console.log(`Server Start : http://localhost:${port}`);
})