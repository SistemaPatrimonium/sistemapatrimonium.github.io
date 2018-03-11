webpackJsonp([1],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
            ],
        })
    ], UserPageModule);
    return UserPageModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPage = (function () {
    function UserPage(navCtrl, userService, storage, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    UserPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.userService.findAll()
            .subscribe(function (response) {
            _this.users = response;
            loading.dismiss();
        }, function (error) { loading.dismiss(); });
    };
    UserPage.prototype.add = function () {
        this.navCtrl.push('UserAddPage');
    };
    UserPage.prototype.edit = function (user) {
        this.navCtrl.push('UserDetailPage', { user: user });
    };
    UserPage.prototype.askRemove = function (user) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Confirmação',
            message: "Deseja remover o usu\u00E1rio " + user.name + "?",
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.remove(user);
                    }
                }
            ]
        }).present();
    };
    UserPage.prototype.remove = function (user) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.userService.remove(user)
            .subscribe(function () {
            var index = _this.users.findIndex(function (obj) { return obj.id === user.id; });
            if (index > -1) {
                _this.users.splice(index, 1);
                loading.dismiss();
            }
        }, function (error) { loading.dismiss(); });
    };
    UserPage.prototype.isSameUser = function (user) {
        return this.storage.getLocalUser().user.id === user.id;
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/lepsistemas/mobile/patrimonium/src/pages/user/user.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Usuários</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab top right edge>\n    <button ion-fab color="light">\n      <img src="assets/imgs/icons/slide-left.png" />\n    </button>\n  </ion-fab>\n  <ion-list>\n    <ion-item>\n      <h2>Deslize para a esquerda para as opções</h2>\n    </ion-item>\n    <ion-item-sliding *ngFor="let user of users">\n      <ion-item>\n        <h2>{{ user.name }}</h2>\n        <p>{{ user.username }}</p>\n        <ion-note item-end>{{ user.enabled ? \'Ativo\' : \'Inativo\' }}</ion-note>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button icon-start color="primary" (click)="edit(user)">\n          <ion-icon name="create"></ion-icon>\n          Editar\n        </button>\n        <button [disabled]="isSameUser(user)" ion-button icon-start color="danger" (click)="askRemove(user)">\n          <ion-icon name="trash"></ion-icon>\n          Remover\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab bottom right>\n    <button ion-fab (click)="add()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/lepsistemas/mobile/patrimonium/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ })

});
//# sourceMappingURL=1.js.map