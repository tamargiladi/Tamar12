import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
  templateUrl: './signup.component.html',
})
export class SignUpComponent {
  isLoading = false
  formSent = false
  constructor(public authService: AuthService) {}

  onSignup(form: NgForm) {
    this.formSent = true
    console.log(form.value)
    this.authService.createUser(form.value.email, form.value.password)
  }
}
