import { Injectable } from '@angular/core'
import { Student } from './student.model'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators'

import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = []
  private studentsUpdated = new Subject<Student[]>()

  private studentsIds: string[] = []
  constructor(private http: HttpClient, private router: Router) {}

  getStudentsUpdateListener() {
    return this.studentsUpdated.asObservable()
  }

  addStudent(firstName: string, lastName: string, groupId: string) {
    const student: Student = {
      id: null,
      firstName: firstName,
      lastName: lastName,
      groupId: groupId,
    }
    this.http
      .post<{ message: string }>('http://localhost:3000/api/students', student)
      .subscribe((responseData) => {
        this.students.push(student)
        this.studentsUpdated.next([...this.students])
        this.router.navigate(['/'])
      })
  }

  getStudents() {
    console.log('--->getStudents()')
    this.http
      .get<{ message: string; students: any }>(
        'http://localhost:3000/api/students'
      )
      .pipe(
        map((studentData) => {
          return studentData.students.map((student) => {
            return {
              id: student._id,
              firstName: student.firstName,
              lastName: student.lastName,
              groupId: student.groupId,
            }
          })
        })
      )
      .subscribe((transformedStudents) => {
        this.students = transformedStudents
        this.studentsUpdated.next([...this.students])
      })
  }

  getStudent(id: string) {
    return this.http.get<{
      _id: string
      firstName: string
      lastName: string
      groupId: string
    }>('http://localhost:3000/api/students' + id)
  }
}
