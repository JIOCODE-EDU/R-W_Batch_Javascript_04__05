import express from "express"
import {register  , login , dashboard , logout} from '../controllers/authControllers.js'
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

router.get(
  "/logout",
  auth,
  logout
)

export default router
