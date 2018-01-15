webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-header\">\n  <section class=\"dark\">\n    <h3>Tab Management Concept</h3>\n  </section>\n  <section class=\"light\">\n    <h3>Tab Management Concept</h3>\n  </section>\n</div>\n<!-- <ng-template #headerTemplate>\n    <button (click)=\"tabContainer.selectedTab(loginTab)\">Login</button>\n    <button (click)=\"tabContainer.selectedTab(signup)\">Signin</button>\n</ng-template> -->\n<app-tab-container [headerTemplate]=\"headerTemplate\" #tabContainer>\n  <app-tab title=\"Login\" #loginTab>\n    <form>\n      <div>\n        <span>UserName</span>\n        <input type=\"text\" name=\"username\" ngModel>\n      </div>\n      <div>\n        <span>Password</span>\n        <input type=\"password\" name=\"password\" ngModel>\n      </div>\n      <button type=\"submit\">SignIn</button>\n    </form>\n  </app-tab>\n  <app-tab title=\"Signup\" #signup>\n    <form>\n      <div>\n        <span>UserName</span>\n        <input type=\"text\" name=\"username\" ngModel>\n      </div>\n      <div>\n        <span>Password</span>\n        <input type=\"password\" name=\"password\" ngModel>\n      </div>\n      <div>\n        <span>Email</span>\n        <input type=\"text\" name=\"email\" ngModel>\n      </div>\n      <button type=\"submit\">SignUp</button>\n    </form>\n  </app-tab>\n  <app-tab title=\"Contact-Us\">\n    <form>\n      <div>\n        <span>UserName</span>\n        <input type=\"text\" name=\"username\" ngModel>\n      </div>\n      <div>\n        <span>Question?</span>\n        <textarea name=\"question\" rows=\"5\" ngModel></textarea>\n      </div>\n      <div>\n        <span>Email</span>\n        <input type=\"text\" name=\"email\" ngModel>\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n  </app-tab>\n</app-tab-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".tab-header {\n  text-align: center; }\n\n.tab-header .dark h3 {\n  background: red; }\n\n.tab-header .light h3 {\n  background: pink; }\n", "", {"version":3,"sources":["c:/practice/angular4/tab-management/src/app/c:/practice/angular4/tab-management/src/app/app.component.scss","c:/practice/angular4/tab-management/src/app/c:/practice/angular4/tab-management/src/themes/sass/theme.scss"],"names":[],"mappings":"AAGA;EACI,mBAAkB,EACrB;;AACD;EAIY,gBCFI,EDGP;;AALT;EAIY,iBCUK,EDTR","file":"app.component.scss","sourcesContent":["@import \"src/themes/sass/_utils.scss\";\r\n$themes: \"dark\", \"light\";\r\n\r\n.tab-header {\r\n    text-align: center;\r\n}\r\n.tab-header {\r\n    @each $key in $themes {\r\n        .#{$key} h3\r\n        {\r\n            background: component-color($component: textbox, $state: hover, $theme: $key);\r\n        }\r\n    }\r\n}\r\n","$theme: (\n  dark: (\n    button: (\n      hover: red,\n      border: green,\n      focus: orange\n    ),\n    textbox: (\n      hover: red,\n      border: yellow,\n      focus: blue\n    )\n  ),\n  light: (\n    button: (\n      hover: pink,\n      border: blue,\n      focus: purple\n    ),\n    textbox: (\n      hover: pink,\n      border: blue,\n      focus: purple\n    )\n  )\n);"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_container_tab_container_component__ = __webpack_require__("./src/app/tab-container/tab-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_tab_component__ = __webpack_require__("./src/app/tab/tab.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__tab_container_tab_container_component__["a" /* TabContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__tab_tab_component__["a" /* TabComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tab-container/tab-container.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #defaultTabsHeader>\n  <div class=\"tab-headers\">\n    <div class=\"tab-title\" [ngClass]=\"tab.selected === true ? 'active-tab': ''\" *ngFor=\"let tab of tabs\" (click)=\"selectedTab(tab)\">\n      {{tab.title}}\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"headerTemplate else defaultTabsHeader\">\n    <ng-container *ngTemplateOutlet=\"headerTemplate; context: tabsContext;\">\n    </ng-container>\n</ng-container>\n<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/tab-container/tab-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".tab-headers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  background: #f5f5f5;\n  border-radius: 2px;\n  width: 600px;\n  margin-left: 35%;\n  color: white; }\n  .tab-headers div {\n    padding: 10px;\n    width: 200px;\n    cursor: pointer;\n    text-align: center;\n    font-family: 'Source Sans Pro','Helvetica Neue',sans-serif;\n    font-size: 15px;\n    color: #777777; }\n  .tab-headers .active-tab {\n    background-image: linear-gradient(rgba(104, 186, 252, 0.15), rgba(104, 186, 252, 0.15)), linear-gradient(to top, #e9e9e9, #ffffff); }\n  .tab-headers div:nth-child(3) {\n    border-right: none; }\n", "", {"version":3,"sources":["c:/practice/angular4/tab-management/src/app/tab-container/c:/practice/angular4/tab-management/src/app/tab-container/tab-container.component.scss"],"names":[],"mappings":"AAAA;EACI,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,+BAAmB;EAAnB,8BAAmB;MAAnB,wBAAmB;UAAnB,oBAAmB;EACnB,0BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,2BAAqB;MAArB,sBAAqB;EACrB,oBAAmB;EACnB,mBAAkB;EAClB,aAAY;EACZ,iBAAe;EACf,aAAY,EAgBf;EAzBD;IAWQ,cAAa;IACb,aAAY;IACZ,gBAAe;IACf,mBAAkB;IAClB,2DAA0D;IAC1D,gBAAe;IACf,eAAc,EACjB;EAlBL;IAoBQ,mIAAkI,EACrI;EArBL;IAuBQ,mBAAkB,EACrB","file":"tab-container.component.scss","sourcesContent":[".tab-headers {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    align-content: center;\r\n    background: #f5f5f5;\r\n    border-radius: 2px;\r\n    width: 600px;\r\n    margin-left:35%;\r\n    color: white;\r\n    div {\r\n        padding: 10px;\r\n        width: 200px;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-family: 'Source Sans Pro','Helvetica Neue',sans-serif;\r\n        font-size: 15px;\r\n        color: #777777;\r\n    }\r\n    .active-tab {\r\n        background-image: linear-gradient(rgba(104, 186, 252, 0.15), rgba(104, 186, 252, 0.15)), linear-gradient(to top, #e9e9e9, #ffffff);\r\n    }\r\n    div:nth-child(3) {\r\n        border-right: none;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/tab-container/tab-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_tab_component__ = __webpack_require__("./src/app/tab/tab.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabContainerComponent = (function () {
    function TabContainerComponent() {
    }
    TabContainerComponent.prototype.ngOnInit = function () {
    };
    TabContainerComponent.prototype.selectedTab = function (activetab) {
        this.tabs.forEach(function (tab) { return tab.selected = false; });
        activetab.selected = true;
    };
    Object.defineProperty(TabContainerComponent.prototype, "tabsContext", {
        get: function () {
            return {
                tabs: this.tabs
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__tab_tab_component__["a" /* TabComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* QueryList */])
    ], TabContainerComponent.prototype, "tabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* TemplateRef */])
    ], TabContainerComponent.prototype, "headerTemplate", void 0);
    TabContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tab-container',
            template: __webpack_require__("./src/app/tab-container/tab-container.component.html"),
            styles: [__webpack_require__("./src/app/tab-container/tab-container.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], TabContainerComponent);
    return TabContainerComponent;
}());



