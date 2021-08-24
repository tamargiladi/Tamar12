import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { ExamService } from '../exam.service'
import { Exam } from '../exam.model'

import { Student } from '../../student/student'

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.css'],
})
export class ListExamComponent implements OnInit {
  displayedColumns = ['First Name']

  exams: Exam[] = []
  isLoading = false
  private examsSub: Subscription

  constructor(public examsService: ExamService) {}

  ngOnInit(): void {
    this.isLoading = true
    this.examsService.getExams()
    this.examsSub = this.examsService
      .getExamUpdateListener()
      .subscribe((exams: Exam[]) => {
        this.isLoading = false
        this.exams = exams
      })
  }
}
