import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { ExamService } from '../exam.service'
import { StudentService } from '../../student/student.service'

import { Exam } from '../exam.model'
import { Student } from '../../student/student.model'

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.css'],
})
export class ListExamComponent implements OnInit {
  displayedColumns = ['First Name']

  exams: Exam[] = []
  students: Student[] = []
  isLoading = false
  private examsSub: Subscription
  private studentsSub: Subscription

  constructor(
    public examsService: ExamService,
    public studentsService: StudentService
  ) {}

  ngOnInit(): void {
    this.isLoading = true
    this.examsService.getExams()
    this.studentsService.getStudents()

    this.examsSub = this.examsService
      .getExamUpdateListener()
      .subscribe((exams: Exam[]) => {
        this.isLoading = false
        this.exams = exams
      })
    this.studentsSub = this.studentsService
      .getStudentsUpdateListener()
      .subscribe((students: Student[]) => {
        this.isLoading = false
        this.students = students
      })
  }
}
