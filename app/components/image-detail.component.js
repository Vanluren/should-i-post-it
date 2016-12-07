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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
var user_service_1 = require("../services/user.service");
var ImageDetailComponent = (function () {
    function ImageDetailComponent(router, userService, location) {
        this.router = router;
        this.userService = userService;
        this.location = location;
        this.visible = false;
    }
    ImageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.forEach(function (params) {
            var id = +params['id'];
            _this.userService.getImage(id)
                .then(function (image) { return _this.image = image; });
        });
    };
    ImageDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ImageDetailComponent.prototype.toggleComments = function () {
        this.visible = !this.visible;
    };
    ImageDetailComponent = __decorate([
        core_1.Component({
            selector: 'image-detail',
            templateUrl: 'app/templates/image-detail.component.html',
            styleUrls: ['app/stylesheets/image-detail.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, user_service_1.UserService, (typeof (_b = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _b) || Object])
    ], ImageDetailComponent);
    return ImageDetailComponent;
    var _a, _b;
}());
exports.ImageDetailComponent = ImageDetailComponent;
//# sourceMappingURL=image-detail.component.js.map