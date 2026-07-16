import express from 'express'
import uploadFile from '../controllers/upload.controllers.js'
import multer from 'multer'
import path from 'path'

const router = express.Router()

// configuration

const storage = multer.diskStorage({
  destination:(req , file , cb) => cb(null , "uploads/"),
  filename:(req , file , cb) => cb(null , Date.now() + path.extname(file.originalname)),
})

const upload = multer({storage})

router.post("/" , upload.single("file") , uploadFile)

export default router