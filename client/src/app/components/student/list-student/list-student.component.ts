import { Component, OnInit } from '@angular/core'

import { Student } from '../student.model'
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  constructor() {}

  students: Student[] = []
  isLoading = false
  ngOnInit(): void {
    
  }
}
