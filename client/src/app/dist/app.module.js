"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
//Components
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header/header.component");
var login_form_component_1 = require("./components/login-form/login-form.component");
var enter_home_component_1 = require("./pages/enter-home/enter-home.component");
var login_component_1 = require("./auth/login/login.component");
var signup_component_1 = require("./auth/signup/signup.component");
var create_exam_component_1 = require("./components/exam/create-exam/create-exam.component");
var list_exam_component_1 = require("./components/exam/list-exam/list-exam.component");
//Moodules
var app_routing_module_1 = require("./app-routing.module");
var toolbar_1 = require("@angular/material/toolbar");
var tabs_1 = require("@angular/material/tabs");
var animations_1 = require("@angular/platform-browser/animations");
var card_1 = require("@angular/material/card");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var forms_1 = require("@angular/forms");
var expansion_1 = require("@angular/material/expansion");
var table_1 = require("@angular/material/table");
var list_1 = require("@angular/material/list");
var create_student_component_1 = require("./components/student/create-student/create-student.component");
var list_student_component_1 = require("./components/student/list-student/list-student.component");
var conclusion_exams_component_1 = require("./components/exam/conclusion-exams/conclusion-exams.component");
var create_group_component_1 = require("./components/group/create-group/create-group.component");
var list_group_component_1 = require("./components/group/list-group/list-group.component");
var scrolling_1 = require("@angular/cdk/scrolling");
var select_1 = require("@angular/material/select");
var create_track_component_1 = require("./components/track/create-track/create-track.component");
var ngx_echarts_1 = require("ngx-echarts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                login_form_component_1.LoginFormComponent,
                enter_home_component_1.EnterHomeComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignUpComponent,
                create_exam_component_1.CreateExamComponent,
                list_exam_component_1.ListExamComponent,
                create_student_component_1.CreateStudentComponent,
                list_student_component_1.ListStudentComponent,
                conclusion_exams_component_1.ConclusionExamsComponent,
                create_group_component_1.CreateGroupComponent,
                list_group_component_1.ListGroupComponent,
                create_track_component_1.CreateTrackComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                toolbar_1.MatToolbarModule,
                tabs_1.MatTabsModule,
                animations_1.BrowserAnimationsModule,
                card_1.MatCardModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                progress_spinner_1.MatProgressSpinnerModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                expansion_1.MatExpansionModule,
                table_1.MatTableModule,
                list_1.MatListModule,
                scrolling_1.ScrollingModule,
                select_1.MatSelectModule,
                ngx_echarts_1.NgxEchartsModule.forRoot({
                    echarts: function () { return Promise.resolve().then(function () { return require('echarts'); }); }
                }),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
