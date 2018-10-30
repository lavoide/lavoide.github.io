(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\r\n  <div class=\"wrap\">\r\n    <div class=\"container\">\r\n      <h2><a [routerLink]=\"['/start']\">\r\n        <img src=\"../../../assets/img/arrow.png\" alt=\"\"></a>About app</h2>\r\n      <p>\r\n        This is \"Refrigerator\" web application. The idea of this application is to\r\n        store the ingridients you have in the fridge and to get cooking recipes based on your products.\r\n        You can use navigation menu to navigate between different parts of application.\r\n      </p>\r\n      <ul class=\"pages\">\r\n        <li>Starting page - you can go to the login page and about page.</li>\r\n        <li>Login page - you can log into your account or go to the register page, if you dont have one.</li>\r\n        <li>Registration page - you can register new account.</li>\r\n        <li>Fridge - you can store your ingridients in here.</li>\r\n        <li>Recipes - you can read recipes here.</li>\r\n        <li>Profile - page for changing your name, email or password.</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"container\">\r\n      <h2>Developers</h2>\r\n      <h3>Front-end</h3>\r\n      <ul class=\"devs\">\r\n        <li>Fedir Besedin</li>\r\n        <li>Alexey Rostovcev</li>\r\n        <li>Alona Vasylenko</li>\r\n      </ul>\r\n      <h3>Back-end</h3>\r\n      <ul class=\"devs\">\r\n        <li>Vitalii Ivanov</li>\r\n        <li>Vladimir Sereda</li>\r\n        <li>Aleksei Vasylevskyi</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background: linear-gradient(to right, #ffda44, lightblue);\n  height: 100%;\n  min-height: 100vh;\n  width: 100%;\n  min-width: calc(100vw - 104px);\n  display: flex;\n  flex-direction: column; }\n\n.container {\n  margin: 20px; }\n\n.wrap {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 700px;\n  height: 100%;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.5); }\n\np {\n  margin-top: 20px;\n  text-align: justify; }\n\nh2 {\n  margin-bottom: 20px; }\n\nh3 {\n  margin-top: 20px;\n  width: 40%;\n  float: left; }\n\n.pages {\n  list-style-type: none;\n  text-align: left; }\n\n.pages li {\n    margin: 10px 0 0 0; }\n\na {\n  padding-right: 20px; }\n\n.devs {\n  list-style-type: none; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start/start.component */ "./src/app/start/start/start.component.ts");
/* harmony import */ var _ingridients_ingridients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingridients/ingridients.component */ "./src/app/ingridients/ingridients.component.ts");
/* harmony import */ var _core_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/registration/registration.component */ "./src/app/core/registration/registration.component.ts");
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _core_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/profile/profile.component */ "./src/app/core/profile/profile.component.ts");
/* harmony import */ var _recipes_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/list/list.component */ "./src/app/recipes/list/list.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'start', component: _start_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"] },
    { path: 'registration', component: _core_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'login', component: _core_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'profile', component: _core_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'ingridients', component: _ingridients_ingridients_component__WEBPACK_IMPORTED_MODULE_3__["IngridientsComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'recipies', component: _recipes_list_list_component__WEBPACK_IMPORTED_MODULE_7__["RecipeListComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] },
    { path: '**', redirectTo: '/start', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"flex\">\r\n     <app-nav></app-nav>\r\n    <div class=\"other\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".other {\n  padding-left: 104px; }\n\n.main {\n  width: 100%;\n  text-align: center; }\n\nbutton {\n  border: 0;\n  background: transparent;\n  position: relative;\n  z-index: 1; }\n\nbutton:focus {\n  outline: none; }\n\nbutton:hover {\n  text-decoration: underline; }\n\n.flex {\n  display: flex; }\n\n@media (max-width: 600px) {\n  .other {\n    padding: 0 0 100px 0; } }\n\n@media (max-width: 420px) {\n  .other {\n    padding: 0 0 86px 0; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('app works');
        console.log(this.router.url);
    };
    AppComponent.prototype.ngOnChanges = function () {
        console.log(this.router.url);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _start_start_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start/start.module */ "./src/app/start/start.module.ts");
/* harmony import */ var _ingridients_ingridients_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ingridients/ingridients.module */ "./src/app/ingridients/ingridients.module.ts");
/* harmony import */ var _recipes_recipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipes.module */ "./src/app/recipes/recipes.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_ingridients_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/ingridients.service */ "./src/app/shared/services/ingridients.service.ts");
/* harmony import */ var _shared_services_basicIngridient_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/basicIngridient.service */ "./src/app/shared/services/basicIngridient.service.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_14__["ButtonComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _start_start_module__WEBPACK_IMPORTED_MODULE_6__["StartModule"],
                _ingridients_ingridients_module__WEBPACK_IMPORTED_MODULE_7__["IngridientsModule"],
                _recipes_recipes_module__WEBPACK_IMPORTED_MODULE_8__["RecipesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [_shared_services_ingridients_service__WEBPACK_IMPORTED_MODULE_11__["IngridientsService"], _shared_services_basicIngridient_service__WEBPACK_IMPORTED_MODULE_12__["HttpIngridient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/button/button.component.html":
/*!**********************************************!*\
  !*** ./src/app/button/button.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button\" (mouseover)=\"onMouseOver()\" (mouseout)=\"onMouseOut()\" >\r\n  <a routerLink={{data.url}} (click)=\"onClick()\">\r\n    <div class={{display1}}>\r\n       <img src={{data.src1}}  alt=\"\"  >\r\n    </div>\r\n    <div class={{display2}}>\r\n      <img src={{data.src2}}  alt=\"\"  >\r\n    </div>\r\n    <div class=\"{{display3}} \">\r\n      {{data.name}}\r\n    </div>\r\n\r\n\r\n\r\n  </a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/button/button.component.scss":
/*!**********************************************!*\
  !*** ./src/app/button/button.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #fff;\n  text-decoration: none; }\n\n.img2 {\n  display: block; }\n\n.active {\n  display: block; }\n\n.none {\n  display: none; }\n\n.text1 {\n  color: transparent; }\n\n@media (max-width: 420px) {\n  img {\n    width: 50px;\n    height: 50px; } }\n"

/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(auth) {
        this.auth = auth;
        this.display1 = 'active';
        this.display2 = 'none';
        this.display3 = 'text1';
    }
    ButtonComponent.prototype.onClick = function () {
        if (this.data.url === '/start') {
            this.auth.logOut();
        }
    };
    ButtonComponent.prototype.onMouseOver = function () {
        this.display1 = 'none';
        this.display2 = 'active';
        this.display3 = '';
    };
    ButtonComponent.prototype.onMouseOut = function () {
        this.display1 = 'active';
        this.display2 = 'none';
        this.display3 = 'text1';
    };
    ButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "data", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/core/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/core/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/profile.service */ "./src/app/core/services/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            exports: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]],
            declarations: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _services_profile_service__WEBPACK_IMPORTED_MODULE_10__["ProfileService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            // console.log('good')
            return true;
        }
        else {
            // console.log('bad');
            // return true;
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">-->\r\n  <!--<h1 >Login Form</h1>-->\r\n  <!--<form #loginForm=\"ngForm\"-->\r\n        <!--(ngSubmit)=\"onSubmit($event, loginForm)\">-->\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<label for=\"email\">Email</label>-->\r\n      <!--<input type=\"text\" class=\"form-control\" id=\"email\"  name=\"email\" minlength=\"4\" [(ngModel)]=\"model.email\" appForbiddenName=\"bob\" #name=\"ngModel\" required>-->\r\n      <!--<div [hidden]=\"name.valid || name.pristine\"-->\r\n           <!--class=\"alert alert-danger\">-->\r\n        <!--<div *ngIf=\"name.errors && (name.errors || {}).required\">-->\r\n          <!--Email is required.-->\r\n        <!--</div>-->\r\n        <!--<div *ngIf=\"name.errors && (name.errors || {}).minlength\">-->\r\n          <!--Name is too short.-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n      <!--{{name.errors | json}}-->\r\n    <!--</div>-->\r\n\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<label for=\"password\">password</label>-->\r\n      <!--<input type=\"text\" class=\"form-control\" id=\"password\" name=\"password\"  [(ngModel)]=\"model.password\" required #spy>-->\r\n\r\n    <!--</div>-->\r\n    <!--{{loginForm.valid}}-->\r\n    <!--<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.valid\">Submit</button>-->\r\n    <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"clearForm(loginForm);  loginForm.reset()\" >Reset</button>-->\r\n    <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"testButton()\">Test</button>-->\r\n  <!--</form>-->\r\n\r\n  <!--{{diagnostic}}-->\r\n<!--</div>-->\r\n<div class=\"bg\">\r\n  <div id=\"container\">\r\n    <h1>Log In</h1>\r\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit($event, loginForm)\">\r\n      <input type=\"email\" name=\"email\" placeholder=\"E-mail\" minlength=\"4\" [(ngModel)]=\"model.email\" required>\r\n      <div class=\"error\">{{this.errorEmail}}</div>\r\n      <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"model.password\" required>\r\n      <div class=\"error\">{{this.errorPass}}</div>\r\n      <a>Forgot password?</a>\r\n      <button [disabled]=\"!loginForm.valid\">Log in</button>\r\n      <a routerLink=\"/registration\">Don't have an account? Register</a>\r\n      <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"testButton()\">Test</button>-->\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\n  height: 100%; }\n\n.bg {\n  width: calc(100vw - 104px);\n  height: 100vh;\n  background: url('plate.jpg') center center no-repeat;\n  background-size: cover;\n  overflow: hidden; }\n\nimg {\n  display: block;\n  margin: auto;\n  width: 100%;\n  height: auto;\n  -webkit-animation: backAnim 5s linear;\n          animation: backAnim 5s linear; }\n\n/* Login container */\n\n#container {\n  position: absolute;\n  top: 0;\n  left: 104px;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 260px;\n  height: 260px;\n  border-radius: 5px; }\n\n/* Heading */\n\nh1 {\n  font-family: 'AleksandraCRegular', sans-serif;\n  position: relative;\n  margin-top: 15px;\n  text-align: center;\n  font-size: 40px;\n  color: #575756; }\n\n/* Inputs */\n\nbutton,\ninput {\n  font-family: 'AleksandraCRegular', sans-serif;\n  text-decoration: none;\n  position: relative;\n  width: 100%;\n  display: block;\n  margin: 9px auto;\n  font-size: 17px;\n  color: #313131;\n  padding: 8px;\n  border-radius: 50px;\n  border: 1px solid #575756;\n  background: transparent;\n  transition: all 0.2s ease-in-out; }\n\na {\n  border: none;\n  background: transparent;\n  color: #3c373c;\n  outline: none; }\n\na:hover {\n  color: #667675;\n  cursor: pointer; }\n\ninput:focus {\n  outline: none;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  border-bottom: 1px solid #575756; }\n\n.error {\n  color: #8c0000; }\n\n/* Placeholders */\n\n::-webkit-input-placeholder {\n  color: color(#575756 a(0.8)); }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: red; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: red; }\n\n:-ms-input-placeholder {\n  color: #333; }\n\n@-webkit-keyframes backAnim {\n  0% {\n    background: whitesmoke; }\n  50% {\n    background: whitesmoke; }\n  100% {\n    background: transparent; } }\n\n@keyframes backAnim {\n  0% {\n    background: whitesmoke; }\n  50% {\n    background: whitesmoke; }\n  100% {\n    background: transparent; } }\n\n/* Link */\n\nbutton {\n  color: #3c373c;\n  outline: none;\n  padding: 4px 8px;\n  background: rgba(0, 128, 0, 0.57); }\n\nbutton:hover {\n    opacity: 0.7;\n    cursor: pointer; }\n\nbutton:disabled {\n    background: rgba(249, 152, 25, 0.76); }\n\nbutton:disabled:hover {\n      cursor: default;\n      opacity: 1; }\n\n@media (max-width: 600px) {\n  .bg {\n    width: 100vw;\n    height: calc(100vh - 104px); }\n  #container {\n    left: 0;\n    top: -104px; } }\n\n@media (max-width: 420px) {\n  .bg {\n    width: 100vw;\n    height: calc(100vh - 86px); } }\n"

/***/ }),

/***/ "./src/app/core/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, http) {
        this.auth = auth;
        this.router = router;
        this.http = http;
        this.model = {};
        this.submitted = false;
    }
    LoginComponent.prototype.onSubmit = function (e, loginForm) {
        var _this = this;
        console.log(loginForm.value);
        this.submitted = true;
        this.auth.loginUser(__assign({}, loginForm.value)).subscribe(function (res) {
            console.log(res);
            _this.auth.setToken(res.access_token);
            _this.auth.setUser(res.user);
            _this.router.navigateByUrl('/ingridients');
        }, function (err) {
            _this.errorPass = 'The given data is invalid!';
            console.log(err);
        });
    };
    LoginComponent.prototype.clearForm = function (loginForm) {
        console.log(loginForm);
        this.model = {};
    };
    LoginComponent.prototype.testButton = function () {
        var body = { 'name': 'name', 'email': 'name@test1.com', 'password': '111111', 'password_confirmation': '111111' };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .append('Content-Type', 'application/json')
            .append('Accept', 'application/json');
        console.log(headers);
        return this.http.post('http://refrigerator-alevel.tk/api/auth/register', body, { headers: headers })
            .subscribe(function (data) { console.log(data); }, function (err) { console.log(err); });
    };
    Object.defineProperty(LoginComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "<div><h1 style=\"color: #4e5004cc\">Opsss... Page not found</h1></div>"
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\r\n\r\n    <div class=\"bg\">\r\n\r\n  <h2>You are logged in as {{user || 'Anonymous'}}</h2>\r\n      <div class=\"flex\">\r\n  <div class=\"name ok1\">\r\n      <h4>Change your name</h4>\r\n      <form class=\"changeform\" #changeNameForm=\"ngForm\" (ngSubmit)=\"subName($event, changeNameForm)\">\r\n        <p>\r\n          <input type=\"text\" name=\"name\" placeholder=\"New name\" [(ngModel)]=\"model.name\">\r\n        </p>\r\n        <button type=\"submit\">CHANGE</button>\r\n      </form>\r\n  </div>\r\n\r\n  <div class=\"email ok1\">\r\n      <h4>Change your email</h4>\r\n      <form class=\"changeform\" #changeEmailForm=\"ngForm\" (ngSubmit)=\"subEmail($event, changeEmailForm)\">\r\n        <p>\r\n          <input type=\"email\" name=\"email\" placeholder=\"New email\" [(ngModel)]=\"model.email\">\r\n        </p>\r\n        <button type=\"submit\">CHANGE</button>\r\n      </form>\r\n      <div class=\"error\">{{this.errorEmail}}</div>\r\n  </div>\r\n\r\n  <div class=\"password ok1\">\r\n      <h4>Change your password:</h4> \r\n      <form class=\"changeform\" #changePassForm=\"ngForm\" (ngSubmit)=\"subPass($event, changePassForm)\">\r\n          <input type=\"password\" name=\"old_password\" placeholder=\"Old password\" [(ngModel)]=\"model.old_password\">\r\n        <input type=\"password\" name=\"password\" placeholder=\"New password\" [(ngModel)]=\"model.password\">\r\n        <input type=\"password\" name=\"password_confirmation\" placeholder=\"Repeat password\" [(ngModel)]=\"model.password_confirmation\">\r\n        \r\n        <button type=\"submit\">CHANGE</button>\r\n      </form>\r\n      <div class=\"error\">{{this.errorPass}}</div>\r\n  </div>\r\n  \r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/profile/profile.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/profile/profile.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n  width: 100%;\n  min-width: calc(100vw - 121px);\n  height: 100%;\n  min-height: 100vh;\n  background: linear-gradient(to right, #ffda44, lightblue); }\n\n.bg {\n  margin: 0 auto;\n  padding: 35px;\n  max-width: 700px;\n  min-height: 100vh;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.name {\n  margin: 0 auto; }\n\n.ok1 {\n  margin-top: 30px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column; }\n\n.ok1 form {\n  display: flex;\n  flex-direction: column; }\n\n.ok1 form button {\n    width: 40%;\n    height: 30px;\n    margin: 10px auto;\n    border-radius: 15px;\n    background: #232733;\n    color: #fff;\n    border: transparent; }\n\n.ok1 form button:hover {\n    cursor: pointer;\n    opacity: 0.8; }\n\n.ok1 form input {\n    margin-top: 20px;\n    width: 100%;\n    padding: 12px 24px;\n    background-color: transparent;\n    transition: -webkit-transform 250ms ease-in-out;\n    transition: transform 250ms ease-in-out;\n    transition: transform 250ms ease-in-out, -webkit-transform 250ms ease-in-out;\n    font-size: 14px;\n    line-height: 18px;\n    color: #575756;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-size: 18px 18px;\n    background-position: 95% center;\n    border-radius: 50px;\n    border: 1px solid #575756;\n    transition: all 250ms ease-in-out;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d; }\n\n.ok1 form input::-webkit-input-placeholder {\n      color: color(#575756 a(0.8));\n      text-transform: uppercase;\n      letter-spacing: 1.5px; }\n\n.ok1 form input:-ms-input-placeholder {\n      color: color(#575756 a(0.8));\n      text-transform: uppercase;\n      letter-spacing: 1.5px; }\n\n.ok1 form input::-ms-input-placeholder {\n      color: color(#575756 a(0.8));\n      text-transform: uppercase;\n      letter-spacing: 1.5px; }\n\n.ok1 form input::placeholder {\n      color: color(#575756 a(0.8));\n      text-transform: uppercase;\n      letter-spacing: 1.5px; }\n\n.ok1 form input:hover, .ok1 form input:focus {\n      padding: 12px 0;\n      outline: 0;\n      border: 1px solid transparent;\n      border-bottom: 1px solid #575756;\n      border-radius: 0;\n      background-position: 100% center; }\n\n@media (max-width: 600px) {\n  .profile {\n    width: calc(100vw - 17px); } }\n"

/***/ }),

