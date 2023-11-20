export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type student = {
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  parmanentAddress: string
  guardian: Guardian
  profileImg?: string
  isActive: 'active' | 'offline'
}
