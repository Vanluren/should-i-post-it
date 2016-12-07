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
var TinderCardDirective = (function () {
    function TinderCardDirective(el, renderer) {
        this.orientation = 'xy';
        this.onLike = new core_1.EventEmitter();
        this.renderer = renderer;
        this.element = el.nativeElement;
    }
    TinderCardDirective.prototype.onReleaseLikeCb = function (event) {
        this.like = event.like;
        var el = this.element;
        var x = (el.offsetWidth + el.clientWidth) * ((!!event.like ? 1 : -1) || 0);
        var rotate = (x * 20) / el.clientWidth;
        if (this.overlay) {
            var overlayElm = this.element.querySelector('.tinder-overlay');
            this.renderer.setElementStyle(overlayElm, "transition", "transform 0.6s ease");
            this.renderer.setElementStyle(overlayElm, "opacity", "0.5");
        }
    };
    TinderCardDirective.prototype.onSwipeLikeCb = function (event) {
        if (this.overlay) {
            var overlayElm = this.element.querySelector('.tinder-overlay');
            this.renderer.setElementStyle(overlayElm, "transition", "opacity 0s ease");
            var opacity = (event.distance < 0 ? event.distance * -1 : event.distance) * 0.5 / this.element.offsetWidth;
            this.renderer.setElementStyle(overlayElm, "opacity", opacity.toString());
        }
    };
    TinderCardDirective.prototype.destroy = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this.element.remove();
        }, 200);
    };
    TinderCardDirective.prototype.onSwipe = function (event) {
        var like = (this.orientation === "y" && event.deltaY < 0) ||
            (this.orientation !== "y" && event.deltaX > 0);
        var opacity = (event.distance < 0 ? event.distance * -1 : event.distance) * 0.5 / this.element.offsetWidth;
        if (!!this.overlay) {
            this.renderer.setElementStyle(this.overlayElement, "transition", "opacity 0s ease");
            this.renderer.setElementStyle(this.overlayElement, "opacity", opacity.toString());
            this.renderer.setElementStyle(this.overlayElement, "background-color", this.overlay[like ? "like" : "dislike"].backgroundColor);
        }
        this.translate({
            x: event.deltaX,
            y: event.deltaY,
            rotate: ((event.deltaX * 20) / this.element.clientWidth)
        });
    };
    TinderCardDirective.prototype.onAbort = function (event) {
        if (!!this.overlay) {
            this.renderer.setElementStyle(this.overlayElement, "transition", "opacity 0.2s ease");
            this.renderer.setElementStyle(this.overlayElement, "opacity", "0");
        }
    };
    TinderCardDirective.prototype.onRelease = function (event) {
        var like = (this.orientation === "y" && event.deltaY < 0) ||
            (this.orientation !== "y" && event.deltaX > 0);
        this.callLike.emit({ like: like });
        this.onLike.emit({ like: like });
    };
    TinderCardDirective.prototype.translate = function (params) {
        if (!this.fixed) {
            this.renderer.setElementStyle(this.element, "transition", "transform " + (params.time || 0) + "s ease");
            this.renderer.setElementStyle(this.element, "webkitTransform", "translate3d(" +
                (params.x && (!this.orientation || this.orientation.indexOf("x") != -1) ? (params.x) : 0) +
                "px, " +
                (params.y && (!this.orientation || this.orientation.indexOf("y") != -1) ? (params.y) : 0) +
                "px, 0) rotate(" +
                params.rotate +
                "deg)");
        }
    };
    TinderCardDirective.prototype.initOverlay = function () {
        if (!!this.overlay) {
            this.overlayElement = document.createElement("div");
            this.overlayElement.className += " card-overlay";
            this.element.appendChild(this.overlayElement);
            this.renderer.setElementStyle(this.overlayElement, "transform", "translateZ(0)");
            this.renderer.setElementStyle(this.overlayElement, "opacity", "0");
            this.renderer.setElementStyle(this.overlayElement, "border-radius", "2px");
            this.renderer.setElementStyle(this.overlayElement, "position", "absolute");
            this.renderer.setElementStyle(this.overlayElement, "width", "calc(100%)");
            this.renderer.setElementStyle(this.overlayElement, "height", "calc(100%)");
            this.renderer.setElementStyle(this.overlayElement, "top", "0");
            this.renderer.setElementStyle(this.overlayElement, "left", "0");
            this.renderer.setElementStyle(this.overlayElement, "display", "flex");
            this.renderer.setElementStyle(this.overlayElement, "align-items", "center");
            this.renderer.setElementStyle(this.overlayElement, "justify-content", "center");
            this.renderer.setElementStyle(this.overlayElement, "overflow", "hidden");
            this.renderer.setElementStyle(this.overlayElement, "color", "white");
        }
    };
    TinderCardDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initOverlay();
        if (this.callLike) {
            this.callLike.subscribe(function (params) {
                var el = _this.element;
                var x = (el.offsetWidth + el.clientWidth) * (params.like ? 1 : -1);
                var y = (el.offsetHeight + el.clientHeight) * (params.like ? -1 : 1);
                _this.translate({
                    x: x,
                    y: y,
                    rotate: (x * 20) / el.clientWidth,
                    time: 0.8
                });
                _this.renderer.setElementStyle(_this.overlayElement, "transition", "opacity 0.4s ease");
                _this.renderer.setElementStyle(_this.overlayElement, "opacity", "0.5");
                _this.renderer.setElementStyle(_this.overlayElement, "background-color", _this.overlay[params.like ? "like" : "dislike"].backgroundColor);
                _this.destroy(200);
            });
        }
    };
    TinderCardDirective.prototype.ngOnDestroy = function () {
        if (this.callLike) {
            this.callLike.unsubscribe();
        }
    };
    __decorate([
        core_1.Input('tinder-card'), 
        __metadata('design:type', Object)
    ], TinderCardDirective.prototype, "overlay", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], TinderCardDirective.prototype, "callLike", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TinderCardDirective.prototype, "fixed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TinderCardDirective.prototype, "orientation", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
    ], TinderCardDirective.prototype, "onLike", void 0);
    __decorate([
        core_1.HostListener('onSwipe', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TinderCardDirective.prototype, "onSwipe", null);
    __decorate([
        core_1.HostListener('onAbort', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TinderCardDirective.prototype, "onAbort", null);
    __decorate([
        core_1.HostListener('onRelease', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TinderCardDirective.prototype, "onRelease", null);
    TinderCardDirective = __decorate([
        core_1.Directive({
            selector: '[tinder-card]',
            host: {
                class: 'card-heap'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _c) || Object, (typeof (_d = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _d) || Object])
    ], TinderCardDirective);
    return TinderCardDirective;
    var _a, _b, _c, _d;
}());
exports.TinderCardDirective = TinderCardDirective;
//# sourceMappingURL=swipe-cards.directive.js.map