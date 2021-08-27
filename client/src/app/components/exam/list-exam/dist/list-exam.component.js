"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListExamComponent = void 0;
var core_1 = require("@angular/core");
var ListExamComponent = /** @class */ (function () {
    function ListExamComponent(examsService, studentsService) {
        this.examsService = examsService;
        this.studentsService = studentsService;
        this.displayedColumns = ['First Name'];
        this.exams = [];
        this.students = [];
        this.isLoading = false;
    }
    ListExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.examsService.getExams();
        this.studentsService.getStudents();
        this.examsSub = this.examsService
            .getExamUpdateListener()
            .subscribe(function (exams) {
            _this.isLoading = false;
            _this.exams = exams;
        });
        this.studentsSub = this.studentsService
            .getStudentsUpdateListener()
            .subscribe(function (students) {
            _this.isLoading = false;
            _this.students = students;
        });
    };
    ListExamComponent = __decorate([
        core_1.Component({
            selector: 'app-list-exam',
            templateUrl: './list-exam.component.html',
            styleUrls: ['./list-exam.component.css']
        })
    ], ListExamComponent);
    return ListExamComponent;
}());
exports.ListExamComponent = ListExamComponent;