/***/ }),

/***/ "./src/app/tab/tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\" *ngIf=\"selected\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/tab/tab.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".tab {\n  position: relative;\n  left: 35%;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);\n  z-index: 1000;\n  width: 600px;\n  background: #ffffff; }\n  .tab input {\n    display: block; }\n\napp-tab > div > form >\ndiv {\n  padding: 10px; }\n  app-tab > div > form >\ndiv span {\n    font-family: 'Source Sans Pro','Helvetica Neue',sans-serif;\n    font-size: 13px;\n    color: #777777; }\n  app-tab > div > form >\ndiv input {\n    height: 20px;\n    border-radius: 2px;\n    border: 1px solid #777777;\n    font-family: 'Source Sans Pro','Helvetica Neue',sans-serif;\n    font-size: 15px;\n    cursor: pointer;\n    color: #777777; }\n  app-tab > div > form >\ndiv input:hover {\n    border: 1px solid #cccccc; }\n  app-tab > div > form >\ndiv textarea {\n    width: 190px;\n    display: block;\n    border-radius: 2px;\n    border: 1px solid #2C2C2C; }\n  app-tab > div > form >\ndiv textarea:hover {\n    border: 1px solid #cccccc; }\n\nbutton {\n  margin-left: 10px;\n  margin-bottom: 10px;\n  background: none;\n  border: 1px solid #2C2C2C;\n  border-radius: 2px;\n  font-family: 'Source Sans Pro','Helvetica Neue',sans-serif;\n  font-size: 13px;\n  color: #777777;\n  height: 25px; }\n", "", {"version":3,"sources":["c:/practice/angular4/tab-management/src/app/tab/c:/practice/angular4/tab-management/src/app/tab/tab.component.scss"],"names":[],"mappings":"AAAA;EACI,mBAAkB;EAClB,UAAS;EAIT,4CAA2C;EAC3C,cAAa;EACb,aAAY;EACZ,oBAAmB,EACtB;EAVD;IAIQ,eAAc,EACjB;;AAML;;EAEI,cAAa,EA2BhB;EA7BD;;IAIQ,2DAA0D;IAC1D,gBAAe;IACf,eAAc,EACjB;EAPL;;IASQ,aAAY;IACZ,mBAAkB;IAClB,0BAAyB;IACzB,2DAA0D;IAC1D,gBAAe;IACf,gBAAe;IACf,eAAc,EACjB;EAhBL;;IAkBQ,0BAAyB,EAC5B;EAnBL;;IAqBQ,aAAY;IACZ,eAAc;IACd,mBAAkB;IAClB,0BAAyB,EAC5B;EAzBL;;IA2BQ,0BAAyB,EAC5B;;AAEL;EACI,kBAAiB;EACjB,oBAAmB;EACnB,iBAAgB;EAChB,0BAAyB;EACzB,mBAAkB;EAClB,2DAA0D;EAC1D,gBAAe;EACf,eAAc;EACd,aAAY,EACf","file":"tab.component.scss","sourcesContent":[".tab {\r\n    position: relative;\r\n    left: 35%;\r\n    input { \r\n        display: block;\r\n    }\r\n    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);\r\n    z-index: 1000;\r\n    width: 600px;\r\n    background: #ffffff;\r\n}\r\napp-tab > div > form >\r\ndiv {\r\n    padding: 10px;\r\n    span {\r\n        font-family: 'Source Sans Pro','Helvetica Neue',sans-serif;\r\n        font-size: 13px;\r\n        color: #777777;\r\n    }\r\n    input {\r\n        height: 20px;\r\n        border-radius: 2px;\r\n        border: 1px solid #777777;\r\n        font-family: 'Source Sans Pro','Helvetica Neue',sans-serif;\r\n        font-size: 15px;\r\n        cursor: pointer;\r\n        color: #777777;\r\n    }\r\n    input:hover {\r\n        border: 1px solid #cccccc;\r\n    }\r\n    textarea {\r\n        width: 190px;\r\n        display: block;\r\n        border-radius: 2px;\r\n        border: 1px solid #2C2C2C;\r\n    }\r\n    textarea:hover {\r\n        border: 1px solid #cccccc;\r\n    }\r\n}\r\nbutton {\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n    background: none;\r\n    border: 1px solid #2C2C2C;\r\n    border-radius: 2px;\r\n    font-family: 'Source Sans Pro','Helvetica Neue',sans-serif;\r\n    font-size: 13px;\r\n    color: #777777;\r\n    height: 25px;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/tab/tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = (function () {
    function TabComponent() {
        this.selected = false;
        this.title = '';
    }
    TabComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tab',
            template: __webpack_require__("./src/app/tab/tab.component.html"),
            styles: [__webpack_require__("./src/app/tab/tab.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map