import { EnterHomeComponent } from './pages/enter-home/enter-home.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './auth/login/login.component'
import { SignUpComponent } from './auth/signup/signup.component'

const routes: Routes = [
  { path: '', component: EnterHomeComponent },
  { path: 'login', component: SignUpComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
