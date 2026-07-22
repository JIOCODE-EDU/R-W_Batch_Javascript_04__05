import express from "express"
import {register  , login , dashboard} from '../../controllers/authControllers.js'
import { registerValidation , loginValidation } from '../vlidators/authValidation.js'
import { auth } from '../middleware/authMiddleware.js'


const router = express.Router()

router.post(
  "/register",
  registerValidation,
  register
)

router.post(
  "/login",
  loginValidation,
  login
)

router.get(
  "/dashboard",
  auth,
  dashboard
)

export default router
