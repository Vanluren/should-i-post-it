"use strict";
/**
 * Created by villadsvalur on 26/10/2016.
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./modules/app.module');
var core_1 = require('@angular/core');
core_1.enableProdMode();
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map