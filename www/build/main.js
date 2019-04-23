webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_iss_iss__ = __webpack_require__(157);
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
 * Generated class for the IssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssPage = /** @class */ (function () {
    function IssPage(navCtrl, navParams, IssProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.IssProvider = IssProvider;
        this.issTracker = [];
    }
    IssPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.IssProvider.getIss().subscribe(function (data) {
            _this.issTracker = data.people;
            _this.issTracker.splice(10);
            console.log(_this.issTracker);
        });
        console.log('ionViewDidLoad IssPage');
    };
    IssPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-iss',template:/*ion-inline-start:"/Users/davidnolan/Documents/college/Year_2/Mobile_app/Ionic/IonicProject/G00363191/src/pages/iss/iss.html"*/'<!--\n  Generated template for the IssPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>ISS Facts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Facts of the ISS</h1>\n  <!--Using an API to show how many people are on the ISS and who they are-->\n  <h3>People on the ISS right now:</h3>\n  <ion-list>\n    <ion-item *ngFor="let x of issTracker">\n      <h1>Who: {{x.name}}</h1>\n\n    </ion-item>\n\n  </ion-list>\n  <!--Image of the ISS-->\n  <img src="https://www.nasa.gov/images/content/329096main_earthday1_420.jpg" alt="ISS_Pic">\n  <!--Facts about the ISS-->\n  <p>The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit.\n    Its first\n    component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been\n    inhabited\n    continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space\n    habitat\n    was added in 2016. </p>\n\n  <p>The station is expected to operate until 2030. Development and assembly of the station continues, with\n    several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can\n    often\n    be seen with the naked eye from Earth. </p>\n\n  <p>The ISS consists of pressurised habitation modules, structural trusses,solar arrays, radiators, docking ports,\n    experiment bays\n    and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets and American Space Shuttles.\n  </p>\n\n  <p>The ISS serves as a microgravity and space environment research laboratory in which crew members conduct\n    experiments in biology,\n    human biology, physics, astronomy, meteorology, and other fields.</p>\n</ion-content>'/*ion-inline-end:"/Users/davidnolan/Documents/college/Year_2/Mobile_app/Ionic/IonicProject/G00363191/src/pages/iss/iss.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_iss_iss__["a" /* IssProvider */]])
    ], IssPage);
    return IssPage;
}());

//# sourceMappingURL=iss.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mars_mars__ = __webpack_require__(158);
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
 * Generated class for the MarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarsPage = /** @class */ (function () {
    function MarsPage(navCtrl, navParams, MarsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.MarsProvider = MarsProvider;
        this.marsImage = [];
    }
    MarsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.MarsProvider.getMars().subscribe(function (data) {
            _this.marsImage = data.photos;
            _this.marsImage.splice(3);
            console.log(_this.marsImage);
        });
        console.log('ionViewDidLoad MarsPage');
    };
    MarsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mars',template:/*ion-inline-start:"/Users/davidnolan/Documents/college/Year_2/Mobile_app/Ionic/IonicProject/G00363191/src/pages/mars/mars.html"*/'<!--\n  Generated template for the MarsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Mars Imagery from the rovers past and present</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h1>Image of mars landscape on 9/4/2019 by Curiosity</h1>\n  <ion-list>\n    <ion-item *ngFor="let x of marsImage">\n      <img ngif="this.marsImage.splice(22)" src="{{ x.img_src }}" alt="Mars">\n\n    </ion-item>\n  </ion-list>\n  <h2>facts about Curiosity</h2>\n  <p>Curiosity is a car-sized rover designed to explore the crater Gale on Mars as part of NASA\'s Mars Science\n    Laboratory mission\n    (MSL). Curiosity was launched from Cape Canaveral on November 26, 2011, at 15:02 UTC and landed on Aeolis Palus\n    inside\n    Gale on Mars on August 6, 2012, 05:17 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center\n    of the rover\'s touchdown target after a 560 million km (350 million mi) journey. The rover\'s goals include an\n    investigation of the Martian climate and geology; assessment of whether the selected field site inside Gale has ever\n    offered environmental conditions favorable for microbial life, including investigation of the role of water; and\n    planetary habitability studies in preparation for human exploration</p>\n\n  <p>In December 2012, Curiosity\'s two-year mission was extended indefinitely, and on August 5, 2017, NASA celebrated\n    the fifth\n    anniversary of the Curiosity rover landing. The rover is still operational, and as of April 10, 2019, Curiosity has\n    been on Mars for 2373 sols (2437 total days) since landing on August 6, 2012. It is one of two active missions on\n    Mars with\n    a new rover planned for 2020.</p>\n</ion-content>'/*ion-inline-end:"/Users/davidnolan/Documents/college/Year_2/Mobile_app/Ionic/IonicProject/G00363191/src/pages/mars/mars.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mars_mars__["a" /* MarsProvider */]])
    ], MarsPage);
    return MarsPage;
}());

