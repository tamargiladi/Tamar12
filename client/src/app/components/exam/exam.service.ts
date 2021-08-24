import { Injectable } from '@angular/core'
import { Exam } from './exam.model'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators'

import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private exams: Exam[] = []
  private examsUpdated = new Subject<Exam[]>()

  constructor(private http: HttpClient, private router: Router) {}
  getExamUpdateListener() {
    return this.examsUpdated.asObservable()
  }

  addExam(title: string, teacher: string) {
    const exam: Exam = {
      id: null,
      title: title,
      teacher: teacher,
      students: null,
    }
    this.http
      .post<{ message: string }>('http://localhost:3000/api/exams', exam)
      .subscribe((responseData) => {
        this.exams.push(exam)
        this.examsUpdated.next([...this.exams])
        this.router.navigate(['/'])
      })
  }

  getExams() {
    console.log('--->getExams()')
    this.http
      .get<{ message: string; exams: any }>('http://localhost:3000/api/exams')
      .pipe(
        map((examData) => {
          return examData.exams.map((post) => {
            return {
              title: post.title,
              teacher: post.teacher,
              id: post._id,
            }
          })
        })
      )
      .subscribe((transformedPosts) => {
        this.exams = transformedPosts
        this.examsUpdated.next([...this.exams])
      })
  }

  getExam(id: string) {
    return this.http.get<{
      _id: string
      title: string
      teacher: string
      students: any
    }>('http://localhost:3000/api/exams/' + id)
  }
}
