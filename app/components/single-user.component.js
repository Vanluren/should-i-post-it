"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by villadsvalur on 22/11/2016.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../services/user.service");
var SingleUserComponent = (function () {
    function SingleUserComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    SingleUserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (userInfo) { return _this.userInfo = userInfo; });
    };
    SingleUserComponent.prototype.getImages = function () {
        var _this = this;
        this.userService.getImages().then(function (userImages) { return _this.userImages = userImages; });
    };
    SingleUserComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getImages();
    };
    SingleUserComponent.prototype.gotoDetail = function (image) {
        this.selectedImage = image;
        this.router.navigate(['/detail', this.selectedImage.id]);
    };
    SingleUserComponent = __decorate([
        core_1.Component({
            selector: 'single-user-component',
            templateUrl: 'app/templates/single-user.component.html',
            styleUrls: ['app/stylesheets/single-user.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], SingleUserComponent);
    return SingleUserComponent;
}());
exports.SingleUserComponent = SingleUserComponent;
//# sourceMappingURL=single-user.component.js.map