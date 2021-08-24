import { Student } from '../student/student'

export interface Exam {
  id: string
  title: string
  teacher: string
  students: Student[]
}
