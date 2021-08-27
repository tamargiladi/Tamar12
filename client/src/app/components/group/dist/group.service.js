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
exports.GroupService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var GroupService = /** @class */ (function () {
    function GroupService(http, router) {
        this.http = http;
        this.router = router;
        this.groups = [];
        this.groupsUpdated = new rxjs_1.Subject();
    }
    GroupService.prototype.getGroupsUpdateListener = function () {
        return this.groupsUpdated.asObservable();
    };
    GroupService.prototype.addGroup = function (title, groupId, students) {
        var _this = this;
        var group = {
            id: null,
            title: title,
            groupId: groupId,
            students: students
        };
        this.http
            .post('http://localhost:3000/api/groups', group)
            .subscribe(function (responseData) {
            _this.groups.push(group);
            _this.groupsUpdated.next(__spreadArrays(_this.groups));
            _this.router.navigate(['/']);
        });
    };
    GroupService.prototype.getGroups = function () {
        var _this = this;
        console.log('---->getGroups()');
        this.http
            .get('http://localhost:3000/api/groups')
            .pipe(operators_1.map(function (groupData) {
            return groupData.groups.map(function (group) {
                //TODO:WHY THERE IS RETURN TWICE?
                return {
                    id: group._id,
                    title: group.title,
                    groupId: group.groupId,
                    students: group.students
                };
            });
        }))
            .subscribe(function (transformedGroups) {
            _this.groups = transformedGroups;
            _this.groupsUpdated.next(__spreadArrays(_this.groups));
        });
    };
    GroupService.prototype.getGroup = function (id) {
        return this.http.get('http://localhost:3000/api/groups/' + id);
    };
    GroupService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GroupService);
    return GroupService;
}());
exports.GroupService = GroupService;
