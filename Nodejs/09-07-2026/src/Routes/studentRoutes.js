import { createStudent , getStudents , getStudent , updateStudent , deleteStudent , updateStudentQuery , deleteStudentByQuery , getAddForm , getEditForm } from "../controllers/studentControllers.js";
import { studentValidation , validation } from "../middleware/validator.js";
import express from 'express'


const router = express.Router()

router.post("/" , studentValidation , validation , createStudent)

router.get('/add' , getAddForm)

router.get('/' , getStudents)

router.get('/:id/edit' , getEditForm)

router.get('/:id' , getStudent)

router.put('/:id' , studentValidation , validation , updateStudent)

router.put('/update' , studentValidation , validation , updateStudentQuery)

router.delete('/delete' , studentValidation , validation , deleteStudentByQuery)

router.delete('/:id' , deleteStudent)

export default router