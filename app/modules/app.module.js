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
 * Created by villadsvalur on 26/10/2016.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require("../components/app.component");
var settings_component_1 = require("../components/settings.component");
var app_routing_module_1 = require('./app-routing.module');
var user_service_1 = require("../services/user.service");
var swipe_cards_module_1 = require("../swipe-cards/swipe-cards.module");
var cards_component_1 = require("../components/cards.component");
var single_user_component_1 = require("../components/single-user.component");
var image_detail_component_1 = require("../components/image-detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule, swipe_cards_module_1.SwipeCardsModule],
            declarations: [app_component_1.AppComponent,
                settings_component_1.SettingsComponent,
                cards_component_1.CardsComponent,
                single_user_component_1.SingleUserComponent,
                image_detail_component_1.ImageDetailComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map