//# sourceMappingURL=mars.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_nasa_nasa__ = __webpack_require__(159);
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
 * Generated class for the NasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NasaPage = /** @class */ (function () {
    function NasaPage(navCtrl, navParams, NasaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.NasaProvider = NasaProvider;
        this.spaceImage = [];
    }
    //call for the data
    NasaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.NasaProvider.getNasa().subscribe(function (data) {
            _this.spaceImage = data;
        });
        console.log('ionViewDidLoad NasaPage');
    };
    NasaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nasa',template:/*ion-inline-start:"/Users/davidnolan/Documents/college/Year_2/Mobile_app/Ionic/IonicProject/G00363191/src/pages/nasa/nasa.html"*/'<!--\n  Generated template for the NasaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>NASA image of the day</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--Implementation of the API-->\n<ion-content padding>\n  <h1>{{spaceImage.title}}</h1>\n  <p>taken by:{{spaceImage.copyright}}</p>\n  <p>{{spaceImage.explanation}}</p>\n  <img src="{{spaceImage.url}}">\n  <p>media type:{{spaceImage.media_type}}</p>\n  <a href="{{spaceImage.url}}">{{spaceImage.url}}</a>\n</ion-content>'/*ion-inline-end:"/Users/davidnolan/Documents/college/Year_2/Mobile_app/Ionic/IonicProject/G00363191/src/pages/nasa/nasa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_nasa_nasa__["a" /* NasaProvider */]])
    ], NasaPage);
    return NasaPage;
}());

//# sourceMappingURL=nasa.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/iss/iss.module": [
		280,
		2
	],
	"../pages/mars/mars.module": [
		281,
		1
	],
	"../pages/nasa/nasa.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the IssProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var IssProvider = /** @class */ (function () {
    function IssProvider(http) {
        this.http = http;
        console.log('Hello IssProvider Provider');
    }
    IssProvider.prototype.getIss = function () {
        return this.http.get("http://api.open-notify.org/astros.json");
    };
    IssProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], IssProvider);
    return IssProvider;
}());

//# sourceMappingURL=iss.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MarsProvider = /** @class */ (function () {
    function MarsProvider(http) {
        this.http = http;
        console.log('Hello MarsProvider Provider');
    }
    MarsProvider.prototype.getMars = function () {
        return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-4-9&api_key=tHunhfPTmpv9cOYWLUcM9bISElCSHRq9OPNdweOi");
    };
    MarsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MarsProvider);
    return MarsProvider;
}());

//# sourceMappingURL=mars.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NasaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NasaProvider = /** @class */ (function () {
    function NasaProvider(http) {
        this.http = http;
        console.log('Hello NasaProvider Provider');
    }
    NasaProvider.prototype.getNasa = function () {
        return this.http.get("https://api.nasa.gov/planetary/apod?api_key=tHunhfPTmpv9cOYWLUcM9bISElCSHRq9OPNdweOi");
    };
    NasaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NasaProvider);
    return NasaProvider;
}());

//# sourceMappingURL=nasa.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nasa_nasa__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iss_iss__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mars_mars__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Imports





var HomePage = /** @class */ (function () {
    //Page navigation controls
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //to go to Nasa image of the day
    HomePage.prototype.openNasa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nasa_nasa__["a" /* NasaPage */]);
    };
    //to go to Mars rover Facts and pics
    HomePage.prototype.openMars = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mars_mars__["a" /* MarsPage */]);
    };
    //to go to ISS Facts and Info
    HomePage.prototype.openIss = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__iss_iss__["a" /* IssPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/davidnolan/Documents/college/Year_2/Mobile_app/Ionic/IonicProject/G00363191/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Space Facts\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--Menu-->\n  <h1>Space facts and imagery</h1>\n  <button ion-button round (click)="openNasa()">NASA Image of the day</button>\n  <p></p>\n  <button ion-button round (click)="openMars()">Mars Imagery</button>\n  <p></p>\n  <button ion-button round (click)="openIss()">ISS Facts & Info</button>\n\n  <!--Menu Images-->\n  <img src="https://img.newatlas.com/earth-from-space-6.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C450%\n  2C1080%2C607&w=616&s=9a89e0cd38c077efd78b95ad1be48345" alt="Earth">\n  <img src="https://lightsinthedark.files.wordpress.com/2012/07/ap11-69-h-1134.jpg" alt="Apollo 11">\n</ion-content>'/*ion-inline-end:"/Users/davidnolan/Documents/college/Year_2/Mobile_app/Ionic/IonicProject/G00363191/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mars_mars__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_iss_iss__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nasa_nasa__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_nasa_nasa__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_iss_iss__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_mars_mars__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nasa_nasa__["a" /* NasaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_iss_iss__["a" /* IssPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mars_mars__["a" /* MarsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/iss/iss.module#IssPageModule', name: 'IssPage', segment: 'iss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mars/mars.module#MarsPageModule', name: 'MarsPage', segment: 'mars', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nasa/nasa.module#NasaPageModule', name: 'NasaPage', segment: 'nasa', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nasa_nasa__["a" /* NasaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_iss_iss__["a" /* IssPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mars_mars__["a" /* MarsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_nasa_nasa__["a" /* NasaProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_iss_iss__["a" /* IssProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_mars_mars__["a" /* MarsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidnolan/Documents/college/Year_2/Mobile_app/Ionic/IonicProject/G00363191/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/davidnolan/Documents/college/Year_2/Mobile_app/Ionic/IonicProject/G00363191/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map