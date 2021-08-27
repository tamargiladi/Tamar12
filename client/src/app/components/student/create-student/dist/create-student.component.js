"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateStudentComponent = void 0;
var core_1 = require("@angular/core");
var CreateStudentComponent = /** @class */ (function () {
    function CreateStudentComponent(studentsService, groupsService, route) {
        this.studentsService = studentsService;
        this.groupsService = groupsService;
        this.route = route;
        this.isLoading = false;
        this.mode = 'create';
    }
    CreateStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('studentId')) {
                _this.mode = 'edit';
                _this.studentId = paramMap.get('studentId');
                _this.isLoading = true;
                _this.studentsService
                    .getStudent(_this.studentId)
                    .subscribe(function (studentData) {
                    _this.isLoading = false;
                    _this.student = {
                        id: studentData._id,
                        firstName: studentData.firstName,
                        lastName: studentData.lastName,
                        groupId: studentData.groupId
                    };
                });
            }
            else {
                _this.mode = 'create';
                _this.studentId = null;
            }
        });
    };
    CreateStudentComponent.prototype.onAddStudent = function (form) {
        if (form.invalid) {
            return;
        }
        this.studentsService.addStudent(form.value.firstName, form.value.lastName, '1');
        form.resetForm();
    };
    CreateStudentComponent = __decorate([
        core_1.Component({
            selector: 'app-create-student',
            templateUrl: './create-student.component.html',
            styleUrls: ['./create-student.component.css']
        })
    ], CreateStudentComponent);
    return CreateStudentComponent;
}());
exports.CreateStudentComponent = CreateStudentComponent;
