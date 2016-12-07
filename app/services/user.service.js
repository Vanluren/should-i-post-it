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
///<reference path="../../node_modules/@types/core-js/index.d.ts"/>
/**
 * Created by villadsvalur on 07/11/2016.
 */
var core_1 = require('@angular/core');
var mock_data_1 = require("../user_info/mock-data");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function () {
        return Promise.resolve(mock_data_1.USER_INFO);
    };
    UserService.prototype.getImages = function () {
        return Promise.resolve(mock_data_1.USER_IMAGES);
    };
    UserService.prototype.getImage = function (id) {
        return this.getImages()
            .then(function (USER_IMAGES) { return USER_IMAGES.find(function (image) { return image.id === id; }); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map