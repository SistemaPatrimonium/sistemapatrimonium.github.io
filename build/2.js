webpackJsonp([2],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPageModule", function() { return UserDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_detail__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserDetailPageModule = (function () {
    function UserDetailPageModule() {
    }
    UserDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_detail__["a" /* UserDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_detail__["a" /* UserDetailPage */]),
            ],
        })
    ], UserDetailPageModule);
    return UserDetailPageModule;
}());

//# sourceMappingURL=user-detail.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailPage; });
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




var UserDetailPage = (function () {
    function UserDetailPage(navCtrl, navParams, formBuilder, userService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.user = this.navParams.get('user');
        var today = new Date();
        this.minYear = today.getFullYear() - 1;
        this.maxYear = today.getFullYear() + 1;
        this.formGroup = this.formBuilder.group({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: this.user.username, disabled: true }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: this.user.name, disabled: false }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(120)]),
            enabled: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: this.user.enabled, disabled: false }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            expire: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: this.expire(), disabled: this.expireDisabled() }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
    }
    UserDetailPage.prototype.save = function () {
        var _this = this;
        var user = this.formGroup.value;
        user.id = this.user.id;
        user.username = this.user.username;
        user.expire = new Date(user.expire).getTime();
        var loading = this.loadingCtrl.create();
        loading.present();
        this.userService.edit(user)
            .subscribe(function (response) {
            loading.dismiss();
            _this.navCtrl.pop();
        }, function (error) { loading.dismiss(); });
    };
    UserDetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    UserDetailPage.prototype.expire = function () {
        return this.user.expire != null ? new Date(this.user.expire).toISOString() : null;
    };
    UserDetailPage.prototype.expireDisabled = function () {
        return this.user.roles.indexOf('SUPER') > -1 || this.user.roles.indexOf('ADMIN') > -1;
    };
    UserDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-detail',template:/*ion-inline-start:"/Users/lepsistemas/mobile/patrimonium/src/pages/user-detail/user-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ user.name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (ngSubmit)="save(); $event.preventDefault()">\n    <ion-item>\n      <ion-label floating>E-mail</ion-label>\n      <ion-input formControlName="username" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Nome *</ion-label>\n      <ion-input formControlName="name" type="text"></ion-input>\n      <p class="danger" *ngIf="formGroup.controls.name.dirty && formGroup.controls.name.errors" margin-left>Valor inválido</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Validade</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" formControlName="expire" min="{{minYear}}" max="{{maxYear}}" cancelText="Cancelar" doneText="Ok"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Ativo</ion-label>\n      <ion-toggle formControlName="enabled"></ion-toggle>\n    </ion-item>\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Salvar</button>\n  </form>\n  <button ion-button block outline color="secondary" (click)="back()">Voltar</button>\n</ion-content>\n'/*ion-inline-end:"/Users/lepsistemas/mobile/patrimonium/src/pages/user-detail/user-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], UserDetailPage);
    return UserDetailPage;
}());

//# sourceMappingURL=user-detail.js.map

/***/ })

});
//# sourceMappingURL=2.js.map