/***/ "./src/app/core/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/core/services/profile.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, prof) {
        this.auth = auth;
        this.prof = prof;
        this.model = {};
        this.user = this.auth.getUser().name;
    }
    ProfileComponent.prototype.subEmail = function (e, changeEmailForm) {
        var _this = this;
        console.log(changeEmailForm.value);
        this.prof.EmailChange(__assign({}, changeEmailForm.value)).subscribe(function (res) {
            console.log(res);
            _this.auth.updateUserEmail(res.email, res.name);
        }, function (err) {
            console.log(err);
            var x = JSON.stringify(err.error.errors.email);
            console.log(x);
            _this.errorEmail = x.slice(2, -2);
            console.log(_this.errorEmail);
        });
    };
    ProfileComponent.prototype.subName = function (e, changeNameForm) {
        var _this = this;
        console.log(changeNameForm.value);
        this.prof.NameChange(__assign({}, changeNameForm.value)).subscribe(function (res) {
            console.log(res);
            _this.auth.updateUserEmail(res.email, res.name);
        }, function (err) {
            console.log(err);
            var x = JSON.stringify(err.error.errors.email);
            console.log(x);
            _this.errorEmail = x.slice(1, -1);
            console.log(_this.errorEmail);
        });
    };
    ProfileComponent.prototype.subPass = function (e, changePassForm) {
        var _this = this;
        console.log(changePassForm.value);
        this.prof.PasswordChange(__assign({}, changePassForm.value)).subscribe(function (res) {
            console.log(res);
            _this.auth.updateUserPass(res.password);
        }, function (err) {
            console.log(err);
            var x = JSON.stringify(err.error.errors.password);
            _this.errorPass = x.slice(1, -1);
            console.log(_this.errorPass);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/core/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/core/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/registration/registration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/registration/registration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\r\n  <div id=\"container\">\r\n    <h1>Register</h1>\r\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit($event, registerForm)\" >\r\n      <input type=\"text\" name=\"name\" placeholder=\"Name\" minlength=\"4\" [(ngModel)]=\"model.name\" required #name=\"ngModel\">\r\n      <div [hidden]=\"name.valid\"\r\n           class=\"error\">\r\n        <div *ngIf=\"name.errors && (name.errors || {}).minlength\">\r\n          Name is too short.\r\n        </div>\r\n      </div>\r\n      <input type=\"email\" name=\"email\" placeholder=\"E-mail\" minlength=\"6\" [(ngModel)]=\"model.email\" required #email=\"ngModel\">\r\n        <div [hidden]=\"email.valid\"\r\n             class=\"error\">\r\n          <div *ngIf=\"email.errors && (email.errors || {}).minlength\">\r\n            E-mail is too short.\r\n          </div>\r\n        </div>\r\n      <input type=\"password\" name=\"password\" placeholder=\"Password\" minlength=\"6\" [(ngModel)]=\"model.password\" required #pass=\"ngModel\">\r\n      <div [hidden]=\"pass.valid\"\r\n           class=\"error\">\r\n        <div *ngIf=\"pass.errors && (pass.errors || {}).minlength\">\r\n          Password is too short.\r\n        </div>\r\n      </div>\r\n      <input type=\"password\" name=\"password_confirmation\" placeholder=\"Confirm Password\" [(ngModel)]=\"model.password_confirmation\" required>\r\n      <button [disabled]=\"!registerForm.valid\">Register</button>\r\n      <a routerLink=\"/login\">Back to login</a>\r\n      <div class=\"error\">{{this.error}}</div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/registration/registration.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/registration/registration.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\n  height: 100%; }\n\n.bg {\n  width: calc(100vw - 104px);\n  height: 100vh;\n  background: url('plate.jpg') center center no-repeat;\n  background-size: cover;\n  overflow: hidden; }\n\nimg {\n  display: block;\n  margin: auto;\n  width: 100%;\n  height: auto; }\n\n/* Login container */\n\n#container {\n  position: absolute;\n  top: 0;\n  left: 104px;\n  right: 0;\n  bottom: 45px;\n  margin: auto;\n  width: 260px;\n  height: 260px;\n  border-radius: 5px; }\n\n/* Heading */\n\nh1 {\n  font-family: 'AleksandraCRegular', sans-serif;\n  position: relative;\n  margin-top: 15px;\n  text-align: center;\n  font-size: 40px;\n  color: #575756; }\n\n/* Inputs */\n\nbutton,\ninput {\n  font-family: 'AleksandraCRegular', sans-serif;\n  text-decoration: none;\n  position: relative;\n  width: 100%;\n  display: block;\n  margin: 9px auto;\n  font-size: 17px;\n  color: #313131;\n  padding: 8px;\n  border-radius: 50px;\n  border: 1px solid #575756;\n  background: transparent;\n  transition: all 0.2s ease-in-out; }\n\n.error {\n  color: #8c0000;\n  background: rgba(255, 255, 255, 0.7); }\n\na {\n  border: none;\n  background: transparent;\n  color: #3c373c;\n  outline: none; }\n\na:hover {\n  color: #667675;\n  cursor: pointer; }\n\ninput:focus {\n  outline: none;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  border-bottom: 1px solid #575756; }\n\n/* Placeholders */\n\n::-webkit-input-placeholder {\n  color: color(#575756 a(0.8)); }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: red; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: red; }\n\n:-ms-input-placeholder {\n  color: #333; }\n\n/* Link */\n\nbutton {\n  color: #3c373c;\n  outline: none;\n  padding: 4px 8px;\n  background: rgba(0, 128, 0, 0.57); }\n\nbutton:hover {\n    opacity: 0.7;\n    cursor: pointer; }\n\nbutton:disabled {\n    background: rgba(249, 152, 25, 0.76); }\n\nbutton:disabled:hover {\n      cursor: default;\n      opacity: 1; }\n\n@media (max-width: 600px) {\n  .bg {\n    width: 100vw;\n    height: calc(100vh - 104px); }\n  #container {\n    left: 0;\n    top: -104px; } }\n\n@media (max-width: 420px) {\n  .bg {\n    width: 100vw;\n    height: calc(100vh - 86px); } }\n"

/***/ }),

/***/ "./src/app/core/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(auth, router, http) {
        this.auth = auth;
        this.router = router;
        this.http = http;
        this.model = {};
        this.submitted = false;
    }
    RegistrationComponent.prototype.onSubmit = function (e, registerForm) {
        var _this = this;
        this.submitted = true;
        this.auth.registerUser(__assign({}, registerForm.value)).subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/login');
        }, function (err) {
            _this.error1 = JSON.parse(JSON.stringify(err.error.errors));
            _this.error = Object.values(_this.error1);
            console.log(err);
        });
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/core/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/core/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.user = this.getUser();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .append('Content-Type', 'application/json')
            .append('Accept', 'application/json');
    }
    AuthService.prototype.AuthHeaders = function () {
        return this.headers
            .append('Authorization', "Bearer " + this.getToken());
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.setToken = function (token) {
        return localStorage.setItem('token', token);
    };
    AuthService.prototype.setUser = function (user) {
        return localStorage.setItem('currentUser', JSON.stringify(user));
    };
    AuthService.prototype.updateUserEmail = function (email, name) {
        this.user.name = name;
        this.user.email = email;
        this.setUser(this.user);
    };
    AuthService.prototype.updateUserPass = function (pass) {
        this.user.password = pass;
        this.setUser(this.user);
    };
    AuthService.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('fridge');
        return localStorage.removeItem('currentUser');
    };
    AuthService.prototype.loginUser = function (form) {
        return this.http
            .post('http://refrigerator-alevel.tk/api/auth/login', form, { headers: this.headers });
    };
    AuthService.prototype.registerUser = function (form) {
        return this.http
            .post('http://refrigerator-alevel.tk/api/auth/register', form, { headers: this.headers });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/profile.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/profile.service.ts ***!
  \**************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    ProfileService.prototype.EmailChange = function (form) {
        return this.http
            .put('http://refrigerator-alevel.tk/api/auth/user', { 'email': form.email }, { headers: this.auth.AuthHeaders() });
    };
    ProfileService.prototype.NameChange = function (form) {
        return this.http
            .put('http://refrigerator-alevel.tk/api/auth/user', { 'name': form.name }, { headers: this.auth.AuthHeaders() });
    };
    ProfileService.prototype.PasswordChange = function (form) {
        return this.http
            .put('http://refrigerator-alevel.tk/api/auth/user/password', { 'old_password': form.old_password, 'password': form.password, 'password_confirmation': form.password_confirmation }, { headers: this.auth.AuthHeaders() });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/ingridients/form/form.component.html":
/*!******************************************************!*\
  !*** ./src/app/ingridients/form/form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form panel\">\r\n  <h3>Добавить ингредиенты</h3>\r\n  <form class=\"form-add\" (ngSubmit)='onSubmit(); form.reset()' #form='ngForm'>\r\n    <form [formGroup]=\"addForm\">\r\n      <div [formGroup]=\"rangeForm\">\r\n        <div class='input'><input class=\"datalist\" type=\"text\" list=\"product\" placeholder=\"Ингредиент\"\r\n        name = 'ingridient'  formControlName=\"ingridient\" [(ngModel)]=\"title\" required></div>\r\n        <datalist id=\"product\">\r\n          <option *ngFor=\"let bas of basicIngridient\">{{bas.name}}</option>\r\n        </datalist>\r\n        <div *ngIf=\"rangeForm.errors?.outsideRange && title !=''\" class=\"alert\">\r\n            Укажите ингредиент из списка\r\n        </div>\r\n        <div *ngIf=\"rangeForm.errors?.repeat\" class=\"alert\">\r\n          Ингредиент уже существует\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class='input'><input type=\"text\" placeholder=\"Количество\" name = 'amount'\r\n    [(ngModel)]=\"titleAmount\" #amount=\"ngModel\" required pattern=\"\\-?\\d+(\\.\\d{0,})?\"></div>\r\n    <div [hidden]=\"amount.valid || amount.untouched\" class=\"alert\">\r\n      Укажите число (целое или дробное)\r\n    </div>\r\n    <form >\r\n      <div clacc='input'>\r\n        <select  name = 'measure' [(ngModel)]=\"titleMeasure\" required>\r\n          <option>гр.</option>\r\n          <option>мл.</option>\r\n          <option>шт.</option>\r\n          <option>ст.л.</option>\r\n          <option>ч.л.</option>\r\n          <option>ст.</option>\r\n          <option>по вкусу</option>\r\n        </select>\r\n      </div>\r\n    </form>\r\n    <button class=\"add\" type=\"submit\" [disabled]='form.form.invalid || !addForm.valid'></button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ingridients/form/form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ingridients/form/form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  height: auto;\n  width: 100%;\n  min-width: 320px;\n  max-width: 500px;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  padding: 10px;\n  border-radius: 5px;\n  background: rgba(3, 3, 3, 0.8);\n  box-shadow: 1px 1px 50px #000;\n  margin-top: 10px;\n  overflow: hidden; }\n\nh3 {\n  font-size: 30px;\n  color: #ddd;\n  text-shadow: 3px 3px 10px #000;\n  margin-bottom: 20px; }\n\ninput {\n  height: 40px;\n  margin-bottom: 10px;\n  width: 300px;\n  font-size: 20px;\n  padding-left: 10px;\n  font-size: 17px;\n  color: #fff;\n  padding: 8px;\n  border-radius: 6px;\n  border: none;\n  background: rgba(3, 3, 3, 0.5);\n  transition: all 0.2s ease-in-out; }\n\n::-webkit-input-placeholder {\n  color: #ddd; }\n\n:-moz-placeholder {\n  color: #ddd; }\n\n::-moz-placeholder {\n  color: #ddd; }\n\n:-ms-input-placeholder {\n  color: #ddd; }\n\n.datalist::-webkit-calendar-picker-indicator {\n  display: none; }\n\ninput:focus {\n  outline: none;\n  box-shadow: 3px 3px 10px #686666; }\n\nselect {\n  height: 40px;\n  margin-bottom: 10px;\n  width: 300px;\n  font-size: 20px;\n  padding-left: 10px;\n  font-size: 17px;\n  color: #fff;\n  padding: 8px;\n  border-radius: 6px;\n  border: none;\n  background: rgba(3, 3, 3, 0.5);\n  transition: all 0.2s ease-in-out; }\n\nselect:focus {\n  outline: none;\n  box-shadow: 3px 3px 10px #686666; }\n\nselect option {\n  background-color: black;\n  outline: none;\n  border: none; }\n\n.add {\n  cursor: pointer;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACowAAAqMBZNxfiQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMVSURBVGiB7dhPiFVlGMfx5zgoWjkQFGRErfoHLVwUlRBu2kUJIbh0My0r2hm0kVZFm9y1a9OmXRT0zz9TjuaUiFZaw1SmZjAjZppjToN+WjxHu47n3ntmvHeOxP3C5S7u+977fc95z/N73hsxYMCAAQP+L+BWvI7nmnZZMFiP4+XrVyxv2qk2eBnnsRuX8DM2N+1VC7yKKfzoP77Eh027dQVbcQrHXMspzOCWph3bghGcxqRqJvBs056VYF255w+3kb+yjd5p2vU6sAa/44sO8vA9zuC2pp2vgmXYjr1d5K9wBK807X0VbMEJnKu5gN3l+0jT7oHH8Les8XU4IZ+RMQw3Lb+ylNlTU34SJ/E+VvZE4Abnv1FKXaoh/wn+wltY1gv5B2SobMWKRcx/HBdwtIv4LHbKyvP8DYu3CGzBdzLqt2P1AuYO4UCNrXNOVqbDuH8hfnVu0YaIOBMR90XEcER8oH6nOBIRd0bEox3GnI2InyLickQ8WRTFZM3v7g7uwhymyyt1EYfUSEjcLnuaAx2u/B8ysEb1I7CwyfVxPy2T9KUuc9/GwS7b5odyW/anacM21ZF/RFaKZ9rMe1DW/KNt5C9ivwyqVX2RL0UOYryNxDflIp6omPexDKAq5krx/RZQEBYjv1yWv8+0r9978BvWtMx7WpbdqTZzPsUvuLtv8i0y6+U2GJftbxVf46Ny/JB8yHe1GbsXZ/FQ3+VbFjGMHTIL/qyQmpGxvxkvlHdkpmLcMVl1Ni2ZfMsiVuFzWRJnK+QOlXJT2Ffx+aysONt67VYsYBGrI2IsMnieqhgyHhFDUR1auyJDcF1RFP8swrM34F6ZAaMVV/mCLI/zmZDPz9rGxFuRff35NltlPnOyFL/ZtPc1YKPMgIkuC9ghDzA3398jeE2emk62kT8t244NTbtWggLv4VvZNsxnJ0ab9uyIPCp+VT4Pcy3yx2UWdGqjbw5wh2zuxnC5XMA+vLsUv187BzqBeyIzYjIiVkTEIxHxcFEU0734/iVBnp2nZOpubNpnUWAtXmzaY8CAAQOWjn8BRah558QeaagAAAAASUVORK5CYII=);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: transparent;\n  width: 48px;\n  height: 48px;\n  border: none;\n  outline: none;\n  transition: 0.5s ease-in-out; }\n\n.add:hover {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACowAAAqMBZNxfiQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS3SURBVGiB7ZhtaJVlGMd//7Oz5ZluOW2mrZmiZ5tMJWnlK7rapqmZIElREIEWFL1ARJRfVMgPQYUfoj700aAXpcioqG0p5TDTYQqZO2e51Gla5qZrTs/OnqsPZ9Q8O3ueZztrKzi/j/f9vy7+F/fL9dwPZMiQIUOGNNBoG+iLHVk+lpDzEtJBhWt3+4n5zxRg0ZplmO0AgZlDR1tYFY3dXnGBkTDnhUVqnsPsM4yTYEVAD3njH/YTO+oFWFPVy8AmzFoRS4AA4gzSA37iR3ULWVPVVqSnwK6ApvaZuQDKZVyoULd8esUtx6itgDXVbAQ9jdF+vXkA3YRopfNalVeeUSnAmu9ZhGw74hxiZmqRncec+7xyjfgWsmMrphDsaQSLgpYOKJR+xKyI7nixyvf+OZBsRFfAbEuAYM8O4BdX8wlxOfArOcHH3WQju4Wa970IVgo222fEHxhvJM5LakasAGuquhNjM6YYKM87QK3ABEQDgeCHA8lG5AxYS+UYuoONmNqRLfIR0oyRi2ggO/6opu+9OpDQ1wpYS+UY325T0Z29FZGDbIGnVnwJTCZg7xFe8pCb+YTcA/upqoQsHcbsNeITtql8Z8y/c7DI8vng7MHsPNI0F2kMswakecAGldR95Ce/9woEtQ5xAvEg2W2f2/HF3vu3F7P1WeC8jdlhV/OiA9GIdDNZusuvefBTgLEWow10G5CPQp/YoTuyfWWPXtwIVohU4aK6hNEMOCh7oWbURn3l7sW1AGupnAxUAGXAGGAuYiL5BW96JbaTqwtAr4B+B3JSiqQ2UCtwmVj8XoW/uDwY854FEMtaBkSAwt6RG4ApoDUWqXrWNfZabAvoDDAv5bxZB8Z5sHOMC61y67ZuuBcgLU58GV5HIVg7aJtFqlen9Hb87lKwJ4AbB8h8DQUiYBcIda7x+uJ0w+MM2FISWyeZWUjHgfctWt3/alTWdkyNYNNSxMYxDoKB07VKxfu7Bm/7HwYsIHFQVYIClwCnv8AqMB3F2GXHVkz5ezhSXY1YiiycMrHD14giHN2vsoaOdMy7FqCKxm6klZgTxnQIo7O/yBZhnCXY806ipvVZwOvA98CkFGn3E2ABFlilstqz6ZoHP40sujIfYh9jmgQUk7yvxRWMdsw2gXKAzQQowMhNSnUKkYdjT6q0/oPhMO+rAAA7vTBE19jdwESgnP7X4lESxXUDLcD8pPkYphPIalVS5357DRJf30Iq3t+F07UOyAIOpJDMBSKIU/Q3D6IBWSfdBS+kYzalt8GI7efqqfTwHYnesCwpUxdGgESv6DsewSgCLVFJ7Q9p+u3HoN4DmlF3CrO1JLrz9SthhEg2D3FMXcBb/4Z5GMKDRqX1B5E9BpRjRFzFpm/A8hgX2jI0e94M6UWmcP0u4FWkXNBA1+FFsDmI59PptJ5ehhpohohWv4uYgxEmuWOLPRgBldRVpunRlSG/iSWM7PiGRIPTESDeZ/o0xnwcDfutk0xaj3pN33sVi68By8c4AFjvzFnQTpXVHhoGj+4ehiOJRStvxQnuQ0TBckCzCQRmaeZXvw1HfjeG7a9E79v5W2A8skd6D/r/C4vU3G6R6mdG20eGDBkyjBx/AVt0ngfBpZ9UAAAAAElFTkSuQmCC);\n  border: 1px solid  #ffda44;\n  border-radius: 25px;\n  box-shadow: 3px 3px 10px  #ffda44; }\n\n.add:disabled {\n  box-shadow: 3px 3px 10px #fa1616;\n  border: 1px solid #fa1616;\n  border-radius: 25px; }\n\n.add:disabled:hover {\n  box-shadow: 3px 3px 10px #fa1616;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACowAAAqMBZNxfiQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMVSURBVGiB7dhPiFVlGMfx5zgoWjkQFGRErfoHLVwUlRBu2kUJIbh0My0r2hm0kVZFm9y1a9OmXRT0zz9TjuaUiFZaw1SmZjAjZppjToN+WjxHu47n3ntmvHeOxP3C5S7u+977fc95z/N73hsxYMCAAQP+L+BWvI7nmnZZMFiP4+XrVyxv2qk2eBnnsRuX8DM2N+1VC7yKKfzoP77Eh027dQVbcQrHXMspzOCWph3bghGcxqRqJvBs056VYF255w+3kb+yjd5p2vU6sAa/44sO8vA9zuC2pp2vgmXYjr1d5K9wBK807X0VbMEJnKu5gN3l+0jT7oHH8Les8XU4IZ+RMQw3Lb+ylNlTU34SJ/E+VvZE4Abnv1FKXaoh/wn+wltY1gv5B2SobMWKRcx/HBdwtIv4LHbKyvP8DYu3CGzBdzLqt2P1AuYO4UCNrXNOVqbDuH8hfnVu0YaIOBMR90XEcER8oH6nOBIRd0bEox3GnI2InyLickQ8WRTFZM3v7g7uwhymyyt1EYfUSEjcLnuaAx2u/B8ysEb1I7CwyfVxPy2T9KUuc9/GwS7b5odyW/anacM21ZF/RFaKZ9rMe1DW/KNt5C9ivwyqVX2RL0UOYryNxDflIp6omPexDKAq5krx/RZQEBYjv1yWv8+0r9978BvWtMx7WpbdqTZzPsUvuLtv8i0y6+U2GJftbxVf46Ny/JB8yHe1GbsXZ/FQ3+VbFjGMHTIL/qyQmpGxvxkvlHdkpmLcMVl1Ni2ZfMsiVuFzWRJnK+QOlXJT2Ffx+aysONt67VYsYBGrI2IsMnieqhgyHhFDUR1auyJDcF1RFP8swrM34F6ZAaMVV/mCLI/zmZDPz9rGxFuRff35NltlPnOyFL/ZtPc1YKPMgIkuC9ghDzA3398jeE2emk62kT8t244NTbtWggLv4VvZNsxnJ0ab9uyIPCp+VT4Pcy3yx2UWdGqjbw5wh2zuxnC5XMA+vLsUv187BzqBeyIzYjIiVkTEIxHxcFEU0734/iVBnp2nZOpubNpnUWAtXmzaY8CAAQOWjn8BRah558QeaagAAAAASUVORK5CYII=);\n  border: 1px solid #fa1616;\n  border-radius: 25px; }\n\n.next {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  text-decoration: none;\n  color: green;\n  font-size: 30px; }\n\n.alert {\n  color: red;\n  font-size: 20px;\n  margin-bottom: 10px; }\n\n@media only screen and (max-width: 600px) {\n  .panel {\n    width: 320px; }\n  h3 {\n    font-size: 20px; } }\n"

/***/ }),

