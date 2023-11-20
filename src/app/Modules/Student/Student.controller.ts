import { Request, Response } from 'express'
import { studentServices } from './Student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body
    const result = await studentServices.createStudentIntoDb(student)
    res.status(200).send({
      success: true,
      message: 'student created successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB()
    res.status(200).send({
      success: true,
      message: 'All students retrieved successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await studentServices.getSingleStudent(id)
    res.status(200).send({
      success: true,
      message: 'All students retrieved successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudents
}
