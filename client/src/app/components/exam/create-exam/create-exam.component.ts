import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Exam } from '../exam.model'
import { ExamService } from '../exam.service'
import { Group } from '../../group/group.model'

import { GroupService } from '../../group/group.service'
import { Subscription } from 'rxjs'

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
  group: Group
  groups: Group[]
  private groupsSub: Subscription

  private mode = 'create'
  private examId: string
  private groupIdNum: string

  constructor(
    public examsService: ExamService,
    public groupsService: GroupService,
    public route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('examId')) {
        this.mode = 'edit'
        this.examId = paramMap.get('examId')
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

    this.groupsService.getGroups()

    this.groupsSub = this.groupsService
      .getGroupsUpdateListener()
      .subscribe((groups: Group[]) => {
        this.isLoading = false
        this.groups = groups
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
