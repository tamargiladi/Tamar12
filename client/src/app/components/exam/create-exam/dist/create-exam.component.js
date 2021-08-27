"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateExamComponent = void 0;
var core_1 = require("@angular/core");
var CreateExamComponent = /** @class */ (function () {
    function CreateExamComponent(examsService, groupsService, route) {
        this.examsService = examsService;
        this.groupsService = groupsService;
        this.route = route;
        this.enteredTitle = '';
        this.enteredTeacher = '';
        this.isLoading = false;
        this.mode = 'create';
    }
    CreateExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('examId')) {
                _this.mode = 'edit';
                _this.examId = paramMap.get('examId');
                _this.isLoading = true;
                _this.examsService.getExam(_this.examId).subscribe(function (examData) {
                    _this.isLoading = false;
                    _this.exam = {
                        id: examData._id,
                        title: examData.title,
                        teacher: examData.teacher,
                        students: examData.students
                    };
                });
            }
            else {
                _this.mode = 'create';
                _this.examId = null;
            }
        });
        this.groupsService.getGroups();
        this.groupsSub = this.groupsService
            .getGroupsUpdateListener()
            .subscribe(function (groups) {
            _this.isLoading = false;
            _this.groups = groups;
        });
    };
    CreateExamComponent.prototype.onAddExam = function (form) {
        if (form.invalid) {
            return;
        }
        console.log(form.value.title);
        this.examsService.addExam(form.value.title, form.value.teacher);
        form.resetForm();
    };
    CreateExamComponent = __decorate([
        core_1.Component({
            selector: 'app-create-exam',
            templateUrl: './create-exam.component.html',
            styleUrls: ['./create-exam.component.css']
        })
    ], CreateExamComponent);
    return CreateExamComponent;
}());
exports.CreateExamComponent = CreateExamComponent;
