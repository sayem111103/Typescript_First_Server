import { Schema, model } from 'mongoose'
import { Guardian, UserName, student } from './Student/Student.interface'

const userName = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
})

const guardian = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})

const StudentSchema = new Schema<student>({
  name: userName,
  gender: { type: String, enum: ['male', 'female'], required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  guardian: guardian,
  profileImg: { type: String },
  isActive: { type: String, enum: ['active', 'offline'], required: true },
})

export const StudentModel = model<student>('Student', StudentSchema)
