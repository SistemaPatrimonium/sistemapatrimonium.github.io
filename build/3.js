webpackJsonp([3],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddPageModule", function() { return UserAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_add__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserAddPageModule = (function () {
    function UserAddPageModule() {
    }
    UserAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_add__["a" /* UserAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_add__["a" /* UserAddPage */]),
            ],
        })
    ], UserAddPageModule);
    return UserAddPageModule;
}());

//# sourceMappingURL=user-add.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAddPage = (function () {
    function UserAddPage(navCtrl, formBuilder, userService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.formGroup = this.formBuilder.group({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: '', disabled: false }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: '', disabled: false }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(120)]),
        });
    }
    UserAddPage.prototype.save = function () {
        var _this = this;
        var user = this.formGroup.value;
        user.expire = new Date(user.expire).getTime();
        var loading = this.loadingCtrl.create();
        loading.present();
        this.userService.insert(user)
            .subscribe(function (response) {
            loading.dismiss();
            _this.navCtrl.pop();
        }, function (error) { loading.dismiss(); });
    };
    UserAddPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    UserAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-add',template:/*ion-inline-start:"/Users/lepsistemas/mobile/patrimonium/src/pages/user-add/user-add.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Novo usuário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (ngSubmit)="save(); $event.preventDefault()">\n    <ion-item>\n      <ion-label floating>E-mail</ion-label>\n      <ion-input formControlName="username" type="text"></ion-input>\n      <p class="danger" *ngIf="formGroup.controls.name.dirty && formGroup.controls.name.errors" margin-left>Valor inválido</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Nome *</ion-label>\n      <ion-input formControlName="name" type="text"></ion-input>\n      <p class="danger" *ngIf="formGroup.controls.name.dirty && formGroup.controls.name.errors" margin-left>Valor inválido</p>\n    </ion-item>\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Salvar</button>\n  </form>\n  <button ion-button block outline color="secondary" (click)="back()">Voltar</button>\n</ion-content>\n'/*ion-inline-end:"/Users/lepsistemas/mobile/patrimonium/src/pages/user-add/user-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], UserAddPage);
    return UserAddPage;
}());

//# sourceMappingURL=user-add.js.map

/***/ })

});
//# sourceMappingURL=3.js.map