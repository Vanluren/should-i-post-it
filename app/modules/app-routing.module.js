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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var cards_component_1 = require("../components/cards.component");
var image_detail_component_1 = require("../components/image-detail.component");
var settings_component_1 = require("../components/settings.component");
var single_user_component_1 = require("../components/single-user.component");
var routes = [
    { path: '', redirectTo: '/cards', pathMatch: 'full' },
    { path: 'user', component: single_user_component_1.SingleUserComponent },
    { path: 'cards', component: cards_component_1.CardsComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: 'detail/:id', component: image_detail_component_1.ImageDetailComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map