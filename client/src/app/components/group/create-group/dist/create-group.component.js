"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateGroupComponent = void 0;
var core_1 = require("@angular/core");
var CreateGroupComponent = /** @class */ (function () {
    function CreateGroupComponent(groupService, route) {
        this.groupService = groupService;
        this.route = route;
        this.isLoading = false;
        this.students = ['11', '12'];
        this.mode = 'create';
    }
    CreateGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('groupId')) {
                _this.mode = 'edit';
                _this.groupId = paramMap.get('groupId');
                _this.isLoading = true;
                _this.groupService.getGroup(_this.groupId).subscribe(function (groupData) {
                    _this.isLoading = false;
                    _this.group = {
                        id: groupData._id,
                        title: groupData.title,
                        groupId: groupData.groupId,
                        students: groupData.students
                    };
                });
            }
            else {
                _this.mode = 'create';
                _this.groupId = null;
            }
        });
    };
    CreateGroupComponent.prototype.onAddGroup = function (form) {
        if (form.invalid) {
            return;
        }
        this.groupService.addGroup(form.value.title, '1', this.students);
    };
    CreateGroupComponent = __decorate([
        core_1.Component({
            selector: 'app-create-group',
            templateUrl: './create-group.component.html',
            styleUrls: ['./create-group.component.css']
        })
    ], CreateGroupComponent);
    return CreateGroupComponent;
}());
exports.CreateGroupComponent = CreateGroupComponent;
