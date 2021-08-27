import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Student } from '../student.model'
import { StudentService } from '../student.service'

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  isLoading = false
  student: Student
  private mode = 'create'
  private studentId: string
  private groupIdNum: string

  constructor(
    public studentsService: StudentService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('studentId')) {
        this.mode = 'edit'
        this.studentId = paramMap.get('studentId')
        this.isLoading = true
        this.studentsService
          .getStudent(this.studentId)
          .subscribe((studentData) => {
            this.isLoading = false
            this.student = {
              id: studentData._id,
              firstName: studentData.firstName,
              lastName: studentData.lastName,
              groupId: studentData.groupId,
            }
          })
      } else {
        this.mode = 'create'
        this.studentId = null
      }
    })
  }
  onAddStudent(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.studentsService.addStudent(
      form.value.firstName,
      form.value.lastName,
      '1'
    )
    form.resetForm()
  }
}