/***/ "./src/app/ingridients/form/form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ingridients/form/form.component.ts ***!
  \****************************************************/
/*! exports provided: IngridientsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngridientsFormComponent", function() { return IngridientsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_ingridients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/ingridients.service */ "./src/app/shared/services/ingridients.service.ts");
/* harmony import */ var _shared_services_basicIngridient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/basicIngridient.service */ "./src/app/shared/services/basicIngridient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IngridientsFormComponent = /** @class */ (function () {
    function IngridientsFormComponent(ingridientsService, formBuilder, httpService) {
        this.ingridientsService = ingridientsService;
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.ingridient = this.ingridientsService.getIngridients();
        this.title = '';
        this.titleAmount = '';
        this.titleMeasure = 'гр.';
        this.basicIngridient = [];
        this.rangeForm = formBuilder.group({
            'ingridient': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'list': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        }, {
            validator: this.specificValueInsideRange.bind(this),
        });
        this.addForm = formBuilder.group({
            'rangeForm': this.rangeForm,
        });
    }
    IngridientsFormComponent.prototype.specificValueInsideRange = function (group) {
        var selectedValue = this.basicIngridient.find(function (bas) { return bas.name === group.value.ingridient; });
        if (!selectedValue) {
            return {
                outsideRange: true
            };
        }
        var double = this.ingridient.find(function (i) { return i.name === group.value.ingridient; });
        if (double) {
            return {
                repeat: true
            };
        }
    };
    IngridientsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (data) { return _this.basicIngridient = data['ingredients']; });
    };
    IngridientsFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.id = this.basicIngridient.find(function (x) { return x.name === _this.title; });
        this.ingridientsService.createIngridient(this.id.id, this.title, this.titleAmount, this.titleMeasure);
        this.ingridientsService.getIngridientsFromServer().subscribe(function (res) {
            localStorage.setItem('fridge', JSON.stringify(res.ingredients));
        });
        //   .subscribe(
        //   res => console.log(res), err => console.log(err)
        // );
        this.rangeForm.reset({ ingridient: '' });
    };
    IngridientsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ingridients-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/ingridients/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/ingridients/form/form.component.scss")],
            providers: [_shared_services_ingridients_service__WEBPACK_IMPORTED_MODULE_1__["IngridientsService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_ingridients_service__WEBPACK_IMPORTED_MODULE_1__["IngridientsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_basicIngridient_service__WEBPACK_IMPORTED_MODULE_2__["HttpIngridient"]])
    ], IngridientsFormComponent);
    return IngridientsFormComponent;
}());



/***/ }),

/***/ "./src/app/ingridients/ingridients-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ingridients/ingridients-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: IngridientRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngridientRouterModule", function() { return IngridientRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/app/ingridients/list/list.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");



var routes = [
    { path: 'ingridients', component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["IngridientsListComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
];
var IngridientRouterModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/ingridients/ingridients.component.html":
/*!********************************************************!*\
  !*** ./src/app/ingridients/ingridients.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n    <ingridients-list></ingridients-list>\r\n    <ingridients-item></ingridients-item>\r\n    <ingridients-form></ingridients-form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ingridients/ingridients.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ingridients/ingridients.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ingridients/ingridients.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ingridients/ingridients.component.ts ***!
  \******************************************************/
/*! exports provided: IngridientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngridientsComponent", function() { return IngridientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IngridientsComponent = /** @class */ (function () {
    function IngridientsComponent() {
    }
    IngridientsComponent.prototype.ngOnInit = function () {
    };
    IngridientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingridients',
            template: __webpack_require__(/*! ./ingridients.component.html */ "./src/app/ingridients/ingridients.component.html"),
            styles: [__webpack_require__(/*! ./ingridients.component.scss */ "./src/app/ingridients/ingridients.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IngridientsComponent);
    return IngridientsComponent;
}());



/***/ }),

/***/ "./src/app/ingridients/ingridients.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ingridients/ingridients.module.ts ***!
  \***************************************************/
/*! exports provided: IngridientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngridientsModule", function() { return IngridientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/ingridients/list/list.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/item.component */ "./src/app/ingridients/item/item.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/ingridients/form/form.component.ts");
/* harmony import */ var _ingridients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingridients.component */ "./src/app/ingridients/ingridients.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ingridients_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ingridients-routing.module */ "./src/app/ingridients/ingridients-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var IngridientsModule = /** @class */ (function () {
    function IngridientsModule() {
    }
    IngridientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ingridients_routing_module__WEBPACK_IMPORTED_MODULE_7__["IngridientRouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["IngridientsListComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_3__["IngridientsItemComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["IngridientsFormComponent"], _ingridients_component__WEBPACK_IMPORTED_MODULE_5__["IngridientsComponent"], _ingridients_component__WEBPACK_IMPORTED_MODULE_5__["IngridientsComponent"]],
            exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["IngridientsListComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_3__["IngridientsItemComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["IngridientsFormComponent"], _ingridients_component__WEBPACK_IMPORTED_MODULE_5__["IngridientsComponent"]]
        })
    ], IngridientsModule);
    return IngridientsModule;
}());



/***/ }),

/***/ "./src/app/ingridients/item/item.component.html":
/*!******************************************************!*\
  !*** ./src/app/ingridients/item/item.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class = \"item\">\r\n    <ul>\r\n      <li>\r\n         <span>- {{product.name}}-{{product.amount}}</span>\r\n         <button class = 'delete' (click)='onDelete()'></button>\r\n      </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ingridients/item/item.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ingridients/item/item.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  text-align: center; }\n\nli {\n  display: inline-block;\n  width: 100%;\n  max-width: 460px;\n  font-size: 20px;\n  margin: 10px;\n  border-bottom: 1px solid white; }\n\nspan {\n  color: white;\n  display: block;\n  float: left; }\n\n.delete {\n  float: right;\n  cursor: pointer;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACkSURBVFhH7ZZNDoMgFIRZean2DvVQ/Tlp9RbQIf1qUt3Aqy6azJcQ4MnMG3VDMiZCKWXMOU+av6g1jQvHjkNNZnpu0LMnx46DXoXtAuVNPQx+u4FtO+h2A9s+0IY/K/L4b0HvAIsB2/C+G/QO4AAO4AAOEDZA/scBPpdPzSdKzUh2Rhu/J0r8qCa/II8rdv1IP8jgXt/ibddO1WjctBywM2ZFSi/eUpTbO2/Z1wAAAABJRU5ErkJggg==);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: transparent;\n  width: 35px;\n  height: 35px;\n  border: none;\n  outline: none;\n  transition: 0.5s ease-in-out; }\n\n.delete:hover {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADOSURBVFhH7ZY9DgIhEEapvJRWgrU23sifC1qwWKu3GAQzGLOuzn6MW5jwkim+CfMYOkyjUUP0yw0Fe43BxdfKPTrbNR+bDurcrX95qbTEhY9NR7mM45NP/WqK8FfF2vEMSTTFWgzVcEI73xZ4E2gzjCREM4wkRDOMJEQzjCREM4wkRDOMJEQzjCREM4wkRDOMJEQzjCREM4xW8P8LlM8n+dWcW6OJ3i0es5p/InX2WF5RW2mBHetw4mk7o+AO+RVD8m+VZ1Lts4N1jUYPY+7F18nrJITzsAAAAABJRU5ErkJggg==);\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg); }\n\n@media only screen and (max-width: 600px) {\n  li {\n    width: 100%;\n    max-width: 300px;\n    font-size: 15px; } }\n"

/***/ }),

/***/ "./src/app/ingridients/item/item.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ingridients/item/item.component.ts ***!
  \****************************************************/
/*! exports provided: IngridientsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngridientsItemComponent", function() { return IngridientsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/product.model */ "./src/app/shared/models/product.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IngridientsItemComponent = /** @class */ (function () {
    function IngridientsItemComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    IngridientsItemComponent.prototype.onDelete = function () {
        this.delete.emit(this.product);
    };
    IngridientsItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_product_model__WEBPACK_IMPORTED_MODULE_1__["IngridientRes"])
    ], IngridientsItemComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], IngridientsItemComponent.prototype, "delete", void 0);
    IngridientsItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ingridients-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/ingridients/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/ingridients/item/item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IngridientsItemComponent);
    return IngridientsItemComponent;
}());



/***/ }),

/***/ "./src/app/ingridients/list/list.component.html":
/*!******************************************************!*\
  !*** ./src/app/ingridients/list/list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\r\n    <div class=\"desk\">\r\n      <h3>Имеющиеся ингредиенты</h3>\r\n      <div class=\"list-item\">\r\n        <div class=\"allitem\">\r\n          <ingridients-item *ngFor='let ingridient of ingridients' [product]='ingridient'\r\n          (delete)='delete($event)'></ingridients-item>\r\n        </div>\r\n        <button (click)=\"onSubmit()\" class=\"next\" routerLink=\"/recommended\">Подобрать рецепт</button>\r\n      </div>\r\n    </div>\r\n    <ingridients-form></ingridients-form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ingridients/list/list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ingridients/list/list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\n  height: 100%; }\n\n.list {\n  width: calc(100vw - 104px);\n  height: 100vh;\n  background: url('ingridients.jpg') center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow-y: auto; }\n\n.list-item {\n  height: 400px;\n  padding-top: 10px;\n  margin-bottom: 30px; }\n\n.desk {\n  height: auto;\n  width: 100%;\n  min-width: 320px;\n  max-width: 500px;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  padding-top: 10px;\n  border-radius: 5px;\n  background: rgba(3, 3, 3, 0.8);\n  box-shadow: 1px 1px 50px #000;\n  margin-top: 20px; }\n\n.allitem {\n  height: 300px;\n  width: 100%;\n  max-width: 480px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 0;\n  padding-right: 5px; }\n\n::-webkit-scrollbar {\n  width: 6px; }\n\n::-webkit-scrollbar-track {\n  background-color: black; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: white; }\n\nh3 {\n  font-size: 30px;\n  color: #ddd;\n  text-shadow: 3px 3px 10px #000;\n  margin-bottom: 20px; }\n\n.next {\n  cursor: pointer;\n  background-color: rgba(3, 3, 3, 0.2);\n  color: #ddd;\n  font-size: 20px;\n  text-shadow: 3px 3px 10px #000;\n  border-radius: 6px;\n  border: 1px solid  #ddd;\n  outline: none;\n  box-shadow: 3px 3px 10px #686666;\n  padding: 5px;\n  transition: 0.5s ease-in-out;\n  margin-top: 5px; }\n\n.next:hover {\n  color: #ffda44;\n  border: 1px solid  #ffda44;\n  box-shadow: 3px 3px 10px #ffda44; }\n\n@media only screen and (max-width: 600px) {\n  .list {\n    width: calc(100vw - 17px); }\n  .desk {\n    width: 320px; }\n  h3 {\n    font-size: 20px; } }\n"

/***/ }),

/***/ "./src/app/ingridients/list/list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ingridients/list/list.component.ts ***!
  \****************************************************/
/*! exports provided: IngridientsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngridientsListComponent", function() { return IngridientsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_ingridients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/ingridients.service */ "./src/app/shared/services/ingridients.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IngridientsListComponent = /** @class */ (function () {
    function IngridientsListComponent(ingridientsService) {
        this.ingridientsService = ingridientsService;
        this.ingridients = [];
    }
    IngridientsListComponent.prototype.onSubmit = function () {
    };
    IngridientsListComponent.prototype.ngOnInit = function () {
        this.ingridients = this.ingridientsService.getIngridients();
    };
    IngridientsListComponent.prototype.delete = function (ingridient) {
        this.ingridientsService.deleteIngridient(ingridient);
    };
    IngridientsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ingridients-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/ingridients/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/ingridients/list/list.component.scss")],
        }),
        __metadata("design:paramtypes", [_shared_services_ingridients_service__WEBPACK_IMPORTED_MODULE_1__["IngridientsService"]])
    ], IngridientsListComponent);
    return IngridientsListComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <ul>\r\n    <li *ngFor=\"let b of buttons\">\r\n      <app-button [data]=\"b\">\r\n      </app-button>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: #232733;\n  width: 104px;\n  min-height: 100vh;\n  height: 100%;\n  position: fixed;\n  z-index: 1; }\n\nnav ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n\nnav li {\n  padding: 22px; }\n\n@media (max-width: 600px) {\n  nav {\n    height: 100px;\n    min-height: 0;\n    width: 100%;\n    bottom: 0; }\n    nav ul {\n      flex-direction: row; }\n    nav li {\n      padding: 10px;\n      display: inline-block; } }\n\n@media (max-width: 420px) {\n  nav {\n    height: 86px; } }\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.buttons = [
            { name: 'fridge', src1: '../../assets/img/fridge.png', src2: '../../assets/img/fridge2.png', url: '/ingridients', id: 1 },
            { name: 'recipes', src1: '../../assets/img/recipe.png', src2: '../../assets/img/recipe1.png', url: '/recipies', id: 2 },
            { name: 'profile', src1: '../../assets/img/chef1.png', src2: '../../assets/img/chef2.png', url: '/profile', id: 3 },
            { name: 'logout', src1: '../../assets/img/exit.png', src2: '../../assets/img/exit1.png', url: '/start', id: 4 }
        ];
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/recipes/item/item.component.html":
/*!**************************************************!*\
  !*** ./src/app/recipes/item/item.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"bg\">\r\n<div *ngIf=\"recipe$ | async as recipe\">\r\n  <div class=\"title\">  <a (click)=\"gotoRecipeList(recipe)\">\r\n   <img src=\"../../../assets/img/arrow.png\" alt=\"\">\r\n  </a>{{recipe.name}}\r\n  </div>\r\n  <div class=\"flexwrap\">\r\n      <div class=\"photo\"><img src={{recipe.image}}></div>\r\n      <div class=\"description\">{{recipe.recipeInstruction}}</div>\r\n  </div>\r\n  <div class=\"ingr\">\r\n    <ul>\r\n        <h2>Ингридиенты для приготовления блюда</h2>\r\n      <li class=\"requiredIngridients\" *ngFor=\"let subItem of recipe.recipeIngredient;\">\r\n\r\n        <div class=\"ingridient\">{{subItem.name}}</div>\r\n        <div class=\"amountOfIngridient\">{{(subItem.count ? subItem.count : 'по вкусу')+' '+(subItem.measure ? subItem.measure : '')}}</div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipes/item/item.component.scss":
/*!**************************************************!*\
  !*** ./src/app/recipes/item/item.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background: linear-gradient(to right, #ffda44, lightblue);\n  width: calc(100vw - 121px);\n  height: 100%; }\n\n.bg {\n  margin: 0 auto;\n  padding: 35px;\n  max-width: 800px;\n  min-height: 100vh;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.title img {\n  padding-right: 35px; }\n\n.title img:hover {\n    cursor: pointer; }\n\n.title {\n  margin-bottom: 20px;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 50px; }\n\nul {\n  padding: 0; }\n\n.description {\n  display: flex;\n  text-align: justify;\n  padding-left: 15px;\n  float: right;\n  max-width: 500px; }\n\n.requiredIngridients {\n  display: flex;\n  font-size: 24px; }\n\n.ingr {\n  padding-top: 30px;\n  display: flex;\n  justify-content: center; }\n\n.ingridient {\n  flex-grow: 2; }\n\n.amountOfIngridient {\n  padding-left: 25px; }\n\n.flexwrap {\n  justify-content: center;\n  display: flex; }\n\n.photo img {\n  float: left;\n  max-width: 300px;\n  max-height: 300px; }\n\nimg {\n  border-radius: 15px; }\n\nh2 {\n  margin-bottom: 20px; }\n\n@media (max-width: 760px) {\n  .flexwrap {\n    flex-direction: column; }\n  .photo {\n    padding: 15px;\n    margin: 0 auto; } }\n\n@media (max-width: 600px) {\n  .wrapper {\n    width: calc(100vw - 17px); } }\n\n@media (max-width: 450px) {\n  .photo img {\n    max-width: 200px; }\n  .requiredIngridients {\n    font-size: 18px; } }\n"

/***/ }),

/***/ "./src/app/recipes/item/item.component.ts":
/*!************************************************!*\
  !*** ./src/app/recipes/item/item.component.ts ***!
  \************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/recipe.service */ "./src/app/shared/services/recipe.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipe$ = this.route.paramMap.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.getRecipe(params.get('id'));
        }));
    };
    RecipeItemComponent.prototype.gotoRecipeList = function (recipe) {
        var recipeId = recipe ? recipe.id : null;
        // Pass along the recipe id if available
        // so that the RecipeList component can select that recipe.
        this.router.navigate(['/recipies']);
    };
    RecipeItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'recipe-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/recipes/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/recipes/item/item.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/list/list.component.html":
/*!**************************************************!*\
  !*** ./src/app/recipes/list/list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n  <div class=\"search_container\">\r\n    <p class=\"search_title\">\r\n    </p>\r\n    <input [(ngModel)]=\"searchText\" class=\"search_input\" type=\"text\" placeholder=\"Search\" >\r\n    <button [routerLink]=\"['/recipies']\" disabled>All recipes</button>\r\n    <button [routerLink]=\"['/recommended']\" >Recommended recipes</button>  </div>\r\n  <ul>\r\n    <li [routerLink]=\"['/recipies', item.id]\" (click)=\"clickHandler(item.id)\" *ngFor=\"let item of recipies| search: searchText\">\r\n      <div class=\"itemRecipe\">\r\n        <img src={{item.image}}>\r\n          <div class=\"bg\">\r\n          </div>\r\n          <div class=\"name\">\r\n            <div class=\"title\" >{{item.name}}</div>\r\n          </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<hr>\r\n"

/***/ }),

/***/ "./src/app/recipes/list/list.component.scss":
/*!**************************************************!*\
  !*** ./src/app/recipes/list/list.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background: linear-gradient(to right, #ffda44, lightblue);\n  width: 100%;\n  height: 100%;\n  min-height: 100vh; }\n\n.title {\n  margin-bottom: 20px;\n  font-weight: bold;\n  font-size: 1.6em; }\n\n* {\n  list-style: none; }\n\nul {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.itemRecipe {\n  padding-right: 0.5vh; }\n\nimg {\n  width: 40vh;\n  height: 40vh; }\n\n.name {\n  color: #fff;\n  position: absolute;\n  width: 40vh;\n  margin-top: -170px;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; }\n\n.bg {\n  background: rgba(0, 0, 0, 0.6);\n  width: 40vh;\n  height: 40vh;\n  margin-top: -40.5vh;\n  position: absolute; }\n\n.description {\n  text-align: justify;\n  padding: 5px; }\n\n.itemRecipe:focus {\n  outline: none; }\n\n.itemRecipe:hover {\n  cursor: pointer;\n  opacity: 0.4; }\n\n.search_container {\n  padding: 20px;\n  width: calc(100vw - 121px); }\n\n.search_title {\n  font-size: 22px;\n  font-weight: 900;\n  text-align: center;\n  color: #ff8b88; }\n\n.search_input {\n  width: 100%;\n  padding: 12px 24px;\n  background-color: transparent;\n  transition: -webkit-transform 250ms ease-in-out;\n  transition: transform 250ms ease-in-out;\n  transition: transform 250ms ease-in-out, -webkit-transform 250ms ease-in-out;\n  font-size: 14px;\n  line-height: 18px;\n  color: #575756;\n  background-color: transparent;\n  background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg);\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: 95% center;\n  border-radius: 50px;\n  border: 1px solid #575756;\n  transition: all 250ms ease-in-out;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.search_input::-webkit-input-placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px; }\n\n.search_input:-ms-input-placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px; }\n\n.search_input::-ms-input-placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px; }\n\n.search_input::placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px; }\n\n.search_input:hover, .search_input:focus {\n    padding: 12px 0;\n    outline: 0;\n    border: 1px solid transparent;\n    border-bottom: 1px solid #575756;\n    border-radius: 0;\n    background-position: 100% center; }\n\nbutton {\n  padding: 15px;\n  margin: 10px 10px 0 10px;\n  font-size: 1.2em;\n  text-transform: uppercase;\n  background-color: #232733;\n  color: whitesmoke;\n  border: transparent 1px solid;\n  border-radius: 40px; }\n\nbutton:hover {\n    background-color: #575157;\n    cursor: pointer; }\n\nbutton:hover:active {\n      color: #f99819;\n      border: #f99819 1px solid; }\n\nbutton:disabled {\n    background-color: transparent;\n    color: #232733;\n    border: #232733 1px solid; }\n\nbutton:disabled:hover {\n      opacity: 1;\n      cursor: default; }\n\n@media (max-width: 600px) {\n  .search_container {\n    width: calc(100vw - 17px); } }\n\n@media (max-width: 450px) {\n  img {\n    width: 30vh;\n    height: 30vh; }\n  .bg {\n    width: 30vh;\n    height: 30vh;\n    margin-top: -30.5vh; }\n  .name {\n    width: 30vh;\n    margin-top: -170px; } }\n"

/***/ }),

