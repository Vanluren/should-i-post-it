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
var CardComponent = (function () {
    function CardComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.fixed = false;
        this.orientation = 'xy';
        this.onRelease = new core_1.EventEmitter();
        this.onSwipe = new core_1.EventEmitter();
        this.onAbort = new core_1.EventEmitter();
        this.direction = { x: 0, y: 0 };
        this.element = el.nativeElement;
    }
    CardComponent.prototype.translate = function (params) {
        if (!this.fixed) {
            this.renderer.setElementStyle(this.element, "transition", "transform " + (params.time || 0) + "s ease");
            this.renderer.setElementStyle(this.element, "webkitTransform", "translate3d(" +
                (params.x && (!this.orientation || this.orientation.indexOf("x") != -1) ? (params.x) : 0) +
                "px, " +
                (params.y && (!this.orientation || this.orientation.indexOf("y") != -1) ? (params.y) : 0) +
                "px, 0) rotate(" + (params.rotate || 0) + "deg)");
        }
    };
    CardComponent.prototype.onSwipeCb = function (event) {
        var rotate = ((event.deltaX * 20) / this.element.clientWidth);
        this.direction.x = event.deltaX > 0 ? 1 : -1;
        this.direction.y = event.deltaY > 0 ? 1 : -1;
        this.translate({
            x: event.deltaX,
            y: event.deltaY
        });
    };
    CardComponent.prototype.onAbortCb = function (event) {
        this.translate({
            x: 0,
            y: 0,
            rotate: 0,
            time: 0.2
        });
    };
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.callDestroy) {
            this.callDestroy.subscribe(function (delay) {
                _this.destroy(delay);
            });
        }
    };
    CardComponent.prototype.destroy = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this.element.remove();
        }, 200);
    };
    CardComponent.prototype.ngAfterViewChecked = function () {
        if (this.element.parentElement) {
            var height = this.element.parentElement.clientHeight;
            var width = this.element.parentElement.clientWidth;
            this.renderer.setElementStyle(this.element, "height", height + 'px');
            this.renderer.setElementStyle(this.element, "width", width + 'px');
            this.releaseRadius = {
                x: width / 4,
                y: height / 4
            };
        }
    };
    CardComponent.prototype.onPan = function (event) {
        if (!this.fixed) {
            this.onSwipeCb(event);
            if (this.onSwipe) {
                this.onSwipe.emit(event);
            }
        }
    };
    CardComponent.prototype.onPanEnd = function (event) {
        if (!this.fixed) {
            if ((this.orientation == "x" && (this.releaseRadius.x < event.deltaX || this.releaseRadius.x * -1 > event.deltaX)) ||
                (this.orientation == "y" && (this.releaseRadius.y < event.deltaY || this.releaseRadius.y * -1 > event.deltaY)) ||
                ((this.releaseRadius.x < event.deltaX || this.releaseRadius.x * -1 > event.deltaX) ||
                    (this.releaseRadius.y < event.deltaY || this.releaseRadius.y * -1 > event.deltaY))) {
                if (this.onRelease) {
                    this.onRelease.emit(event);
                }
            }
            else {
                this.onAbortCb(event);
                if (this.onAbort) {
                    this.onAbort.emit(event);
                }
            }
        }
    };
    CardComponent.prototype.ngOnDestroy = function () {
        if (this.callDestroy) {
            this.callDestroy.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CardComponent.prototype, "fixed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CardComponent.prototype, "orientation", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CardComponent.prototype, "callDestroy", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CardComponent.prototype, "onRelease", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CardComponent.prototype, "onSwipe", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CardComponent.prototype, "onAbort", void 0);
    __decorate([
        core_1.HostListener('pan', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CardComponent.prototype, "onPan", null);
    __decorate([
        core_1.HostListener('panend', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CardComponent.prototype, "onPanEnd", null);
    CardComponent = __decorate([
        core_1.Component({
            template: '<ng-content></ng-content>',
            selector: 'sc-card',
            styleUrls: ['app/stylesheets/swipe-cards.component.css'] }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=swipe-cards.component.js.map