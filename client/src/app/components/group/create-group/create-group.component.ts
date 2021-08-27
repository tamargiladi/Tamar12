import { Component, OnInit } from '@angular/core'
import { Group } from '../group.model'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { GroupService } from '../group.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css'],
})
export class CreateGroupComponent implements OnInit {
  isLoading = false
  group: Group
  private students = ['11', '12']
  private mode = 'create'
  private groupId: string

  constructor(
    public groupService: GroupService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('groupId')) {
        this.mode = 'edit'
        this.groupId = paramMap.get('groupId')
        this.isLoading = true
        this.groupService.getGroup(this.groupId).subscribe((groupData) => {
          this.isLoading = false
          this.group = {
            id: groupData._id,
            title: groupData.title,
            groupId: groupData.groupId,
            students: groupData.students,
          }
        })
      } else {
        this.mode = 'create'
        this.groupId = null
      }
    })
  }

  onAddGroup(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.groupService.addGroup(form.value.title, '1', this.students)
  }
}
