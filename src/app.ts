import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { studentRoute } from './app/Modules/Student/Student.route'
const app: Application = express()

// perser
app.use(express.json())
app.use(cors())
app.use('/api/v1/student', studentRoute)
app.use('/api/v1/students', studentRoute)
app.get('/', async (req: Request, res: Response) => {
  const a: string = 'Welcome to my server';
  res.send(a)
})

export default app;
