import { Injectable } from '@angular/core'
import { Group } from './group.model'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators'

import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private groups: Group[] = []
  private groupsUpdated = new Subject<Group[]>()

  constructor(private http: HttpClient, private router: Router) {}

  getGroupsUpdateListener() {
    return this.groupsUpdated.asObservable()
  }

  addGroup(title: string, groupId: string, students: string[]) {
    const group = {
      id: null,
      title: title,
      groupId: groupId,
      students: students,
    }
    this.http
      .post<{ message: string }>('http://localhost:3000/api/groups', group)
      .subscribe((responseData) => {
        this.groups.push(group)
        this.groupsUpdated.next([...this.groups])
        this.router.navigate(['/'])
      })
  }

  getGroups() {
    console.log('---->getGroups()')
    this.http
      .get<{ message: string; groups: any }>('http://localhost:3000/api/groups')
      .pipe(
        map((groupData) => {
          return groupData.groups.map((group) => {
            //TODO:WHY THERE IS RETURN TWICE?
            return {
              id: group._id,
              title: group.title,
              groupId: group.groupId,
              students: group.students,
            }
          })
        })
      )
      .subscribe((transformedGroups) => {
        this.groups = transformedGroups
        this.groupsUpdated.next([...this.groups])
      })
  }

  getGroup(id: string) {
    return this.http.get<{
      _id: string
      title: string
      groupId: string
      students: string[]
    }>('http://localhost:3000/api/groups/' + id)
  }
}
