"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.StudentService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var StudentService = /** @class */ (function () {
    function StudentService(http, router) {
        this.http = http;
        this.router = router;
        this.students = [];
        this.studentsUpdated = new rxjs_1.Subject();
        this.studentsIds = [];
    }
    StudentService.prototype.getStudentsUpdateListener = function () {
        return this.studentsUpdated.asObservable();
    };
    StudentService.prototype.addStudent = function (firstName, lastName, groupId) {
        var _this = this;
        var student = {
            id: null,
            firstName: firstName,
            lastName: lastName,
            groupId: groupId
        };
        this.http
            .post('http://localhost:3000/api/students', student)
            .subscribe(function (responseData) {
            _this.students.push(student);
            _this.studentsUpdated.next(__spreadArrays(_this.students));
            _this.router.navigate(['/']);
        });
    };
    StudentService.prototype.getStudents = function () {
        var _this = this;
        console.log('--->getStudents()');
        this.http
            .get('http://localhost:3000/api/students')
            .pipe(operators_1.map(function (studentData) {
            return studentData.students.map(function (student) {
                return {
                    id: student._id,
                    firstName: student.firstName,
                    lastName: student.lastName,
                    groupId: student.groupId
                };
            });
        }))
            .subscribe(function (transformedStudents) {
            _this.students = transformedStudents;
            _this.studentsUpdated.next(__spreadArrays(_this.students));
        });
    };
    StudentService.prototype.getStudent = function (id) {
        return this.http.get('http://localhost:3000/api/students' + id);
    };
    StudentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
