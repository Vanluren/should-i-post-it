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
 * Created by villadsvalur on 15/11/2016.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var swipe_cards_module_1 = require("../swipe-cards/swipe-cards.module");
var CardsComponent = (function () {
    function CardsComponent() {
        this.visible = false;
        this.cards = [];
        this.cardCursor = 0;
        this.orientation = "x";
        this.overlay = {
            like: {
                backgroundColor: ''
            },
            dislike: {
                backgroundColor: ''
            }
        };
        this.cardLogs = [];
        this.tinderCardLogs = [];
        this.aloneArray = [];
        var randomUser = ['Adam', 'Denise', 'El', 'Ida', 'Emmeli', 'Jonas', 'Maria', 'Elvira', 'Frederik', 'Gary', 'Sylvester'];
        this.imageAlone();
        for (var i = 0; i < 50; i++) {
            var randomNumber = Math.floor((Math.random() * 10) + 1);
            this.cards.push({
                id: i + 1,
                likeEvent: new core_1.EventEmitter(),
                destroyEvent: new core_1.EventEmitter(),
                leftUrl: 'assets/mock-user-images/' + randomUser[randomNumber] + '1.jpg   ',
                rightUrl: 'assets/mock-user-images/' + randomUser[randomNumber] + '2.jpg',
                alone: this.aloneArray[i]
            });
        }
    }
    CardsComponent.prototype.like = function (like) {
        var self = this;
        if (this.cards.length > 0) {
            self.cards[this.cardCursor++].likeEvent.emit({ like: like });
            this.tinderCardLogs.push("callLike(" + JSON.stringify({ like: like }) + ")");
            this.scrollToBottom(this.tinderCardLogContainer);
        }
    };
    CardsComponent.prototype.onCardLike = function (event) {
        var item = this.cards[this.cardCursor++];
        this.tinderCardLogs.push("onLike(" + JSON.stringify(event) + ")");
        this.scrollToBottom(this.tinderCardLogContainer);
    };
    CardsComponent.prototype.imageAlone = function () {
        for (var i = 0; i < 50; i++) {
            var randomNumber = Math.floor((Math.random()) * 10);
            if (randomNumber < 8) {
                this.aloneArray[i] = true;
            }
            else {
                this.aloneArray[i] = false;
            }
        }
        return this.aloneArray;
    };
    CardsComponent.prototype.setButtonImage = function () {
        return this.aloneArray[this.cardCursor];
    };
    CardsComponent.prototype.onRelease = function (event) {
        this.cardLogs.push("onRelease(event)");
        this.scrollToBottom(this.cardLogContainer);
    };
    CardsComponent.prototype.onAbort = function (event) {
        this.cardLogs.push("onAbort(event)");
        this.scrollToBottom(this.cardLogContainer);
    };
    CardsComponent.prototype.onSwipe = function (event) {
        this.cardLogs.push("onSwipe(event)");
        this.scrollToBottom(this.cardLogContainer);
    };
    CardsComponent.prototype.scrollToBottom = function (el) {
        setTimeout(function () {
            el.nativeElement.scrollTop = el.nativeElement.scrollHeight;
        }, 100);
    };
    CardsComponent.prototype.toggleComments = function () {
        this.visible = !this.visible;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CardsComponent.prototype, "alone", void 0);
    __decorate([
        core_1.ViewChild('cardLog'), 
        __metadata('design:type', Object)
    ], CardsComponent.prototype, "cardLogContainer", void 0);
    __decorate([
        core_1.ViewChild('tinderCardLog'), 
        __metadata('design:type', Object)
    ], CardsComponent.prototype, "tinderCardLogContainer", void 0);
    CardsComponent = __decorate([
        core_1.Component({
            selector: 'swipe-cards',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'app/templates/cards.component.html',
            styleUrls: ['app/stylesheets/cards.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
var CardsModule = (function () {
    function CardsModule() {
    }
    CardsModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, swipe_cards_module_1.SwipeCardsModule],
            declarations: [CardsComponent],
            bootstrap: [CardsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CardsModule);
    return CardsModule;
}());
exports.CardsModule = CardsModule;
//# sourceMappingURL=cards.component.js.map