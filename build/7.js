webpackJsonp([7],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(694);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(authService, navCtrl, menuCtrl, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.credentials = { username: "", password: "" };
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menuCtrl.swipeEnable(false);
        if (this.authService.isLogged()) {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            this.authService.refreshToken()
                .subscribe(function (response) {
                _this.authService.login(response.headers.get('Authorization'));
                setTimeout(function () {
                    loading_1.dismiss();
                    _this.navCtrl.setRoot('MainPage');
                }, 1200);
            }, function (error) { loading_1.dismiss(); });
        }
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    HomePage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.authService.authenticate(this.credentials)
            .subscribe(function (response) {
            _this.authService.login(response.headers.get('Authorization'));
            setTimeout(function () {
                loading.dismiss();
                _this.navCtrl.setRoot('MainPage');
            }, 1200);
        }, function (error) { loading.dismiss(); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/lepsistemas/mobile/patrimonium/src/pages/home/home.html"*/'<ion-content class="masters" padding>\n  <img src="assets/imgs/logo.png"/>\n  <form>\n    <ion-item class="masters">\n      <ion-label floating>E-mail</ion-label>\n      <ion-input [(ngModel)]="credentials.username" name="username" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="masters">\n      <ion-label floating>Senha</ion-label>\n      <ion-input [(ngModel)]="credentials.password" name="password" type="password"></ion-input>\n    </ion-item>\n    <br/><br/>\n    <button ion-button block (click)="login()">Entrar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/lepsistemas/mobile/patrimonium/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=7.js.map