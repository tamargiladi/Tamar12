import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
//Components
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { EnterHomeComponent } from './pages/enter-home/enter-home.component'
import { LoginComponent } from './auth/login/login.component'
import { SignUpComponent } from './auth/signup/signup.component'
import { CreateExamComponent } from './components/exam/create-exam/create-exam.component'
import { ListExamComponent } from './components/exam/list-exam/list-exam.component'

//Moodules
import { AppRoutingModule } from './app-routing.module'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTabsModule } from '@angular/material/tabs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatTableModule } from '@angular/material/table'
import { MatListModule } from '@angular/material/list'
import { CreateStudentComponent } from './components/student/create-student/create-student.component'
import { ListStudentComponent } from './components/student/list-student/list-student.component'
import { ConclusionExamsComponent } from './components/exam/conclusion-exams/conclusion-exams.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    EnterHomeComponent,
    LoginComponent,
    SignUpComponent,
    CreateExamComponent,
    ListExamComponent,
    CreateStudentComponent,
    ListStudentComponent,
    ConclusionExamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
