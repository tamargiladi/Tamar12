import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Exam } from '../exam.model'
import { ExamService } from '../exam.service'
@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css'],
})
export class CreateExamComponent {
  enteredTitle = ''
  enteredTeacher = ''
  isLoading = false
  exam: Exam
  private mode = 'create'
  private examId: string

  constructor(public examsService: ExamService, public route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit'
        this.examId = paramMap.get('postId')
        this.isLoading = true
        this.examsService.getExam(this.examId).subscribe((examData) => {
          this.isLoading = false
          this.exam = {
            id: examData._id,
            title: examData.title,
            teacher: examData.teacher,
            students: examData.students,
          }
        })
      } else {
        this.mode = 'create'
        this.examId = null
      }
    })
  }

  onAddExam(form: NgForm) {
    if (form.invalid) {
      return
    }
    console.log(form.value.title)
    this.examsService.addExam(form.value.title, form.value.teacher)
    form.resetForm()
  }
}
