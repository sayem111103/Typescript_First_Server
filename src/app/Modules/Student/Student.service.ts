import { StudentModel } from '../Student.model'
import { student } from './Student.interface'

const createStudentIntoDb = async (data: student) => {
  try {
    const result = await StudentModel.create(data)
    return result
  } catch (error) {
    return error
  }
}

const getAllStudentsFromDB = async () => {
  try {
    const result = await StudentModel.find()
    return result
  } catch (error) {
    return error
  }
}

const getSingleStudent = async (id: string) => {
  try {
    const result = await StudentModel.findOne({ _id: id })
    return result
  } catch (error) {
    return error
  }
}

export const studentServices = {
  createStudentIntoDb,
  getAllStudentsFromDB,
  getSingleStudent,
}
