import connectDB from "./src/config/db.js";
import express from 'express'
import dotenv from 'dotenv'
import dns from 'dns'
import router from "./src/routes/authRoutes.js";
import cors from 'cors'
import { auth } from './src/middleware/authMiddleware.js'
import { dashboardPage } from './src/controllers/authControllers.js'
import { fileURLToPath } from "url";
import path from 'path'

dotenv.config({path:"./.env"})
dns.setServers(["8.8.8.8" , "8.8.4.4"])

const app = express()
const port = process.env.PORT
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
// app.use(cookieParser())
app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"))
app.use(express.static(path.join(__dirname , "public")))

app.get("/" , (req , res) => {
  res.render("home")
})
app.get("/login" , (req , res) => {
  res.render("login")
})
app.get("/register" , (req , res) => {
  res.render("register")
})
app.get("/dashboard" , auth , dashboardPage)

app.use("/auth" , router)

app.listen(port , () => {
  connectDB()
  console.log(`http://localhost:${port}`);
})