/***/ "./src/app/recipes/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/recipes/list/list.component.ts ***!
  \************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mock */ "./src/mock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent() {
        this.recipies = _mock__WEBPACK_IMPORTED_MODULE_1__["recipies"];
        this.buttonPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // search id from all recipes func
    RecipeListComponent.prototype.clickHandler = function (id) {
        this.buttonPressed.emit(this.recipies.filter(function (x) { return x.id === id; }));
    };
    RecipeListComponent.prototype.ngOnInit = function () {
        // console.log(recipies);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecipeListComponent.prototype, "buttonPressed", void 0);
    RecipeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'recipe-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/recipes/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/recipes/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/reccomended/reccomended.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recipes/reccomended/reccomended.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"search_container\">\r\n    <p class=\"search_title\">\r\n    </p>\r\n    <input [(ngModel)]=\"searchText\" class=\"search_input\" type=\"text\" placeholder=\"Search\" >\r\n    <button [routerLink]=\"['/recipies']\" >All recipes</button>\r\n    <button [routerLink]=\"['/recommended']\" disabled>Recommended recipes</button>\r\n  </div>\r\n  <p *ngIf=\"this.recipies===[]\">Looks like there is no recommended recipes. But you can find what you want in all recipes!</p>\r\n  <ul>\r\n    <li [routerLink]=\"['/recommended', item.id-1]\" (click)=\"clickHandler(item.id)\" *ngFor=\"let item of recipies| search: searchText\">\r\n      <div class=\"itemRecipe\">\r\n        <img src={{item.picture}}>\r\n        <div class=\"bg\">\r\n        </div>\r\n        <div class=\"name\">\r\n          <div class=\"title\" >{{item.name}}</div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<hr>\r\n"

/***/ }),

/***/ "./src/app/recipes/reccomended/reccomended.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/recipes/reccomended/reccomended.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background: linear-gradient(to right, #ffda44, lightblue);\n  width: 100%;\n  height: 100%;\n  min-height: 100vh; }\n\n.title {\n  margin-bottom: 20px;\n  font-weight: bold;\n  font-size: 36px; }\n\n* {\n  list-style: none; }\n\nul {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.itemRecipe {\n  padding-right: 0.5vh; }\n\nimg {\n  width: 40vh;\n  height: 40vh; }\n\n.name {\n  color: #fff;\n  position: absolute;\n  width: 40vh;\n  margin-top: -170px;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; }\n\n.bg {\n  background: rgba(0, 0, 0, 0.6);\n  width: 40vh;\n  height: 40vh;\n  margin-top: -40.5vh;\n  position: absolute; }\n\n.description {\n  text-align: justify;\n  padding: 5px; }\n\n.itemRecipe:focus {\n  outline: none; }\n\n.itemRecipe:hover {\n  cursor: pointer;\n  opacity: 0.4; }\n\n.search_container {\n  padding: 20px;\n  width: calc(100vw - 121px); }\n\n.search_title {\n  font-size: 22px;\n  font-weight: 900;\n  text-align: center;\n  color: #ff8b88; }\n\n.search_input {\n  width: 100%;\n  padding: 12px 24px;\n  background-color: transparent;\n  transition: -webkit-transform 250ms ease-in-out;\n  transition: transform 250ms ease-in-out;\n  transition: transform 250ms ease-in-out, -webkit-transform 250ms ease-in-out;\n  font-size: 14px;\n  line-height: 18px;\n  color: #575756;\n  background-color: transparent;\n  background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg);\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: 95% center;\n  border-radius: 50px;\n  border: 1px solid #575756;\n  transition: all 250ms ease-in-out;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.search_input::-webkit-input-placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px; }\n\n.search_input:-ms-input-placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px; }\n\n.search_input::-ms-input-placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px; }\n\n.search_input::placeholder {\n    color: color(#575756 a(0.8));\n    text-transform: uppercase;\n    letter-spacing: 1.5px; }\n\n.search_input:hover, .search_input:focus {\n    padding: 12px 0;\n    outline: 0;\n    border: 1px solid transparent;\n    border-bottom: 1px solid #575756;\n    border-radius: 0;\n    background-position: 100% center; }\n\nbutton {\n  padding: 15px;\n  margin: 10px 10px 0 10px;\n  font-size: 1.2em;\n  text-transform: uppercase;\n  background-color: #232733;\n  color: whitesmoke;\n  border: transparent 1px solid;\n  border-radius: 40px; }\n\nbutton:hover {\n    background-color: #575157;\n    cursor: pointer; }\n\nbutton:hover:active {\n      color: #f99819;\n      border: #f99819 1px solid; }\n\nbutton:disabled {\n    background-color: transparent;\n    color: #232733;\n    border: #232733 1px solid; }\n\nbutton:disabled:hover {\n      opacity: 1;\n      cursor: default; }\n\n@media (max-width: 600px) {\n  .search_container {\n    width: calc(100vw - 17px); } }\n\n@media (max-width: 450px) {\n  img {\n    width: 30vh;\n    height: 30vh; }\n  .bg {\n    width: 30vh;\n    height: 30vh;\n    margin-top: -30.5vh; }\n  .name {\n    width: 30vh;\n    margin-top: -170px; } }\n"

/***/ }),

/***/ "./src/app/recipes/reccomended/reccomended.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/reccomended/reccomended.component.ts ***!
  \**************************************************************/
/*! exports provided: ReccomendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReccomendedComponent", function() { return ReccomendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_ingridients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/ingridients.service */ "./src/app/shared/services/ingridients.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReccomendedComponent = /** @class */ (function () {
    function ReccomendedComponent(ingr) {
        this.ingr = ingr;
        this.recipies = [];
        this.buttonPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // search id from all recipes func
    ReccomendedComponent.prototype.clickHandler = function (id) {
        this.buttonPressed.emit(this.recipies.filter(function (x) { return x.id === id; }));
    };
    ReccomendedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingr.getRecipes()
            .subscribe(function (res) { _this.recipies = res.data; console.log(res); }, function (err) { return console.log(err); });
        // console.log(recipies);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReccomendedComponent.prototype, "buttonPressed", void 0);
    ReccomendedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reccomended',
            template: __webpack_require__(/*! ./reccomended.component.html */ "./src/app/recipes/reccomended/reccomended.component.html"),
            styles: [__webpack_require__(/*! ./reccomended.component.scss */ "./src/app/recipes/reccomended/reccomended.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_ingridients_service__WEBPACK_IMPORTED_MODULE_1__["IngridientsService"]])
    ], ReccomendedComponent);
    return ReccomendedComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModule", function() { return RecipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/recipes/list/list.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/item.component */ "./src/app/recipes/item/item.component.ts");
/* harmony import */ var _recipies_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipies-routing.module */ "./src/app/recipes/recipies-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var _reccomended_reccomended_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reccomended/reccomended.component */ "./src/app/recipes/reccomended/reccomended.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RecipesModule = /** @class */ (function () {
    function RecipesModule() {
    }
    RecipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _recipies_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecipiesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["RecipeListComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_3__["RecipeItemComponent"], _reccomended_reccomended_component__WEBPACK_IMPORTED_MODULE_7__["ReccomendedComponent"], _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchPipe"]],
            exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["RecipeListComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_3__["RecipeItemComponent"], _reccomended_reccomended_component__WEBPACK_IMPORTED_MODULE_7__["ReccomendedComponent"]]
        })
    ], RecipesModule);
    return RecipesModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipies-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/recipes/recipies-routing.module.ts ***!
  \****************************************************/
/*! exports provided: RecipiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipiesRoutingModule", function() { return RecipiesRoutingModule; });
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list.component */ "./src/app/recipes/list/list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item/item.component */ "./src/app/recipes/item/item.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _reccomended_reccomended_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reccomended/reccomended.component */ "./src/app/recipes/reccomended/reccomended.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'recipies', component: _list_list_component__WEBPACK_IMPORTED_MODULE_0__["RecipeListComponent"], pathMatch: 'full', canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'recipies/:id', component: _item_item_component__WEBPACK_IMPORTED_MODULE_2__["RecipeItemComponent"] },
    { path: 'recommended', component: _reccomended_reccomended_component__WEBPACK_IMPORTED_MODULE_5__["ReccomendedComponent"] },
    { path: 'recommended/:id', component: _item_item_component__WEBPACK_IMPORTED_MODULE_2__["RecipeItemComponent"] }
];
var RecipiesRoutingModule = /** @class */ (function () {
    function RecipiesRoutingModule() {
    }
    RecipiesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], RecipiesRoutingModule);
    return RecipiesRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/models/product.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/product.model.ts ***!
  \************************************************/
/*! exports provided: IngridientRes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngridientRes", function() { return IngridientRes; });
var IngridientRes = /** @class */ (function () {
    function IngridientRes(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
    return IngridientRes;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(searchText);
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/shared/products.data.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/products.data.ts ***!
  \*****************************************/
/*! exports provided: Ingridients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingridients", function() { return Ingridients; });
var Ingridients = localStorage.getItem('fridge') ? JSON.parse(localStorage.getItem('fridge')) : [];


/***/ }),

/***/ "./src/app/shared/services/basicIngridient.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/basicIngridient.service.ts ***!
  \************************************************************/
/*! exports provided: HttpIngridient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpIngridient", function() { return HttpIngridient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpIngridient = /** @class */ (function () {
    function HttpIngridient(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .append('Accept', 'application/json')
            .append('Authorization', 'Bearer' + this.authService.getToken());
    }
    HttpIngridient.prototype.getData = function () {
        return this.http.get('http://refrigerator-alevel.tk/api/ingredients', { headers: this.headers });
    };
    HttpIngridient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HttpIngridient);
    return HttpIngridient;
}());



/***/ }),

/***/ "./src/app/shared/services/ingridients.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/ingridients.service.ts ***!
  \********************************************************/
/*! exports provided: IngridientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngridientsService", function() { return IngridientsService; });
/* harmony import */ var _products_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products.data */ "./src/app/shared/products.data.ts");
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product.model */ "./src/app/shared/models/product.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IngridientsService = /** @class */ (function () {
    function IngridientsService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.ingridients = _products_data__WEBPACK_IMPORTED_MODULE_0__["Ingridients"];
        // this.getIngridientsFromServer().subscribe(res => {this.ingridients = res.ingredients; console.log(this.ingridients); });
    }
    IngridientsService.prototype.getIngridients = function () {
        // console.log(this.ingridients);
        return this.ingridients;
    };
    IngridientsService.prototype.getIngridientsFromServer = function () {
        return this.http.get('http://refrigerator-alevel.tk/api/refrigerator/ingredients', { headers: this.auth.AuthHeaders() });
    };
    IngridientsService.prototype.createIngridient = function (id, title, titleAmount, titleMeasure) {
        var ingridient = new _models_product_model__WEBPACK_IMPORTED_MODULE_1__["IngridientRes"](id, title, titleAmount + ' ' + titleMeasure);
        this.ingridients.push(ingridient);
        console.log(this.ingridients);
        return this.http.post('http://refrigerator-alevel.tk/api/refrigerator/ingredients', { 'ingredient_id': id, 'amount': titleAmount + ' ' + titleMeasure }, { headers: this.auth.AuthHeaders() })
            .subscribe(function (res) { return console.log(res); });
    };
    IngridientsService.prototype.deleteIngridient = function (ingridient) {
        var index = this.ingridients.indexOf(ingridient);
        if (index > -1) {
            this.ingridients.splice(index, 1);
        }
        console.log(this.ingridients);
        return this.http.delete("http://refrigerator-alevel.tk/api/refrigerator/ingredients/" + ingridient.id, { headers: this.auth.AuthHeaders() })
            .subscribe(function (res) { return console.log(res); });
    };
    IngridientsService.prototype.getRecipes = function () {
        return this.http.get('http://refrigerator-alevel.tk/api/refrigerator/recipes', { headers: this.auth.AuthHeaders() });
    };
    IngridientsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], IngridientsService);
    return IngridientsService;
}());



/***/ }),

/***/ "./src/app/shared/services/recipe.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/recipe.service.ts ***!
  \***************************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mock */ "./src/mock.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeService = /** @class */ (function () {
    function RecipeService() {
    }
    RecipeService.prototype.getRecipies = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock__WEBPACK_IMPORTED_MODULE_2__["recipies"]);
    };
    RecipeService.prototype.getRecipe = function (id) {
        return this.getRecipies().pipe(
        // (+) before `id` turns the string into a number
        Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) { return r.find(function (n) { return n.id === +id; }); }));
    };
    RecipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/start/start.module.ts":
/*!***************************************!*\
  !*** ./src/app/start/start.module.ts ***!
  \***************************************/
/*! exports provided: StartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartModule", function() { return StartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start/start.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StartModule = /** @class */ (function () {
    function StartModule() {
    }
    StartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]],
            exports: [_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]]
        })
    ], StartModule);
    return StartModule;
}());



/***/ }),

/***/ "./src/app/start/start/start.component.html":
/*!**************************************************!*\
  !*** ./src/app/start/start/start.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"back-wraper\">\r\n  <div class=\"background\">\r\n    <iframe class=\"back-video\" frameborder=\"0\" height=\"1920\" width=\"2500\" src=\"https://youtube.com/embed/ISEkNFoIrNk?start=7&autoplay=1&controls=0&showinfo=0&loop=1&playlist=ISEkNFoIrNk&mute=1&modestbranding=1&disablekb=1\"\r\n       allowfullscreen>\r\n    </iframe>\r\n  </div>\r\n</div>\r\n<div class=\"content-wraper\">\r\n  <div class=\"header\">\r\n      <h3>Refrigerator</h3>\r\n  </div>\r\n    <div class=\"footer\">\r\n      <div class=\"btn-holder sub-btn\">\r\n        <a routerLink=\"/login\" class=\"btn btn-blob\">Sign in</a>\r\n      </div>\r\n      <div class=\"btn-holder sub-btn\">\r\n        <a routerLink=\"/about\" class=\"btn btn-blob\">About</a>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/start/start/start.component.scss":
/*!**************************************************!*\
  !*** ./src/app/start/start/start.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  position: relative;\n  z-index: 1;\n  color: #9b9b9b;\n  font-family: AleksandraCRegular; }\n\nh3 {\n  font-size: 2.5em;\n  color: white;\n  line-height: 65px; }\n\n.back-wraper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n.header {\n  width: 100%;\n  height: 65px;\n  background-color: #232733;\n  position: fixed;\n  top: 0; }\n\n.footer {\n  width: 100%;\n  height: 65px;\n  background-color: #232733;\n  position: fixed;\n  bottom: 0; }\n\n.background {\n  position: absolute;\n  width: 170%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none; }\n\n.content-wraper {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  -webkit-animation: backAnim 5s linear;\n          animation: backAnim 5s linear; }\n\n.wraper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.btn-holder {\n  min-width: 150px;\n  display: inline-block;\n  justify-content: center; }\n\n.btn-holder.sub-btn {\n    min-height: 50px; }\n\n.btn-holder.sub-btn .btn {\n      width: 140px;\n      height: 40px;\n      line-height: 40px;\n      font-size: 1.5em;\n      line-height: 65px; }\n\n.btn-holder.sub-btn .btn:active {\n      color: #ffda44; }\n\n.btn {\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  cursor: pointer;\n  line-height: 340px;\n  background: #232733;\n  text-align: center;\n  color: whitesmoke;\n  text-transform: uppercase;\n  transition: 0.1s ease-out;\n  z-index: 1;\n  font-size: 3em; }\n\n.btn:hover {\n    color: #ffda44; }\n\n@-webkit-keyframes backAnim {\n  0% {\n    background: #232733; }\n  50% {\n    background: #232733; }\n  100% {\n    background: transparent; } }\n\n@keyframes backAnim {\n  0% {\n    background: #232733; }\n  50% {\n    background: #232733; }\n  100% {\n    background: transparent; } }\n\n@media only screen and (max-width: 600px) {\n  .background .back-video {\n    display: none; }\n  .content-wraper {\n    -webkit-animation: none;\n            animation: none;\n    background: url('foods.jpg') center center no-repeat;\n    background-size: cover; }\n  .wraper {\n    width: 50%;\n    height: 220px;\n    flex-direction: column;\n    -ms-grid-row-align: center;\n        align-self: center;\n    justify-content: space-around; }\n    .wraper .btn-holder {\n      margin: 0; }\n      .wraper .btn-holder .btn {\n        height: 20%;\n        width: 80%; }\n      .wraper .btn-holder .before {\n        width: 83.5%;\n        height: 100%;\n        line-height: 20vh; }\n  .btn-holder {\n    margin: 0; }\n  .btn {\n    width: 20vh;\n    height: 20vh;\n    line-height: 20vh; } }\n"

/***/ }),

