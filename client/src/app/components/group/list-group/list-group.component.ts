import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { GroupService } from '../group.service'
import { StudentService } from '../../student/student.service'

import { Group } from '../group.model'
import { Student } from '../../student/student.model'

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css'],
})
export class ListGroupComponent implements OnInit {
  groups: Group[] = []
  isLoading = false

  private groupsSub: Subscription

  constructor(public groupsService: GroupService) {}

  ngOnInit(): void {
    this.isLoading = true
    this.groupsService.getGroups()

    this.groupsSub = this.groupsService
      .getGroupsUpdateListener()
      .subscribe((groups: Group[]) => {
        this.isLoading = false
        this.groups = groups
      })
  }
}
