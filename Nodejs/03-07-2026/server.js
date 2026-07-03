import express, { urlencoded } from 'express';
import dotenv from 'dotenv'
import dns from'dns'
import path from 'path'
import { fileURLToPath } from 'url';
import { connectDB } from './src/config/db.js';
import StudentRouter from './src/Routes/studentRoutes.js';

dotenv.config({
  path:'./.env'
})

dns.setServers(["8.8.8.8" , "8.8.4.4"])

app.set('view engine', 'ejs'); 

connectDB()

const app = express()

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

console.log(__filename);

console.log(__dirname);

app.use(urlencoded({extended:true}))
app.use(express.json())

// static folder

app.use(express.static(path.join(__dirname , 'public')));

// Home Route

app.get('/' , (req , res) => {
  res.redirect("/students")
})

// Student Routes

app.use('/students' , StudentRouter)

// 404 page

app.use((req , res) => {
  res.status(404).render("404")
})

// Error Handeling

app.use((err , req , res) => {
  console.log(err.stack);

  res.status(500).send("Something Went Wrong")
  
})

// Server start

const port = process.env.PORT

app.listen(port , () => {
  console.log("Server running successfully.");
  console.log(`http://localhost:${port}`);

})