/***/ "./src/app/start/start/start.component.ts":
/*!************************************************!*\
  !*** ./src/app/start/start/start.component.ts ***!
  \************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = /** @class */ (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.scss */ "./src/app/start/start/start.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/mock.ts":
/*!*********************!*\
  !*** ./src/mock.ts ***!
  \*********************/
/*! exports provided: recipies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipies", function() { return recipies; });
// import {IRecipe} from './app/shared/models/recipe.model';
var recipies = [
    {
        description: '',
        image: 'https://img01.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120214133254-120214133453-p-O-kurica-pikasso.jpg',
        recipeIngredient: [
            {
                name: 'Куриная грудка',
                count: '1000',
                measure: 'гр.'
            },
            {
                name: 'Лук',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Сладкий перец',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Помидоры',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Сыр',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Помидоры',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Смесь итальянских трав',
                count: '1',
                measure: 'ст.л.'
            },
            {
                name: 'Вода',
                count: '125',
                measure: 'гр.'
            },
            {
                name: 'Сливки',
                count: '125',
                measure: 'гр.'
            },
            {
                name: 'Оливковое масло',
                count: '2',
                measure: 'ст.л'
            },
            {
                name: 'Сливочное масло',
                count: '1',
                measure: 'ст.л.'
            },
            {
                name: 'Мускатный орех'
            },
            {
                name: 'Соль'
            },
            {
                name: 'Перец черный молотый'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '637',
            'fatContent': '31',
            'carbohydrateContent': '21',
            'proteinContent': '70'
        },
        recipeInstruction: [
            'Нарежьте болгарский перец кольцами (лучше выбрать трех разных цветов — это выглядит красочнее), предварительно удалив семена. Лук нарезать полукольцами, чеснок натереть на мелкой терке.',
            'Куриные грудки посолить, поперчить. В комбинации 2 столовые ложки оливкового и 1 столовая ложка сливочного масла, обжарить грудки до золотистой корочки. Переложить в форму для духовки.',
            'В этой же сковороде обжарить лук до золотистого цвета, переложить в форму к курице.',
            'Время для болгарского перца — слегка обжарить кольца, пока они не станут мягкими — и к курице.',
            'Тертый чеснок поместить в сковороду, пассеровать 30 секунд, затем залить водой, добавив нарезанные помидоры (кожицу можно предварительно удалить), хорошо перемешать. Добавить итальянских трав, овощной бульонный кубик, соль, перец, щепотку мускатного ореха. Влить полстакана сливок, перемешать.',
            'Варить соус 5 минут на медленном огне. Залить им курицу с овощами. Закрыть фольгой, отправить в духовку при температуре 200 градусов на 30 минут.',
            'Достать, посыпать натертым на терке сыром, поместить курицу обратно в духовку, но уже без фольги, еще на 15 минут, пока сыр не расплавится.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/kurica-pikasso-25902',
        name: 'Курица «Пикассо»',
        id: 0
    },
    {
        description: '',
        image: 'https://img01.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/170122183544-170209213750-p-O-kurica-v-kislo-sladkom-souse-po-kitajski.jpg',
        recipeIngredient: [
            {
                name: 'Куриное филе',
                count: '500',
                measure: 'гр.'
            },
            {
                name: 'Соевый соус',
                count: '10',
                measure: 'ст.л.'
            },
            {
                name: 'Яблочный уксус',
                count: '40',
                measure: 'мл.'
            },
            {
                name: 'Сахар',
                count: '5',
                measure: 'ч.л.'
            },
            {
                name: 'Вода',
                count: '1/2',
                measure: 'ст.'
            },
            {
                name: 'Томатная паста ',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Сладкий перец',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Консервированный ананас',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Помидоры',
                count: '2',
                measure: 'шт.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '261',
            'fatContent': '2',
            'carbohydrateContent': '24',
            'proteinContent': '36'
        },
        recipeInstruction: [
            'Куриное филе нарезать тонкими полосками, сложить в миску, залить соевым соусом (примерно 6 столовых ложек) и немного поперчить.\r\n',
            'Для приготовления соуса в глубокой сковородке, лучше в воке, смешать уксус, соевый соус (примерно 4 столовые ложки), томатную пасту. Поставить на огонь и прогреть, добавив часть сахара. Добавить воды, положить нарезанный полосками перец, консервированный ананас и помидоры. Попробовать на вкус. Если соус слишком кислый, добавить остатки сахара. Тушить на медленном огне около 10 минут. Овощи должны оставаться слегка твердыми. Соус должен быть в меру густым.',
            'Обжарить курицу, соединить с соусом и потушить еще минут 10. Подавать с рисом.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/kurica-v-kislo-sladkom-souse-po-kitajski-14456',
        name: 'Курица в кисло-сладком соусе по-китайски',
        id: 1
    },
    {
        description: 'Азу по-татарски. Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.',
        image: 'https://img06.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/140802212008-160519080709-p-O-azu-po-tatarski.jpg',
        recipeIngredient: [
            {
                name: 'Говядина',
                count: '500',
                measure: 'гр.'
            },
            {
                name: 'Лук репчатый',
                count: '5',
                measure: 'шт.'
            },
            {
                name: 'Соленые огурцы',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Томатная паста ',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Картофель',
                count: '1000',
                measure: 'гр.'
            },
            {
                name: 'Мясной бульон',
                count: '1',
                measure: 'ст.'
            },
            {
                name: 'Чеснок',
                count: '3',
                measure: 'шт.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '525',
            'fatContent': '17',
            'carbohydrateContent': '66',
            'proteinContent': '33'
        },
        recipeInstruction: [
            'Мясо промыть, нарезать соломкой и слегка обжарить в казане в разогретом растительном масле.',
            'Добавить порезанный тонкими полукольцами лук и обжаривать мясо с луком до мягкости лука.',
            'Добавить томатную пасту, мелко нарезанные или тертые на крупной терке огурцы. Залить водой или бульоном и тушить под крышкой до полной готовности мяса.',
            'В отдельной сковороде обжарить нарезанный соломкой картофель.',
            'Когда картофель будет почти готов, переложить его в казан с тушеным мясом, добавить, соль, перец, лавровый лист и пропущенный через чеснокодавилку или мелко порезанный чеснок.',
            'Осторожно перемешать и тушить картофель с мясом до готовности примерно 5-7 минут.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/azu-po-tatarski-21751',
        name: 'Азу по-татарски',
        id: 2
    },
    {
        description: '',
        image: 'https://img06.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120424123536-140707095137-p-O-makaroni-zapechennie-s-pomidorami-pod-sirom.jpg',
        recipeIngredient: [
            {
                name: 'Макароны',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Чеснок',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Черный перец горошком',
                count: '10',
                measure: 'шт.'
            },
            {
                name: 'Сыр',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Помидоры',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Майонез',
                count: '150',
                measure: 'гр.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '1183',
            'fatContent': '67',
            'carbohydrateContent': '112',
            'proteinContent': '31'
        },
        recipeInstruction: [
            'Сварите макароны, положите их на дно емкости для выпекания. Порежьте помидоры тонкими ломтиками и положите их на макароны. ',
            'Потрите сыр. Посыпьте макароны с помидорами тертым сыром и перцем. ',
            'Чеснок порежьте крупными ломтиками и уложите сверху на запеканку. Обмажьте поверхность блюда тонким слоем майонеза и запекайте в духовке до готовности (примерно, 10–20 минут). ',
            'Подавайте в горячем виде, можно украсить зеленью.'
        ],
        recipeYield: '2 порции',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/makaroni-zapechennie-s-pomidorami-pod-sirom-19696',
        name: 'Макароны, запеченные с помидорами, под сыром',
        id: 3
    },
    {
        description: 'Подавать на стол с гарниром, например, жареным кружочками картофелем, без жидкости — только овощи и мясо.',
        image: 'https://img09.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120131112336-140418202618-p-O-svinina-s-ovoschami-tushenaja-v-slivkah.jpg',
        recipeIngredient: [
            {
                name: 'Шампиньоны',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Свиная вырезка',
                count: '400',
                measure: 'гр.'
            },
            {
                name: 'Сладкий перец',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Помидоры',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Сливки',
                count: '150',
                measure: 'мл.'
            },
            {
                name: 'Перец черный молотый по вкусу'
            },
            {
                name: 'Молотый белый перец по вкусу'
            },
            {
                name: 'Оливковое масло',
                count: '100',
                measure: 'мл.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '397',
            'fatContent': '34',
            'carbohydrateContent': '4',
            'proteinContent': '19'
        },
        recipeInstruction: [
            'Возьмите свинину и нарежьте на кубики, примерно сантиметр на сантиметр.',
            'Разогрейте сотейник и вылейте в него 50 мл оливкового масла. Выложите свинину в сотейник. Поперчите и посолите по вкусу. Жарьте мясо в течение 15 минут.',
            'Пока жарится мясо, нарежьте крупно шампиньоны, кубиками помидор и длинными тонкими полосками сладкий болгарский перец.',
            'После 15 минутной обжарки свинины вылейте образовавшийся сок или жир из сотейника. Добавьте в сотейник 50 мл оливкового масла и все овощи. Посолите и поперчите по вкусу. Жарьте 5 минут. Не забывайте помешивать.',
            'После обжарки овощей и мяса добавьте сливки и воду, чтобы овощи и мясо было на 2/3 погружены в жидкость. Тушите 15–20 минут. Следите, чтобы смесь сливок и воды не выкипела полностью.'
        ],
        recipeYield: '5 порций',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/svinina-s-ovoschami-tushenaja-v-slivkah-31016',
        name: 'Свинина с овощами, тушеная в сливках',
        id: 4
    },
    {
        description: 'Картофель «Айдахо» — один из самых часто приготовляемых картофельных гарниров в мире. Несмотря на свое американское происхождение и оригинальное название (просто картофель там основная сельскохозяйственная культура), в России его больше знают как картофель по-деревенски. Чаще всего он подается к жареному мясу. Мясо может быть в любой форме: стейк, бургер, тонкая соломка. Впрочем, «Айдахо» вполне убедителен и без протеиновых скреп. Сам по себе. Как свой собственный штат Айдахо.',
        image: 'https://img07.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/151212225533-151221213208-p-O-kartofel-ajdaho.jpg',
        recipeIngredient: [
            {
                name: 'Молодой картофель',
                count: '10',
                measure: 'шт.'
            },
            {
                name: 'Оливковое масло',
                count: '250',
                measure: 'мл.'
            },
            {
                name: 'Укроп',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Петрушка',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Красный соус табаско',
                count: '1',
                measure: 'ч.л.'
            },
            {
                name: 'Соль по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '978',
            'fatContent': '85',
            'carbohydrateContent': '46',
            'proteinContent': '10'
        },
        recipeInstruction: [
            'Картофель хорошо промыть (очищать не надо), нарезать вдоль на восемь долек, положить в кастрюлю с холодной подсоленной водой.',
            'Довести до кипения и варить 2–3 минуты. Слить воду и поставить картофель остывать.',
            'Смешать оливковое масло с мелко порезанной зеленью, соусом и продавленным через чеснокодавилку чесноком. Выложить картофель на противень в один слой, предварительно обмакнув дольки в получившуюся смесь.',
            'Запекать в духовке 15–20 минут при температуре 200 градусов.'
        ],
        recipeYield: '3 порции',
        recipeCategory: 'Основные блюда',
        'suitableForDiet': 'Веганская еда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/kartofel-ajdaho-30625',
        name: 'Картофель «Айдахо»',
        id: 5
    },
    {
        description: 'Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат,\r\nа в начинку добавить, к примеру, кукурузу или сладкий красный перец.',
        image: 'https://img02.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120131082748-170604150624-p-O-kartofel-zapechennij-v-mundire.jpg',
        recipeIngredient: [
            {
                name: 'Картофель',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Сливочное масло',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Сметана',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Бекон',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Укроп по вкусу'
            },
            {
                name: 'Твердый сыр',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Зеленый лук по вкусу'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Свежемолотый черный перец по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '572',
            'fatContent': '45',
            'carbohydrateContent': '22',
            'proteinContent': '19'
        },
        recipeInstruction: [
            'Разогреть духовку до 200 градусов. Вымыть и обсушить клубни картофеля — кожица должна быть сухой, тогда она подрумянится и станет хрустящей. Каждую картофелину натереть небольшим количеством оливкового масла и солью и поставить в духовку на час-полтора.',
            'За полчаса до готовности картофеля положить на лист фольги неочищенные зубчики чеснока, посолить, поперчить, добавить немного сливочного и столовую ложку оливкового масла. Завернуть и поместить в духовку.',
            'Пока картофель и чеснок запекаются, ломтики бекона мелко нарезать и слегка обжарить до золотистого цвета на хорошо разогретой сухой сковороде. Отставить на время.',
            'Вынуть из духовки картофель и остудить. Острым ножом разрезать картофелины вдоль пополам, затем аккуратно, стараясь не повредить кожуру, ложкой вынуть мякоть и переложить в большую миску.',
            'Добавить в миску очищенный от шкурки печеный чеснок, сметану, немного оливкового масла, рубленую зелень, обжаренный бекон, почти весь тертый сыр (кроме пяти-шести столовых ложек) и аккуратно перемешать, стараясь не превратить смесь в пюре.',
            'При помощи столовой ложки начинить получившимся фаршем каждую картофельную половинку и выложить их шкурками вниз на широкий противень. Хорошо разогреть гриль в духовке.',
            'Сверху на каждую картофельную дольку выложить по паре кубиков очень холодного сливочного масла и посыпать оставшимся тертым сыром. Отправить в духовку на семь-десять минут.',
            'Запекать картофель до появления легкой румяной корочки. Готовые дольки слегка остудить и сразу подавать, сбрызнув небольшим количеством оливкового масла.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/kartofel-zapechennij-v-mundire-23962',
        name: 'Картофель, запеченный в мундире',
        id: 6
    },
    {
        description: '',
        image: 'https://img05.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120705181646-120722095435-p-O-ovoshhnoe-ragu-iz-kabachkov-s-kartofelem.jpg',
        recipeIngredient: [
            {
                name: 'Кабачки',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Лук репчатый',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Помидоры',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Морковь',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Зеленый перец',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Картофель',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Соль',
                count: '10',
                measure: 'гр.'
            },
            {
                name: 'Перец черный молотый',
                count: '5',
                measure: 'гр.'
            },
            {
                name: 'Растительное масло',
                count: '50',
                measure: 'мл.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '172',
            'fatContent': '9',
            'carbohydrateContent': '21',
            'proteinContent': '3'
        },
        recipeInstruction: [
            'Измельченный репчатый лук и тертую на крупной терке морковь обжарить в глубокой сковороде на растительном масле.',
            'Картофель очистить, порезать крупными кусками и обжарить вместе с луком и морковью.',
            'Из перца удалить семена, порезать полосками и добавить к овощам.',
            'Кабачки очистить, удалить семена, порезать кубиками и добавить в сковороду с остальными овощами.',
            'Обжарить все вместе в течение 10–15 минут, время от времени помешивая.',
            'Помидоры порезать дольками и добавить в рагу. Добавить соль, перец, пропущенный через пресс чеснок.',
            'Все перемешать, уменьшить огонь, накрыть сковороду крышкой и тушить 15–20 минут, время от времени помешивая. Когда все овощи будут готовы, выключить огонь и дать рагу настояться под крышкой.'
        ],
        recipeYield: '6 порций',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/ovoshhnoe-ragu-iz-kabachkov-s-kartofelem-32616',
        name: 'Овощное рагу из кабачков с картофелем',
        id: 7
    },
    {
        description: '',
        image: 'https://img09.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120213180745-120213180900-p-O-krevetki-v-slivochno-chesnochnom-souse.jpg',
        recipeIngredient: [
            {
                name: 'Сливочное масло',
                count: '50',
                measure: 'гр.'
            },
            {
                name: 'Чеснок',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Креветки',
                count: '800',
                measure: 'гр.'
            },
            {
                name: 'Рубленая петрушка',
                count: '3',
                measure: 'ст.л.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Сливки',
                count: '200',
                measure: 'мл.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '335',
            'fatContent': '18',
            'carbohydrateContent': '5',
            'proteinContent': '39',
            '@context': 'http://schema.org'
        },
        recipeInstruction: [
            'В глубокой сковороде растопить масло, добавить чеснок и немного потушить.',
            'Налить сливки, все перемешать и довести до кипения. Соус готов.',
            'Далее добавить в сковороду очищенные креветки и тушить 8–9 минут. В самом конце добавить петрушку и перемешать.',
            'Вынуть креветки. Соус оставить на огне, пока он слегка не загустеет.',
            'Бросить креветки обратно в соус и подержать на огне 2 минуты — блюдо готово.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/krevetki-v-slivochno-chesnochnom-souse-18350',
        name: 'Креветки в сливочно-чесночном соусе',
        id: 8
    },
    {
        description: 'Рататуй — французское блюдо, принадлежащее к прованской кухне, в классическом варианте готовится из свежего перца, сладких томатов, лука, чеснока и, конечно, кабачков. Первые упоминания о нем датируются 18 веком, когда блюдо было популярно среди бедных крестьян. Сегодня в рататуй добавляют баклажаны, которые ощутимо добавляют ему сытости. Важный элемент блюда — травы. В прованской кухне вкус привычных продуктов всегда раскрывается с новой стороны с помощью специй и трав. В рататуй можно добавить мускусную ноту трюфеля — любимого кулинарного парфюма всех поваров; розмарин с его глубоким, насыщенным ароматом; свежесть мяты и базилика. Похожие блюда существуют и в других кухнях мира: в Италии разновидность овощного рататуя называется капоната, в Испании — писто, а в Каталонии — самфайна. Рататуй по этому видеорецепту получается ароматным, сытным и красивым. Его можно есть горячим и холодным, он идеален для баранины с козьим сыром, рисом и яйцом и так же хорош в качестве самостоятельного блюда.',
        image: 'https://img05.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120815023247-120821220211-p-O-ratatuj.jpg',
        recipeIngredient: [
            {
                name: 'Баклажаны',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Желтый сладкий перец',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Красный сладкий перец',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Лук репчатый',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Помидоры',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Сахар щепотка'
            },
            {
                name: 'Оливковое масло',
                count: '50',
                measure: 'мл.'
            },
            {
                name: 'Томатная паста ',
                count: '1/2',
                measure: 'ч.л.'
            },
            {
                name: 'Петрушка',
                count: '10',
                measure: 'гр.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '191',
            'fatContent': '13',
            'carbohydrateContent': '16',
            'proteinContent': '4'
        },
        recipeInstruction: [
            'Нарезать мелкими кубиками лук и баклажаны. Баклажаны посыпать солью и дать им полежать несколько минут, чтобы пустили сок.',
            'За это время очистить перцы и помидоры от внутренностей, а мякоть нарезать такими же мелкими кубиками, как до того баклажаны и лук. Чеснок и петрушку мелко нарубить.',
            'Разогреть в сковородке часть оливкового масла, обжарить до мягкости лук и откинуть его на дуршлаг.',
            'Добавить в сковороду немного масла, обжарить на нем до мягкости предварительно отжатые от лишней жидкости кубики баклажанов. Обжаренные баклажаны откинуть на дуршлаг. Теперь осталось обжарить все на том же масле кубики перца и тоже откинуть их на дуршлаг.',
            'Долить в сковороду оставшееся масло, обжарить чеснок до мягкости, тут же добавить томатную пасту и щепотку сахара, а потом сразу помидоры. Тушить тридцать секунд, после ­чего вмешать все ранее обжаренные овощи и рубленую ­петрушку, посолить, поперчить, потомить минуту — и снять с огня.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Основные блюда',
        'suitableForDiet': 'Веганская еда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/ratatuj-32534',
        name: 'Рататуй',
        id: 9
    },
    {
        description: '',
        image: 'https://img07.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120131082342-170428120255-p-O-indejka-s-jablokami-i-lukom.jpg',
        recipeIngredient: [
            {
                name: 'Индейка',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Лук',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Яблоко',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Соевый соус',
                count: '1',
                measure: 'ст.л.'
            },
            {
                name: 'Оливковое масло',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Подсолнечное масло',
                count: '1',
                measure: 'ст.л.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '465',
            'fatContent': '30',
            'carbohydrateContent': '17',
            'proteinContent': '31'
        },
        recipeInstruction: [
            'Нарезать индейку на небольшие кусочки и положить ее мариноваться в оливковом масле с соевым соусом.',
            'Нарезать яблоко кубиками, а лук — тонкими кольцами. Обжарить лук в подсолнечном масле, помешивая, до золотистого цвета.',
            'Добавить к луку индейку вместе с маринадом и жарить на сильном огне несколько минут, постоянно помешивая.',
            'Убавить огонь, добавить яблоко, посолить, поперчить, накрыть крышкой и оставить тушиться еще минут на 7–10.',
            'В качестве гарнира очень хорошо подойдет гречневая лапша или рис.'
        ],
        recipeYield: '2 порции',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/indejka-s-jablokami-i-lukom-35274',
        name: 'Индейка с яблоками и луком',
        id: 10
    },
    {
        description: 'Чтобы мясо получилось более сочным, в фарш можно добавить мелко порезанный соленый огурец. ',
        image: 'https://img02.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120131082709-120213175636-p-O-kartofelnaya-zapekanka-s-solenym-ogurcom.jpg',
        recipeIngredient: [
            {
                name: 'Фарш',
                count: '400',
                measure: 'гр.'
            },
            {
                name: 'Картофель',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Лук репчатый',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Сыр',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Майонез',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            },
            {
                name: 'Соленые огурцы',
                count: '1',
                measure: 'шт.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '366',
            'fatContent': '26',
            'carbohydrateContent': '14',
            'proteinContent': '18'
        },
        recipeInstruction: [
            'В форму для запекания выложить слоями фарш, затем нарезанный кольцами лук, немного посолить, поперчить, сверху выложить тертый на крупной терке картофель, покрыть все майонезом, посыпать тертым на мелкой терке сыром и поставить в нагретую до 180 градусов духовку.',
            'Через 30–40 минут, как только сыр подрумянится, блюдо готово.'
        ],
        recipeYield: '6 порций',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/kartofelnaya-zapekanka-s-solenym-ogurcom-16894',
        name: 'Картофельная запеканка с соленым огурцом',
        id: 11
    },
    {
        description: '',
        image: 'https://img09.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/140812180013-140827002004-p-O-kurinoe-file-s-sousom-grechkoj.jpg',
        recipeIngredient: [
            {
                name: 'Гречневая крупа',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Куриное филе',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Лук репчатый',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Сметана',
                count: '150',
                measure: 'гр.'
            },
            {
                name: 'Молоко',
                count: '100',
                measure: 'мл.'
            },
            {
                name: 'Соевый соус',
                count: '2',
                measure: 'ч.л.'
            },
            {
                name: 'Петрушка по вкусу'
            },
            {
                name: 'Растительное масло',
                count: '1',
                measure: 'ст.л.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '505',
            'fatContent': '15',
            'carbohydrateContent': '39',
            'proteinContent': '54'
        },
        recipeInstruction: [
            'Отварить гречку.',
            'Приготовить соус — смешать в кастрюле молоко, соевый соус и сметану, подержать на огне минуты три, снять и добавить мелко рубленную петрушку.',
            'Обжарить на сковороде куриное филе. Когда оно будет готово, добавить лук колечками и обжаривать, пока он не станет золотистого цвета.',
            'Добавить на сковороду соус и полстакана воды.',
            'Тушить около 15 минут.',
            'Подавать филе с гречкой.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/kurinoe-file-s-sousom-grechkoj-17499',
        name: 'Куриное филе с соусом и гречкой',
        id: 12
    },
    {
        description: '',
        image: 'https://img08.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120131083923-120213175245-p-O-ris-s-jajcom-po-kitajski.jpg',
        recipeIngredient: [
            {
                name: 'Длиннозерный рис',
                count: '150',
                measure: 'гр.'
            },
            {
                name: 'Яйцо куриное',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Зеленый лук',
                count: '5',
                measure: 'шт.'
            },
            {
                name: 'Растительное масло',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Зеленый горошек',
                count: '125',
                measure: 'гр.'
            },
            {
                name: 'Соевый соус',
                count: '1',
                measure: 'ст.л.'
            },
            {
                name: 'Соль по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '323',
            'fatContent': '14',
            'carbohydrateContent': '36',
            'proteinContent': '11'
        },
        recipeInstruction: [
            'Отварить рис около 10–12 минут, почти до готовности, но не до полной мягкости. Слить и промыть под холодной водой, снова слить.',
            'В кастрюлю вылить яйца, взбить немного, поставить на маленький огонь, подогревать, помешивая, пока они немного не схватятся.',
            'Раскалить масло в большом воке. Добавить раздавленный чеснок, мелко нарезанный лук, отваренный горошек и обжаривать, помешивая, 1–2 минуты. Добавить в вок рис, перемешать. Добавить яйца, светлый соевый соус и щепотку соли, перемешать. Разложить по тарелкам, украсить нарезанным зеленым луком и подавать.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Основные блюда',
        url: 'https://eda.ru/recepty/osnovnye-blyuda/ris-s-jajcom-po-kitajski-15759',
        name: 'Рис с яйцом по-китайски',
        id: 13
    },
    {
        description: 'Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется. Кроме рукколы в этом салате уверенно чувствуют себя листья корн-салата и щавеля, но идеальнее всего ведет себя зеленая черемша. Используя ее, можно, кстати, отказаться от чеснока. Этот салат вообще допускает множество сюжетных отклонений. Например, вместо соли можно использовать соевый соус: в сочетании с фасолью он очень уместен. А для пущего благообразия можно капнуть в миску немного бальзамического уксуса.',
        image: 'https://img04.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/130829212936-130904132758-p-O-salat-iz-krasnoj-fasoli-s-tvorozhnim-sirom-krasnim-lukom-i-sezonnim-salatom.jpg',
        recipeIngredient: [
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            },
            {
                name: 'Консервированная фасоль',
                count: '400',
                measure: 'гр.'
            },
            {
                name: 'Лимон',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Оливковое масло',
                count: '50',
                measure: 'мл.'
            },
            {
                name: 'Руккола',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Творожный сыр',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Красный лук',
                count: '50',
                measure: 'гр.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '341',
            'fatContent': '23',
            'carbohydrateContent': '23',
            'proteinContent': '11'
        },
        recipeInstruction: [
            'Вскрыть две банки красной фасоли в собственном соку, слить сок и промыть фасоль холодной водой. Желающие использовать не баночную, а самостоятельно сваренную фасоль должны задуматься о приготовлении этого салата еще с вечера. Сначала замочить бобы на ночь, а потом варить их на медленном огне до готовности.',
            'Готовую фасоль смешать с мелко нарубленным красным луком, зеленью, например, рукколы (которую для удобства поедания нужно предварительно изорвать руками), давленым чесноком, оливковым маслом, лимонным соком и творожным сыром.',
            'Посолить, поперчить, дать продуктам две минуты притереться друг к другу и подавать к столу вместе с бокалом Nobile di Montepulciano, если вино осталось с вечера.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Салаты',
        url: 'https://eda.ru/recepty/salaty/salat-iz-krasnoj-fasoli-s-tvorozhnim-sirom-krasnim-lukom-i-sezonnim-salatom-16922',
        name: 'Салат из красной фасоли с творожным сыром, красным луком',
        id: 14
    },
    {
        description: '',
        image: 'https://img05.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120131090424-120213190009-p-O-klassicheskij-grecheskij-salat-horiatiki.jpg',
        recipeIngredient: [
            {
                name: 'Оливковое масло',
                count: '3',
                measure: 'ст.л.'
            },
            {
                name: 'Лимонный сок',
                count: '1,5',
                measure: 'ст.л.'
            },
            {
                name: 'Чеснок',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Сушеный орегано',
                count: '1/2',
                measure: 'ч.л.'
            },
            {
                name: 'Морская соль',
                count: '1/4',
                measure: 'ч.л.'
            },
            {
                name: 'Свежемолотый черный перец',
                count: '1/4',
                measure: 'ч.л.'
            },
            {
                name: 'Помидоры',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Красный лук',
                count: '1/4',
                measure: 'шт.'
            },
            {
                name: 'Огурцы',
                count: '1/2',
                measure: 'шт.'
            },
            {
                name: 'Зеленый стручковый перец',
                count: '1/2',
                measure: 'шт.'
            },
            {
                name: 'Сыр фета',
                count: '120',
                measure: 'гр.'
            },
            {
                name: 'Маслины без косточек',
                count: '16',
                measure: 'шт.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '257',
            'fatContent': '22',
            'carbohydrateContent': '6',
            'proteinContent': '6'
        },
        recipeInstruction: [
            'В небольшой банке смешайте оливковое масло, лимонный сок, измельченный чеснок, соль, перец и орегано. Закройте крышкой и хорошо встряхните, чтобы все перемешалось.',
            'В большую миску выложите нарезанные небольшими дольками помидоры, нарезанный полукруглыми кусочками огурец, нарезанный тонкими кольцами красный лук, нарезанный тонкими полосками зеленый перец, нарезанную кубиками фету и маслины.',
            'Перед подачей полейте заправкой, аккуратно перемешайте и посыпьте сверху свежемолотым черным перцем.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Салаты',
        url: 'https://eda.ru/recepty/salaty/klassicheskij-grecheskij-salat-horiatiki-21993',
        name: 'Классический греческий салат (Horiatiki)',
        id: 15
    },
    {
        description: '',
        image: 'https://img07.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120131082254-150731123959-p-O-vesennij-salat-s-kurinoj-grudkoj.jpg',
        recipeIngredient: [
            {
                name: 'Помидоры',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Куриная грудка',
                count: '500',
                measure: 'гр.'
            },
            {
                name: 'Твердый сыр',
                count: '150',
                measure: 'гр.'
            },
            {
                name: 'Красная консервированная фасоль',
                count: '1',
                measure: 'ст.'
            },
            {
                name: 'Зеленый салат',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Сухарики по вкусу'
            },
            {
                name: 'Майонез по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '197',
            'fatContent': '6',
            'carbohydrateContent': '11',
            'proteinContent': '23'
        },
        recipeInstruction: [
            'Помидоры, салат мелко нарезаем. Сыр трем на терке.',
            'Куриную грудку разделываем на мелкие кусочки и тушим на слабом огне минут 20, пока вся жидкость не выкипит. Можно слегка обжарить.',
            'Смешиваем все нарезанные и готовые ингредиенты, заправляем майонезом (сметаной). ',
            'Подаем салат, посыпав сверху сухариками.'
        ],
        recipeYield: '8 порций',
        recipeCategory: 'Салаты',
        url: 'https://eda.ru/recepty/salaty/vesennij-salat-s-kurinoj-grudkoj-31099',
        name: 'Весенний салат с куриной грудкой',
        id: 16
    },
    {
        description: '',
        image: 'https://img07.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/150108085750-150114175528-p-O-italjanskij-salat-s-vetchinoj-sirom-ovoschami.jpg',
        recipeIngredient: [
            {
                name: 'Ветчина',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Помидоры',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Сладкий перец',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Макароны',
                count: '400',
                measure: 'гр.'
            },
            {
                name: 'Консервированная кукуруза',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Сыр',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Майонез по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '841',
            'fatContent': '35',
            'carbohydrateContent': '93',
            'proteinContent': '37'
        },
        recipeInstruction: [
            'Отварите макароны — лучше всего использовать рожки или спиралевидные макароны — в подсоленной воде, слейте и дайте им остыть.',
            'Нарежьте помидоры и перец кубиками, ветчину — тонкими ломтиками. Сыр потрите на крупной терке.',
            'Смешайте все ингредиенты, заправьте салат майонезом.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Салаты',
        url: 'https://eda.ru/recepty/salaty/italjanskij-salat-s-vetchinoj-sirom-ovoschami-14334',
        name: 'Итальянский салат с ветчиной, сыром и овощами',
        id: 17
    },
    {
        description: '',
        image: 'https://img05.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120131090009-180113151820-p-O-krabovo-sirnij-salat-sharikami.jpg',
        recipeIngredient: [
            {
                name: 'Сыр',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Крабовые палочки',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Яйцо куриное',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Майонез по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '177',
            'fatContent': '11',
            'carbohydrateContent': '6',
            'proteinContent': '13'
        },
        recipeInstruction: [
            'Яйца отварить в течение 10 минут с момента закипания. Охладить, залив холодной водой.',
            'Крабовые палочки натереть на мелкой терке (одну палочку можно оставить для украшения).',
            'Сыр натереть на мелкой терке.',
            'Яйца натереть на мелкой терке.',
            'В салатник положить сыр, яйца и половину крабовых палочек. Добавить 2–3 столовые ложки майонеза и зубчик чеснока, выдавленный через чеснокодавилку. Перемешать в однородную массу. Из полученной массы сформировать шарики, размером с мячик для настольного тенниса. Обвалять в оставшейся крабовой стружке.',
            'Выложить готовые шарики на тарелку, по желанию украсить порезанной крабовой палочкой и зеленью.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Салаты',
        url: 'https://eda.ru/recepty/salaty/krabovo-sirnij-salat-sharikami-35112',
        name: 'Крабово-сырный салат шариками',
        id: 18
    },
    {
        description: '',
        image: 'https://img08.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120131082454-161109234550-p-O-salat-cezar-tradicionnij.jpg',
        recipeIngredient: [
            {
                name: 'Зеленый салат',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Помидоры',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Куриное филе',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Белый хлеб',
                count: '6',
                measure: 'шт.'
            },
            {
                name: 'Соус «Цезарь» по вкусу'
            },
            {
                name: 'Сливочное масло',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Чеснок',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Сыр пармезан по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '245',
            'fatContent': '11',
            'carbohydrateContent': '14',
            'proteinContent': '20'
        },
        recipeInstruction: [
            'Промыть, просушить и нарвать на небольшие кусочки листья салата, отложить в холодильник.',
            'В горячую сковородку положить 1 столовую ложку сливочного масла. После того, как оно полностью расплавится и начнет шипеть, кинуть нарезанный на пластины зубчик чеснока.',
            'Куриную грудку нарезать на кусочки приблизительно 1х3 см. Положить в сковороду к чесноку и маслу. Обжаривать на сильном огне приблизительно 10 минут до румяной корочки. Снять с огня.',
            'В ту же сковородку добавить еще одну столовую ложку сливочного масла и второй зубчик чеснока. В это время нарезать на небольшие кубики хлеб. Положить в сковороду и обжаривать до румяной корочки. Желательно непрерывно помешивать, чтобы не подгорело.',
            'Достать листья салата, туда же положить обжаренную куриную грудку, помидоры, нарезанные тонкой соломкой. Заправить соусом «Цезарь». Перемешать. Сверху положить получившиеся сухарики и натереть сыр.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Салаты',
        url: 'https://eda.ru/recepty/salaty/salat-cezar-tradicionnij-25585',
        name: 'Салат «Цезарь» традиционный',
        id: 19
    },
    {
        description: '',
        image: 'https://img05.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120213183611-120213183755-p-O-olive-po-sovetski.jpg',
        recipeIngredient: [
            {
                name: 'Картофель',
                count: '7',
                measure: 'шт.'
            },
            {
                name: 'Морковь',
                count: '5',
                measure: 'шт.'
            },
            {
                name: 'Маринованные огурцы',
                count: '6',
                measure: 'шт.'
            },
            {
                name: 'Консервированный зеленый горошек',
                count: '2',
                measure: 'ст.'
            },
            {
                name: 'Яйцо куриное',
                count: '6',
                measure: 'шт.'
            },
            {
                name: 'Докторская колбаса',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Сметана',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Майонез',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Соль по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '377',
            'fatContent': '26',
            'carbohydrateContent': '22',
            'proteinContent': '14'
        },
        recipeInstruction: [
            'Отварить картофель, морковь и яйца.',
            'Все нарезать мелкими кубиками.',
            'Все перемешать и заправить майонезом и сметаной.'
        ],
        recipeYield: '10 порций',
        recipeCategory: 'Салаты',
        url: 'https://eda.ru/recepty/salaty/olive-po-sovetski-20471',
        name: 'Оливье по-советски',
        id: 20
    },
    {
        description: 'Есть продукты, к которым относятся религиозно. Хотя сами продукты к религии прямого отношения не имеют. Украинское сало, итальянские помидоры, луховицкие огурцы — таких примеров тысячи. Турецкий горох нут — один из них. Однако самое известное с ним блюдо, — хумус — не самый лучший показатель вкусовых качеств этого гороха. Из него также интересно делать супы и закуски, где он будет присутствовать в цельном виде. А самый главный его плюс состоит в том, что спустя некоторое время приготовленный нут становится еще вкуснее.',
        image: 'https://img09.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120131084420-171007201419-p-O-nut-s-baklazhanom.jpg',
        recipeIngredient: [
            {
                name: 'Нут',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Баклажаны',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Оливковое масло',
                count: '4',
                measure: 'ст.л.'
            },
            {
                name: 'Кинза',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Петрушка',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Лимонный сок',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Белый винный уксус',
                count: '1',
                measure: 'ст.л.'
            },
            {
                name: 'Семена зиры',
                count: '1/2',
                measure: 'ч.л.'
            },
            {
                name: 'Молотая паприка',
                count: '1/2',
                measure: 'ч.л.'
            },
            {
                name: 'Морская соль по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '622',
            'fatContent': '43',
            'carbohydrateContent': '46',
            'proteinContent': '14'
        },
        recipeInstruction: [
            'Нут замочить на ночь (или на 4–6 часов). После слить воду, отварить до готовности в свежей чуть подсоленной воде 60–90 минут. Аккуратно. Не переварите.',
            'Баклажаны нарезать на крупные кубики, обжарить на оливковом масле со всех сторон до румяной корочки, посолить и тушить до мягкости/готовности. Остудить.',
            'Кинзу, петрушку и чеснок измельчить, добавить паприку, зиру, оливковое масло, уксус и лимонный сок.',
            'Нут, баклажаны и заправку смешать, посолить. Дать настояться в холодильнике часа 2.'
        ],
        recipeYield: '2 порции',
        recipeCategory: 'Салаты',
        'suitableForDiet': 'Веганская еда',
        url: 'https://eda.ru/recepty/salaty/nut-s-baklazhanom-22649',
        name: 'Нут с баклажаном',
        id: 21
    },
    {
        description: 'Может стать отличным дополнением к бифштексу. В качестве томатов лучше использовать помидоры черри. Во-первых, они отлично переносят обжарку по причине своей плотности, во-вторых, зимой в наших краях только у помидоров черри действительно помидорный вкус.',
        image: 'https://img04.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/130629211231-130712114123-p-O-salat-s-obzharennimi-tomatami.jpg',
        recipeIngredient: [
            {
                name: 'Помидоры',
                count: '400',
                measure: 'гр.'
            },
            {
                name: 'Смесь салатных листьев',
                count: '75',
                measure: 'гр.'
            },
            {
                name: 'Чеснок',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Натуральный йогурт',
                count: '200',
                measure: 'мл.'
            },
            {
                name: 'Оливковое масло',
                count: '55',
                measure: 'мл.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '182',
            'fatContent': '16',
            'carbohydrateContent': '7',
            'proteinContent': '3'
        },
        recipeInstruction: [
            'Помидоры среднего размера нарезать кольцами толщиной около сантиметра. Разогреть сковороду, влить чуть-чуть оливкового масла и обжарить ломтики томатов до появления корочки, а затем снять с огня.',
            'Смешать натуральный йогурт с 50 мл оливкового масла. Зубчик чеснока раздавить ножом, разобрать на волокна и мелко нарезать. Добавить нарубленный чеснок к йогурту с маслом, посолить и поперчить по вкусу.',
            'Заправить получившимся соусом смесь салатных листьев, украсить кольцами обжаренных томатов и подавать, когда они чуть остынут — или еще горячими, это уже дело вкуса.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Салаты',
        url: 'https://eda.ru/recepty/salaty/salat-s-obzharennimi-tomatami-31055',
        name: 'Салат с обжаренными томатами',
        id: 22
    },
    {
        description: 'Ананасы лучше взять консервированные не кольцами, а кусочками: не придется их резать.',
        image: 'https://img02.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/121003171635-140411132447-p-O-salat-iz-kurici-s-ananasami-kukuruzoj.jpg',
        recipeIngredient: [
            {
                name: 'Яйцо куриное',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Майонез по вкусу'
            },
            {
                name: 'Консервированная кукуруза',
                count: '2',
                measure: 'ст.'
            },
            {
                name: 'Консервированный ананас',
                count: '380',
                measure: 'гр.'
            },
            {
                name: 'Огурцы',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Куриное филе',
                count: '300',
                measure: 'гр.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '250',
            'fatContent': '5',
            'carbohydrateContent': '26',
            'proteinContent': '24'
        },
        recipeInstruction: [
            'Куриное филе отварить и разделить на волокна или нарезать мелкими кубиками. Огурец порезать соломкой, яйца сварить вкрутую и мелко порубить.',
            'Салатник лучше взять прямоугольной формы, чтобы слои получились равными. Выложить ингредиенты слоями, промазывая майонезом, в такой последовательности: курица, ананасы, огурцы. Отставить на 15–20 минут, потом сверху выложить слои яйца и кукурузы.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Салаты',
        'suitableForDiet': 'Низкокалорийная еда',
        url: 'https://eda.ru/recepty/salaty/salat-iz-kurici-s-ananasami-kukuruzoj-16805',
        name: 'Салат из курицы с ананасами и кукурузой',
        id: 23
    },
    {
        description: 'Салат с креветками и кунжутом прост и лаконичен, поскольку эти морепродукты сами по себе не нуждаются в лишнем сопровождении. Майонез в салате можно заменить на натуральный йогурт или оливковое масло, смешанное с лимонным соком. А дополнить блюдо — крупно нарезанным авокадо и тертым пармезаном. Сами креветки можно приготовить тремя путями: отварить, запечь или поджарить. Главное, не делать это долгое время. При каждой из этих обработок вкус креветок будет меняться по-разному, но менее привлекательным от этого не станет.',
        image: 'https://img04.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/131031145327-140806174529-p-O-salat-s-krevetkami-kunzhutom.jpg',
        recipeIngredient: [
            {
                name: 'Помидоры',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Королевские креветки',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Зеленый салат',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Огурцы',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Майонез по вкусу'
            },
            {
                name: 'Кунжутные семечки',
                count: '3',
                measure: 'ст.л.'
            },
            {
                name: 'Перец черный молотый по вкусу'
            },
            {
                name: 'Сушеный красный перец',
                count: '1/2',
                measure: 'шт.'
            },
            {
                name: 'Лимон',
                count: '1/2',
                measure: 'шт.'
            },
            {
                name: 'Оливковое масло',
                count: '2',
                measure: 'ст.л.'
            }
        ],
        recipeInstruction: [
            'Порезать овощи крупно, салат порвать на  куски.',
            'Для креветок: Довести до кипения  сильно соленую воду с красным  и черным перцем, оливковым маслом и  половинкой лимона ( сок предварительно выжать в воду).',
            'Добавить креветки. После кипения варить 5 минут.',
            'Очистить креветки от панциря.',
            'Смешать овощи  и креветки.',
            'Посыпать кунжутными семечками и заправить майонезом.'
        ],
        recipeYield: '2 порции',
        recipeCategory: 'Салаты',
        'suitableForDiet': 'Низкокалорийная еда',
        url: 'https://eda.ru/recepty/salaty/salat-s-krevetkami-kunzhutom-21742',
        name: 'Салат с креветками и кунжутом',
        id: 24
    },
    {
        description: 'Главный ингредиент салата хориатики — фета, традиционный греческий сыр из овечьего или козьего молока. По консистенции он напоминает плотный творог, а во вкусе имеет приятную ненавязчивую кислинку. В отличие от соленой и резкой брынзы, которой в этом салате часто заменяют фету остальные европейцы, он не забивает собой вкус свежих овощей, оливок и оливкового масла.',
        image: 'https://img02.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/110808212803-130725151049-p-O-nastojaschij-grecheskij-salat.jpg',
        recipeIngredient: [
            {
                name: 'Помидоры',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Зеленый перец',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Маслины',
                count: '10',
                measure: 'шт.'
            },
            {
                name: 'Огурцы',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Сушеный орегано',
                count: '1',
                measure: 'ч.л.'
            },
            {
                name: 'Сыр фета',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Оливковое масло',
                count: '5',
                measure: 'мл.'
            },
            {
                name: 'Соль на кончике ножа'
            },
            {
                name: 'Красный лук',
                count: '1',
                measure: 'шт.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '365',
            'fatContent': '27',
            'carbohydrateContent': '10',
            'proteinContent': '19'
        },
        recipeInstruction: [
            'Огурцы тщательно очистить от кожи и нарезать крупными полукруглыми ломтиками. Сложить в глубокий салатник или широкую миску, в которой будет удобно смешивать.',
            'Помидоры нарезать крупными дольками. Добавить в салатник к огурцам и перемешать. Мешать при этом греческий салат лучше всего руками, подливая на каждом этапе понемногу оливкового масла.',
            'Сладкий зеленый перец очистить от семян и перепонок и нарезать крупными кубиками. Добавить в салатник. Перемешать с другими овощами.',
            'Красный лук нарезать тонкими полукольцами, а затем руками разделить на тонкие лепестки. Переложить к остальным овощам, снова все перемешать.',
            'Добавить в салатник маслины без косточек (можно купить уже избавленные от косточек маслины, а можно очистить их самостоятельно, раздавив плоской стороной ножа каждую маслину и вынув косточку).',
            'Твердую фету нарезать острым ножом на прямоугольные ломтики толщиной в 1 см. Чтобы сыр не лип к лезвию, нож можно предварительно окунуть в теплую воду.',
            'Еще раз перемешать овощи в салатнике и разложить по тарелкам. Сверху на каждую порцию выложить по два ломтика феты. Щедро полить оливковым маслом.',
            'Слегка посолить салат и посыпать сушеным орегано. Сверху еще раз сбрызнуть оливковым маслом и подавать немедленно, пока овощи не пустили сок.'
        ],
        recipeYield: '3 порции',
        recipeCategory: 'Салаты',
        url: 'https://eda.ru/recepty/salaty/nastojaschij-grecheskij-salat-30893',
        name: 'Настоящий греческий салат',
        id: 25
    },
    {
        description: '',
        image: 'https://img03.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120911101012-140128195452-p-O-cezar-romano.jpg',
        recipeIngredient: [
            {
                name: 'Салат романо',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Сыр пармезан',
                count: '70',
                measure: 'гр.'
            },
            {
                name: 'Куриная грудка',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Яйцо куриное',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Сухарики по вкусу'
            },
            {
                name: 'Дижонская горчица',
                count: '1',
                measure: 'ч.л.'
            },
            {
                name: 'Чеснок',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Лимон',
                count: '1/2',
                measure: 'шт.'
            },
            {
                name: 'Вустерширский соус по вкусу'
            },
            {
                name: 'Оливковое масло',
                count: '150',
                measure: 'мл.'
            },
            {
                name: 'Анчоусы',
                count: '4',
                measure: 'шт.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '1941',
            'fatContent': '183',
            'carbohydrateContent': '11',
            'proteinContent': '66'
        },
        recipeInstruction: [
            'Куриную грудку обжарить до хрустящей золотистой корочки.',
            'Сделать соус «Цезарь»: взбить в блендере 1 яйцо, чайную ложку дижонской горчицы, зубчик чеснока, немного вустерширского соуса, сок половины лимона и 4 анчоуса; продолжая взбивать, медленно добавить 150 грамм оливкового масла и 40 грамм тертого пармезана.',
            'Выложите на блюдо романо.',
            'Выложите обжаренную и нарезанную куриную грудку.',
            'Добавьте соус «Цезарь».',
            'Сверху положите несколько полосок пармезана.',
            'Посыпьте салат сухариками или гренками.'
        ],
        recipeYield: '1 порция',
        recipeCategory: 'Салаты',
        'suitableForDiet': 'Низкокалорийная еда',
        url: 'https://eda.ru/recepty/salaty/cezar-romano-21857',
        name: '«Цезарь» романо',
        id: 26
    },
    {
        description: '',
        image: 'https://img08.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/140823083249-140901145946-p-O-teplij-salat-s-baklazhanami-bolgarskim-percem-fetoj.jpg',
        recipeIngredient: [
            {
                name: 'Баклажаны',
                count: '250',
                measure: 'гр.'
            },
            {
                name: 'Сладкий перец',
                count: '250',
                measure: 'гр.'
            },
            {
                name: 'Помидоры',
                count: '250',
                measure: 'гр.'
            },
            {
                name: 'Мед',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Дижонская горчица',
                count: '1',
                measure: 'ч.л.'
            },
            {
                name: 'Сыр фета',
                count: '150',
                measure: 'гр.'
            },
            {
                name: 'Оливковое масло',
                count: '6',
                measure: 'ст.л.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '297',
            'fatContent': '26',
            'carbohydrateContent': '9',
            'proteinContent': '6'
        },
        recipeInstruction: [
            'Баклажаны и болгарский перец порезать кубиками.',
            'Выложить порезанные баклажаны и перцы на противень, посолить, сбрызнуть оливковым маслом.',
            'Запечь баклажаны и перцы под грилем или в предварительно разогретой духовке при 220 градусах 10–15 минут.',
            'Помидоры порезать кубиками, примерно такого же размера, как и перцы.',
            'Фету немного размять в миске вилкой.',
            'Сделать заправку: смешать до однородности оставшееся оливковое масло, горчицу, мед, соль, черный молотый перец.',
            'Соединить баклажаны, перцы, помидоры и фету, залить заправкой, перемешать.'
        ],
        recipeYield: '6 порций',
        recipeCategory: 'Салаты',
        url: 'https://eda.ru/recepty/salaty/teplij-salat-s-baklazhanami-bolgarskim-percem-fetoj-31908',
        name: 'Теплый салат с баклажанами, болгарским перцем и фетой',
        id: 27
    },
    {
        description: '',
        image: 'https://img07.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120131083619-170816150250-p-O-sirnij-sup-po-francuzski-s-kuricej.jpg',
        recipeIngredient: [
            {
                name: 'Куриное филе',
                count: '500',
                measure: 'гр.'
            },
            {
                name: 'Плавленый сыр',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Картофель',
                count: '400',
                measure: 'гр.'
            },
            {
                name: 'Лук',
                count: '150',
                measure: 'гр.'
            },
            {
                name: 'Морковь',
                count: '180',
                measure: 'гр.'
            },
            {
                name: 'Сливочное масло по вкусу'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            },
            {
                name: 'Зелень по вкусу'
            },
            {
                name: 'Лавровый лист',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Гренки по вкусу'
            },
            {
                name: 'Черный перец горошком',
                count: '2',
                measure: 'шт.'
            }
        ],
        recipeInstruction: [
            'В кастрюлю на 3 литра положить мясо и налить воды. Как только бульон начнет кипеть, добавить 1 чайную ложку соли, пару горошков душистого перца и черного, 2–3 листика лаврового листа. Варить от момента закипания 20 минут. Затем мясо вынуть.',
            'Картофель почистить и нарезать кубиками. Лук нарезать кубиками. Морковь натереть на терке. Мясо порезать небольшими кусочками. Плавленый сыр (если в виде брусочка) натереть на терке или порезать кубиками.',
            'В кипящий бульон добавить картофель. С момента закипания 5–7 минут.',
            'В это время сделать слабую зажарку на сливочном масле. Сначала положить лук, затем морковь. Слегка посолить и поперчить. Готовую зажарку добавить в суп и варить еще 5–7 минут.',
            'Затем добавить порезанное мясо. Варить 3–4 минуты, добавить плавленый сыр, хорошенько помешать и выключить огонь.',
            'Перед подачей посыпать зеленью. По желанию подавать с гренками.'
        ],
        recipeYield: '4 порции',
        'publisher': {
            '@type': 'Person',
            image: 'https://newid.afisha.ru/StaticContent/UserPhoto/cb/90/2602ec9dc3534a62b3ed0a0da350cb90.jpg',
            '@context': 'http://schema.org',
            url: 'https://eda.ru/avtory/1392621',
            name: 'Катерина '
        },
        recipeCategory: 'Супы',
        '@context': 'http://schema.org',
        url: 'https://eda.ru/recepty/supy/sirnij-sup-po-francuzski-s-kuricej-32614',
        'position': 0,
        name: 'Сырный суп по-французски с курицей',
        id: 28
    },
    {
        description: '',
        image: 'https://img08.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/140227144100-140307232907-p-O-krem-sup-iz-mirpua-shampinonov-so-slivkami-na-kurinom-bulone.jpg',
        recipeIngredient: [
            {
                name: 'Свежие шампиньоны',
                count: '500',
                measure: 'гр.'
            },
            {
                name: 'Сливки',
                count: '300',
                measure: 'мл.'
            },
            {
                name: 'Сливочное масло',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Пшеничная мука',
                count: '3',
                measure: 'ст.л.'
            },
            {
                name: 'Оливковое масло',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Тимьян по вкусу'
            },
            {
                name: 'Чеснок',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            },
            {
                name: 'Сушеные белые грибы',
                count: '2',
                measure: 'шт.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '302',
            'fatContent': '27',
            'carbohydrateContent': '9',
            'proteinContent': '6'
        },
        recipeInstruction: [
            'Шампиньоны тщательно помойте, 2 красивых крепких гриба отложите. Отделите ножки и порубите их крупно. Шляпки нарежьте тонкими ломтиками. Ножки положите в кастрюлю, залейте 1-1,5 л. холодной воды, добавьте тимьян и неочищенный зубчик чеснока. Доведите до кипения, варите на небольшом огне под крышкой 30 минут.',
            'В большой сковороде разогрейте треть оливкового масла, положите нарезанные шляпки, посолите, закройте крышкой. Готовьте на сильном огне, потряхивая сковороду, 5 мин. Откройте крышку - в сковороде должен образоваться грибной сок. Аккуратно вычерпайте его в кастрюлю, где варятся ножки. Добавьте оставшееся оливковое масло, перемешайте и обжаривайте, помешивая, ещё 10 мин.',
            'Готовые шляпки положите в кастрюлю с ножками за 5-10 мин. до конца варки (тимьян и чеснок удалите). Отлейте примерно 1 стакан бульона и слегка остудите. Пока грибы довариваются, в небольшом сотейнике растопите сливочное масло, добавьте муку, обжаривайте на небольшом огне, всё время помешивая, 3-4 мин. Затем влейте отложенный бульон тонкой струйкой, всё время помешивая венчиком. Готовьте, помешивая, чтобы не было комков (при необходимости добавьте ещё бульона), 7-10 мин.',
            'Перелейте суп в блендер, добавьте заправку из сотейника, взбейте до однородности, верните в кастрюлю. Доведите до кипения, влейте сливки, прогрейте, не давая кипеть, приправьте солью и перцем, снимите с огня. ',
            'Для подачи отложенные шампиньоны нарежьте тонкими ломтиками. Сухие белые грибы с сухим тимьяном растолките в ступке в муку или смелите в кофемолке. Разлейте суп в подогретые тарелки, в центр выложите несколько ломтиков шампиньонов и посыпьте порошком из белых грибов с тимьяном. Подавайте немедленно.'
        ],
        recipeYield: '6 порций',
        recipeCategory: 'Супы',
        url: 'https://eda.ru/recepty/supy/krem-sup-iz-mirpua-shampinonov-so-slivkami-na-kurinom-bulone-21031',
        name: 'Крем-суп из мирпуа шампиньонов со сливками на курином бульоне',
        id: 29
    },
    {
        description: 'Изначально думала, что же можно сделать с пакетиком морепродуктов, купленном как-то на развес в гипермаркете. Я надеялась отложить вопрос с готовкой до более позднего, а точнее более ответственного момента, так как была уверена, что блюдо с такой основой требует повода, много продуктов, творчества, а главное времени, которого мне всегда страшно жаль на кухню. Но оказалось все не так сложно. Отклонив все возможные вариации на тему сливок и молочного в сочетании с рыбными продуктами, решила приготовить суп, который я когда-то ела на озере Тоба, расположенного в кратере супервулкана Тоба, на острове Суматра. Где он находится, ищите сами.',
        image: 'https://img03.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120214131925-120214132229-p-O-tomatnij-sup-iz-moreproduktov.jpg',
        recipeIngredient: [
            {
                name: 'Коктейль из морепродуктов',
                count: '250',
                measure: 'гр.'
            },
            {
                name: 'Лук репчатый',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Сладкий перец',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Помидоры',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Томатный сок',
                count: '350',
                measure: 'мл.'
            },
            {
                name: 'Шафран',
                count: '1',
                measure: 'ч.л.'
            },
            {
                name: 'Сушеный базилик',
                count: '1',
                measure: 'ч.л.'
            },
            {
                name: 'Прованские травы',
                count: '1',
                measure: 'ч.л.'
            },
            {
                name: 'Лимонный сок',
                count: '1',
                measure: 'ст.л.'
            },
            {
                name: 'Яйцо куриное',
                count: '2',
                measure: 'шт.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '132',
            'fatContent': '3',
            'carbohydrateContent': '11',
            'proteinContent': '13'
        },
        recipeInstruction: [
            'Замороженных гадов выложить в глубокую миску и залить кипятком. Оставить на пять-семь минут, затем откинуть на дуршлаг и обсушить. Переложить в кастрюлю, залить 500 мл воды и поставить на средний огонь.',
            'Тем временем в сковороде разогреть столовую ложку растительного масла и поджарить на нем измельченные лук и чеснок до золотистого цвета. Получившуюся поджарку добавить в кастрюлю с гадами.',
            'Помидор и сладкий болгарский перец нарезать небольшими кубиками. Кинуть в ту же сковороду, где готовились лук и чеснок, и быстро поджарить, постоянно помешивая, в течение пары минут, не дольше.',
            'Добавить поджаренные овощи в кастрюлю. Перемешать суп, довести до кипения. Слегка посолить и бросить несколько горошин черного перца.',
            'Влить томатный сок. Добавить шафран, смесь прованских трав (в хорошую прованскую смесь входят базилик, орегано, розмарин, чабер и тимьян) и сушеный базилик. Снова довести суп до кипения.',
            'Выжать в кастрюлю примерно столовую ложку лимонного сока. Помешать и дать супу покипеть еще минут пять-семь. Тем временем в небольшой миске взбить яйца.',
            'Тоненькой струйкой влить в кипящий суп взбитые яйца, непрерывно помешивая жидкость ложкой. Снять кастрюлю с огня, накрыть крышкой и оставить на пять минут.',
            'Готовый суп слегка остудить и разлить по тарелкам. Каждую порцию супа можно дополнительно посыпать черным молотым перцем и сбрызнуть лимонным соком.'
        ],
        recipeYield: '5 порций',
        recipeCategory: 'Супы',
        'suitableForDiet': 'Низкокалорийная еда',
        url: 'https://eda.ru/recepty/supy/tomatnij-sup-iz-moreproduktov-25076',
        name: 'Томатный суп из  морепродуктов',
        id: 30
    },
    {
        description: '',
        image: 'https://img05.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120803113558-120825182319-p-O-kurinij-sup-po-domashnemu.jpg',
        recipeIngredient: [
            {
                name: 'Куриные окорочка',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Картофель',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Морковь',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Лук репчатый',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Вермишель',
                count: '30',
                measure: 'гр.'
            },
            {
                name: 'Зелень',
                count: '50',
                measure: 'гр.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            },
            {
                name: 'Молотый белый перец по вкусу'
            },
            {
                name: 'Сушеный эстрагон щепотка'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '348',
            'fatContent': '16',
            'carbohydrateContent': '24',
            'proteinContent': '29'
        },
        recipeInstruction: [
            'Промытые окорочка кладем в кастрюлю, заливаем холодной водой, ставим на сильный огонь. Когда вода закипит, убавляем огонь до минимума, солим по вкусу, кладем неочищенную мытую луковицу и закрываем крышкой.\r\nЧерез 30 минут вылавливаем луковицу, кладем морковку, нарезанную кубиками. Через 5 минут добавляем очищенный и нарезанный картофель, пробуем на соль. Варим еще 10–15 минут.',
            'Затем добавляем вермишель, варим 15 минут. После кладем специи (щепотку эстрагона, душистого и белого перцев, немного черного). Через 5 минут выключаем. Даем супу настояться 10 минут. В тарелку с супом можно положить половинку вареного яйца и мелко нарезанную зелень.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Супы',
        url: 'https://eda.ru/recepty/supy/kurinij-sup-po-domashnemu-16144',
        name: 'Куриный суп по-домашнему',
        id: 31
    },
    {
        description: 'Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии. В качестве емкости для подачи этого супа можно вслед за Бокюзом использовать выскобленную тыкву. Свежую или слегка запеченную в духовке. У тыквы предварительно срезается верх, там где хвостик, извлекаются все мусорные внутренности.',
        image: 'https://img05.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/110801145439-170310001934-p-O-krem-sup-iz-tikvi.jpg',
        recipeIngredient: [
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            },
            {
                name: 'Очищенные семена тыквы',
                count: '50',
                measure: 'гр.'
            },
            {
                name: 'Сахар',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Петрушка',
                count: '20',
                measure: 'гр.'
            },
            {
                name: 'Сливки',
                count: '200',
                measure: 'мл.'
            },
            {
                name: 'Бренди',
                count: '50',
                measure: 'мл.'
            },
            {
                name: 'Сливочное масло',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Чеснок',
                count: '6',
                measure: 'шт.'
            },
            {
                name: 'Красный лук',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Тыква',
                count: '1000',
                measure: 'гр.'
            },
            {
                name: 'Куриный бульон',
                count: '1000',
                measure: 'мл.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '343',
            'fatContent': '22',
            'carbohydrateContent': '25',
            'proteinContent': '10'
        },
        recipeInstruction: [
            'Мелко нарубить красный лук и чеснок и обжарить в глубоком сотейнике на сливочном масле. Сначала лук, а когда он станет мягким — чеснок. Чеснок жарится только до появления сильного аромата — не дольше. Пережаренный чеснок — горчит.',
            'Дальше нужно высыпать в сотейник нарезанную мелкими кубиками мякоть тыквы и обжарить ее вместе с луком и чесноком, следя за тем, чтобы ничего не подгорело и постоянно помешивая всю компанию.',
            'Как только тыква немного размягчится, что легко определить простым нажатием ложки, влить на сковороду бренди и жарить еще минут пять, пока алкоголь не выпарится.',
            'Затем нужно залить содержимое сотейника куриным бульоном, добавить перец, соль, сахар и еще 5–7 минут поварить.',
            'Получившуюся кашу разбить в блендере вместе с нежирными сливками, петрушкой (предварительно нарезав ее). \r\nПодавать с обжаренными на сухой сковороде очищенными тыквенными семечками.'
        ],
        recipeYield: '6 порций',
        recipeCategory: 'Супы',
        url: 'https://eda.ru/recepty/supy/krem-sup-iz-tikvi-16754',
        name: 'Крем-суп из тыквы',
        id: 32
    },
    {
        description: 'Бульон не следует сильно солить, поскольку все ингредиенты достаточно соленые. Лучше попробовать солянку в самом конце варки и при необходимости досолить.',
        image: 'https://img01.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/120131084941-171018124548-p-O-soljanka-mjasnaja.jpg',
        recipeIngredient: [
            {
                name: 'Говядина',
                count: '400',
                measure: 'гр.'
            },
            {
                name: 'Сосиски',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Вареная колбаса',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Соленые огурцы',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Ветчина',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Лук репчатый',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Петрушка',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Маслины',
                count: '1',
                measure: 'ст.'
            },
            {
                name: 'Томатная паста ',
                count: '2',
                measure: 'ст.л.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '684',
            'fatContent': '51',
            'carbohydrateContent': '11',
            'proteinContent': '41',
            '@context': 'http://schema.org'
        },
        recipeInstruction: [
            'Из говядины (или свинины) варим бульон, добавляем лавровый лист и черный перец.',
            'Нарезаем мясо из бульона, сосиски, колбасу и ветчину (или сырокопченую колбасу). Лук, огурцы и петрушку мелко нарезаем и тушим минут 10 с томатной пастой.',
            'Кладем в бульон тушеную смесь и варим не более 10 минут. Затем добавляем мясо, сосиски, ветчину и колбасу. Варим, пока не закипит бульон. Выливаем в солянку маслины вместе с рассолом (маслины должны быть без косточек). Доводим до кипения и сразу же выключаем. Подаем на стол с ломтиком лимона и сметаной.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Супы',
        url: 'https://eda.ru/recepty/supy/soljanka-mjasnaja-16313',
        name: 'Солянка мясная',
        id: 33
    },
    {
        description: '',
        image: 'https://img05.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/150715140424-150719195832-p-O-italjanskij-sup-s-sosiskami.jpg',
        recipeIngredient: [
            {
                name: 'Оливковое масло',
                count: '1',
                measure: 'ст.л.'
            },
            {
                name: 'Сосиски',
                count: '450',
                measure: 'гр.'
            },
            {
                name: 'Лук репчатый',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Куриный бульон',
                count: '900',
                measure: 'мл.'
            },
            {
                name: 'Консервированные помидоры',
                count: '800',
                measure: 'гр.'
            },
            {
                name: 'Макароны',
                count: '150',
                measure: 'гр.'
            },
            {
                name: 'Консервированная фасоль',
                count: '225',
                measure: 'гр.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '293',
            'fatContent': '15',
            'carbohydrateContent': '26',
            'proteinContent': '14'
        },
        recipeInstruction: [
            'Обжариваем в кастрюле сосиски, пока они не зарумянятся. Перекладывем сосиски в миску.',
            'В той же кастрюле в масле нарезанный лук пассеруем, чтобы он стал золотистым. Добавляем очень мелко нарубленный чеснок, готовим еще 1 минуту, добавляем размятые  ложкой помидоры.',
            'Добавляем куриный бульон, доводим до кипения, уменьшаем огонь и, закрыв крышкой, варим 25 минут.',
            'В суп добавляем консервированную белую фасоль, жареные сосиски и предварительно сваренные мелкие макароны. Подаем горячим, можно с пармезаном.'
        ],
        recipeYield: '8 порций',
        recipeCategory: 'Супы',
        url: 'https://eda.ru/recepty/supy/italjanskij-sup-s-sosiskami-14937',
        name: 'Итальянский суп с сосисками',
        id: 34
    },
    {
        description: '1. Хмели-сунели лучше добавлять больше,что бы вкус был насыщенней. Мне смесь составляли и добавили туда сушеного чили, что придало остроты. Так что, если любите острое добавляйте его.\r\n2. Не переборщите с рисом, иначе ну утро у вас будет не суп харчо, а каша.\r\n3. Кинзу с чесноком очень важно класть в последнюю очередь. Вкус кинзы и чесночка должны быть ярко выражены!\r\n4. Когда вы убедились,что суп готов, сразу на стол не подавайте, а дайте настояться еще пару минут.\r\n5. Самое главное - готовить с любовью, тогда очень вкусным будет любое блюдо!',
        image: 'https://img04.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120214125956-120214130142-p-O-harcho-iz-kurici.jpg',
        recipeIngredient: [
            {
                name: 'Рис',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Куриная грудка',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Лук репчатый',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Томатная паста ',
                count: '1/2',
                measure: 'ст.'
            },
            {
                name: 'Кинза по вкусу'
            },
            {
                name: 'Хмели-сунели по вкусу'
            },
            {
                name: 'Лавровый лист',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '141',
            'fatContent': '2',
            'carbohydrateContent': '18',
            'proteinContent': '15'
        },
        recipeInstruction: [
            'Поставить варить куриную грудку в подсоленной воде. Во время ее варки промыть рис, чтобы блюдо не получилось похожим на кашу.',
            'Достать куриную грудку из бульона и засыпать в него промытый рис.',
            'Пока рис варится, нарезать головку лука кубиками и поставить жарить на медленном огне, обжаривать до золотистого цвета (главное не пережарить).',
            'Когда лук готов, добавить в сковородку томатную пасту, хорошо перемешать с луком и добавить пару столовых ложек куриного бульона, накрыть крышкой и ждать пока не сварится рис.',
            'Пока рис варится и тушится томатная паста с лучком, филе курицы отделить от косточек (если вы варите курицу с косточками, так бульон получается более наваристым) и порезать мясо соломкой (т.е. вдоль волокон, но так чтобы не получилось очень длинно) и засыпать обратно в бульон к рису.',
            'Добавить к курице и рису томатную смесь и оставить вариться на медленном огне.',
            'Чеснок натереть на мелкой терке и добавить в суп.',
            'Кинзу промыть под струей холодной воды и добавить в блюдо. ',
            'Кинуть лавровый листок, хмели-сунели, соль, перец — все по вкусу.'
        ],
        recipeYield: '5 порций',
        recipeCategory: 'Супы',
        url: 'https://eda.ru/recepty/supy/harcho-iz-kurici-23932',
        name: 'Харчо из курицы',
        id: 35
    },
    {
        description: 'В Грузии в разных областях готовят харчо по-разному. Мы представляем классический грузинский рецепт супа харчо из привычных для нашего стола ингредиентов. Можно использовать говядину, если хотите блюдо попостнее, и баранину — для большей жирности. Но мясо обязательно должно быть на косточке! Краснодарский рис заменит грецкий орех из классического рецепта грузинских хозяек. А помидоры добавят необходимую кислинку вместо алычи. Для этих же целей можно использовать чернослив или гранатовый сок. И не стоит забывать главный секрет харчо — пряных специй и рубленой зелени не жалеть.',
        image: 'https://img07.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/140902214744-140910171546-p-O-sup-harcho.jpg',
        recipeIngredient: [
            {
                name: 'Говядина',
                count: '400',
                measure: 'гр.'
            },
            {
                name: 'Лук репчатый',
                count: '3',
                measure: 'шт.'
            },
            {
                name: 'Рис',
                count: '4',
                measure: 'ст.л.'
            },
            {
                name: 'Помидоры',
                count: '500',
                measure: 'гр.'
            },
            {
                name: 'Укроп по вкусу'
            },
            {
                name: 'Петрушка по вкусу'
            },
            {
                name: 'Специи по вкусу'
            },
            {
                name: 'Чеснок',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Кинза по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '314',
            'fatContent': '13',
            'carbohydrateContent': '29',
            'proteinContent': '22'
        },
        recipeInstruction: [
            'Очищаем мясо от костей. В кастрюлю наливаем 2–2,5 литра холодной воды, закладываем мясо и косточки и ставим на огонь.',
            'Когда вода закипит, тщательно снимаем пену и уменьшаем огонь так, чтобы вода слегка побулькивала. Оставляем варить на час–полтора. За полчаса до окончания варки в бульон можно добавить корень петрушки или сельдерея и посолить по вкусу.',
            'Тем временем, мелко режем лук и обжариваем его в растительном масле на медленном огне, чтобы лук оставался мягким.',
            'Как только лук начнет приобретать золотистый цвет, добавляем к нему мясо из бульона и жарим минут 5.',
            'Затем добавляем пару столовых ложек бульона и тушим под закрытой крышкой минут 15.',
            'Пока мясо и лук тушатся, подготавливаем помидоры.',
            'Содержимое сковороды отправляем в бульон, который снова уже на плите и собирается закипеть.',
            'Добавить в содержимое кастрюли рис и продолжать варить.',
            'Даем нашему еще не законченному супу 5 минут покипеть, уменьшаем огонь до среднего и добавляем специи.',
            'На самом последнем этапе приготовления добавляем толченый чеснок и мелко рубленную зелень (укроп, петрушку и кинзу).',
            'Даем час супу настояться под крышкой и можно подавать на стол.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Супы',
        url: 'https://eda.ru/recepty/supy/sup-harcho-33916',
        name: 'Суп харчо',
        id: 36
    },
    {
        description: 'Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Нужно брать очень спелые, иначе они не разварятся до нужного состояния. Дополнят блюдо свежая кинза и отдельные дольки лимона. Если суп покажется слишком экзотичным и легким, никто не мешает добавить фасоль или куриное мясо.',
        image: 'https://img03.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/130829212936-130904194341-p-O-tomatnij-magribskij-sup.jpg',
        recipeIngredient: [
            {
                name: 'Помидоры',
                count: '1000',
                measure: 'гр.'
            },
            {
                name: 'Красный лук',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Куриный бульон',
                count: '1000',
                measure: 'мл.'
            },
            {
                name: 'Мед',
                count: '2',
                measure: 'ч.л.'
            },
            {
                name: 'Лимон',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Имбирь',
                count: '20',
                measure: 'гр.'
            },
            {
                name: 'Тмин',
                count: '1/4',
                measure: 'ч.л.'
            },
            {
                name: 'Корица',
                count: '1/4',
                measure: 'ч.л.'
            },
            {
                name: 'Петрушка',
                count: '50',
                measure: 'гр.'
            },
            {
                name: 'Кинза',
                count: '50',
                measure: 'гр.'
            },
            {
                name: 'Оливковое масло',
                count: '50',
                measure: 'мл.'
            },
            {
                name: 'Паприка',
                count: '1',
                measure: 'ч.л.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '164',
            'fatContent': '10',
            'carbohydrateContent': '14',
            'proteinContent': '6'
        },
        recipeInstruction: [
            'Мелко нарубленный лук обжарить в глубоком сотейнике на оливковом масле с тертым имбирем, молотой корицей, семенами тмина (или зиры). Обжаривать до сильного запаха жареного лука и специй, но не пережечь. Угля не нужно. ',
            'Помидоры мелко нарезать (можно избавиться предварительно от кожицы и семян, но это для слишком деликатных поваров) и добавить к луку. Туда же влить куриный бульон, заправить содержимое сотейника медом, одной чайной ложкой рубленой петрушки, одной чайной ложкой рубленой кинзы, посолить, поперчить, ­довести все это до кипения, убавить огонь и томить едва булькающую гущу несколько минут, время от времени помешивая. ',
            'Снять суп и охладить его в раковине, наполненной водой и льдом. После чего влить в суп столовую ложку лимонного сока, бросить остатки нарубленных петрушки и кинзы, перемешать и разлить по тарелкам, положив в каждую тонкий ломтик лимона или лайма.'
        ],
        recipeYield: '6 порций',
        recipeCategory: 'Супы',
        url: 'https://eda.ru/recepty/supy/tomatnij-magribskij-sup-15584',
        name: 'Томатный магрибский суп',
        id: 37
    },
    {
        description: '',
        image: 'https://img03.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/160729115308-161117185931-p-O-krem-sup-iz-shampinonov-i-kartofelja.jpg',
        recipeIngredient: [
            {
                name: 'Шампиньоны',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Картофель',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Лук репчатый',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Сливки',
                count: '500',
                measure: 'мл.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '381',
            'fatContent': '26',
            'carbohydrateContent': '30',
            'proteinContent': '10'
        },
        recipeInstruction: [
            'Поставить вариться 4–5 средних картофелин.',
            'Лук и грибы очистить. Лук мелко нарезать, грибы нарезать дольками. Обжарить лук на сливочном масле до прозрачности, потом добавить грибы. Жарить до готовности грибов, постоянно помешивая, чтобы не пригорело.',
            'Когда картошка сварится, слить воду, но можно, на всякий случай, оставить стакан воды, в которой варилась картошка. Добавить грибы с луком в картофель, добавить сливки, соль, перец и измельчить блендером. Если вам кажется, что суп густоват, добавить ту самую воду.',
            'Подавать с гренками.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Супы',
        url: 'https://eda.ru/recepty/supy/krem-sup-iz-shampinonov-i-kartofelja-34385',
        name: 'Крем-суп из шампиньонов и картофеля',
        id: 38
    },
    {
        image: 'https://img03.rl0.ru/eda/c380x380i/s2.eda.ru/Photos/120214155832-151005131434-p-O-slivochnij-sup-s-semgoj.jpg',
        recipeIngredient: [
            {
                name: 'Семга',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Картофель',
                count: '500',
                measure: 'гр.'
            },
            {
                name: 'Помидоры',
                count: '300',
                measure: 'гр.'
            },
            {
                name: 'Лук-порей',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Сливки',
                count: '500',
                measure: 'мл.'
            },
            {
                name: 'Морковь',
                count: '150',
                measure: 'гр.'
            },
            {
                name: 'Растительное масло',
                count: '2',
                measure: 'ст.л.'
            },
            {
                name: 'Зелень',
                count: '100',
                measure: 'гр.'
            },
            {
                name: 'Соль по вкусу'
            },
            {
                name: 'Перец черный молотый по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '481',
            'fatContent': '34',
            'carbohydrateContent': '38',
            'proteinContent': '24'
        },
        recipeInstruction: [
            'Лук-порей нарезать кольцами, морковь натереть на тёрке. \r\nКартофель почистить, нарезать небольшими кубиками или брусочками. \r\nСемгу нарезать кубиками.',
            'Помидоры очистить от кожицы (чтобы кожица снялась легче, можно помидоры опустить на несколько секунд в кипяток), нарезать кубиками.',
            'В кастрюле на растительном масле обжарить лук и морковь. Добавить помидоры, слегка обжарить. Затем налить 1 литр воды, довести до кипения.',
            'Когда вода закипит, добавить картофель, немного посолить, варить 5-7 минут. Затем добавить семгу. Следом влить сливки. Варить до готовности картофеля (3-5 минут). Если необходимо, добавить соли по вкусу.',
            'Готовый суп посыпать зеленью.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Супы',
        url: 'https://eda.ru/recepty/supy/slivochnij-sup-s-semgoj-18912',
        name: 'Сливочный суп с семгой',
        id: 39
    },
    {
        description: '',
        image: 'https://img05.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/150730211652-150810161942-p-O-sirnij-sup-s-zelenju.jpg',
        recipeIngredient: [
            {
                name: 'Плавленый сырок',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Лук репчатый',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Морковь',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Зелень по вкусу'
            },
            {
                name: 'Картофель',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Оливковое масло по вкусу'
            },
            {
                name: 'Специи по вкусу'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '357',
            'fatContent': '12',
            'carbohydrateContent': '47',
            'proteinContent': '20'
        },
        recipeInstruction: [
            'Ставим кастрюлю с водой.',
            'Делаем зажарку из лука и моркови на оливковом масле.',
            'Добавляем зажарку в воду, затем картошку кубиками, специи по вкусу.',
            'Когда картофель почти готов, добавляем сыр, натертый на крупной терке, либо нарезанный маленькими кубиками.',
            'Помешиваем суп, пока сыр полностью не растворится.',
            'Добавляем зелень и через минуту выключаем огонь.',
            'Супу хорошо немного постоять под крышкой, затем он будет готов.'
        ],
        recipeYield: '4 порции',
        recipeCategory: 'Супы',
        'suitableForDiet': 'Вегетарианская еда',
        url: 'https://eda.ru/recepty/supy/sirnij-sup-s-zelenju-29989',
        name: 'Сырный суп с зеленью',
        id: 40
    },
    {
        description: 'Борщ лучше готовить на медленном огне.',
        image: 'https://img03.rl0.ru/eda/c380x380i/s1.eda.ru/Photos/151002075307-151011085748-p-O-borsch-s-kuricej.jpg',
        recipeIngredient: [
            {
                name: 'Свекла',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Курица',
                count: '600',
                measure: 'гр.'
            },
            {
                name: 'Картофель',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Белокочанная капуста',
                count: '200',
                measure: 'гр.'
            },
            {
                name: 'Лук репчатый',
                count: '1',
                measure: 'шт.'
            },
            {
                name: 'Морковь',
                count: '2',
                measure: 'шт.'
            },
            {
                name: 'Чеснок',
                count: '4',
                measure: 'шт.'
            },
            {
                name: 'Сметана по вкусу'
            },
            {
                name: 'Томатная паста ',
                count: '1',
                measure: 'ст.л.'
            }
        ],
        nutrition: {
            '@type': 'NutritionInformation',
            'calories': '296',
            'fatContent': '14',
            'carbohydrateContent': '23',
            'proteinContent': '20'
        },
        recipeInstruction: [
            'Курицу разморозить, разделить на части и поставить варить. Посолить бульон.',
            'Когда вода закипит, добавить нарезанную картошку.',
            'Свеклу (крупную), морковь натереть на терке. Лук мелко порезать. Раздавить чеснок. Обжарить в подсолнечном масле 5 минут. Вложить томатную пасту.',
            'Капусту нашинковать и добавить в бульон.',
            'Как только картошка стала мягкой, добавить заправку, оставить еще на 3–5 минут.',
            'При подаче на стол добавить сметаны, можно украсить зеленью.'
        ],
        recipeYield: '6 порций',
        recipeCategory: 'Супы',
        'suitableForDiet': 'Низкокалорийная еда',
        url: 'https://eda.ru/recepty/supy/borsch-s-kuricej-28797',
        name: 'Борщ с курицей',
        id: 41
    }
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\recipe_book\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map