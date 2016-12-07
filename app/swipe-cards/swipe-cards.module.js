"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
 * Created by villadsvalur on 15/11/2016.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var swipe_cards_component_1 = require('./swipe-cards.component');
var swipe_cards_directive_1 = require('./swipe-cards.directive');
var platform_browser_2 = require('@angular/platform-browser');
var user_service_1 = require("../services/user.service");
var HammerConfig = (function (_super) {
    __extends(HammerConfig, _super);
    function HammerConfig() {
        _super.apply(this, arguments);
        this.overrides = {
            'pan': { enable: true }
        };
    }
    return HammerConfig;
}(platform_browser_2.HammerGestureConfig));
exports.HammerConfig = HammerConfig;
var SwipeCardsModule = (function () {
    function SwipeCardsModule() {
    }
    SwipeCardsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule
            ],
            declarations: [
                swipe_cards_component_1.CardComponent,
                swipe_cards_directive_1.TinderCardDirective],
            exports: [
                swipe_cards_component_1.CardComponent,
                swipe_cards_directive_1.TinderCardDirective
            ],
            entryComponents: [
                swipe_cards_component_1.CardComponent
            ],
            providers: [user_service_1.UserService, {
                    provide: platform_browser_2.HAMMER_GESTURE_CONFIG,
                    useClass: HammerConfig
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], SwipeCardsModule);
    return SwipeCardsModule;
}());
exports.SwipeCardsModule = SwipeCardsModule;
//# sourceMappingURL=swipe-cards.module.js.map