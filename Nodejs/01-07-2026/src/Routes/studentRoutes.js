import { createStudent , getStudents , getStudent , updateStudent , deleteStudent , updateStudentQuery , deleteStudentByQuery , renderAddStudent , renderEditStudent , renderViewStudent } from "../controllers/studentControllers.js";
import { studentValidation , validation } from "../middleware/validator.js";
import express from 'express'


const router = express.Router()

// Page routes (rendering)
router.get('/add', renderAddStudent)
router.post('/add', studentValidation, validation, createStudent)
router.get('/edit/:id', renderEditStudent)
router.post('/update/:id', studentValidation, validation, updateStudent)
router.get('/view/:id', renderViewStudent)
router.get('/delete/:id', deleteStudent)

// API / JSON routes
router.post("/" , studentValidation , validation , createStudent)
router.get('/' , getStudents)
router.get('/:id' , getStudent)
router.put('/:id' , studentValidation , validation , updateStudent)
router.put('/update' , studentValidation , validation , updateStudentQuery)
router.delete('/delete' , studentValidation , validation , deleteStudentByQuery)
router.delete('/:id' , deleteStudent)

export default router