import express, { Router } from 'express'
import { studentController } from './Student.controller'
const router: Router = express.Router()

router.post('/create-student', studentController.createStudent)
router.get('/allstudents', studentController.getAllStudents)
router.get('/allstudents/:id', studentController.getSingleStudents)

export const studentRoute = router;
