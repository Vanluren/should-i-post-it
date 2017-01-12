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
 * Created by villadsvalur on 02/11/2016.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
//TODO: Find ud af hvad den reelt skal den her component.
var SettingsComponent = (function () {
    function SettingsComponent(location) {
        this.location = location;
    }
    SettingsComponent.prototype.goBack = function () {
        this.location.back();
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'settings-component',
            templateUrl: 'app/templates/settings.component.html',
            styleUrls: ['app/stylesheets/settings.component.css']
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map