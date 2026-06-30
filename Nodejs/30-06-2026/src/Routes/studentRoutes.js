import { createStudent , getStudents , getStudent , updateStudent , deleteStudent , updateStudentQuery , deleteStudentByQuery } from "../controllers/studentControllers.js";
import { studentValidation , validation } from "../middleware/validator.js";
import express from 'express'


const router = express.Router()

router.post("/" , studentValidation , validation , createStudent)

router.get('/:id' , getStudent)

router.get('/' , getStudents)

router.put('/:id' , studentValidation , validation , updateStudent)

router.put('/update' , studentValidation , validation , updateStudentQuery)

router.delete('/delete' , studentValidation , validation , deleteStudentByQuery)

router.delete('/:id' , deleteStudent)