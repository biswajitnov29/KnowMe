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

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex d-column\" id=\"about\">\n    <div class=\"my-auto\">\n      <h1 class=\"mb-0\">Biswajit\n        <span class=\"text-primary\">Ganguly</span>\n      </h1>\n      <div class=\"subheading mb-5\">\n\n        <span style=\"text-transform: none;font-size: 20px;margin-bottom: 20px;\">\n          <span style=\"color: #bd5d38;font-size: 40px;\">Senior Front-End Developer</span>\n        </span>\n        \n        <div style=\"text-transform: lowercase;\">\n          <div class=\"row\">\n            <div class=\"col\">\n                <span >\n                    <a href=\"#\">\n                        <span class=\"fa-stack fa-xs\">\n                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n                          <i class=\"fa fa-phone fa-stack-1x fa-inverse\"></i>\n                        </span>\n                      </a>\n                      <span style=\"color: #bd5d38;\">+91 7777066615</span>\n                </span>\n            </div>\n            <div class=\"col\">\n                <span >\n                    <a href=\"#\">\n                        <span class=\"fa-stack fa-xs\">\n                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n                          <i class=\"fa fa-envelope fa-stack-1x fa-inverse\"></i>\n                        </span>\n                      </a>\n                    <a href=\"mailto:name@email.com\">biswajit29nov@gmail.com</a>\n                </span>\n            </div>\n            <div class=\"col\">\n                <span>\n                    <a href=\"#\">\n                        <span class=\"fa-stack fa-xs\">\n                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n                          <i class=\"fa fa-skype fa-stack-1x fa-inverse\"></i>\n                        </span>\n                      </a>\n                    <span style=\"color: #bd5d38;\">biswajit29nov</span>\n                </span>\n            </div>\n          </div>\n            \n\n          \n\n          \n        </div>\n      </div>\n      <!-- <p class=\"mb-5\">I am experienced in leveraging agile frameworks to provide a robust \n        synopsis for high level overviews. Iterative approaches to corporate strategy foster \n        collaborative thinking to further the overall value proposition.</p> -->\n      <ul class=\"fa-ul about\">\n        <li>\n            <span><span class=\"highlighted\">7+ years</span> of experience in <span class=\"highlighted\">Front-End Development</span> with multiple different technology</span>\n        </li>\n        <li>\n            <span><span class=\"highlighted\">5+ years</span> of experience in <span class=\"highlighted\">AngularJS( 2+ years of experience in Angular 4 )</span> .</span>\n        </li>\n        <li>\n          <span>Lead team with effective understanding with the team members and delivering project before the\n              estimated time.</span>\n        </li>\n      </ul>\n      \n      <ul class=\"list-inline list-social-icons mb-0\">\n        <!-- <li class=\"list-inline-item\">\n          <a href=\"#\">\n            <span class=\"fa-stack fa-lg\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\n            </span>\n          </a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a href=\"#\">\n            <span class=\"fa-stack fa-lg\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\n            </span>\n          </a>\n        </li> -->\n        <li class=\"list-inline-item\">\n          <a href=\"https://www.linkedin.com/in/biswajit-ganguly-0b145536/\" target=\"blank\">\n            <span class=\"fa-stack fa-lg\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i>\n            </span>\n          </a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a href=\"https://github.com/biswajitnov29\" target=\"blank\">\n            <span class=\"fa-stack fa-lg\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\n            </span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-leftnav ></app-leftnav>\n\n<div class=\"container-fluid p-0\">\n\n  <app-about></app-about>\n\n  <app-experience #experience></app-experience>\n\n  <app-education></app-education>\n\n  <app-skills></app-skills>\n\n  <app-interests></app-interests>\n\n  <app-awards></app-awards>\n\n</div>"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent(el) {
        this.el = el;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leftnav_leftnav_component__ = __webpack_require__("./src/app/leftnav/leftnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__experience_experience_component__ = __webpack_require__("./src/app/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__education_education_component__ = __webpack_require__("./src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interests_interests_component__ = __webpack_require__("./src/app/interests/interests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__awards_awards_component__ = __webpack_require__("./src/app/awards/awards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scroll_to_scroll_to_directive__ = __webpack_require__("./src/app/scroll-to/scroll-to.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scroll_to_scroll_to_service__ = __webpack_require__("./src/app/scroll-to/scroll-to.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__leftnav_leftnav_component__["a" /* LeftnavComponent */],
                __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__experience_experience_component__["a" /* ExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_6__education_education_component__["a" /* EducationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__interests_interests_component__["a" /* InterestsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__awards_awards_component__["a" /* AwardsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__scroll_to_scroll_to_directive__["a" /* ScrollToDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__scroll_to_scroll_to_service__["a" /* ScrollToService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/awards/awards.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/awards/awards.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"awards\">\n    <div class=\"my-auto\">\n      <h2 class=\"mb-5\">Awards &amp; Certifications</h2>\n      <ul class=\"fa-ul mb-0\">\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          Google Analytics Certified Developer</li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          Mobile Web Specialist - Google Certification</li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          1<sup>st</sup>\n          Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          1<sup>st</sup>\n          Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          2<sup>nd</sup>\n          Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>\n        <li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          1<sup>st</sup>\n          Place - James Buchanan High School - Hackathon 2006</li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          3<sup>rd</sup>\n          Place - James Buchanan High School - Hackathon 2005</li>\n      </ul>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/awards/awards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwardsComponent; });
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

var AwardsComponent = /** @class */ (function () {
    function AwardsComponent() {
    }
    AwardsComponent.prototype.ngOnInit = function () {
    };
    AwardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-awards',
            template: __webpack_require__("./src/app/awards/awards.component.html"),
            styles: [__webpack_require__("./src/app/awards/awards.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AwardsComponent);
    return AwardsComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"education\" [@scrollAnimation]=\"state\">\n    <div class=\"my-auto\">\n      <h2 class=\"mb-5\">Education</h2>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n        <div class=\"resume-content mr-auto\">\n          <h3 class=\"mb-0\">University of Colorado Boulder</h3>\n          <div class=\"subheading mb-3\">Bachelor of Science</div>\n          <div>Computer Science - Web Development Track</div>\n          <p>GPA: 3.23</p>\n        </div>\n        <div class=\"resume-date text-md-right\">\n          <span class=\"text-primary\">August 2006 - May 2010</span>\n        </div>\n      </div>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row\">\n        <div class=\"resume-content mr-auto\">\n          <h3 class=\"mb-0\">James Buchanan High School</h3>\n          <div class=\"subheading mb-3\">Technology Magnet Program</div>\n          <p>GPA: 3.56</p>\n        </div>\n        <div class=\"resume-date text-md-right\">\n          <span class=\"text-primary\">August 2002 - May 2006</span>\n        </div>\n      </div>\n\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent(el) {
        this.el = el;
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-education',
            template: __webpack_require__("./src/app/education/education.component.html"),
            styles: [__webpack_require__("./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"experience\">\n    <div class=\"my-auto\">\n      <h2 class=\"mb-5\">Experience</h2>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n        <div class=\"resume-content mr-auto\">\n          <h3 class=\"mb-0\">Senior Web Developer</h3>\n          <div class=\"subheading mb-3\">Intelitec Solutions</div>\n          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n        </div>\n        <div class=\"resume-date text-md-right\">\n          <span class=\"text-primary\">March 2013 - Present</span>\n        </div>\n      </div>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n        <div class=\"resume-content mr-auto\">\n          <h3 class=\"mb-0\">Web Developer</h3>\n          <div class=\"subheading mb-3\">Intelitec Solutions</div>\n          <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\n        </div>\n        <div class=\"resume-date text-md-right\">\n          <span class=\"text-primary\">December 2011 - March 2013</span>\n        </div>\n      </div>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n        <div class=\"resume-content mr-auto\">\n          <h3 class=\"mb-0\">Junior Web Designer</h3>\n          <div class=\"subheading mb-3\">Shout! Media Productions</div>\n          <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>\n        </div>\n        <div class=\"resume-date text-md-right\">\n          <span class=\"text-primary\">July 2010 - December 2011</span>\n        </div>\n      </div>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row\">\n        <div class=\"resume-content mr-auto\">\n          <h3 class=\"mb-0\">Web Design Intern</h3>\n          <div class=\"subheading mb-3\">Shout! Media Productions</div>\n          <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>\n        </div>\n        <div class=\"resume-date text-md-right\">\n          <span class=\"text-primary\">September 2008 - June 2010</span>\n        </div>\n      </div>\n\n    </div>\n\n  </section>"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
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

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(el) {
        this.el = el;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-experience',
            template: __webpack_require__("./src/app/experience/experience.component.html"),
            styles: [__webpack_require__("./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/interests/interests.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interests/interests.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"interests\">\n    <div class=\"my-auto\">\n      <h2 class=\"mb-5\">Interests</h2>\n      <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>\n      <p class=\"mb-0\">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/interests/interests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestsComponent; });
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

var InterestsComponent = /** @class */ (function () {
    function InterestsComponent() {
    }
    InterestsComponent.prototype.ngOnInit = function () {
    };
    InterestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-interests',
            template: __webpack_require__("./src/app/interests/interests.component.html"),
            styles: [__webpack_require__("./src/app/interests/interests.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/leftnav/leftnav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/leftnav/leftnav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\" id=\"sideNav\">\n  <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">\n    <span class=\"d-block d-lg-none\">Start Bootstrap</span>\n    <span class=\"d-none d-lg-block\">\n      <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"assets/img/Profile-Image.jpg\" alt=\"\">\n    </span>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" >\n        <a class=\"nav-link\" href=\"#\"\n        [scrollTo]=\"'#about'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-0\" >About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"\n        [scrollTo]=\"'#experience'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-0\">Experience</a>\n      </li>\n      <li class=\"nav-item\" >\n        <a class=\"nav-link\" href=\"#\" \n        [scrollTo]=\"'#education'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-0\">Education</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" \n        [scrollTo]=\"'#skills'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-0\">Skills</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"\n        [scrollTo]=\"'#interests'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-0\">Interests</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"\n        [scrollTo]=\"'#awards'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-0\">Awards</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/leftnav/leftnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftnavComponent; });
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

var LeftnavComponent = /** @class */ (function () {
    function LeftnavComponent() {
    }
    LeftnavComponent.prototype.ngOnInit = function () {
    };
    LeftnavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-leftnav',
            template: __webpack_require__("./src/app/leftnav/leftnav.component.html"),
            styles: [__webpack_require__("./src/app/leftnav/leftnav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftnavComponent);
    return LeftnavComponent;
}());



/***/ }),

/***/ "./src/app/scroll-to/scroll-to.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollToDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_to_service__ = __webpack_require__("./src/app/scroll-to/scroll-to.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(scrollToService) {
        this.scrollToService = scrollToService;
    }
    ScrollToDirective.prototype.ngOnInit = function () {
        this.scrollDuration = (!this.scrollDuration) ? 500 : this.scrollDuration;
        this.scrollOffset = (!this.scrollOffset) ? 0 : this.scrollOffset;
    };
    ScrollToDirective.prototype.onMouseClick = function () {
        this.scrollToService.scrollTo(this.scrollTo, this.scrollDuration, this.scrollOffset);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('scrollTo'),
        __metadata("design:type", Object)
    ], ScrollToDirective.prototype, "scrollTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('scrollDuration'),
        __metadata("design:type", Number)
    ], ScrollToDirective.prototype, "scrollDuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('scrollOffset'),
        __metadata("design:type", Number)
    ], ScrollToDirective.prototype, "scrollOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mousedown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollToDirective.prototype, "onMouseClick", null);
    ScrollToDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[scrollTo]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scroll_to_service__["a" /* ScrollToService */]])
    ], ScrollToDirective);
    return ScrollToDirective;
}());



/***/ }),

/***/ "./src/app/scroll-to/scroll-to.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollToService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollToService = /** @class */ (function () {
    function ScrollToService() {
    }
    ScrollToService.prototype.scrollTo = function (element, duration, offset) {
        if (duration === void 0) { duration = 500; }
        if (offset === void 0) { offset = 0; }
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        if (typeof element === 'string') {
            var el = document.querySelector(element);
            this.scrollToElement(el, duration, offset, subject);
        }
        else if (element instanceof HTMLElement) {
            this.scrollToElement(element, duration, offset, subject);
        }
        else {
            subject.error('I don\'t find element');
        }
        return subject;
    };
    ScrollToService.prototype.scrollToElement = function (el, duration, offset, subject) {
        if (el) {
            var viewportOffset = el.getBoundingClientRect();
            var offsetTop = viewportOffset.top + window.pageYOffset;
            this.doScrolling(offsetTop + offset, duration, subject);
        }
        else {
            subject.error('I don\'t find element');
        }
        return subject;
    };
    ScrollToService.prototype.doScrolling = function (elementY, duration, subject) {
        var startingY = window.pageYOffset;
        var diff = elementY - startingY;
        var start;
        window.requestAnimationFrame(function step(timestamp) {
            start = (!start) ? timestamp : start;
            var time = timestamp - start;
            var percent = Math.min(time / duration, 1);
            window.scrollTo(0, startingY + diff * percent);
            if (time < duration) {
                window.requestAnimationFrame(step);
                subject.next({});
            }
            else {
                subject.complete();
            }
        });
    };
    ScrollToService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ScrollToService);
    return ScrollToService;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"skills\">\n    <div class=\"my-auto\">\n      <h2 class=\"mb-5\">Skills</h2>\n\n      <div class=\"subheading mb-3\">Programming Languages &amp; Tools</div>\n      <ul class=\"list-inline list-icons\">\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-html5\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-css3\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-javascript\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-jquery\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-sass\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-less\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-bootstrap\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-wordpress\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-grunt\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-gulp\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-npm\"></i>\n        </li>\n      </ul>\n\n      <div class=\"subheading mb-3\">Workflow</div>\n      <ul class=\"fa-ul mb-0\">\n        <li>\n          <i class=\"fa-li fa fa-check\"></i>\n          Mobile-First, Responsive Design</li>\n        <li>\n          <i class=\"fa-li fa fa-check\"></i>\n          Cross Browser Testing &amp; Debugging</li>\n        <li>\n          <i class=\"fa-li fa fa-check\"></i>\n          Cross Functional Teams</li>\n        <li>\n          <i class=\"fa-li fa fa-check\"></i>\n          Agile Development &amp; Scrum</li>\n      </ul>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
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