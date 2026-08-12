import express from 'express'
import {register , login , getProfile , getAllUsers} from '../controllers/authControllers.js'
import { verifyToken , verifyAdmin } from '../middleware/authMiddleware.js'

const authRouter = express.Router()

authRouter.post('/register' , register)
authRouter.post('/login' , login)
authRouter.get("/profile" , verifyToken , getProfile)
authRouter.get('/users' , verifyToken , verifyAdmin , getAllUsers)

export default authRouter



