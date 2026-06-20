import { home , addPage , insertData , deleteData , editData , updateData } from "../controllers/studentController.js";
import { Router } from "express";

const router = Router()

router.get('/' , home)
router.get('/addStudent' , addPage)
router.post('/insertData' , insertData)
router.get('/deleteData' , deleteData)
router.get('/editData' , editData)
router.post('/updateData' , updateData)

export default router

