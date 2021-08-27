import { Student } from '../student/student.model'

export interface Exam {
  id: string
  title: string
  teacher: string
  students: Student[]
}
