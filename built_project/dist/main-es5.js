(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet ></router-outlet>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid text-center\"\nstyle=\"padding-left: 30px; padding-right:30px; padding-top:10px; padding-bottom:10px;\">\n<h2 mat-dialog-title style=\"color:darkred;\"> An Error Occured!</h2>\n<div mat-dialog-content>\n\t<span style=\"font-size:40px; font-weight:bold; color: darkred;\">  <mdb-icon fas icon=\"exclamation-triangle\"> </mdb-icon> </span>\n  <p class=\"mat-body-1\" style=\"color:darkred;\">{{ data.message }}</p>\n</div>\n<div mat-dialog-actions class=\"text-center\">\n  <button mat-button style=\"margin:0 auto;\" mat-dialog-close> Okay </button>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/add-user/add-user.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/add-user/add-user.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthAddUserAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <mdb-card>\n  <div class=\"text-center container-fluid mt-5 mb-2\">\n    <img src=\"./assets/images/scraper/logo_lg.png\" height=\"80\" alt=\"web_scraper_logo\"/>\n  </div>\n  <div class=\"text-center pt-3\">\n    <h3><strong> e-Learning ගිණුමක් සාදා ගන්න </strong></h3>\n    <p>අවශ්‍ය තොරතුරු ලබා දෙන්න</p>\n  </div>\n\n\n  <mdb-card-body class=\"px-lg-5 pt-0\">\n    <br />\n    <form\n      style=\"color: #757575\"\n      (submit)=\"signupUser(signupform)\"\n      #signupform=\"ngForm\"\n    >\n      <div class=\"text-center\">\n        <mat-form-field class=\"mfield\">\n          <mat-label>Select Class</mat-label>\n          <mat-select required name=\"user_type\" #user_type=\"ngModel\" ngModel>\n            <mat-option value=\"usertype_1\"> $5 /mo (3 months free)</mat-option>\n            <mat-option value=\"usertype_2\"> $10 /mo (3 months free)</mat-option>\n            <mat-option value=\"usertype_3\"> $25 /mo (3 months free</mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"user_type.invalid\">Select User Type</mat-error>\n        </mat-form-field>\n\n      <hr>\n        <div class=\"pt-2\" >\n          <h5>ඔබෙි විස්තර </h5>\n        </div>\n\n        <mat-form-field class=\"mfield\">\n          <input\n            matInput\n            type=\"text\"\n            placeholder=\"ඔබෙි නම \"\n            required\n            name=\"user_name\"\n            #user_name=\"ngModel\"\n            ngModel\n          />\n          <mat-error *ngIf=\"user_name.invalid\">User Name is required</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"mfield\">\n          <input\n            matInput\n            type=\"email\"\n            placeholder=\"ඔබෙි විද්‍යුත් තැපැල් ලි්පිනය \"\n            required\n            name=\"user_email\"\n            #user_email=\"ngModel\"\n            ngModel\n          />\n          <mat-error *ngIf=\"user_email.invalid\"\n            >A valid Email is required</mat-error\n          >\n        </mat-form-field>\n\n        <mat-form-field class=\"mfield\">\n          <input\n            matInput\n            placeholder=\"ඔබෙි දුරකථන අංකය \"\n            required\n            name=\"contact_no\"\n            #contact_no=\"ngModel\"\n            ngModel\n          />\n          <mat-error *ngIf=\"contact_no.invalid\"\n            >Please Provide a Valid Contact No</mat-error\n          >\n        </mat-form-field>\n\n        <mat-form-field class=\"mfield\">\n          <mat-label>පිරිමි/ ගැහැණු අයදුම් කරුවෙකි </mat-label>\n          <mat-select required name=\"gender\" #gender=\"ngModel\" ngModel>\n            <mat-option value=\"male\">පිරිමි</mat-option>\n            <mat-option value=\"female\">ගැහැණු</mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"gender.invalid\"\n            >Please Select your Gender</mat-error\n          >\n        </mat-form-field>\n\n        <hr>\n\n        <mat-form-field class=\"mfield\">\n          <input\n            matInput\n            placeholder=\"A/L පෙනී සිටින වර්ශය \"\n            type=\"number\"\n            required\n            name=\"al_class\"\n            #al_class=\"ngModel\"\n            ngModel\n          />\n          <mat-error *ngIf=\"al_class.invalid\"\n            >A/L Year is required</mat-error\n          >\n        </mat-form-field>\n\n\n        <mat-form-field class=\"mfield\">\n          <input\n            matInput\n            placeholder=\"පන්ති පැමිණෙන ස්ථානය \"\n            required\n            name=\"location\"\n            #location=\"ngModel\"\n            ngModel\n          />\n          <mat-error *ngIf=\"location.invalid\"\n            >Living Address is required</mat-error\n          >\n        </mat-form-field>\n\n\n      </div>\n\n      <hr />\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"mfield\">\n            <input\n              matInput\n              type=\"password\"\n              placeholder=\"මුරපදය ඇතුළත් කරන්න \"\n              required\n              pattern=\"^(?=.*\\d).{4,8}$\"\n              name=\"user_pass\"\n              #user_pass=\"ngModel\"\n              ngModel\n            />\n            <mat-error *ngIf=\"user_pass.invalid\"\n              >Password is required</mat-error\n            >\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"mfield\">\n            <input\n              matInput\n              type=\"password\"\n              placeholder=\"මුරපදය තහවුරු කරන්න \"\n              required\n              pattern=\"^(?=.*\\d).{4,8}$\"\n              name=\"user_pass_check\"\n              #user_pass_check=\"ngModel\"\n              ngModel\n            />\n            <mat-error *ngIf=\"user_pass_check.invalid\"\n              >Valid Password Cnfirmation is required</mat-error\n            >\n          </mat-form-field>\n        </div>\n      </div>\n\n      <br />\n      <br>\n\n      <button\n        mdbBtn\n        color=\"orange\"\n        rounded=\"true\"\n        block=\"true\"\n        mdbWavesEffect\n        type=\"submit\"\n      >\n      ගිණුම සාදන්න\n      </button>\n      <br />\n    </form>\n\n  </mdb-card-body>\n</mdb-card> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/create-new-password/create-new-password.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/create-new-password/create-new-password.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthCreateNewPasswordCreateNewPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Material form login -->\n\n<div class=\"login-scr\">\n  <mdb-card>\n    <mdb-card-header class=\"orange text-center white-text py-4\">\n      <h5>\n        <b>Create New Password</b>\n      </h5>\n    </mdb-card-header>\n\n    <!--Card content-->\n    <mdb-card-body class=\"px-lg-5 pd-top-min\">\n      <!-- Form -->\n      <form [formGroup]=\"loginForm\" style=\"color: #757575\" #loginform=\"ngForm\">\n        <!-- Password -->\n        <div class=\"md-form\">\n          <mdb-icon fas icon=\"key\" class=\"prefix\"></mdb-icon>\n          <input\n            type=\"password\"\n            id=\"materialLoginFormPassword\"\n            class=\"form-control\"\n            mdbInput\n            required\n            formControlName=\"password\"\n            name=\"password\"\n            ngModel\n          />\n          <mdb-error\n            *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n            >Enter a valid Password</mdb-error\n          >\n          <label for=\"materialLoginFormPassword\">Your New Password</label>\n        </div>\n\n        <div class=\"md-form\">\n          <mdb-icon fas icon=\"key\" class=\"prefix\"></mdb-icon>\n          <input\n            type=\"password\"\n            id=\"materialLoginFormRetypePassword\"\n            class=\"form-control\"\n            mdbInput\n            required\n            formControlName=\"retype_password\"\n            name=\"retype_password\"\n            ngModel\n          />\n          <mdb-error\n            *ngIf=\"\n              retype_password.invalid &&\n              (retype_password.dirty || retype_password.touched)\n            \"\n            >Please Retype your Password Correctly</mdb-error\n          >\n          <label for=\"materialLoginFormRetypePassword\"\n            >Retype New Password</label\n          >\n        </div>\n\n        <!-- Sign in button -->\n        <button\n          mdbBtn\n          color=\"orange\"\n          outline=\"true\"\n          rounded=\"true\"\n          block=\"true\"\n          class=\"my-4 waves-effect z-depth-0\"\n          mdbWavesEffect\n          routerLink=\"/\"\n        >\n          Reset Password\n        </button>\n\n        <br />\n        <br />\n        <br />\n      </form>\n      <!-- Form -->\n    </mdb-card-body>\n  </mdb-card>\n\n  <!-- Material form login -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/header/header.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/header/header.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- common navbar-->\n<!--Navbar-->\n<mdb-navbar SideClass=\"navbar navbar-expand-lg sticky-top navbar-light white scrolling-navbar\" [containerInside]=\"false\" *ngIf=\"!userIsAuthenticated\">\n    <!-- Navbar brand -->\n    <mdb-navbar-brand>\n        <a class=\"navbar-brand\" routerLink=\"/\">\n            <img src=\"./assets/images/scraper/logo_sm.png\" height=\"44\" alt=\"\" /> </a>\n    </mdb-navbar-brand>\n\n    <!-- Collapsible content -->\n    <links>\n        <ul class=\"navbar-nav ml-auto txt-400\">\n            <li class=\"nav-item\" *ngIf=\"!onLogin\">\n                <a mdbWavesEffect class=\"nav-link txt-bold\" routerLink=\"/signin\" (click)=\"onLogin = !onLogin\">\n                    <mdb-icon fas icon=\"sign-in-alt\"></mdb-icon>\n                    ගිණුමට ඇතුලු වන්න\n                </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!onRegister\">\n                <a mdbWavesEffect class=\"nav-link txt-bold\" routerLink=\"/signup\" (click)=\"onRegister = !onRegister\">\n                    <mdb-icon fas icon=\"user-plus\"></mdb-icon>\n                    නව ගිණුමක් සාදා ගන්න\n                </a>\n            </li>\n        </ul>\n    </links>\n    <!-- Collapsible content -->\n</mdb-navbar>\n<!--/.Navbar-->\n\n<!--user navbar-->\n<!--Navbar-->\n<mdb-navbar SideClass=\"navbar navbar-expand-lg sticky-top navbar-light white scrolling-navbar\" [containerInside]=\"false\" *ngIf=\"userIsAuthenticated  && headerDetails.userType == 'teacher'\">\n    <!-- Navbar brand -->\n    <mdb-navbar-brand>\n        <a class=\"navbar-brand\" routerLink=\"/\">\n            <img src=\"./assets/images/scraper/logo_sm.png\" height=\"38\" alt=\"\" /> </a>\n    </mdb-navbar-brand>\n\n    <!-- Collapsible content -->\n    <links>\n        <ul class=\"navbar-nav ml-auto txt-400\">\n            <li class=\"nav-item\">\n                <a mdbWavesEffect class=\"nav-link\" routerLink=\"/contactus\">\n                    <mdb-icon fas icon=\"question-circle\"></mdb-icon>\n                    Contact Support\n                </a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item avatar dropdown\" dropdown>\n                <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\">\n                    <img [src]=\"\n              headerDetails\n                ? headerDetails.profilePic\n                : './assets/images/scraper/user.png'\n            \" alt=\"active_user\" height=\"35\" class=\"rounded-circle z-depth-0 img-nav\" /></a>\n                <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown dropdown-primary\" role=\"menu\">\n                    <a class=\"dropdown-item waves-light mx-wd\" mdbWavesEffect routerLink=\"/teacher\">\n                        <mdb-icon fas icon=\"tachometer-alt\"></mdb-icon>\n                        &emsp; &emsp; Run Scrapers</a>\n                    <a class=\"dropdown-item waves-light mx-wd\" mdbWavesEffect routerLink=\"/teacher/students\">\n                        <mdb-icon fas icon=\"tasks\"></mdb-icon>\n                        &emsp; &emsp; Generated Data</a>\n\n                    <a class=\"dropdown-item waves-light mx-wd\" mdbWavesEffect routerLink=\"/teacher/settings\">\n                        <mdb-icon fas icon=\"user-friends\"></mdb-icon>\n                        &emsp; &emsp; ගිණුම් සැකසීම් </a>\n                    <hr />\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect (click)=\"onSignOut()\" routerLink=\"/\">\n                        <mdb-icon fas icon=\"sign-out-alt\"></mdb-icon>\n                        &emsp; &emsp; ඉවත් වන්න </a>\n                </div>\n            </li>\n        </ul>\n    </links>\n    <!-- Collapsible content -->\n</mdb-navbar>\n<!--/.Navbar-->\n\n\n\n<!--admin navbar-->\n<!--Navbar-->\n<mdb-navbar SideClass=\"navbar navbar-expand-lg sticky-top navbar-light white scrolling-navbar\" [containerInside]=\"false\" *ngIf=\"userIsAuthenticated && headerDetails.userType == 'Student'\">\n    <!-- Navbar brand -->\n    <mdb-navbar-brand>\n        <a class=\"navbar-brand\" routerLink=\"/\">\n            <img src=\"./assets/images/scraper/logo_sm.png\" height=\"44\" alt=\"\" /> </a>\n    </mdb-navbar-brand>\n\n    <!-- Collapsible content -->\n    <links>\n        <ul class=\"navbar-nav ml-auto txt-400\">\n            <li class=\"nav-item\">\n                <a mdbWavesEffect class=\"nav-link\" target=\"_blank\" href=\"#\">\n                    <mdb-icon fas icon=\"book\"></mdb-icon>\n                    අමතර උපකාර\n                </a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item avatar dropdown\" dropdown>\n                <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\">\n                    <img [src]=\"\n              headerDetails\n                ? headerDetails.profilePic\n                : './assets/images/scraper/user.png'\n            \" alt=\"active_user\" height=\"35\" class=\"rounded-circle z-depth-0 img-nav\" /></a>\n                <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown dropdown-primary\" role=\"menu\">\n                    <a class=\"dropdown-item waves-light mx-wd\" mdbWavesEffect routerLink=\"/student\">\n                        <mdb-icon fas icon=\"tachometer-alt\"></mdb-icon>\n                        &emsp; &emsp; පාඨමාලා ලැයිස්තුව </a>\n\n                    <a class=\"dropdown-item waves-light mx-wd\" mdbWavesEffect routerLink=\"/student/settings\">\n                        <mdb-icon fas icon=\"user-friends\"></mdb-icon>\n                        &emsp; &emsp; ගිණුම් සැකසීම් </a>\n                    <hr />\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect (click)=\"onSignOut()\" routerLink=\"/\">\n                        <mdb-icon fas icon=\"sign-out-alt\"></mdb-icon>\n                        &emsp; &emsp; ඉවත් වන්න </a>\n                </div>\n            </li>\n        </ul>\n    </links>\n    <!-- Collapsible content -->\n</mdb-navbar>\n<!--/.Navbar-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Material form login -->\n\n<div class=\"login-scr\">\n  <mdb-card>\n    <!-- <mdb-card-header class=\"green text-center white-text py-4\">\n      <h5>\n        <b>Sign in</b>\n      </h5>\n    </mdb-card-header> -->\n\n    <!--Card content-->\n    <mdb-card-body class=\"px-lg-5 pd-top-min\">\n      <div class=\"text-center container-fluid mt-5 mb-5\">\n        <img src=\"./assets/images/scraper/login.jpg\" height=\"70\" alt=\"web_scraper_logo\"/>\n      </div>\n      <!-- Form -->\n      <form\n        [formGroup]=\"loginForm\"\n        style=\"color: #757575\"\n        (submit)=\"loginUser(loginform)\"\n        #loginform=\"ngForm\"\n      >\n        <!-- Email -->\n        <div class=\"md-form\">\n          <mdb-icon fas icon=\"envelope\" class=\"prefix\"></mdb-icon>\n          <input\n            mdbInput\n            mdbValidate\n            type=\"email\"\n            id=\"form8\"\n            class=\"form-control\"\n            formControlName=\"email\"\n            name=\"email\"\n            required\n            ngModel\n          />\n          <label for=\"form8\">ගිණුම් අංකය </label>\n          <mdb-error *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n            >ගිණුම් අංකය අවශ්‍යයි </mdb-error\n          >\n        </div>\n\n        <!-- Password -->\n        <div class=\"md-form\">\n          <mdb-icon fas icon=\"key\" class=\"prefix\"></mdb-icon>\n          <input\n            type=\"password\"\n            id=\"materialLoginFormPassword\"\n            class=\"form-control\"\n            mdbInput\n            required\n            formControlName=\"password\"\n            name=\"password\"\n            ngModel\n          />\n          <mdb-error\n            *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n            >මුරපදය ඇතුලු කරන්න </mdb-error\n          >\n          <label for=\"materialLoginFormPassword\">මුරපදය </label>\n        </div>\n\n        <br>\n        <br>\n\n        <div class=\"d-flex text-center justify-content-around\">\n          <div>\n            <!-- Remember me -->\n            <mdb-checkbox>පුරනය මතක තබා ගන්න </mdb-checkbox>\n          </div>\n          <div>\n            <!-- Forgot password -->\n            <!-- <a routerLink=\"/resetpw\" style=\"color:orange; font-weight:bold;\">මුරපදය වෙනස් කිරීමට  ?</a> -->\n          </div>\n        </div>\n\n        <!-- Sign in button -->\n        <button\n          mdbBtn\n          color=\"orange\"\n          outline=\"true\"\n          rounded=\"true\"\n          block=\"true\"\n          class=\"my-4 waves-effect z-depth-0\"\n          mdbWavesEffect\n          type=\"submit\"\n        >\n        ඇතුලුවන්න\n        </button>\n\n             <!-- Sign in button -->\n             <button\n             mdbBtn\n             color=\"orange\"\n             rounded=\"true\"\n             block=\"true\"\n             class=\"my-4 waves-effect z-depth-0\"\n             mdbWavesEffect\n             routerLink=\"/signup\"\n           >\n           නව ගිණුමක් සාදන්න\n           </button>\n\n          <br>\n          <br>\n          <br>\n      </form>\n      <!-- Form -->\n    </mdb-card-body>\n  </mdb-card>\n\n  <div\n    class=\"alert alert-danger alert-dismissible fade show alert-cls\"\n    role=\"alert\"\n    *ngIf=\"showAlert\"\n  >\n    Username or Password is incorrect!\n    <button\n      type=\"button\"\n      class=\"close\"\n      data-dismiss=\"alert\"\n      aria-label=\"Close\"\n      (click)=\"showAlert = !showAlert\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <!-- Material form login -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/newcourses/newcourses.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/newcourses/newcourses.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthNewcoursesNewcoursesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>newcourses works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/password-reset/password-reset.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/password-reset/password-reset.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthPasswordResetPasswordResetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Material form login -->\n\n<div class=\"login-scr\">\n  <mdb-card>\n    <mdb-card-header class=\"orange text-center white-text py-4\">\n      <h5>\n        <b>Forgot Password?</b>\n      </h5>\n    </mdb-card-header>\n\n    <!--Card content-->\n    <mdb-card-body class=\"px-lg-5 pd-top-min\">\n      <!-- Form -->\n      <form [formGroup]=\"loginForm\" style=\"color: #757575\" #loginform=\"ngForm\">\n        <!-- Email -->\n        <div class=\"md-form\">\n          <mdb-icon fas icon=\"envelope\" class=\"prefix\"></mdb-icon>\n          <input\n            mdbInput\n            mdbValidate\n            type=\"email\"\n            id=\"form8\"\n            class=\"form-control\"\n            formControlName=\"email\"\n            name=\"email\"\n            required\n            ngModel\n          />\n          <label for=\"form8\">Enter Email your account created with...</label>\n          <mdb-error *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n            >Email Invalid</mdb-error\n          >\n        </div>\n\n        <!-- Sign in button -->\n        <button\n          mdbBtn\n          color=\"orange\"\n          outline=\"true\"\n          rounded=\"true\"\n          block=\"true\"\n          class=\"my-4 waves-effect z-depth-0\"\n          mdbWavesEffect\n          routerLink=\"/createpw\"\n        >\n          Send Password Reset Email\n        </button>\n\n        <br />\n        <br />\n        <br />\n      </form>\n      <!-- Form -->\n    </mdb-card-body>\n  </mdb-card>\n\n  <!-- Material form login -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/footer/footer.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/footer/footer.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\n<footer class=\"page-footer font-small orange\">\n    <!-- Footer Elements -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\" style=\"color: black\">\n        © 2021 Copyright:\n        <a href=\"#\">\n      Accseedd.com</a\n    >\n  </div>\n  <!-- Copyright -->\n</footer>\n<!-- Footer -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/homepage/homepage.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/homepage/homepage.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeHomepageHomepageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!--header-->\n <!--Section: Content-->\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div style=\"position:relative;\">\n      <mdb-carousel class=\"carousel slide carousel-fade cimg\" [animation]=\"'fade'\" >\n       <mdb-carousel-item>\n         <div class=\"view\">\n           <img class=\"d-block \" src=\"./assets/images/scraper/slider1.jpg\" alt=\"Feature Image 1\" class=\"feature-img\">\n           <div class=\"mask waves-light\" mdbWavesEffect></div>\n         </div>\n       </mdb-carousel-item>\n     </mdb-carousel>\n     </div>\n   <!--Grid row-->\n\n   <!--Grid row-->\n  </div>\n  <div class=\"col-md-6\">\n    <app-login></app-login>\n  </div>\n</div>\n\n<!--\n<div class=\"container my-5 py-5\">\n\n  <hr>\n\n    <section class=\"px-md-5 mx-md-5 text-center dark-grey-text pd-top-min\">\n\n      <h3 class=\"font-weight-bold\">Contact Us</h3>\n      <br>\n\n      <div class=\"row text-center\">\n\n\n        <div class=\"col-lg-4 col-md-12 mb-4 mb-md-0\">\n\n          <i class=\"fas fa-map-marker-alt fa-2x blue-text\"></i>\n\n          <p class=\"font-weight-bold my-3\">Address</p>\n\n          <p class=\"text-muted\">AccSeedd Solutions, Dalugama, Kelaniya</p>\n\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 mb-4 mb-md-0\">\n\n            <i class=\"fas fa-phone fa-2x blue-text\"></i>\n\n            <p class=\"font-weight-bold my-3\">Phone number</p>\n\n            <p class=\"text-muted\">+ (94) 71 972 5562</p>\n\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 mb-4 mb-md-0\">\n\n            <i class=\"fas fa-envelope fa-2x blue-text\"></i>\n\n            <p class=\"font-weight-bold my-3\">E-mail</p>\n\n            <p class=\"text-muted\">hello@accseedd.com</p>\n\n        </div>\n      </div>\n\n\n\n    </section>\n\n<hr>\n\n\n\n</div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/not-found-page/not-found-page.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/not-found-page/not-found-page.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeNotFoundPageNotFoundPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section\n  class=\"text-center px-md-5 mx-md-5 dark-grey-text\"\n  style=\"padding-top: 5%\"\n>\n  <div class=\"row mb-5\">\n    <div class=\"col-md-6 mx-auto\">\n      <img\n        src=\"./assets/images/vectors/error.png\"\n        class=\"img-fluid\"\n      />\n    </div>\n  </div>\n\n  <h1 class=\"font-weight-bold mb-4 pb-2\">\n   404 Not Found!\n  </h1>\n</section>\n\n<div class=\"text-center\">\n  <!-- <button\n  mbdBtn\n  mdbWavesEffect\n  style=\"margin:0 auto;\"\n  class=\"btn btn-secondary btn-lg\"\n  (click)=\"backClicked()\"\n>\n  get Back\n</button> -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/dashboard/dashboard.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/dashboard/dashboard.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesStudentDashDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(isHandset$ | async) === false\"\n  >\n    <!--profile pic-->\n    <div class=\"pd-img\">\n      <img\n        [src]=\"topIcon\"\n        alt=\"headerDetails Pic\"\n        class=\"img-thumbnail\"\n      />\n    </div>\n\n    <mat-nav-list>\n      <a\n        class=\"txt-white row\"\n        mat-list-item\n        [ngClass]=\"home\"\n        (click)=\"navHome()\"\n        routerLink=\"/student\"\n      >\n        <div class=\"col-md-11 side-start\">\n          <mat-icon>policy</mat-icon>\n          <span class=\"side-text\"> ඇතුළත්වූ පාඨමාලා </span>\n        </div>\n        <div class=\"ol-md-1 side-end\">\n          <mat-icon>arrow_right</mat-icon>\n        </div>\n      </a>\n\n\n\n      <a\n        class=\"txt-white row\"\n        mat-list-item\n        [ngClass]=\"settings\"\n        (click)=\"navSettings()\"\n        routerLink=\"/student/settings\"\n      >\n        <div class=\"col-md-11 side-start\">\n          <mat-icon>perm_identity</mat-icon>\n          <span class=\"side-text\"> ගිණුම් සැකසීම්  </span>\n        </div>\n        <div class=\"ol-md-1 side-end\">\n          <mat-icon>arrow_right</mat-icon>\n        </div>\n      </a>\n\n\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <!--dashboard content-->\n  <mat-sidenav-content>\n    <mat-toolbar color=\"bg-primary\" style=\"color:ornage;\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n      >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n        <b>\n          සියලු විස්තර\n        </b>\n\n      </button>\n    </mat-toolbar>\n\n    <!--dashboard content-->\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n    <!--end dashboard content-->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/pages/dash-data/dash-data.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/pages/dash-data/dash-data.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesStudentDashPagesDashDataDashDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div appNoRightClick>\n    <div *ngIf=\"cour\">\n        <div class=\"top-content\">\n            <div class=\"mt-3 mb-2 text-center\">\n                <h2><strong> වැඩසටහන: {{selected}}</strong></h2>\n            </div>\n            <hr>\n        </div>\n        <div class=\"bottom-content row\">\n\n            <div class=\"col-md-8 course-list\">\n\n                <div class=\"player-content\">\n                  <div class=\"video\">\n\n                      <!-- <video width=\"100%\" controls (click)=\"toggleVideo()\" #videoPlayer>\n          <source src=\"{{playlink}}\" type=\"video/mp4\" />\n          Browser not supported\n      </video>-->\n                      <div style=\"position: relative; padding-top: 56.25%;\" appNoRightClick *ngIf=\"vtype=='y'\">\n                          <iframe width=\"560\" height=\"315\" [src]='playlink' title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" loading=\"lazy\" style=\"border: none; position: absolute; top: 0; height: 100%; width: 100%;\"\n                              allow=\"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\" appNoRightClick></iframe>\n\n                      </div>\n                      <!--\n                      <div style=\"position: relative; padding-top: 56.25%;\" *ngIf=\"vtype=='b'\"><iframe [src]='playlink' loading=\"lazy\" style=\"border: none; position: absolute; top: 0; height: 100%; width: 100%;\" allow=\"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe></div>\n-->\n                      <div style=\"position: relative; padding-top: 56.074766355140184%;\" *ngIf=\"vtype=='b'\"><iframe [src]=\"playlink\" loading=\"lazy\" style=\"border: none; position: absolute; top: 0; height: 100%; width: 100%;\" allow=\"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe></div>\n                      <!--    <div style=\"position: relative; padding-top: 56.25%;\"><iframe src=\"https://iframe.mediadelivery.net/embed/4858/1c56b1e1-8988-4f58-bea5-cee79c571b88?autoplay=true\" loading=\"lazy\" style=\"border: none; position: absolute; top: 0; height: 100%; width: 100%;\" allow=\"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;\"\n                          allowfullscreen=\"true\"></iframe></div>\n              </div>\n          </div>\n      -->\n\n                      <div class=\"other-details mb-2\">\n                          <div class=\"next-prev\">\n                              <button mat-button color=\"warn\">< Previous</button>\n                              <p style=\" font-size:38px; color:orange;\"> | </p> <button mat-button color=\"warn\">Next > </button>\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"col-md-4 video-player\" appNoRightClick>\n              <div *ngFor=\"let video of cour\">\n                <mat-card class=\" now-playing example-card\" *ngIf=\"now_playing_id == video.title\">\n                    <mat-card-content>\n                        <div class=\"row\">\n                            <div class=\"col-md-3 text-center\">\n                                <img mat-card-image src=\"./assets/images/scraper/video_icon.png\" class=\"vid-icon\" alt=\"Video\">\n                            </div>\n                            <div class=\"col-md-8\">\n                                <h4>{{video.title}}</h4>\n                                <p>\n                                    <b>ඉගැන්වීම : </b>\n                                </p>\n                                <div class=\"play-icon pause\">\n                                    <mdb-icon fas icon=\"pause\"></mdb-icon>\n                                    <span style=\"font-size:16px;\">\n          නවත්වන්න\n         </span>\n                                </div>\n                                <br>\n                            </div>\n                        </div>\n\n                    </mat-card-content>\n\n                </mat-card>\n                <mat-card class=\"example-card\" *ngIf=\"now_playing_id != video.title\" appNoRightClick (click)=\"selectvideo(video.link,video.type,video.comment,video.title)\">\n                    <mat-card-content>\n                        <div class=\"row\">\n                            <div class=\"col-md-3 text-center\">\n                                <img mat-card-image src=\"./assets/images/scraper/video_icon.png\" alt=\"Video\">\n                            </div>\n                            <div class=\"col-md-8\">\n                                <h5>{{video.title}}</h5>\n                                <p>\n\n                                </p>\n                                <div class=\"play-icon\">\n                                    <mdb-icon fas icon=\"play\" (click)=\"selectvideo(video.link,video.type,video.comment,video.title)\"></mdb-icon>\n                                    <span style=\"font-size:14px;\">\n          නරඹන්න\n         </span>\n                                </div>\n                                <br>\n                            </div>\n                        </div>\n\n                    </mat-card-content>\n\n                </mat-card>\n            </div>\n\n            </div>\n\n\n\n            <div *ngIf=\"!course\" class=\"mt-5 pt-5 mb-5 text-center\">\n                <h2><b>පාථමාලාව තවමත් විවෘතව නැත</b></h2>\n            </div>\n\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8 pb-3\">\n            <h4 *ngIf=\"details!=''\"><strong> ගුරුවරයාගේ සටහන් </strong></h4>\n            <hr>\n            <p>{{details}}</p>\n          </div>\n          <div class=\"col-md-4\">\n\n          </div>\n        </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/pages/dash-home/dash-home.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/pages/dash-home/dash-home.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesStudentDashPagesDashHomeDashHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\" container-fluid mt-3 pb-2\">\n    <div class=\"mt-3 mb-2 text-center\">\n        <h2><strong> {{studentName}} ඇතුළත්වූ පාඨමාලා</strong></h2>\n\n    </div>\n    <hr>\n    <div class=\"mt-5 mb-3 card-box\" *ngIf=\"cour.length && checkstatuss==='active'\">\n        <mat-card class=\"example-card\" *ngFor=\"let course of cour\">\n            <mat-card-header>\n                <div mat-card-avatar class=\"example-header-image\"></div>\n                <mat-card-title>{{course.courseName + ' ' + course.class}}</mat-card-title>\n            </mat-card-header>\n            <br>\n            <div class=\"gr-thumbnail\">\n                {{course.class}}\n            </div>\n\n            <mat-card-content>\n                <p>\n                    <b>ඉගැන්වීම : </b> {{course.teacher[0].teacherName}}\n                </p>\n            </mat-card-content>\n            <mat-card-actions>\n                <div class=\"buttons\">\n                    <button mdbBtn color=\"orange\" rounded=\"true\" block=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect routerLink=\"course/{{course.courseId}}\">\n          ඇතුලුවන්න\n          </button>\n                </div>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n\n    <div class=\"mt-2 mb-1 card-box\" *ngIf=\"checkstatuss==='deactive'\">\n        <mat-card class=\"example-card\">\n            <mat-card-header>\n                <div mat-card-avatar class=\"example-header-image\"></div>\n                <mat-card-title>Please Make Payement</mat-card-title>\n            </mat-card-header>\n            <br>\n            <img mat-card-image src=\"https://qualityinspection.org/wp-content/uploads/2012/01/HowtoPayChineseSuppliersbyBankTransferTT.jpg\" height=\"200\" alt=\"Photo of a course\">\n            <mat-card-content>\n                <p>\n                    <b>Do you need to register class please conatct us 077656556 </b>\n                </p>\n            </mat-card-content>\n            <mat-card-actions>\n                <div class=\"buttons\">\n                    <button mdbBtn color=\"orange\" rounded=\"true\" block=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect>\n        ඇතුලුවන්න\n        </button>\n                </div>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/pages/dash-settings/dash-settings.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/pages/dash-settings/dash-settings.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesStudentDashPagesDashSettingsDashSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mr-2 ml-2 pt-2\">\n  <div class=\"row\">\n    <div class=\"max-col\">\n      <app-user-profile></app-user-profile>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/user-profile/user-profile.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/user-profile/user-profile.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesStudentUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div  *ngIf=\"student\">\n\n<div class=\"card mt-5 container-fluid\" *ngIf=\"!editmode\">\n  <section class=\"dark-grey-text\">\n    <!--profile header-->\n    <div class=\"container-fluid pt-3\">\n      <div class=\"row\" style=\"display: flex; align-items: center\">\n        <div class=\"col-md-2\">\n          <img\n            src=\"{{ student ? student.profilePic : imageUrl }}\"\n            alt=\"student Pic\"\n            class=\"img-thumbnail logo-img\"\n          />\n        </div>\n        <div class=\"col-md-9\">\n          <h2 class=\"txt-title\">\n            {{ student ? student.studentName : \"Loading...\" }}\n          </h2>\n        </div>\n      </div>\n\n      <!-- profile content-->\n      <div class=\"page-content\">\n        <hr />\n\n        <!--row 1-->\n        <div class=\"row\">\n          <div class=\"col-md-5 inst-text\">\n            <mdb-icon fas icon=\"student-alt\"></mdb-icon> <span style=\"margin-left:4px;\"> student ID </span>\n          </div>\n\n          <div class=\"col-md-7 profile-text\">\n            <span> {{ student ? student.studentId : \"Loading...\" }}</span>\n          </div>\n        </div>\n\n        <!--row 1-->\n        <div class=\"row div-content\">\n          <div class=\"col-md-5 inst-text\">\n            <mdb-icon fas icon=\"envelope\"></mdb-icon> <span style=\"margin-left:4px;\"> Email </span>\n          </div>\n\n          <div class=\"col-md-7 profile-text\">\n            <span> {{ student ? student.email : \"Loading...\" }}</span>\n          </div>\n        </div>\n\n        <!--row 2-->\n        <div class=\"row div-content\">\n          <div class=\"col-md-5 inst-text\">\n            <mdb-icon fas icon=\"student-cog\"></mdb-icon> <span style=\"margin-left:4px;\"> Active Plan</span>\n          </div>\n\n          <div class=\"col-md-7 profile-text\">\n            <span> {{ student ? student.class : \"Loading...\" }}</span>\n          </div>\n        </div>\n\n        <!--row 2-->\n        <div class=\"row div-content\">\n          <div class=\"col-md-5 inst-text\">\n            <mdb-icon fas icon=\"phone\"></mdb-icon> <span style=\"margin-left:4px;\"> Contact No </span>\n          </div>\n\n          <div class=\"col-md-7 profile-text\">\n            <span> {{ student ? student.contactNo : \"Loading...\" }}</span>\n          </div>\n        </div>\n\n\n          <hr>\n          <br>\n          <h5>\n            Authentication\n          </h5>\n\n\n        <!--row 4-->\n        <div class=\"row div-content\">\n          <div class=\"col-md-5 inst-text\" style=\"padding-bottom: 20px\">\n            <mdb-icon fas icon=\"key\"></mdb-icon> <span style=\"margin-left:4px;\"> Password </span>\n          </div>\n\n          <div class=\"col-md-7 profile-text\">\n            <span> ******* </span>\n          </div>\n          <br />\n          <div class=\"btn-gr mb-2\">\n            <hr />\n            <a\n              type=\"button\"\n              mdbBtn\n              color=\"primary\"\n              outline=\"yes\"\n              class=\"waves-light btn btn-md cust-btn btn-lm\"\n              mdbWavesEffect\n              (click)=\"changePassword.show()\"\n            >\n              Change Password\n            </a>\n            <a\n              type=\"button\"\n              mdbBtn\n              color=\"dark\"\n              outline=\"yes\"\n              class=\"btn btn-md mt-2\"\n              (click)=\"editmode = !editmode\"\n              mdbWavesEffect\n              >Customize Profile\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n\n<!--customize profile section-->\n<div class=\"card mt-4 container-fluid\" *ngIf=\"editmode\">\n  <form\n    class=\"service-form pd-top-min\"\n    #editProfile=\"ngForm\"\n    (submit)=\"editUser(editProfile)\"\n  >\n    <section class=\"dark-grey-text\">\n      <!--edit content-->\n      <div class=\"pd-top-min text-center\">\n        <!--row1-->\n        <div class=\"row\">\n          <div class=\"col-md-4 inst-text\">\n            <mdb-icon fas icon=\"award\"></mdb-icon>\n            <span> Change Profile Picture: </span>\n          </div>\n\n          <div class=\"col-md-4 text-center\">\n            <a role=\"button\" mdbWavesEffect (click)=\"img.click()\">\n              <img\n                [src]=\"image ? imageUrl : student.profilePic\"\n                alt=\"Profile Picture\"\n                class=\"img-thumbnail logo-img-edit\"\n              />\n            </a>\n            <input\n              type=\"file\"\n              hidden=\"true\"\n              id=\"img\"\n              #img\n              ngmodel\n              name=\"image\"\n              accept=\"image/*\"\n              (change)=\"onImageUploaded($event)\"\n            />\n          </div>\n        </div>\n\n        <hr />\n        <br />\n\n        <div class=\"row page-content\">\n          <div class=\"col-md-4 inst-text\">\n            <mdb-icon fas icon=\"file-signature\"></mdb-icon>\n            <span> Your Name: </span>\n          </div>\n\n          <div class=\"col-md-7 text-center\">\n            <mat-form-field class=\"service-full-width\">\n              <input\n                matInput\n                [ngModel]=\"student.studentName\"\n                required\n                name=\"student_name\"\n                #studentName=\"ngModel\"\n              />\n              <mat-error *ngIf=\"studentName.invalid\"\n                >Please enter your name</mat-error\n              >\n            </mat-form-field>\n          </div>\n        </div>\n        <!--row 2-->\n        <div class=\"row pt-3\">\n          <div class=\"col-md-4 inst-text\">\n            <mdb-icon fas icon=\"envelope\"></mdb-icon>\n            <span> Email Address:</span>\n          </div>\n\n          <div class=\"col-md-7 text-center\">\n            <mat-form-field class=\"service-full-width\">\n              <input\n                matInput\n                [ngModel]=\"student.email\"\n                required\n                type=\"email\"\n                #email=\"ngModel\"\n                name=\"email\"\n                ngModel\n              />\n              <mat-error *ngIf=\"email.invalid\"\n                >Please enter a valid email address</mat-error\n              >\n            </mat-form-field>\n          </div>\n        </div>\n\n        <!--row 2-->\n        <div class=\"row page-content\">\n          <div class=\"col-md-4 inst-text\">\n            <mdb-icon fas icon=\"phone\"></mdb-icon> <span> Contact No:</span>\n          </div>\n\n          <div class=\"col-md-7 text-center\">\n            <mat-form-field class=\"service-full-width\">\n              <input\n                matInput\n                [ngModel]=\"student.contactNo\"\n                required\n                #contactNo=\"ngModel\"\n                minlength=\"10\"\n                maxlength=\"10\"\n                name=\"contact_no\"\n              />\n              <mat-error *ngIf=\"contactNo.invalid\"\n                >Contact No must contain 10 digits</mat-error\n              >\n            </mat-form-field>\n          </div>\n        </div>\n\n        <hr />\n      </div>\n    </section>\n\n    <!--save buttons-->\n    <div class=\"text-center pb-3\">\n      <button\n        type=\"button\"\n        mdbBtn\n        color=\"primary\"\n        class=\"waves-light btn btn-md cust-btn btn-tab\"\n        mdbWavesEffect\n        type=\"submit\"\n      >\n        Save Changes\n      </button>\n      <button\n        type=\"button\"\n        mdbBtn\n        color=\"primary\"\n        class=\"waves-light btn btn-md cust-btn btn-tab\"\n        mdbWavesEffect\n        outline=\"yes\"\n        (click)=\"editmode = !editmode\"\n        (click)=\"editProfile.resetForm()\"\n      >\n        Discard\n      </button>\n    </div>\n  </form>\n</div>\n\n</div>\n\n<!--change password Modal-->\n<div\n  mdbModal\n  #changePassword=\"mdbModal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myBasicModalLabel\"\n  [config]=\"{ backdrop: false, ignoreBackdropClick: true }\"\n  aria-hidden=\"true\"\n>\n  <form #pwordForm=\"ngForm\" (submit)=\"changeUserPassword(pwordForm)\">\n    <div\n      class=\"modal-dialog modal-dialog-centered\"\n      role=\"document\"\n      style=\"overflow-y: initial !important\"\n    >\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button\n            type=\"button\"\n            class=\"close pull-right\"\n            aria-label=\"Close\"\n            (click)=\"changePassword.hide()\"\n          >\n            <span aria-hidden=\"true\">×</span>\n          </button>\n          <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Change Password</h4>\n        </div>\n        <div class=\"modal-body\" style=\"height: 330px; overflow-y: auto\">\n          <!--row 2-->\n          <div class=\"row page-content\">\n            <div class=\"col-md-5 inst-text\">\n              <span> Current Password:</span>\n            </div>\n\n            <div class=\"col-md-7 text-center\">\n              <mat-form-field class=\"service-full-width\">\n                <mat-label>Current Password here </mat-label>\n                <input\n                  type=\"password\"\n                  matInput\n                  required\n                  name=\"current_password\"\n                  #currentPword=\"ngModel\"\n                  ngModel\n                />\n                <mat-error *ngIf=\"currentPword.invalid\"\n                  >Current Password is required</mat-error\n                >\n              </mat-form-field>\n            </div>\n          </div>\n          <hr />\n\n          <!--row 2-->\n          <div class=\"row page-content\">\n            <div class=\"col-md-5 inst-text\">\n              <span> New Password:</span>\n            </div>\n\n            <div class=\"col-md-7 text-center\">\n              <mat-form-field class=\"service-full-width\">\n                <mat-label>New Password here </mat-label>\n                <input\n                  type=\"password\"\n                  matInput\n                  required\n                  name=\"new_password1\"\n                  #newPassword1=\"ngModel\"\n                  ngModel\n                />\n                <mat-error *ngIf=\"newPassword1.invalid\"\n                  >New Password cannot be empty</mat-error\n                >\n              </mat-form-field>\n            </div>\n          </div>\n\n          <!--row 2-->\n          <div class=\"row\">\n            <div class=\"col-md-5 inst-text\">\n              <span> Retype Password:</span>\n            </div>\n\n            <div class=\"col-md-7 text-center\">\n              <mat-form-field class=\"service-full-width\">\n                <mat-label>Retype Password here </mat-label>\n                <input\n                  type=\"password\"\n                  matInput\n                  required\n                  name=\"new_password2\"\n                  #newPassword2=\"ngModel\"\n                  ngModel\n                />\n                <mat-error *ngIf=\"newPassword2.invalid\"\n                  >Plase re-type the password</mat-error\n                >\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button\n            mdbBtn\n            class=\"btn btn-sm\"\n            color=\"primary\"\n            type=\"submit\"\n            mdbWavesEffect\n          >\n            Change Password\n          </button>\n          <button\n            mdbBtn\n            class=\"btn btn-sm\"\n            color=\"primary\"\n            outline=\"yes\"\n            (click)=\"changePassword.hide()\"\n            mdbWavesEffect\n          >\n            Close\n          </button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/all-users/all-users.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/all-users/all-users.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTeacherAllUsersAllUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pd-top-min\" *ngIf=\"users\">\n  <h4>\n    <mat-icon>library_books</mat-icon>\n    <b> Registered Users</b>\n  </h4>\n\n  <mat-form-field>\n    <mat-label>\n      <mat-icon>search</mat-icon>\n      Search Users</mat-label\n    >\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Saman\" />\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <table\n      class=\"table-responsive\"\n      mat-table\n      [dataSource]=\"dataSource\"\n      *ngIf=\"users.length\"\n    >\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"user_id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Student ID</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.userId }}</td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Full Name</th>\n        <td mat-cell *matCellDef=\"let row\">\n          {{ row.userName }}\n        </td>\n      </ng-container>\n\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n        <td mat-cell *matCellDef=\"let row\">\n          {{ row.userEmail }}\n        </td>\n      </ng-container>\n\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"contact_no\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Contact No</th>\n        <td mat-cell *matCellDef=\"let row\">\n          {{ row.userContactNo }}\n        </td>\n      </ng-container>\n\n            <!-- Progress Column -->\n            <ng-container matColumnDef=\"class\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Class</th>\n              <td mat-cell *matCellDef=\"let row\">{{ row.userType }}</td>\n            </ng-container>\n\n\n      <!-- Action Column -->\n      <ng-container matColumnDef=\"action\">\n        <th\n          mat-header-cell\n          *matHeaderCellDef\n          mat-sort-header\n          style=\"text-align: center\"\n        >\n          ACTION\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <button\n            mdbBtn\n            color=\"blue\"\n            text=\"white\"\n            class=\"btn btn-sm text-center\"\n            (click)=\"showUserDetails(row.userId)\"\n\n          >\n            View Data\n          </button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n\n    <div class=\"text-center pd-top-min\" *ngIf=\"!users.length\">\n      No Users Found\n    </div>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15, 20]\"></mat-paginator>\n  </div>\n</div>\n\n\n\n\n<!--View Details Modal-->\n<!-- <div\n  mdbModal\n  #idOptions=\"mdbModal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myBasicModalLabel\"\n  [config]=\"{ backdrop: false, ignoreBackdropClick: true }\"\n  aria-hidden=\"true\"\n>\n  <div\n    class=\"modal-dialog modal-lg modal-dialog-centered\"\n    role=\"document\"\n    style=\"overflow-y: initial !important\"\n  >\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button\n          type=\"button\"\n          class=\"close pull-right\"\n          aria-label=\"Close\"\n          (click)=\"idOptions.hide()\"\n        >\n          <span aria-hidden=\"true\">×</span>\n        </button>\n        <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Add Scrapers to User</h4>\n      </div>\n\n      <div\n        class=\"modal-body\"\n        style=\"height: 450px; overflow-y: auto\"\n        *ngIf=\"user\"\n      >\n        <div class=\"text-center\">\n          <section class=\"text-center dark-grey-text scraper-details\">\n            <div class=\"driver-raw\">\n              <div class=\"col-md-1 text-center\">\n                <img\n                  src={{user.profilePic}}\n                  class=\"profile-pic\"\n                />\n              </div>\n              <div class=\"col-md-9 driver-name-details\">\n\n                    <div class=\"driver-name-large\">\n                      {{ user.userName }}\n                    </div>\n                    <div class=\"small-info\">\n                      User ID: {{  user.userId }}\n                    </div>\n              </div>\n            </div>\n            <hr>\n\n              <div class=\"add-scraper mt-3 mb-2\" *ngIf=\"scrapers && scrapers.length\">\n                <div class=\"row\">\n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-7\">\n\n                    <mat-form-field appearance=\"fill\">\n                      <mat-label>Select a scraper to add</mat-label>\n                      <mat-select [(value)]=\"selectedScraper\" onChange>\n                        <mat-option [value]=\"{scraperId: scraper.scraperId, scraperName: scraper.scraperName}\" *ngFor=\"let scraper of scrapers\">{{scraper.scraperName}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button\n                    mdbBtn\n                    color=\"primary\"\n                    class=\"btn btn-md\"\n                    (click)=\"addScraper(selectedScraper.scraperId, selectedScraper.scraperName)\"\n                    mdbWavesEffect\n                  >\n                  <mdb-icon fas icon=\"plus\"> </mdb-icon>  Add Scraper\n\n                  </button>\n\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"mt-2 mb-3 text-center\"  *ngIf=\"!scrapers || !scrapers.length\">\n                <p> Sorry. No scrapers found! </p>\n              </div>\n\n            <hr />\n\n            <div class=\"scrapers-header mt-1 mb-3 text-center\">\n                <h5> Available Scrapers</h5>\n            </div>\n\n            <div class=\"scrapers-list\" *ngIf=\"user.scrapers && user.scrapers.length\">\n              <div class=\"scraper-box\" *ngFor=\"let userScraper of user.scrapers\">\n                <div class=\"row\">\n                  <div class=\"col-md-8 scraper-title\">\n                    <img\n                    src=\"./assets/images/scraper/icon.png\"\n                    class=\"profile-pic-sm\"\n                    height=\"40\"\n                  />\n                    <div><strong>{{userScraper.scraperName}}</strong></div>\n                  </div>\n                  <div class=\"col-md-4\">\n\n                        <button\n                          mdbBtn\n                          color=\"red\"\n                          outline=\"yes\"\n                          class=\"btn btn-sm\"\n                          (click)=\"removeScraper(userScraper.scraperId)\"\n\n                          mdbWavesEffect\n                        >\n                        <mdb-icon fas icon=\"ban\"> </mdb-icon>  Remove Scraper\n\n                        </button>\n\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"mt-2 mb-3 text-center\"  *ngIf=\"!user.scrapers || !user.scrapers.length\">\n              <p> Sorry. This user has no scrapers assigned! </p>\n            </div>\n\n\n\n            <hr />\n\n\n          </section>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\" >\n\n\n        <button\n          mdbBtn\n          color=\"primary\"\n          class=\"btn btn-md\"\n          (click)=\"confirmDialogUpdate.show()\"\n\n          mdbWavesEffect\n        >\n        <mdb-icon fas icon=\"user-alt\"> </mdb-icon>  Update User\n\n        </button>\n\n        <button\n          mdbBtn\n          color=\"red\"\n          class=\"btn btn-md\"\n          (click)=\"confirmDialog.show()\"\n\n          mdbWavesEffect\n        >\n        <mdb-icon fas icon=\"ban\"> </mdb-icon>  Remove User\n\n        </button>\n\n        <button\n          mdbBtn\n          color=\"dark\"\n          outline=\"yes\"\n          class=\"btn btn-md\"\n          (click)=\"idOptions.hide()\"\n          mdbWavesEffect\n        >\n          Close\n        </button>\n      </div>\n      <div\n        class=\"modal-body\"\n        style=\"height: 450px; overflow-y: auto\"\n        *ngIf=\"!user\"\n      >\n        <app-not-found-page></app-not-found-page>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n\n<!-- confirm order deliveery dialog-->\n<div mdbModal #confirmDialog=\"mdbModal\"\nclass=\"modal fade\"\nid=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\"\n[config]=\"{ backdrop: false, ignoreBackdropClick: true }\"\naria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\n >\n<div class=\"modal-dialog modal-notify modal-danger modal-dialog-centered\" role=\"document\">\n  <!--Content-->\n  <div class=\"modal-content\">\n    <!--Header-->\n    <div class=\"modal-header\">\n      <p class=\"heading\">Remove a User</p>\n\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"confirmDialog.hide()\">\n        <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\n      </button>\n    </div>\n\n    <!--Body-->\n    <div class=\"modal-body\">\n\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <p></p>\n          <p class=\"text-center\">\n            <mdb-icon fas icon=\"ban\" size=\"3x\" class=\"mb-3 animated rotateIn\"></mdb-icon>\n          </p>\n        </div>\n\n        <div class=\"col-9\">\n          <h5>Are you sure want to remove <b>this user</b>? <br> (Please Note: This action is permenent and cannot be undone!)</h5>\n        </div>\n      </div>\n    </div>\n\n    <!--Footer-->\n    <div class=\"modal-footer justify-content-center\">\n      <a type=\"button\" mdbBtn color=\"red\" class=\"waves-effect btn btn-md\"\n      (click) = \"removeUser(user.studentId)\"\n      (click)=\"confirmDialog.hide()\"\n      mdbWavesEffect> Remove User\n        <mdb-btn far icon=\"check\" class=\"ml-1\"></mdb-btn>\n      </a>\n      <a type=\"button\" mdbBtn color=\"red\" outline=\"true\" class=\"waves-effect btn btn-md\" mdbWavesEffect\n      (click)=\"confirmDialog.hide()\"\n        data-dismiss=\"modal\">not now</a>\n    </div>\n  </div>\n  <!--/.Content-->\n</div>\n</div>\n\n\n\n<!-- confirm order deliveery dialog-->\n<div mdbModal #confirmDialogUpdate=\"mdbModal\"\nclass=\"modal fade\"\nid=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\"\n[config]=\"{ backdrop: false, ignoreBackdropClick: true }\"\naria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\n >\n<div class=\"modal-dialog modal-notify modal-primary modal-dialog-centered\" role=\"document\">\n  <!--Content-->\n  <div class=\"modal-content\">\n    <!--Header-->\n    <div class=\"modal-header\">\n      <p class=\"heading\">Update Scrapers for User </p>\n\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"confirmDialog.hide()\">\n        <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\n      </button>\n    </div>\n\n    <!--Body-->\n    <div class=\"modal-body\">\n\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <p></p>\n          <p class=\"text-center\">\n            <mdb-icon fas icon=\"ban\" size=\"3x\" class=\"mb-3 animated rotateIn\"></mdb-icon>\n          </p>\n        </div>\n\n        <div class=\"col-9\">\n          <h5>Are you sure want to update scrapers for <b>this user</b>? <br> (Please Note: All scrapers removed will loss thier execution data. This action cannot be undone!)</h5>\n        </div>\n      </div>\n    </div>\n\n    <!--Footer-->\n    <div class=\"modal-footer justify-content-center\">\n      <a type=\"button\" mdbBtn color=\"primary\" class=\"waves-effect btn btn-md\"\n      (click) = \"updateUser(user)\"\n      (click)=\"confirmDialogUpdate.hide()\"\n      mdbWavesEffect> Commit Changes\n        <mdb-btn far icon=\"check\" class=\"ml-1\"></mdb-btn>\n      </a>\n      <a type=\"button\" mdbBtn color=\"primary\" outline=\"true\" class=\"waves-effect btn btn-md\" mdbWavesEffect\n      (click)=\"confirmDialogUpdate.hide()\"\n        data-dismiss=\"modal\">not now</a>\n    </div>\n  </div>\n  <!--/.Content-->\n</div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/dashboard/teacher-dashboard.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/dashboard/teacher-dashboard.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTeacherDashDashboardTeacherDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(isHandset$ | async) === false\"\n  >\n    <!--profile pic-->\n    <div class=\"pd-img\">\n      <img\n        [src]=\"topIcon\"\n        alt=\"headerDetails Pic\"\n        class=\"img-thumbnail\"\n      />\n    </div>\n\n    <mat-nav-list>\n      <a\n        class=\"txt-white row\"\n        mat-list-item\n        [ngClass]=\"home\"\n        (click)=\"navHome()\"\n        routerLink=\"/teacher\"\n      >\n        <div class=\"col-md-11 side-start\">\n          <mat-icon>home</mat-icon>\n          <span class=\"side-text\"> ප්රධාන මෙනුව  </span>\n        </div>\n        <div class=\"ol-md-1 side-end\">\n          <mat-icon>arrow_right</mat-icon>\n        </div>\n      </a>\n\n      <a\n        class=\"txt-white row\"\n        mat-list-item\n        [ngClass]=\"courses\"\n        (click)=\"navCourses()\"\n        routerLink=\"/teacher/courses\"\n      >\n        <div class=\"col-md-11 side-start\">\n          <mat-icon>list</mat-icon>\n          <span class=\"side-text\"> පාඨමාලා </span>\n        </div>\n        <div class=\"ol-md-1 side-end\">\n          <mat-icon>arrow_right</mat-icon>\n        </div>\n      </a>\n\n      <a\n      class=\"txt-white row\"\n      mat-list-item\n      [ngClass]=\"users\"\n      (click)=\"navUsers()\"\n      routerLink=\"/teacher/users\"\n    >\n      <div class=\"col-md-11 side-start\">\n        <mat-icon>people</mat-icon>\n        <span class=\"side-text\"> පංති හා සිසුන්  </span>\n      </div>\n      <div class=\"ol-md-1 side-end\">\n        <mat-icon>arrow_right</mat-icon>\n      </div>\n    </a>\n\n\n      <a\n        class=\"txt-white row\"\n        mat-list-item\n        [ngClass]=\"settings\"\n        (click)=\"navSettings()\"\n        routerLink=\"/teacher/settings\"\n      >\n        <div class=\"col-md-11 side-start\">\n          <mat-icon>perm_identity</mat-icon>\n          <span class=\"side-text\">ගිණුම් සැකසීම්  </span>\n        </div>\n        <div class=\"ol-md-1 side-end\">\n          <mat-icon>arrow_right</mat-icon>\n        </div>\n      </a>\n\n\n\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <!--dashboard content-->\n  <mat-sidenav-content>\n    <mat-toolbar color=\"bg-primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\"\n      >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n    </mat-toolbar>\n\n    <!--dashboard content-->\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n    <!--end dashboard content-->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-courses/teacher-courses.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-courses/teacher-courses.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTeacherDashPagesTeacherCoursesTeacherCoursesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-home/teacher-home.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-home/teacher-home.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTeacherDashPagesTeacherHomeTeacherHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\" container-fluid ml-3 mr-3 mt-3 pb-2\">\n    <div class=\"admin-dash-home text-center mt-5 mb-5\">\n      <h3><strong>Welcome back! Admin</strong></h3>\n      <br><br>\n      <p>features will be added soon...</p>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-settings/teacher-settings.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-settings/teacher-settings.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTeacherDashPagesTeacherSettingsTeacherSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mr-2 ml-2 pt-2\">\n  <div class=\"row\">\n    <div class=\"max-col\">\n      <app-user-profile></app-user-profile>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-users/teacher-users.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-users/teacher-users.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTeacherDashPagesTeacherUsersTeacherUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mr-2 ml-2 pt-2\">\n      <app-all-users></app-all-users>\n    </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/teacher-add-course/teacher-add-course.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/teacher-add-course/teacher-add-course.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTeacherTeacherAddCourseTeacherAddCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>teacher-add-course works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/teacher-add-videos/teacher-add-videos.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/teacher-add-videos/teacher-add-videos.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTeacherTeacherAddVideosTeacherAddVideosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>teacher-add-videos works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuccessSuccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid text-center\"\nstyle=\"padding-left: 30px; padding-right:30px; padding-top:10px; padding-bottom:10px; z-index:100;\">\n<h2 mat-dialog-title style=\"color:darkgreen\"> Web Scraper Tool</h2>\n<div mat-dialog-content>\n\t<span style=\"font-size:40px; font-weight:bold; color: green;\">  <mdb-icon fas icon=\"info-circle\"> </mdb-icon> </span>\n  <p class=\"mat-body-1\" style=\"color:darkgreen;\">{{ data.message }}</p>\n</div>\n<div mat-dialog-actions class=\"text-center\">\n  <button mat-raised-button style=\"margin:0 auto;\" color=\"primary\" mat-dialog-close> Okay </button>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/auth/login/login.component */
    "./src/app/modules/auth/login/login.component.ts");
    /* harmony import */


    var _modules_home_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/home/not-found-page/not-found-page.component */
    "./src/app/modules/home/not-found-page/not-found-page.component.ts");
    /* harmony import */


    var _modules_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/auth/auth.guard */
    "./src/app/modules/auth/auth.guard.ts");
    /* harmony import */


    var _modules_student_dash_pages_dash_home_dash_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/student/dash/pages/dash-home/dash-home.component */
    "./src/app/modules/student/dash/pages/dash-home/dash-home.component.ts");
    /* harmony import */


    var _modules_student_dash_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modules/student/dash/dashboard/dashboard.component */
    "./src/app/modules/student/dash/dashboard/dashboard.component.ts");
    /* harmony import */


    var _modules_student_dash_pages_dash_settings_dash_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modules/student/dash/pages/dash-settings/dash-settings.component */
    "./src/app/modules/student/dash/pages/dash-settings/dash-settings.component.ts");
    /* harmony import */


    var _modules_student_dash_pages_dash_data_dash_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modules/student/dash/pages/dash-data/dash-data.component */
    "./src/app/modules/student/dash/pages/dash-data/dash-data.component.ts");
    /* harmony import */


    var _modules_auth_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modules/auth/password-reset/password-reset.component */
    "./src/app/modules/auth/password-reset/password-reset.component.ts");
    /* harmony import */


    var _modules_auth_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./modules/auth/create-new-password/create-new-password.component */
    "./src/app/modules/auth/create-new-password/create-new-password.component.ts");
    /* harmony import */


    var _modules_home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modules/home/homepage/homepage.component */
    "./src/app/modules/home/homepage/homepage.component.ts");
    /* harmony import */


    var _modules_auth_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./modules/auth/add-user/add-user.component */
    "./src/app/modules/auth/add-user/add-user.component.ts");
    /* harmony import */


    var _modules_teacher_dash_pages_teacher_home_teacher_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modules/teacher/dash/pages/teacher-home/teacher-home.component */
    "./src/app/modules/teacher/dash/pages/teacher-home/teacher-home.component.ts");
    /* harmony import */


    var _modules_teacher_dash_pages_teacher_settings_teacher_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modules/teacher/dash/pages/teacher-settings/teacher-settings.component */
    "./src/app/modules/teacher/dash/pages/teacher-settings/teacher-settings.component.ts");
    /* harmony import */


    var _modules_teacher_dash_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./modules/teacher/dash/dashboard/teacher-dashboard.component */
    "./src/app/modules/teacher/dash/dashboard/teacher-dashboard.component.ts");
    /* harmony import */


    var _modules_teacher_dash_pages_teacher_users_teacher_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./modules/teacher/dash/pages/teacher-users/teacher-users.component */
    "./src/app/modules/teacher/dash/pages/teacher-users/teacher-users.component.ts");
    /* harmony import */


    var _modules_teacher_dash_pages_teacher_courses_teacher_courses_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./modules/teacher/dash/pages/teacher-courses/teacher-courses.component */
    "./src/app/modules/teacher/dash/pages/teacher-courses/teacher-courses.component.ts");
    /* harmony import */


    var _modules_teacher_teacher_add_videos_teacher_add_videos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./modules/teacher/teacher-add-videos/teacher-add-videos.component */
    "./src/app/modules/teacher/teacher-add-videos/teacher-add-videos.component.ts");
    /* harmony import */


    var _modules_teacher_teacher_add_course_teacher_add_course_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./modules/teacher/teacher-add-course/teacher-add-course.component */
    "./src/app/modules/teacher/teacher-add-course/teacher-add-course.component.ts");

    const routes = [{
      path: 'teacher',
      component: _modules_teacher_dash_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["TeacherDashboardComponent"],
      children: [{
        path: '',
        component: _modules_teacher_dash_pages_teacher_home_teacher_home_component__WEBPACK_IMPORTED_MODULE_14__["TeacherHomeComponent"]
      }, {
        path: 'add-course',
        component: _modules_teacher_teacher_add_course_teacher_add_course_component__WEBPACK_IMPORTED_MODULE_20__["TeacherAddCourseComponent"]
      }, {
        path: 'add-video/:id',
        component: _modules_teacher_teacher_add_videos_teacher_add_videos_component__WEBPACK_IMPORTED_MODULE_19__["TeacherAddVideosComponent"]
      }, {
        path: 'courses',
        component: _modules_teacher_dash_pages_teacher_courses_teacher_courses_component__WEBPACK_IMPORTED_MODULE_18__["TeacherCoursesComponent"]
      }, {
        path: 'users',
        component: _modules_teacher_dash_pages_teacher_users_teacher_users_component__WEBPACK_IMPORTED_MODULE_17__["TeacherUsersComponent"]
      }, {
        path: 'settings',
        component: _modules_teacher_dash_pages_teacher_settings_teacher_settings_component__WEBPACK_IMPORTED_MODULE_15__["TeacherSettingsComponent"]
      }, {
        path: '**',
        component: _modules_home_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"]
      }],
      canActivate: [_modules_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'student',
      component: _modules_student_dash_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
      children: [{
        path: '',
        component: _modules_student_dash_pages_dash_home_dash_home_component__WEBPACK_IMPORTED_MODULE_6__["DashHomeComponent"]
      }, {
        path: 'course/:id',
        component: _modules_student_dash_pages_dash_data_dash_data_component__WEBPACK_IMPORTED_MODULE_9__["DashDataComponent"]
      }, {
        path: 'settings',
        component: _modules_student_dash_pages_dash_settings_dash_settings_component__WEBPACK_IMPORTED_MODULE_8__["DashSettingsComponent"]
      }, {
        path: '**',
        component: _modules_home_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"]
      }],
      canActivate: [_modules_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: '',
      component: _modules_home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"]
    }, {
      path: 'signin',
      component: _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'signup',
      component: _modules_auth_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__["AddUserComponent"]
    }, {
      path: 'resetpw',
      component: _modules_auth_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_10__["PasswordResetComponent"]
    }, {
      path: 'createpw',
      component: _modules_auth_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_11__["CreateNewPasswordComponent"]
    }, {
      path: '**',
      component: _modules_home_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_modules_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modules/auth/auth.service */
    "./src/app/modules/auth/auth.service.ts");

    let AppComponent = class AppComponent {
      constructor(authService) {
        this.authService = authService;
        this.title = 'Admin Dashboard';
      }

      ngOnInit() {
        this.authService.autoAuthUser();
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _modules_auth_header_header_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./modules/auth/header/header.component */
    "./src/app/modules/auth/header/header.component.ts");
    /* harmony import */


    var _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./modules/auth/login/login.component */
    "./src/app/modules/auth/login/login.component.ts");
    /* harmony import */


    var _modules_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./modules/home/footer/footer.component */
    "./src/app/modules/home/footer/footer.component.ts");
    /* harmony import */


    var _modules_auth_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./modules/auth/add-user/add-user.component */
    "./src/app/modules/auth/add-user/add-user.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _modules_student_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./modules/student/user-profile/user-profile.component */
    "./src/app/modules/student/user-profile/user-profile.component.ts");
    /* harmony import */


    var _modules_home_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./modules/home/not-found-page/not-found-page.component */
    "./src/app/modules/home/not-found-page/not-found-page.component.ts");
    /* harmony import */


    var _modules_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./modules/auth/auth-interceptor */
    "./src/app/modules/auth/auth-interceptor.ts");
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./error-interceptor */
    "./src/app/error-interceptor.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _success_success_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./success/success.component */
    "./src/app/success/success.component.ts");
    /* harmony import */


    var _modules_student_dash_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./modules/student/dash/dashboard/dashboard.component */
    "./src/app/modules/student/dash/dashboard/dashboard.component.ts");
    /* harmony import */


    var _modules_student_dash_pages_dash_home_dash_home_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./modules/student/dash/pages/dash-home/dash-home.component */
    "./src/app/modules/student/dash/pages/dash-home/dash-home.component.ts");
    /* harmony import */


    var _modules_student_dash_pages_dash_data_dash_data_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./modules/student/dash/pages/dash-data/dash-data.component */
    "./src/app/modules/student/dash/pages/dash-data/dash-data.component.ts");
    /* harmony import */


    var _modules_teacher_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./modules/teacher/all-users/all-users.component */
    "./src/app/modules/teacher/all-users/all-users.component.ts");
    /* harmony import */


    var _modules_student_dash_pages_dash_settings_dash_settings_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./modules/student/dash/pages/dash-settings/dash-settings.component */
    "./src/app/modules/student/dash/pages/dash-settings/dash-settings.component.ts");
    /* harmony import */


    var _modules_auth_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./modules/auth/create-new-password/create-new-password.component */
    "./src/app/modules/auth/create-new-password/create-new-password.component.ts");
    /* harmony import */


    var _modules_auth_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./modules/auth/password-reset/password-reset.component */
    "./src/app/modules/auth/password-reset/password-reset.component.ts");
    /* harmony import */


    var _modules_home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./modules/home/homepage/homepage.component */
    "./src/app/modules/home/homepage/homepage.component.ts");
    /* harmony import */


    var _modules_teacher_dash_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./modules/teacher/dash/dashboard/teacher-dashboard.component */
    "./src/app/modules/teacher/dash/dashboard/teacher-dashboard.component.ts");
    /* harmony import */


    var _modules_teacher_dash_pages_teacher_home_teacher_home_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./modules/teacher/dash/pages/teacher-home/teacher-home.component */
    "./src/app/modules/teacher/dash/pages/teacher-home/teacher-home.component.ts");
    /* harmony import */


    var _modules_teacher_dash_pages_teacher_settings_teacher_settings_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./modules/teacher/dash/pages/teacher-settings/teacher-settings.component */
    "./src/app/modules/teacher/dash/pages/teacher-settings/teacher-settings.component.ts");
    /* harmony import */


    var _modules_teacher_dash_pages_teacher_users_teacher_users_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./modules/teacher/dash/pages/teacher-users/teacher-users.component */
    "./src/app/modules/teacher/dash/pages/teacher-users/teacher-users.component.ts");
    /* harmony import */


    var _modules_teacher_dash_pages_teacher_courses_teacher_courses_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./modules/teacher/dash/pages/teacher-courses/teacher-courses.component */
    "./src/app/modules/teacher/dash/pages/teacher-courses/teacher-courses.component.ts");
    /* harmony import */


    var _modules_teacher_teacher_add_course_teacher_add_course_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./modules/teacher/teacher-add-course/teacher-add-course.component */
    "./src/app/modules/teacher/teacher-add-course/teacher-add-course.component.ts");
    /* harmony import */


    var _modules_teacher_teacher_add_videos_teacher_add_videos_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./modules/teacher/teacher-add-videos/teacher-add-videos.component */
    "./src/app/modules/teacher/teacher-add-videos/teacher-add-videos.component.ts");
    /* harmony import */


    var _modules_auth_newcourses_newcourses_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./modules/auth/newcourses/newcourses.component */
    "./src/app/modules/auth/newcourses/newcourses.component.ts");
    /* harmony import */


    var _no_right_click_directive__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./no-right-click.directive */
    "./src/app/no-right-click.directive.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"], _modules_auth_header_header_component__WEBPACK_IMPORTED_MODULE_33__["HeaderComponent"], _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"], _modules_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__["FooterComponent"], _modules_auth_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_36__["AddUserComponent"], _modules_student_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_40__["UserProfileComponent"], _modules_home_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_41__["NotFoundPageComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_44__["ErrorComponent"], _success_success_component__WEBPACK_IMPORTED_MODULE_45__["SuccessComponent"], _modules_auth_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_51__["CreateNewPasswordComponent"], _modules_auth_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_52__["PasswordResetComponent"], _modules_home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_53__["HomepageComponent"], _modules_student_dash_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_46__["DashboardComponent"], _modules_student_dash_pages_dash_home_dash_home_component__WEBPACK_IMPORTED_MODULE_47__["DashHomeComponent"], _modules_student_dash_pages_dash_data_dash_data_component__WEBPACK_IMPORTED_MODULE_48__["DashDataComponent"], _modules_teacher_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_49__["AllUsersComponent"], _modules_student_dash_pages_dash_settings_dash_settings_component__WEBPACK_IMPORTED_MODULE_50__["DashSettingsComponent"], _modules_teacher_dash_pages_teacher_home_teacher_home_component__WEBPACK_IMPORTED_MODULE_55__["TeacherHomeComponent"], _modules_teacher_dash_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_54__["TeacherDashboardComponent"], _modules_teacher_dash_pages_teacher_settings_teacher_settings_component__WEBPACK_IMPORTED_MODULE_56__["TeacherSettingsComponent"], _modules_teacher_dash_pages_teacher_users_teacher_users_component__WEBPACK_IMPORTED_MODULE_57__["TeacherUsersComponent"], _modules_teacher_dash_pages_teacher_courses_teacher_courses_component__WEBPACK_IMPORTED_MODULE_58__["TeacherCoursesComponent"], _modules_teacher_teacher_add_course_teacher_add_course_component__WEBPACK_IMPORTED_MODULE_59__["TeacherAddCourseComponent"], _modules_teacher_teacher_add_videos_teacher_add_videos_component__WEBPACK_IMPORTED_MODULE_60__["TeacherAddVideosComponent"], _modules_auth_newcourses_newcourses_component__WEBPACK_IMPORTED_MODULE_61__["NewcoursesComponent"], _no_right_click_directive__WEBPACK_IMPORTED_MODULE_62__["NoRightClickDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(), angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputUtilitiesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_37__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_39__["MatListModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbDropdownModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDropModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbProgressbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_28__["DatePipe"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
        useClass: _modules_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_42__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
        useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_43__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]],
      entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_44__["ErrorComponent"], _success_success_component__WEBPACK_IMPORTED_MODULE_45__["SuccessComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/error-interceptor.ts":
  /*!**************************************!*\
    !*** ./src/app/error-interceptor.ts ***!
    \**************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");

    let ErrorInterceptor = class ErrorInterceptor {
      constructor(dialog) {
        this.dialog = dialog;
      }

      intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
          let errorMsg = 'an unknown error occured!';

          if (error.error.message) {
            errorMsg = error.error.message;
          }

          this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], {
            data: {
              message: errorMsg
            }
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
      }

    };

    ErrorInterceptor.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
    }];

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/error/error.component.scss":
  /*!********************************************!*\
    !*** ./src/app/error/error.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let ErrorComponent = class ErrorComponent {
      constructor(data) {
        this.data = data;
      }

      ngOnInit() {}

    };

    ErrorComponent.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }];

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.scss */
      "./src/app/error/error.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/add-user/add-user.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/modules/auth/add-user/add-user.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthAddUserAddUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  max-width: 800px;\n  margin: auto;\n  margin-top: 5%;\n}\n\n.mfield {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.dpth {\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL2F1dGgvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICBtYXgtd2lkdGg6ODAwcHg7XG4gIG1hcmdpbjphdXRvO1xuICBtYXJnaW4tdG9wOjUlO1xufVxuXG5cbi5tZmllbGQge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4uZHB0aHtcbiAgei1pbmRleDogOTk5OTtcbn1cbiIsIi5jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLm1maWVsZCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZHB0aCB7XG4gIHotaW5kZXg6IDk5OTk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/auth/add-user/add-user.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/auth/add-user/add-user.component.ts ***!
    \*************************************************************/

  /*! exports provided: AddUserComponent */

  /***/
  function srcAppModulesAuthAddUserAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/modules/auth/auth.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/error/error.component */
    "./src/app/error/error.component.ts");

    let AddUserComponent = class AddUserComponent {
      constructor(router, datepipe, authService, dialog) {
        this.router = router;
        this.datepipe = datepipe;
        this.authService = authService;
        this.dialog = dialog;
      }

      ngOnInit() {
        this.authService.getLastUserId();
        this.lastIdSub = this.authService.getLastIdUpdateListener().subscribe(recievedId => {
          if (recievedId) {
            this.lastId = recievedId;
            console.log(this.lastId);
          }
        });
        this.router.events.subscribe(evt => {
          if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
            return;
          }

          window.scrollTo(0, 0);
        });
      }

      ngOnDestroy() {
        if (this.lastIdSub) {
          this.lastIdSub.unsubscribe;
        }
      }

      confirmPassword(str1, str2) {
        if (str1 === str2) {
          return true;
        } else {
          return false;
        }
      }

      signupUser(signupForm) {
        if (signupForm.invalid) {
          console.log('Form Invalid');
        } else {
          if (this.confirmPassword(signupForm.value.user_pass, signupForm.value.user_pass_check)) {
            const user = {
              studentId: this.lastId,
              studentName: signupForm.value.user_name,
              user_type: 'Student',
              profilePic: './assets/images/scraper/user.png',
              email: signupForm.value.user_email,
              contactNo: signupForm.value.contact_no,
              gender: signupForm.value.gender,
              location: signupForm.value.location,
              class: signupForm.value.al_class,
              stream: 'any',
              subjects: []
            };
            this.authService.signUp(user, signupForm.value.user_pass);
            console.log('You have signed up successfully!');
            signupForm.resetForm();
          } else {
            this.dialog.open(src_app_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], {
              data: {
                message: 'Passwords do not match! Pleasec re-check!'
              }
            });
          }
        }
      }

    };

    AddUserComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
    }, {
      type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }];

    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/add-user/add-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-user.component.scss */
      "./src/app/modules/auth/add-user/add-user.component.scss")).default]
    })], AddUserComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/auth-interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/auth/auth-interceptor.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppModulesAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/modules/auth/auth.service.ts");

    let AuthInterceptor = class AuthInterceptor {
      constructor(authService) {
        this.authService = authService;
      }

      intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
      }

    };

    AuthInterceptor.ctorParameters = () => [{
      type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/modules/auth/auth.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/modules/auth/auth.guard.ts ***!
    \********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppModulesAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/modules/auth/auth.service.ts");

    let AuthGuard = class AuthGuard {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }

      canActivate(route, state) {
        const isAuth = true; // this.authService.getisAuth(); //ToDo : Enable auth

        if (!isAuth) {
          this.router.navigate(['notfound']);
        }

        return isAuth;
      }

    };

    AuthGuard.ctorParameters = () => [{
      type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
    }];

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/modules/auth/auth.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/modules/auth/auth.service.ts ***!
    \**********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppModulesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _student_student_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../student/student.config */
    "./src/app/modules/student/student.config.ts");
    /* harmony import */


    var src_app_success_success_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/success/success.component */
    "./src/app/success/success.component.ts");

    let AuthService = class AuthService {
      constructor(http, router, dialog, _snackBar) {
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.lastIdUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.studentUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.classStudentsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentStudentUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.studentsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.headerDetailsListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // user login status

        this.isAuthenticated = false; // snack bars for notification display

        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
      } // GET


      getStudent(userId) {
        this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getStudent"] + userId).subscribe(res => {
          this.student = res.user;
          this.studentUpdated.next(this.student);
        });
      }

      getAuthStudent() {
        this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getAuthStudent"]).subscribe(res => {
          this.currentStudent = res.user;
          this.currentStudentUpdated.next(this.currentStudent);
        });
      }

      getStudents() {
        this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getStudents"]).subscribe(res => {
          this.studentsUpdated.next(res.users);
        });
      }

      getClassStudents(classId) {
        this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getClassStudents"] + classId).subscribe(res => {
          this.studentsUpdated.next(res.users);
        });
      } // get details for header


      getHeaderDetails() {
        if (this.token) {
          this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getHeader"]).subscribe(recievedHeader => {
            this.headerDetails = {
              userType: recievedHeader.user_type,
              userName: recievedHeader.user_name,
              profilePic: recievedHeader.profile_pic
            };
            this.headerDetailsListener.next(this.headerDetails);
          });
        }
      } // get last product id


      getLastUserId() {
        this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getLastId"]).subscribe(recievedId => {
          console.log(recievedId.lastid);
          this.lastId = recievedId.lastid;
          this.lastIdUpdated.next(this.lastId);
        });
      } // get token to be used by other services


      getToken() {
        return this.token;
      } // get authentication statusgetAuthAdmin


      getisAuth() {
        return this.isAuthenticated;
      } // listners for subjects


      getLastIdUpdateListener() {
        return this.lastIdUpdated.asObservable();
      }

      getAuhStatusListener() {
        return this.authStatusListener.asObservable();
      }

      getHeaderDetailsListener() {
        return this.headerDetailsListener.asObservable();
      }

      getStudentsUpdateListener() {
        return this.studentsUpdated.asObservable();
      }

      getStudentUpdatteListener() {
        return this.studentUpdated.asObservable();
      }

      getCurrentStudentUpdatedListener() {
        return this.currentStudentUpdated.asObservable();
      }

      getClassStudentsUpdatedListener() {
        return this.classStudentsUpdated.asObservable();
      } // POST , PUT


      signUp(user, password) {
        this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["postSignUp"], {
          user,
          password
        }).subscribe(recievedData => {
          console.log(recievedData.message);

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;

          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/']);

          this._snackBar.open(recievedData.message, 'Dismiss', {
            duration: 2500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
        }, error => {
          console.log(error);
        });
      } // update user profile


      updateStudent(user, image) {
        if (image) {
          const newImage = new FormData();
          newImage.append('images[]', image, image.name);
          this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["postUploadImage"], newImage).subscribe(recievedImage => {
            console.log(recievedImage);
            user.profilePic = recievedImage.profile_pic;
            this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["putUpdateStudent"], user).subscribe(recievedData => {
              console.log(recievedData.message);
              this.currentStudent = user;
              this.currentStudentUpdated.next(this.currentStudent);

              this.router.routeReuseStrategy.shouldReuseRoute = () => false;

              this.router.onSameUrlNavigation = 'reload';
              this.router.navigate(['/student/settings']);
              this.dialog.open(src_app_success_success_component__WEBPACK_IMPORTED_MODULE_7__["SuccessComponent"], {
                data: {
                  message: 'Your Profile Details Updated Successfully!'
                }
              });
            }, error => {
              console.log(error);
            });
          });
        } else {
          this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["putUpdateStudent"], user).subscribe(recievedData => {
            console.log(recievedData.message);
            this.currentStudent = user;
            this.currentStudentUpdated.next(this.currentStudent);

            this.router.routeReuseStrategy.shouldReuseRoute = () => false;

            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/student/settings']);
            this.dialog.open(src_app_success_success_component__WEBPACK_IMPORTED_MODULE_7__["SuccessComponent"], {
              data: {
                message: 'Your Profile Details Updated Successfully!'
              }
            });
          }, error => {
            console.log(error);
          });
        }
      } // update selected user


      updateSlectedStudent(user) {
        this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["putUpdateSelectedStudent"], user).subscribe(recievedData => {
          console.log(recievedData.message);
          this.studentUpdated.next(user);

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;

          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/teacher/users']);

          this._snackBar.open('User\'s details updated!', 'Dismiss', {
            duration: 2500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
        }, error => {
          console.log(error);
        });
      } // user profile change password


      changeUserPassword(userType, currentPword, newPword) {} // code here
      // DELETE


      removeStudent(userId) {
        this.http.delete(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["deleteStudent"] + userId).subscribe(recievedData => {
          if (this.students.length) {
            const updatedUsers = this.students.filter(usr => usr.studentId !== userId);
            this.students = updatedUsers;
            this.studentsUpdated.next(this.students);

            this._snackBar.open(recievedData.message, 'Dismiss', {
              duration: 2500,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition
            });
          }
        }, error => {
          console.log(error);
        });
      } // log in user


      signIn(login) {
        this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["postSignIn"], login).subscribe(recievedData => {
          console.log(recievedData.message);
          this.setAuthTimer(recievedData.expiersIn);
          this.token = recievedData.token;
          console.log(this.token);
          this.getHeaderDetails();

          if (recievedData.token) {
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(now.getTime() + recievedData.expiersIn * 1000);
            this.saveAuthData(recievedData.token, expirationDate);
            this.router.navigate(['/student']);
          }
        }, error => {
          console.log(error);
        });
      } // auto auth user after restart


      autoAuthUser() {
        const authInformation = this.getAuthData();

        if (!authInformation) {
          return;
        }

        const now = new Date();
        const expiersIn = authInformation.expiarationDate.getTime() - now.getTime();

        if (expiersIn > 0) {
          this.token = authInformation.token;
          this.isAuthenticated = true;
          this.setAuthTimer(expiersIn / 1000); // node timers works in secords (not ms)

          this.authStatusListener.next(true);
        }
      } // log out user


      signOut() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.clearAuthData();
        clearTimeout(this.tokenTimer);
      } // starts the session timer


      setAuthTimer(duration) {
        console.log('Setting timer to : ' + duration);
        this.tokenTimer = setTimeout(() => {
          this.signOut();
          alert('Session Time Out! You have been logged out! Please log in back..');
          this.router.navigate(['/']);
        }, duration * 1000);
      } // store token and user data in local storage


      saveAuthData(token, expiarationDate) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expiarationDate.toISOString());
      } // clear locally sotred auth data in timeout or sign out


      clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
      } // access locally stored auth data


      getAuthData() {
        const token = localStorage.getItem('token');
        const expiration = localStorage.getItem('expiration');

        if (!token || !expiration) {
          return;
        }

        return {
          token,
          expiarationDate: new Date(expiration)
        };
      }

    };

    AuthService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
    }];

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/modules/auth/create-new-password/create-new-password.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/auth/create-new-password/create-new-password.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthCreateNewPasswordCreateNewPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mdb-card {\n  max-width: 600px;\n  margin: auto;\n  margin-top: 7%;\n}\n\npd-top-min {\n  padding-top: 10%;\n}\n\n.alert-cls {\n  max-width: 600px;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 15px;\n}\n\n.login-scr {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL2F1dGgvY3JlYXRlLW5ldy1wYXNzd29yZC9jcmVhdGUtbmV3LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGgvY3JlYXRlLW5ldy1wYXNzd29yZC9jcmVhdGUtbmV3LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jcmVhdGUtbmV3LXBhc3N3b3JkL2NyZWF0ZS1uZXctcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtZGItY2FyZCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbnBkLXRvcC1taW4ge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uYWxlcnQtY2xzIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmxvZ2luLXNjciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iLCJtZGItY2FyZCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbnBkLXRvcC1taW4ge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uYWxlcnQtY2xzIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmxvZ2luLXNjciB7XG4gIGhlaWdodDogMTAwdmg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/auth/create-new-password/create-new-password.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/auth/create-new-password/create-new-password.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CreateNewPasswordComponent */

  /***/
  function srcAppModulesAuthCreateNewPasswordCreateNewPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateNewPasswordComponent", function () {
      return CreateNewPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/modules/auth/auth.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let CreateNewPasswordComponent = class CreateNewPasswordComponent {
      constructor(http, authService, dialog) {
        this.http = http;
        this.authService = authService;
        this.dialog = dialog;
      }

      ngOnInit() {
        // login form validation
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          retype_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      } // get form elements


      get password() {
        return this.loginForm.get('password');
      }

      get retype_password() {
        return this.loginForm.get('retype_password');
      }

    };

    CreateNewPasswordComponent.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }];

    CreateNewPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-new-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-new-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/create-new-password/create-new-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-new-password.component.scss */
      "./src/app/modules/auth/create-new-password/create-new-password.component.scss")).default]
    })], CreateNewPasswordComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/header/header.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/modules/auth/header/header.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".txt-800 {\n  font-weight: 400;\n  line-height: 17px;\n}\n\n.txt-bold {\n  font-weight: bold;\n}\n\n.img-nav {\n  border: solid 2px;\n  border-color: white;\n}\n\n.mx-wd {\n  min-width: 230px;\n}\n\n.navbar {\n  background-color: #0d770a !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL2F1dGgvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hdXRoL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLG9DQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eHQtODAwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG4udHh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltZy1uYXYge1xuICBib3JkZXI6IHNvbGlkIDJweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm14LXdkIHtcbiAgbWluLXdpZHRoOiAyMzBweDtcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgMTE5LCAxMCkgIWltcG9ydGFudDtcbn1cbiIsIi50eHQtODAwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG5cbi50eHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW1nLW5hdiB7XG4gIGJvcmRlcjogc29saWQgMnB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4ubXgtd2Qge1xuICBtaW4td2lkdGg6IDIzMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNzcwYSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/auth/header/header.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/auth/header/header.component.ts ***!
    \*********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppModulesAuthHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/modules/auth/auth.service.ts");

    let HeaderComponent = class HeaderComponent {
      constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.onLogin = false;
        this.onRegister = false; // check if user is authneticated

        this.userIsAuthenticated = false;
      }

      ngOnInit() {
        this.authService.getHeaderDetails();
        this.headerDetailsSubs = this.authService.getHeaderDetailsListener().subscribe(headerDetails => {
          if (headerDetails) {
            this.headerDetails = headerDetails;
            this.userIsAuthenticated = this.authService.getisAuth();
            this.authSubs = this.authService.getAuhStatusListener().subscribe(isAuthenticated => {
              this.userIsAuthenticated = isAuthenticated;
            });
          }
        }); // hide login and signup button depend on route

        this.router.events.subscribe(e => {
          if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            if (e.url === '/login') {
              this.onLogin = true;
              this.onRegister = false;
            } else if (e.url === '/register') {
              this.onRegister = true;
              this.onLogin = false;
            } else {
              this.onLogin = false;
              this.onRegister = false;
            }
          }

          if (!(e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
            return;
          }

          window.scrollTo(0, 0);
        });
      }

      ngOnDestroy() {
        if (this.authSubs) {
          this.authSubs.unsubscribe();
        }

        if (this.headerDetailsSubs) {
          this.headerDetailsSubs.unsubscribe();
        }
      }

      onSignOut() {
        this.authService.signOut();
      }

    };

    HeaderComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }];

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/modules/auth/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/login/login.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/modules/auth/login/login.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mdb-card {\n  max-width: 600px;\n  margin: auto;\n  margin-top: 7%;\n}\n\npd-top-min {\n  padding-top: 10%;\n}\n\n.alert-cls {\n  max-width: 600px;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 15px;\n}\n\n.login-scr {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtZGItY2FyZHtcbiAgbWF4LXdpZHRoOjYwMHB4O1xuICBtYXJnaW46YXV0bztcbiAgbWFyZ2luLXRvcDo3JTtcbn1cblxucGQtdG9wLW1pbntcbiAgcGFkZGluZy10b3A6MTAlO1xufVxuXG4uYWxlcnQtY2xze1xuICBtYXgtd2lkdGg6NjAwcHg7XG4gIG1hcmdpbjowIGF1dG87XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBtYXJnaW4tdG9wOjE1cHg7XG59XG5cbi5sb2dpbi1zY3J7XG4gIGhlaWdodDoxMDB2aDtcbn1cbiIsIm1kYi1jYXJkIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cblxucGQtdG9wLW1pbiB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5hbGVydC1jbHMge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubG9naW4tc2NyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/auth/login/login.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/auth/login/login.component.ts ***!
    \*******************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/modules/auth/auth.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/error/error.component */
    "./src/app/error/error.component.ts");

    let LoginComponent = class LoginComponent {
      constructor(http, authService, dialog) {
        this.http = http;
        this.authService = authService;
        this.dialog = dialog; // show alert on login failed

        this.showAlert = false;
      }

      ngOnInit() {
        // login form validation
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      } // get form elements


      get email() {
        return this.loginForm.get('email');
      }

      get password() {
        return this.loginForm.get('password');
      }

      loginUser(loginform) {
        if (this.loginForm.invalid) {
          console.log('form invalid');
          this.dialog.open(src_app_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], {
            data: {
              message: 'Incorrect Username or Password'
            }
          });
        } else {
          this.showAlert = false;
          const login = {
            email: loginform.value.email,
            password: loginform.value.password
          };
          this.authService.signIn(login);
        }
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/modules/auth/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/newcourses/newcourses.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/auth/newcourses/newcourses.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthNewcoursesNewcoursesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9uZXdjb3Vyc2VzL25ld2NvdXJzZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/auth/newcourses/newcourses.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/auth/newcourses/newcourses.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NewcoursesComponent */

  /***/
  function srcAppModulesAuthNewcoursesNewcoursesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewcoursesComponent", function () {
      return NewcoursesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NewcoursesComponent = class NewcoursesComponent {
      constructor() {}

      ngOnInit() {}

    };
    NewcoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newcourses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./newcourses.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/newcourses/newcourses.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./newcourses.component.scss */
      "./src/app/modules/auth/newcourses/newcourses.component.scss")).default]
    })], NewcoursesComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/password-reset/password-reset.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/auth/password-reset/password-reset.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthPasswordResetPasswordResetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mdb-card {\n  max-width: 600px;\n  margin: auto;\n  margin-top: 7%;\n}\n\npd-top-min {\n  padding-top: 10%;\n}\n\n.alert-cls {\n  max-width: 600px;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 15px;\n}\n\n.login-scr {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtZGItY2FyZCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbnBkLXRvcC1taW4ge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uYWxlcnQtY2xzIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmxvZ2luLXNjciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iLCJtZGItY2FyZCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbnBkLXRvcC1taW4ge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uYWxlcnQtY2xzIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmxvZ2luLXNjciB7XG4gIGhlaWdodDogMTAwdmg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/auth/password-reset/password-reset.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/auth/password-reset/password-reset.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PasswordResetComponent */

  /***/
  function srcAppModulesAuthPasswordResetPasswordResetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function () {
      return PasswordResetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/modules/auth/auth.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let PasswordResetComponent = class PasswordResetComponent {
      constructor(http, authService, dialog) {
        this.http = http;
        this.authService = authService;
        this.dialog = dialog;
      }

      ngOnInit() {
        // login form validation
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
      } // get form elements


      get email() {
        return this.loginForm.get('email');
      }

    };

    PasswordResetComponent.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }];

    PasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-password-reset',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./password-reset.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/password-reset/password-reset.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./password-reset.component.scss */
      "./src/app/modules/auth/password-reset/password-reset.component.scss")).default]
    })], PasswordResetComponent);
    /***/
  },

  /***/
  "./src/app/modules/home/footer/footer.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/modules/home/footer/footer.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesHomeFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-footer {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL2hvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWZvb3RlcntcbiAgbWFyZ2luLXRvcDo1JTtcbn1cbiIsIi5wYWdlLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/home/footer/footer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/home/footer/footer.component.ts ***!
    \*********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppModulesHomeFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FooterComponent = class FooterComponent {
      constructor() {}

      ngOnInit() {}

    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/modules/home/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/modules/home/homepage/homepage.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/modules/home/homepage/homepage.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesHomeHomepageHomepageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hdr {\n  background-size: cover;\n  width: 100%;\n}\n\n.pd-top {\n  padding-top: 10%;\n}\n\n.pd-top-min {\n  padding-top: 5%;\n}\n\n.pd-side {\n  padding-left: 10px;\n  padding-right: 10px;\n  color: gray;\n}\n\n.single-news {\n  border: 2px solid;\n  padding: 20px;\n}\n\n.mg-top {\n  margin-top: 10px;\n}\n\n.map-container {\n  height: 200px;\n  position: relative;\n}\n\n.map-container iframe {\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\n.feature-img {\n  width: 100%;\n  height: 100vh;\n}\n\n.link-box {\n  height: 150px;\n  max-width: 100% !important;\n  margin: 12px;\n  padding: 22px;\n}\n\n.quick-links {\n  padding-bottom: 30px;\n}\n\n.link-icon {\n  font-size: 40px;\n  font-weight: bold;\n  color: darkmagenta;\n  padding: 5px;\n}\n\n@media screen and (max-width: 600px) {\n  .feature-img {\n    height: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUNFLFNBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhkciB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7O1xuICB3aWR0aDoxMDAlO1xufVxuXG4ucGQtdG9we1xuICBwYWRkaW5nLXRvcDoxMCVcbn1cblxuLnBkLXRvcC1taW57XG4gIHBhZGRpbmctdG9wOjUlXG59XG5cbi5wZC1zaWRle1xuICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgcGFkZGluZy1yaWdodDoxMHB4O1xuICBjb2xvcjpncmF5O1xufVxuXG4uc2luZ2xlLW5ld3N7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBwYWRkaW5nOjIwcHg7XG59XG5cbi5tZy10b3B7XG4gIG1hcmdpbi10b3A6MTBweDtcbn1cblxuLm1hcC1jb250YWluZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXAtY29udGFpbmVyIGlmcmFtZSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZmVhdHVyZS1pbWd7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDB2aDtcbn1cblxuLmxpbmstYm94e1xuICBoZWlnaHQ6MTUwcHg7XG4gIG1heC13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjoxMnB4O1xuICBwYWRkaW5nOjIycHg7XG59XG5cbi5xdWljay1saW5rc3tcbiAgcGFkZGluZy1ib3R0b206MzBweDtcbn1cblxuLmxpbmstaWNvbntcbiAgZm9udC1zaXplOjQwcHg7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIGNvbG9yOmRhcmttYWdlbnRhO1xuICBwYWRkaW5nOjVweDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZmVhdHVyZS1pbWd7XG4gICAgaGVpZ2h0OjA7XG4gIH1cbn1cbiIsIi5oZHIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBkLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5wZC10b3AtbWluIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4ucGQtc2lkZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5zaW5nbGUtbmV3cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubWctdG9wIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1hcC1jb250YWluZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXAtY29udGFpbmVyIGlmcmFtZSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZmVhdHVyZS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxpbmstYm94IHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTJweDtcbiAgcGFkZGluZzogMjJweDtcbn1cblxuLnF1aWNrLWxpbmtzIHtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5saW5rLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya21hZ2VudGE7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZlYXR1cmUtaW1nIHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/home/homepage/homepage.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/home/homepage/homepage.component.ts ***!
    \*************************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppModulesHomeHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HomepageComponent = class HomepageComponent {
      constructor() {}

      ngOnInit() {}

    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/homepage/homepage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./homepage.component.scss */
      "./src/app/modules/home/homepage/homepage.component.scss")).default]
    })], HomepageComponent);
    /***/
  },

  /***/
  "./src/app/modules/home/not-found-page/not-found-page.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/home/not-found-page/not-found-page.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesHomeNotFoundPageNotFoundPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ub3QtZm91bmQtcGFnZS9ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/home/not-found-page/not-found-page.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/home/not-found-page/not-found-page.component.ts ***!
    \*************************************************************************/

  /*! exports provided: NotFoundPageComponent */

  /***/
  function srcAppModulesHomeNotFoundPageNotFoundPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function () {
      return NotFoundPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    let NotFoundPageComponent = class NotFoundPageComponent {
      constructor(location) {
        this.location = location;
      }

      ngOnInit() {}

      backClicked() {
        this.location.back();
      }

    };

    NotFoundPageComponent.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
    }];

    NotFoundPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/not-found-page/not-found-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found-page.component.scss */
      "./src/app/modules/home/not-found-page/not-found-page.component.scss")).default]
    })], NotFoundPageComponent);
    /***/
  },

  /***/
  "./src/app/modules/student/dash/dashboard/dashboard.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/student/dash/dashboard/dashboard.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesStudentDashDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-sidenav-content {\n  background-color: #fff;\n}\n\n.txt-white {\n  color: #fff !important;\n}\n\n.txt-white:hover {\n  color: #d4d4d4;\n}\n\n.sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 260px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.sidenav {\n  background-color: orange;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.pd-top {\n  padding-top: 10%;\n}\n\n.pd-img {\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 100px;\n  padding-bottom: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.pd-top-min {\n  padding-top: 5%;\n}\n\n.side-start {\n  text-align: left;\n}\n\n.side-end {\n  text-align: right;\n}\n\n.side-text {\n  vertical-align: top;\n}\n\n.active-nav {\n  font-weight: bold;\n  background-color: orange;\n  color: #ebf3eb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvZGFzaC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvZGFzaC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3R1ZGVudC9kYXNoL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnR4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi50eHQtd2hpdGU6aG92ZXIge1xuICBjb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI2MHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGQtdG9wIHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLnBkLWltZyB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDo0MHB4O1xuICBtYXJnaW4tYm90dG9tOjQwcHg7XG59XG5cbi5wZC10b3AtbWluIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uc2lkZS1zdGFydCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zaWRlLWVuZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2lkZS10ZXh0IHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFjdGl2ZS1uYXYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBjb2xvcjogcmdiKDIzNSwgMjQzLCAyMzUpO1xufVxuIiwibWF0LXNpZGVuYXYtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi50eHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4udHh0LXdoaXRlOmhvdmVyIHtcbiAgY29sb3I6ICNkNGQ0ZDQ7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjYwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wZC10b3Age1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4ucGQtaW1nIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ucGQtdG9wLW1pbiB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLnNpZGUtc3RhcnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2lkZS1lbmQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNpZGUtdGV4dCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hY3RpdmUtbmF2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgY29sb3I6ICNlYmYzZWI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/student/dash/dashboard/dashboard.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/student/dash/dashboard/dashboard.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesStudentDashDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let DashboardComponent = class DashboardComponent {
      constructor(breakpointObserver, router) {
        this.breakpointObserver = breakpointObserver;
        this.router = router; // navigation

        this.home = 'txt-white row';
        this.settings = 'txt-white row';
        this.topIcon = "./assets/images/scraper/logo_lg.png";
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
      }

      ngOnInit() {
        this.routerEvents();
      }

      routerEvents() {
        this.router.events.subscribe(e => {
          if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
            if (e.url === '/student') {
              this.navHome();
            } else if (e.url === '/student/settings') {
              this.navSettings();
            }
          }
        });
      }

      navHome() {
        this.home = 'txt-white row active-nav';
        this.settings = 'txt-white row';
      }

      navSettings() {
        this.settings = 'txt-white row active-nav';
        this.home = 'txt-white row';
      }

    };

    DashboardComponent.ctorParameters = () => [{
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/modules/student/dash/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/modules/student/dash/pages/dash-data/dash-data.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/student/dash/pages/dash-data/dash-data.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesStudentDashPagesDashDataDashDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\ntd {\n  min-width: 100px;\n  width: 25%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.pd-top-min {\n  margin-top: 5%;\n  padding: 20px;\n  margin: auto;\n}\n\n.info-text {\n  padding-left: 5%;\n  text-align: left;\n  font-weight: bold;\n  color: darkslategray;\n  line-height: 30px;\n}\n\n.info-input {\n  text-align: left;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n.info-top {\n  padding-top: 5%;\n}\n\n.info-text-net {\n  padding-left: 5%;\n  text-align: left;\n  font-weight: bold;\n  color: darkslategray;\n  line-height: 33px;\n}\n\n.info-input-net {\n  text-align: left;\n  font-weight: bold;\n  line-height: 33px;\n  color: darkmagenta;\n}\n\n.profile-pic {\n  height: 40px;\n  border-radius: 50%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.driver-name {\n  font-weight: bold;\n  font-size: 15px;\n  padding-left: 8px;\n}\n\n.pickup-dropoff {\n  font-weight: 800;\n  font-size: 12px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\n.driver-raw {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.photo-raw {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.photo-row > div {\n  width: 45%;\n}\n\n.driver-raw-new {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.profile-pic-large {\n  height: 70px;\n  border-radius: 50%;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\n.driver-name-large {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.vehicle-details {\n  padding: 6px;\n  padding-right: 0;\n  border: 2px solid darkgray;\n  width: 95%;\n  text-align: left;\n}\n\n.driver-raw-new > div {\n  width: 33%;\n}\n\n.small-info {\n  font-size: 14px;\n}\n\n.vehicle-type {\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.seat-details {\n  font-size: 15px;\n}\n\n.location {\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.driver-name-details {\n  text-align: left;\n}\n\nmat-card {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 2px;\n  cursor: pointer;\n}\n\nmat-card :hover {\n  background-color: lightyellow;\n}\n\nmat-card-content {\n  font-size: 16px;\n  font-weight: bold;\n  color: #94640a;\n  padding-top: 10px;\n}\n\n.buttons {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  align-content: center;\n}\n\n.card-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: space-around;\n          align-items: space-around;\n  text-align: center;\n}\n\n.play-icon {\n  font-weight: 25px;\n  color: orange;\n}\n\n.now-playing {\n  background-color: lightgray;\n}\n\n.pause {\n  color: red;\n}\n\n.video {\n  width: 100%;\n}\n\n.next-prev {\n  margin-right: 20px;\n  margin-top: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  align-content: flex-end;\n  text-align: right;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.other-details {\n  text-align: justify;\n}\n\n@media screen and (max-width: 600px) {\n  .vid-icon {\n    height: 0;\n  }\n\n  .mat-card-image {\n    height: 0;\n  }\n\n  .other-details {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvZGFzaC9wYWdlcy9kYXNoLWRhdGEvZGFzaC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvZGFzaC9wYWdlcy9kYXNoLWRhdGEvZGFzaC1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsNkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtBQ0FGOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsK0JBQUE7VUFBQSx5QkFBQTtFQUNBLGtCQUFBO0FDREY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUNGRjs7QURLQTtFQUNFLDJCQUFBO0FDRkY7O0FES0E7RUFDRSxVQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGOztBRE9BO0VBQ0U7SUFDRSxTQUFBO0VDSkY7O0VET0E7SUFDRSxTQUFBO0VDSkY7O0VET0E7SUFDRSxrQkFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvZGFzaC9wYWdlcy9kYXNoLWRhdGEvZGFzaC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB3aWR0aDogMjUlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGQtdG9wLW1pbiB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbmZvLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaW5mby1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaW5mby10b3Age1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5pbmZvLXRleHQtbmV0IHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuLmluZm8taW5wdXQtbmV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICBjb2xvcjogZGFya21hZ2VudGE7XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZHJpdmVyLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLnBpY2t1cC1kcm9wb2ZmIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG4uZHJpdmVyLXJhdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5waG90by1yYXcge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGhvdG8tcm93ID4gZGl2IHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLmRyaXZlci1yYXctbmV3IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2ZpbGUtcGljLWxhcmdlIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kcml2ZXItbmFtZS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52ZWhpY2xlLWRldGFpbHMge1xuICBwYWRkaW5nOiA2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmF5O1xuICB3aWR0aDogOTUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZHJpdmVyLXJhdy1uZXcgPiBkaXYge1xuICB3aWR0aDogMzMlO1xufVxuXG4uc21hbGwtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnZlaGljbGUtdHlwZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5zZWF0LWRldGFpbHMge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5sb2NhdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5kcml2ZXItbmFtZS1kZXRhaWxzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuXG5tYXQtY2FyZHtcbiAgcGFkZGluZy1ib3R0b206MDtcbiAgbWFyZ2luLWJvdHRvbTowO1xuICBtYXJnaW4tbGVmdDoxMHB4O1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgbWFyZ2luLWJvdHRvbToycHg7XG4gIGN1cnNvcjpwb2ludGVyO1xufVxuXG5tYXQtY2FyZCA6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG5tYXQtY2FyZC1jb250ZW50e1xuICBmb250LXNpemU6MTZweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgY29sb3I6cmdiKDE0OCwgMTAwLCAxMCk7XG4gIHBhZGRpbmctdG9wOjEwcHg7XG59XG5cbi5idXR0b25ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuXG59XG5cbi5jYXJkLWJveHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG5cbn1cblxuLnBsYXktaWNvbntcbiAgZm9udC13ZWlnaHQ6MjVweDtcbiAgY29sb3I6b3JhbmdlXG59XG5cbi5ub3ctcGxheWluZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4ucGF1c2V7XG4gIGNvbG9yOnJlZDtcbn1cblxuLnZpZGVve1xuICB3aWR0aDoxMDAlO1xufVxuXG4ubmV4dC1wcmV2e1xuICBtYXJnaW4tcmlnaHQ6MjBweDtcbiAgbWFyZ2luLXRvcDoxMHB4O1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB0ZXh0LWFsaWduOnJpZ2h0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ub3RoZXItZGV0YWlsc3tcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC52aWQtaWNvbntcbiAgICBoZWlnaHQ6MDtcbiAgfVxuXG4gIC5tYXQtY2FyZC1pbWFnZXtcbiAgICBoZWlnaHQ6MDtcbiAgfVxuXG4gIC5vdGhlci1kZXRhaWxze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICB9XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wZC10b3AtbWluIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmluZm8tdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5pbmZvLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5pbmZvLXRvcCB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLmluZm8tdGV4dC1uZXQge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xufVxuXG4uaW5mby1pbnB1dC1uZXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIGNvbG9yOiBkYXJrbWFnZW50YTtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kcml2ZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4ucGlja3VwLWRyb3BvZmYge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbi5kcml2ZXItcmF3IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBob3RvLXJhdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5waG90by1yb3cgPiBkaXYge1xuICB3aWR0aDogNDUlO1xufVxuXG4uZHJpdmVyLXJhdy1uZXcge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvZmlsZS1waWMtbGFyZ2Uge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRyaXZlci1uYW1lLWxhcmdlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZlaGljbGUtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDZweDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XG4gIHdpZHRoOiA5NSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kcml2ZXItcmF3LW5ldyA+IGRpdiB7XG4gIHdpZHRoOiAzMyU7XG59XG5cbi5zbWFsbC1pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udmVoaWNsZS10eXBlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnNlYXQtZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmRyaXZlci1uYW1lLWRldGFpbHMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5tYXQtY2FyZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWF0LWNhcmQgOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzk0NjQwYTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBsYXktaWNvbiB7XG4gIGZvbnQtd2VpZ2h0OiAyNXB4O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ubm93LXBsYXlpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5wYXVzZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi52aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmV4dC1wcmV2IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5vdGhlci1kZXRhaWxzIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnZpZC1pY29uIHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cblxuICAubWF0LWNhcmQtaW1hZ2Uge1xuICAgIGhlaWdodDogMDtcbiAgfVxuXG4gIC5vdGhlci1kZXRhaWxzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/student/dash/pages/dash-data/dash-data.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/student/dash/pages/dash-data/dash-data.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DashDataComponent */

  /***/
  function srcAppModulesStudentDashPagesDashDataDashDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashDataComponent", function () {
      return DashDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    let DashDataComponent = class DashDataComponent {
      // tslint:disable-next-line:variable-name
      constructor(route, http, _sanitizer) {
        this.route = route;
        this.http = http;
        this._sanitizer = _sanitizer;
        this.cour = [];
        this.checkstatuss = 'deactivate';
        this.studentid = 'U1';
        this.teacherid = '123';
        this.course = {
          courseId: 'C1',
          courseName: 'Chemistry',
          class: 2023,
          thumbnail: './assets/images/classes/chemistry2023/1.jpg',
          teacher: 'Prasanna Baddewithana',
          videoLinks: [{
            title: 'රසායනික ගණිතය 1',
            link: './assets/courses/chemistry2013/1.mp4',
            expiresIn: '2021-05-20',
            // tslint:disable-next-line:max-line-length
            comments: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui do lorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
          }, {
            title: 'රසායනික Test',
            link: 'GYAB4Td62zI',
            expiresIn: '2021-05-20',
            comments: ''
          }, {
            title: 'රසායනික ගණිතය 3',
            link: 'GYAB4Td62zI',
            expiresIn: '2021-05-20',
            comments: ''
          }],
          commence: '2021-04-05',
          expire: '2023-08-05'
        }; // tslint:disable-next-line:variable-name

        this.now_playing_id = 'රසායනික ගණිතය 3';
      }

      ngOnInit() {
        const coursess = this.route.snapshot.params.id;
        console.log(coursess); // this.authService.getAuthUser();
        //  this.userSub = this.authService.getCurrentUserUpdatteListener()
        //    .subscribe((res: User) => {
        //      if (res) {
        //        this.user = res;
        //      }
        // }, (error) => {
        //   console.log(error);
        //   });

        this.getcourse(coursess);
        this.selected = this.cour[0].title; // console.log('es', th.cour[0]link);
      }

      ngOnDestroy() {
        if (this.courseSub) {
          this.courseSub.unsubscribe();
        }
      }

      toggleVideo(event) {
        this.videoplayer.nativeElement.play();
      }

      selectvideo(link, type, comments, title) {
        // this.playlink = link;
        this.playlink = this._sanitizer.bypassSecurityTrustResourceUrl(link);
        this.vtype = type;
        this.details = comments;
        this.selected = title;
        this.bunnylink = link; //this.playlink = this.playlink + 'rel;=0&amp;controls=0';
        // alert(this.playlink);
      }

      getcourse(courseids) {
        const courid = courseids;
        const details = {
          courseid: courid
        };
        this.http.post('https://chemwin-backend.uc.r.appspot.com/learn-online/v1/video/getvideo', details).subscribe(responseData => {
          console.log(responseData);
          const datas = responseData;
          const newda = datas.message;
          this.cour = newda;
          console.log(newda);
        });
      }

    };

    DashDataComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPlayer', {
      static: false
    })], DashDataComponent.prototype, "videoplayer", void 0);
    DashDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dash-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/pages/dash-data/dash-data.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dash-data.component.scss */
      "./src/app/modules/student/dash/pages/dash-data/dash-data.component.scss")).default]
    })], DashDataComponent);
    /***/
  },

  /***/
  "./src/app/modules/student/dash/pages/dash-home/dash-home.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/student/dash/pages/dash-home/dash-home.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesStudentDashPagesDashHomeDashHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-card {\n  max-width: 270px;\n  min-width: 270px;\n  margin: 10px;\n}\n\n.example-header-image {\n  background-image: url(\"https://www.pngitem.com/pimgs/m/157-1576340_game-based-learning-png-transparent-cartoons-game-based.png\");\n  background-size: cover;\n}\n\nmat-card-content {\n  font-size: 18px;\n  font-weight: bold;\n  color: #94640a;\n  padding-top: 15px;\n}\n\n.buttons {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  align-content: center;\n}\n\n.card-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: space-around;\n          align-items: space-around;\n  text-align: center;\n  align-self: center;\n  align-content: space-between;\n}\n\n.gr-thumbnail {\n  background: -webkit-gradient(linear, left top, right top, from(#ee0979), to(#ff6a00));\n  background: linear-gradient(to right, #ee0979, #ff6a00);\n  height: 200px;\n  font-weight: bold;\n  font-size: 40px;\n  color: white;\n  line-height: 200px;\n}\n\n@media screen and (max-width: 500px) {\n  .example-card {\n    max-width: 100%;\n    min-width: 100%;\n    margin-right: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvZGFzaC9wYWdlcy9kYXNoLWhvbWUvZGFzaC1ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvZGFzaC9wYWdlcy9kYXNoLWhvbWUvZGFzaC1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdJQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsK0JBQUE7VUFBQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0FGOztBRElBO0VBQ0UscUZBQUE7RUFBQSx1REFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURLQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ0ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvZGFzaC9wYWdlcy9kYXNoLWhvbWUvZGFzaC1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogMjcwcHg7XG4gIG1pbi13aWR0aDoyNzBweDtcbiAgbWFyZ2luOjEwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93d3cucG5naXRlbS5jb20vcGltZ3MvbS8xNTctMTU3NjM0MF9nYW1lLWJhc2VkLWxlYXJuaW5nLXBuZy10cmFuc3BhcmVudC1jYXJ0b29ucy1nYW1lLWJhc2VkLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5tYXQtY2FyZC1jb250ZW50e1xuICBmb250LXNpemU6MThweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgY29sb3I6cmdiKDE0OCwgMTAwLCAxMCk7XG4gIHBhZGRpbmctdG9wOjE1cHg7XG59XG5cbi5idXR0b25ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuXG59XG5cbi5jYXJkLWJveHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuXG4uZ3ItdGh1bWJuYWlsIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWUwOTc5LCAjZmY2YTAwKTtcbiAgaGVpZ2h0OjIwMHB4O1xuICBmb250LXdlaWdodDpib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6MzBweDtcbiAgfVxufVxuIiwiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogMjcwcHg7XG4gIG1pbi13aWR0aDogMjcwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cucG5naXRlbS5jb20vcGltZ3MvbS8xNTctMTU3NjM0MF9nYW1lLWJhc2VkLWxlYXJuaW5nLXBuZy10cmFuc3BhcmVudC1jYXJ0b29ucy1nYW1lLWJhc2VkLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjOTQ2NDBhO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmQtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5nci10aHVtYm5haWwge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZTA5NzksICNmZjZhMDApO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAyMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/student/dash/pages/dash-home/dash-home.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/student/dash/pages/dash-home/dash-home.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DashHomeComponent */

  /***/
  function srcAppModulesStudentDashPagesDashHomeDashHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashHomeComponent", function () {
      return DashHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/auth/auth.service */
    "./src/app/modules/auth/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let DashHomeComponent = class DashHomeComponent {
      constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this.checkstatuss = 'active';
        this.studentid = 'U1';
        this.teacherid = '123';
        this.makepayemnt = 'No';
        this.courses = [{
          courseId: 'C1',
          courseName: 'Chemistry',
          class: 2023,
          thumbnail: './assets/images/classes/chemistry2023/1.jpg',
          teacher: 'Anushka Idunil',
          videoLinks: [{
            title: 'රසායනික ගණිතය ',
            link: '',
            expiresIn: '2021-05-20',
            comments: ''
          }],
          commence: '2021-04-05',
          expire: '2023-08-05'
        }, {
          courseId: 'C1',
          courseName: 'Chemistry',
          class: 2023,
          thumbnail: './assets/images/classes/chemistry2023/2.jpg',
          teacher: 'Prasanna Baddewithana',
          videoLinks: [{
            title: 'රසායනික ගණිතය ',
            link: '',
            expiresIn: '2021-05-20',
            comments: ''
          }],
          commence: '2021-04-05',
          expire: '2023-08-05'
        }, {
          courseId: 'C1',
          courseName: 'Physics',
          class: 2023,
          thumbnail: './assets/images/classes/chemistry2023/3.jpg',
          teacher: 'Prasanna Baddewithana',
          videoLinks: [{
            title: 'රසායනික ගණිතය ',
            link: '',
            expiresIn: '2021-05-20',
            comments: ''
          }],
          commence: '2021-04-05',
          expire: '2023-08-05'
        }];
        this.studentName = 'ඔබ ';
        this.cour = [];
      }

      ngOnInit() {
        // this.authService.autoAuthUser();
        //   this.userSub = this.authService.getCurrentUserUpdatteListener()
        //   .subscribe((res: Student) => {
        //   if (res) {
        //    this.user = res;
        //    this.studentName = res.studentName;
        //  }
        //  }, (error) => {
        //  console.log(error);
        // });
        this.getcourse();
        this.checkstatus().then(res => this.getcourse());
      }

      ngOnDestroy() {
        if (this.userSub) {
          this.userSub.unsubscribe();
        }
      }

      getcourse() {
        if (this.checkstatuss !== 'deactive') {
          console.log('here');
          const details = {
            teacherid: '123',
            class: '2023'
          };
          this.http.post('https://chemwin-backend.uc.r.appspot.com/learn-online/v1/course/getcourse', details).subscribe(responseData => {
            console.log(responseData);
            const datas = responseData;
            const newda = datas.message;
            this.cour = newda;
            console.log(this.cour);
          });
        } else {
          this.makepayemnt = 'Yes';
        }
      }

      checkstatus() {
        return new Promise((resolve, reject) => {
          const details = {
            teacherid: this.teacherid,
            studentid: this.studentid
          };
          this.http.post('https://chemwin-backend.uc.r.appspot.com/learn-online/v1/teacher/chekstatus', details).subscribe(responseData => {
            console.log(responseData);
            const datas = responseData;
            const newda = datas.message[0].status;
            console.log(newda);
            this.checkstatuss = newda;
          });
          resolve();
        });
      }

    };

    DashHomeComponent.ctorParameters = () => [{
      type: src_app_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    DashHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dash-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/pages/dash-home/dash-home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dash-home.component.scss */
      "./src/app/modules/student/dash/pages/dash-home/dash-home.component.scss")).default]
    })], DashHomeComponent);
    /***/
  },

  /***/
  "./src/app/modules/student/dash/pages/dash-settings/dash-settings.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/student/dash/pages/dash-settings/dash-settings.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesStudentDashPagesDashSettingsDashSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".max-col {\n  width: 800px;\n  max-width: 800px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvZGFzaC9wYWdlcy9kYXNoLXNldHRpbmdzL2Rhc2gtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc3R1ZGVudC9kYXNoL3BhZ2VzL2Rhc2gtc2V0dGluZ3MvZGFzaC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvZGFzaC9wYWdlcy9kYXNoLXNldHRpbmdzL2Rhc2gtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF4LWNvbHtcbiAgd2lkdGg6ODAwcHg7XG4gIG1heC13aWR0aDo4MDBweDtcbiAgbWFyZ2luLWxlZnQ6MjBweDtcbn1cbiIsIi5tYXgtY29sIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/student/dash/pages/dash-settings/dash-settings.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/student/dash/pages/dash-settings/dash-settings.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: DashSettingsComponent */

  /***/
  function srcAppModulesStudentDashPagesDashSettingsDashSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashSettingsComponent", function () {
      return DashSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DashSettingsComponent = class DashSettingsComponent {
      constructor() {}

      ngOnInit() {}

    };
    DashSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dash-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/dash/pages/dash-settings/dash-settings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dash-settings.component.scss */
      "./src/app/modules/student/dash/pages/dash-settings/dash-settings.component.scss")).default]
    })], DashSettingsComponent);
    /***/
  },

  /***/
  "./src/app/modules/student/student.config.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/student/student.config.ts ***!
    \***************************************************/

  /*! exports provided: url, getStudent, getStudents, getAuthStudent, getClassStudents, getHeader, getLastId, postSignIn, postSignUp, postUploadImage, putUpdateStudent, putUpdateSelectedStudent, deleteStudent */

  /***/
  function srcAppModulesStudentStudentConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "url", function () {
      return url;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getStudent", function () {
      return getStudent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getStudents", function () {
      return getStudents;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAuthStudent", function () {
      return getAuthStudent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getClassStudents", function () {
      return getClassStudents;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getHeader", function () {
      return getHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLastId", function () {
      return getLastId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "postSignIn", function () {
      return postSignIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "postSignUp", function () {
      return postSignUp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "postUploadImage", function () {
      return postUploadImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "putUpdateStudent", function () {
      return putUpdateStudent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "putUpdateSelectedStudent", function () {
      return putUpdateSelectedStudent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteStudent", function () {
      return deleteStudent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    const url = "https://chemwin-backend.uc.r.appspot.com/learn-online/v1/";
    const getStudent = 'auth/student/one'; // userId

    const getAuthStudent = 'auth/student/current'; // userId

    const getStudents = "auth/student/all";
    const getClassStudents = "auth/student/class/";
    const getHeader = 'auth/header';
    const getLastId = 'auth/last-id';
    const postSignIn = 'auth/signin';
    const postSignUp = 'auth/signup';
    const postUploadImage = 'auth/student/image';
    const putUpdateStudent = 'auth/student/one'; // current userId

    const putUpdateSelectedStudent = 'auth/student/selected'; // current userId

    const deleteStudent = "auth/student/one/"; // given userId

    /***/
  },

  /***/
  "./src/app/modules/student/user-profile/user-profile.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/student/user-profile/user-profile.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesStudentUserProfileUserProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.pd-top {\n  padding-top: 10%;\n}\n\n.pd-img {\n  padding-left: 60px;\n  padding-right: 60px;\n  padding-top: 90px;\n  padding-bottom: 20px;\n}\n\n.pd-top-min {\n  padding-top: 5%;\n}\n\n.logo-cls {\n  padding-top: 10%;\n  z-index: 10;\n}\n\n.txt-title {\n  line-height: 400%;\n  font-weight: bold;\n  font-size: 25px;\n}\n\n.div-content {\n  padding-top: 20px;\n}\n\n.f-image {\n  position: absolute;\n  z-index: -1;\n}\n\n.header-cls {\n  position: relative;\n}\n\n.feature-img {\n  width: 100%;\n}\n\n.logo-img {\n  width: 150px;\n  border-radius: 50%;\n}\n\n.cust-btn {\n  margin: 0 auto;\n}\n\n.cust-row {\n  padding-top: 20px;\n  line-height: 40px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.verify-stat {\n  font-size: 18px;\n  font-weight: bold;\n  color: darkgreen;\n  text-align: right;\n}\n\n.map-container {\n  width: 100%;\n}\n\n.content-title {\n  font-weight: bold;\n  font-size: 23px;\n  text-align: left;\n  padding-left: 10px;\n}\n\n.content-text {\n  text-align: justify;\n}\n\n.state-text {\n  font-weight: bold;\n}\n\n.open-state {\n  color: darkred;\n  font-weight: bold;\n}\n\n.stat-num {\n  background-color: darkmagenta;\n  color: white;\n}\n\n.stat-text {\n  text-align: center;\n  padding: 16px;\n}\n\n.stat-num {\n  padding: 16px;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.stat-no {\n  font-size: 19px;\n}\n\n.stat-title {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.card-cls {\n  margin: 0 auto;\n  margin-bottom: 20px;\n  margin-left: 15px;\n}\n\n.profile-text {\n  padding-top: 5px;\n  font-weight: bold;\n  font-size: 18px;\n  color: darkgray;\n}\n\n@media only screen and (max-width: 600px) {\n  .txt-title {\n    line-height: 50px;\n    color: darkslategray;\n  }\n\n  .feature-img {\n    height: 135px;\n    padding-right: 10px;\n  }\n\n  .cust-row {\n    line-height: 20px;\n  }\n\n  .verify-stat {\n    text-align: center;\n    padding-top: 20px;\n  }\n}\n\n.scraper-item {\n  border-radius: 5px;\n  padding: 6px;\n  margin: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 14px;\n  background-color: lightskyblue;\n  color: #0e4374;\n}\n\n.cust-btn-circle {\n  z-index: 100;\n}\n\n.cust-div {\n  padding-top: 10%;\n  text-align: right;\n  padding-right: 10px;\n}\n\n.inst-text {\n  font-weight: bold;\n  color: darkslategray;\n  padding-left: 5%;\n  padding-top: 10px;\n  text-align: left;\n}\n\n.edit-content {\n  padding-top: 18%;\n}\n\n.btn-tab {\n  margin-right: 20px;\n}\n\n.btn-lm {\n  margin-left: 30px;\n}\n\n.logo-img-edit {\n  width: 100px;\n  border-radius: 50%;\n}\n\n.sevice-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.service-full-width {\n  width: 90%;\n}\n\n.service-full-width-sm {\n  width: 75%;\n}\n\n.f-image-edit {\n  position: absolute;\n  z-index: -1;\n  margin-right: 6% !important;\n  margin-top: 7%;\n}\n\n.pd-top-min {\n  padding-top: 15px;\n}\n\n.btn-edt {\n  width: 60%;\n}\n\n.infotxt {\n  font-weight: 300 !important;\n  font-size: 15px !important;\n  color: gray !important;\n  font-style: italic !important;\n}\n\n.boxed {\n  box-shadow: 2 3 4 6 lightgray;\n}\n\n.btn-gr {\n  margin-top: 30px;\n  text-align: right;\n  align-self: right;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zdHVkZW50L3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtFQ0NGOztFREVBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxpQkFBQTtFQ0VGOztFREFBO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNFRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUNBRjs7QURHQTtFQUNFLDZCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3N0dWRlbnQvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5wZC10b3Age1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4ucGQtaW1nIHtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLXRvcDogOTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5wZC10b3AtbWluIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4ubG9nby1jbHMge1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnR4dC10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiA0MDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZGl2LWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmYtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uaGVhZGVyLWNscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZlYXR1cmUtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dvLWltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY3VzdC1idG4ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmN1c3Qtcm93IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmVyaWZ5LXN0YXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya2dyZWVuO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1hcC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb250ZW50LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc3RhdGUtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3Blbi1zdGF0ZSB7XG4gIGNvbG9yOiBkYXJrcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN0YXQtbnVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya21hZ2VudGE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnN0YXQtbnVtIHtcbiAgcGFkZGluZzogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdC1ubyB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLnN0YXQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2FyZC1jbHMge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5wcm9maWxlLXRleHQge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogZGFya2dyYXk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnR4dC10aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIH1cblxuICAuZmVhdHVyZS1pbWcge1xuICAgIGhlaWdodDogMTM1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxuICAuY3VzdC1yb3cge1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC52ZXJpZnktc3RhdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG59XG5cbi5zY3JhcGVyLWl0ZW17XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBwYWRkaW5nOjZweDtcbiAgbWFyZ2luOjVweDtcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG4gIGNvbG9yOiByZ2IoMTQsIDY3LCAxMTYpO1xufVxuXG4vL2VkaXQgbW9kZSBjc3NcblxuLmN1c3QtYnRuLWNpcmNsZSB7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmN1c3QtZGl2IHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5pbnN0LXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZWRpdC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDE4JTtcbn1cblxuLmJ0bi10YWIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5idG4tbG0ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmxvZ28taW1nLWVkaXQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNldmljZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXJ2aWNlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogOTAlO1xufVxuXG4uc2VydmljZS1mdWxsLXdpZHRoLXNtIHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmYtaW1hZ2UtZWRpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG1hcmdpbi1yaWdodDogNiUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbi5wZC10b3AtbWluIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5idG4tZWR0IHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmluZm90eHQge1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbn1cblxuLmJveGVkIHtcbiAgYm94LXNoYWRvdzogMiAzIDQgNiBsaWdodGdyYXk7XG59XG5cbi5idG4tZ3Ige1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYWxpZ24tc2VsZjogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwicCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnBkLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5wZC1pbWcge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA5MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnBkLXRvcC1taW4ge1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5sb2dvLWNscyB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4udHh0LXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDQwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5kaXYtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uZi1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5oZWFkZXItY2xzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmVhdHVyZS1pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ28taW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jdXN0LWJ0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY3VzdC1yb3cge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52ZXJpZnktc3RhdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBkYXJrZ3JlZW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWFwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbnRlbnQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5zdGF0ZS10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vcGVuLXN0YXRlIHtcbiAgY29sb3I6IGRhcmtyZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3RhdC1udW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrbWFnZW50YTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RhdC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uc3RhdC1udW0ge1xuICBwYWRkaW5nOiAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0LW5vIHtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uc3RhdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJkLWNscyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLnByb2ZpbGUtdGV4dCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudHh0LXRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgfVxuXG4gIC5mZWF0dXJlLWltZyB7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmN1c3Qtcm93IHtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuXG4gIC52ZXJpZnktc3RhdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG59XG4uc2NyYXBlci1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICBjb2xvcjogIzBlNDM3NDtcbn1cblxuLmN1c3QtYnRuLWNpcmNsZSB7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmN1c3QtZGl2IHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5pbnN0LXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZWRpdC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDE4JTtcbn1cblxuLmJ0bi10YWIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5idG4tbG0ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmxvZ28taW1nLWVkaXQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNldmljZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXJ2aWNlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogOTAlO1xufVxuXG4uc2VydmljZS1mdWxsLXdpZHRoLXNtIHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmYtaW1hZ2UtZWRpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG1hcmdpbi1yaWdodDogNiUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbi5wZC10b3AtbWluIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5idG4tZWR0IHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmluZm90eHQge1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbn1cblxuLmJveGVkIHtcbiAgYm94LXNoYWRvdzogMiAzIDQgNiBsaWdodGdyYXk7XG59XG5cbi5idG4tZ3Ige1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYWxpZ24tc2VsZjogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/student/user-profile/user-profile.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/student/user-profile/user-profile.component.ts ***!
    \************************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppModulesStudentUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/modules/auth/auth.service.ts");

    let UserProfileComponent = class UserProfileComponent {
      constructor(authService, dialog, datepipe, router) {
        this.authService = authService;
        this.dialog = dialog;
        this.datepipe = datepipe;
        this.router = router; // edit profile mode

        this.editmode = false;
        this.imageUrl = './assets/images/scraper/user.png';
      }

      ngOnInit() {
        this.authService.getAuthStudent();
        this.userSubs = this.authService.getCurrentStudentUpdatedListener().subscribe(user => {
          if (user) {
            this.student = user;
          }
        }, error => {
          console.log(error);
        });
      }

      ngOnDestroy() {
        if (this.userSubs) {
          this.userSubs.unsubscribe();
        }

        this.imageUrl = './assets/images/scraper/user.png';
        this.image = null;
      }

      changeUserPassword(pwordForm) {
        if (pwordForm.invalid) {
          console.log('Form invalid');
        }

        if (pwordForm.value.new_password1 !== pwordForm.value.new_password2) {
          this.dialog.open(src_app_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"], {
            data: {
              message: 'Passwords do not match! Please try again!'
            }
          });
        } // this.serviceProviderService.changeUserPassword(currentPword, newPword);

      } // edit user


      editUser(editForm) {
        if (editForm.invalid) {
          console.log('Form Invalid');
        } else {
          const user = {
            studentId: this.student.studentId,
            studentName: editForm.value.user_name,
            user_type: this.student.user_type,
            profilePic: this.student.profilePic,
            email: editForm.value.email,
            contactNo: editForm.value.contact_no,
            gender: editForm.value.gender,
            location: editForm.value.location,
            class: this.student.class,
            stream: this.student.stream,
            subjects: this.student.subjects
          };
          this.authService.updateStudent(user, this.image);
          this.userSubs = this.authService.getStudentUpdatteListener().subscribe(res => {
            this.student = res;
            console.log('Student details updated successfully!');
          });
          editForm.resetForm();
          this.editmode = false;
        }
      } // profile pic uploading


      onImageUploaded(event) {
        const file = event.target.files[0];
        const mimeType = file.type;

        if (mimeType.match(/image\/*/) == null) {
          return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          this.image = file;
          this.imageUrl = reader.result;
        };
      }

    };

    UserProfileComponent.ctorParameters = () => [{
      type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/user-profile/user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.scss */
      "./src/app/modules/student/user-profile/user-profile.component.scss")).default]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/modules/teacher/all-users/all-users.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/modules/teacher/all-users/all-users.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTeacherAllUsersAllUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\nth, td {\n  min-width: 100px;\n  width: 25%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.pd-top-min {\n  margin-top: 5%;\n  padding: 20px;\n  margin: auto;\n}\n\n.info-text {\n  padding-left: 5%;\n  text-align: left;\n  font-weight: bold;\n  color: darkslategray;\n  line-height: 30px;\n}\n\n.info-input {\n  text-align: left;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n.info-top {\n  padding-top: 5%;\n}\n\n.info-text-net {\n  padding-left: 5%;\n  text-align: left;\n  font-weight: bold;\n  color: darkslategray;\n  line-height: 33px;\n}\n\n.info-input-net {\n  text-align: left;\n  font-weight: bold;\n  line-height: 33px;\n  color: darkmagenta;\n}\n\ntable {\n  width: 100%;\n}\n\ntd {\n  min-width: 100px;\n  width: 18%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.pd-top-min {\n  margin-top: 5%;\n  padding: 20px;\n  margin: auto;\n}\n\n.info-text {\n  padding-left: 5%;\n  text-align: left;\n  font-weight: bold;\n  color: darkslategray;\n  line-height: 30px;\n}\n\n.info-input {\n  text-align: left;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n.info-top {\n  padding-top: 5%;\n}\n\n.info-text-net {\n  padding-left: 5%;\n  text-align: left;\n  font-weight: bold;\n  color: darkslategray;\n  line-height: 33px;\n}\n\n.info-input-net {\n  text-align: left;\n  font-weight: bold;\n  line-height: 33px;\n  color: darkmagenta;\n}\n\n.profile-pic {\n  height: 40px;\n  border-radius: 50%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.profile-pic-sm {\n  height: 30px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.driver-name {\n  font-weight: bold;\n  font-size: 15px;\n  padding-left: 8px;\n}\n\n.pickup-dropoff {\n  font-weight: 800;\n  font-size: 12px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\n.driver-raw {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.photo-raw {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.photo-row > div {\n  width: 45%;\n}\n\n.profile-pic-large {\n  height: 70px;\n  border-radius: 50%;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\n.driver-name-large {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.scraper-details {\n  padding: 15px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  text-align: left;\n}\n\n.small-info {\n  font-size: 14px;\n}\n\n.location {\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.driver-name-details {\n  text-align: left;\n}\n\nmat-table {\n  overflow-x: scroll;\n  overflow-y: scroll;\n  max-height: 280px;\n}\n\nmat-cell,\nmat-header-cell {\n  word-wrap: initial;\n  display: table-cell;\n  padding: 0px 10px;\n  line-break: unset;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: middle;\n}\n\nmat-row,\nmat-header-row {\n  display: table-row;\n}\n\n.bold-text {\n  font-weight: bold;\n  color: darkblue;\n  font-size: 15px;\n}\n\n.item-tag {\n  border-radius: 3px;\n  padding: 4px;\n  margin: 5px;\n  padding-left: 8px;\n  padding-right: 8px;\n  font-size: 12px;\n  background-color: lightskyblue;\n  color: #0e4374;\n}\n\n.scraper-run-details {\n  font-size: 14px;\n}\n\n.scraper-box {\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  padding: 8px;\n  margin: 5px;\n}\n\n.scraper-title {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL3RlYWNoZXIvYWxsLXVzZXJzL2FsbC11c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy90ZWFjaGVyL2FsbC11c2Vycy9hbGwtdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBRjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURPQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsZ0JBQUE7QUNKRjs7QURTQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBOztFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ05BOztBRFNBOztFQUVBLGtCQUFBO0FDTkE7O0FEU0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7QUNORjs7QURVQTtFQUVFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1JGOztBRFdBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy90ZWFjaGVyL2FsbC11c2Vycy9hbGwtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLCB0ZHtcbiAgbWluLXdpZHRoOjEwMHB4O1xuICB3aWR0aDogMjUlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGQtdG9wLW1pbntcbiAgbWFyZ2luLXRvcDo1JTtcbiAgcGFkZGluZzoyMHB4O1xuICBtYXJnaW46YXV0bztcbn1cblxuXG4uaW5mby10ZXh0e1xuICBwYWRkaW5nLWxlZnQ6NSU7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgY29sb3I6ZGFya3NsYXRlZ3JheTtcbiAgbGluZS1oZWlnaHQ6MzBweDtcbn1cblxuLmluZm8taW5wdXR7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgZm9udC13ZWlnaHQ6NDAwO1xuICBsaW5lLWhlaWdodDozMHB4O1xufVxuXG4uaW5mby10b3B7XG4gIHBhZGRpbmctdG9wOjUlO1xufVxuXG4uaW5mby10ZXh0LW5ldHtcbiAgcGFkZGluZy1sZWZ0OjUlO1xuICB0ZXh0LWFsaWduOmxlZnQ7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIGNvbG9yOmRhcmtzbGF0ZWdyYXk7XG4gIGxpbmUtaGVpZ2h0OjMzcHg7XG59XG5cbi5pbmZvLWlucHV0LW5ldHtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICBmb250LXdlaWdodDpib2xkO1xuICBsaW5lLWhlaWdodDozM3B4O1xuICBjb2xvcjpkYXJrbWFnZW50YTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB3aWR0aDogMTglO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGQtdG9wLW1pbiB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbmZvLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaW5mby1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaW5mby10b3Age1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5pbmZvLXRleHQtbmV0IHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuLmluZm8taW5wdXQtbmV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICBjb2xvcjogZGFya21hZ2VudGE7XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvZmlsZS1waWMtc20ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG59XG5cbi5kcml2ZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4ucGlja3VwLWRyb3BvZmYge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbi5kcml2ZXItcmF3IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBob3RvLXJhdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5waG90by1yb3cgPiBkaXYge1xuICB3aWR0aDogNDUlO1xufVxuXG4ucHJvZmlsZS1waWMtbGFyZ2Uge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRyaXZlci1uYW1lLWxhcmdlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNjcmFwZXItZGV0YWlscyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cblxuLnNtYWxsLWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuLmxvY2F0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmRyaXZlci1uYW1lLWRldGFpbHMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cblxubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xufVxuXG5tYXQtY2VsbCxcbm1hdC1oZWFkZXItY2VsbCB7XG53b3JkLXdyYXA6IGluaXRpYWw7XG5kaXNwbGF5OiB0YWJsZS1jZWxsO1xucGFkZGluZzogMHB4IDEwcHg7XG5saW5lLWJyZWFrOiB1bnNldDtcbndpZHRoOiAxMDAlO1xud2hpdGUtc3BhY2U6IG5vd3JhcDtcbm92ZXJmbG93OiBoaWRkZW47XG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5tYXQtcm93LFxubWF0LWhlYWRlci1yb3cge1xuZGlzcGxheTogdGFibGUtcm93O1xufVxuXG4uYm9sZC10ZXh0e1xuICBmb250LXdlaWdodDpib2xkO1xuICBjb2xvcjogZGFya2JsdWU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLml0ZW0tdGFne1xuICBib3JkZXItcmFkaXVzOjNweDtcbiAgcGFkZGluZzo0cHg7XG4gIG1hcmdpbjo1cHg7XG4gIHBhZGRpbmctbGVmdDo4cHg7XG4gIHBhZGRpbmctcmlnaHQ6OHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgY29sb3I6IHJnYigxNCwgNjcsIDExNik7XG59XG5cbi5zY3JhcGVyLXJ1bi1kZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5cbi5zY3JhcGVyLWJveCB7XG5cbiAgYm9yZGVyOjFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzo4cHg7XG4gIG1hcmdpbjo1cHg7XG59XG5cbi5zY3JhcGVyLXRpdGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLCB0ZCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wZC10b3AtbWluIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmluZm8tdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5pbmZvLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5pbmZvLXRvcCB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLmluZm8tdGV4dC1uZXQge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xufVxuXG4uaW5mby1pbnB1dC1uZXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIGNvbG9yOiBkYXJrbWFnZW50YTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB3aWR0aDogMTglO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGQtdG9wLW1pbiB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbmZvLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaW5mby1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaW5mby10b3Age1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5pbmZvLXRleHQtbmV0IHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuLmluZm8taW5wdXQtbmV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICBjb2xvcjogZGFya21hZ2VudGE7XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvZmlsZS1waWMtc20ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZHJpdmVyLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLnBpY2t1cC1kcm9wb2ZmIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG4uZHJpdmVyLXJhdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5waG90by1yYXcge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGhvdG8tcm93ID4gZGl2IHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLnByb2ZpbGUtcGljLWxhcmdlIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kcml2ZXItbmFtZS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zY3JhcGVyLWRldGFpbHMge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNtYWxsLWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sb2NhdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5kcml2ZXItbmFtZS1kZXRhaWxzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xufVxuXG5tYXQtY2VsbCxcbm1hdC1oZWFkZXItY2VsbCB7XG4gIHdvcmQtd3JhcDogaW5pdGlhbDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGxpbmUtYnJlYWs6IHVuc2V0O1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxubWF0LXJvdyxcbm1hdC1oZWFkZXItcm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaXRlbS10YWcge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICBjb2xvcjogIzBlNDM3NDtcbn1cblxuLnNjcmFwZXItcnVuLWRldGFpbHMge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zY3JhcGVyLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uc2NyYXBlci10aXRsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/teacher/all-users/all-users.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/teacher/all-users/all-users.component.ts ***!
    \******************************************************************/

  /*! exports provided: AllUsersComponent */

  /***/
  function srcAppModulesTeacherAllUsersAllUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function () {
      return AllUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/modules/auth/auth.service.ts");

    let AllUsersComponent = class AllUsersComponent {
      constructor(authService) {
        this.authService = authService;
        this.displayedColumns = ['user_id', 'name', 'email', 'contact_no', 'class', 'action'];
      }

      ngOnInit() {
        // get all users
        this.authService.getClassStudents(this.classId);
        this.userSub = this.authService.getClassStudentsUpdatedListener().subscribe(res => {
          if (res) {
            this.users = res;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        });
      }

      ngOnDestroy() {
        if (this.userSub) {
          this.userSub.unsubscribe();
        }
      }

      applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      } // get selected scraper run details


      showUserDetails(userId) {
        for (const app of this.users) {
          if (app.studentId === userId) {
            this.user = app;
          }
        }
      } // remove a user


      removeUser(userId) {
        this.authService.removeStudent(userId);
      }

      updateUser(user) {
        this.authService.updateSlectedStudent(user);
      }

    };

    AllUsersComponent.ctorParameters = () => [{
      type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], AllUsersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: true
    })], AllUsersComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AllUsersComponent.prototype, "classId", void 0);
    AllUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/all-users/all-users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-users.component.scss */
      "./src/app/modules/teacher/all-users/all-users.component.scss")).default]
    })], AllUsersComponent);
    /***/
  },

  /***/
  "./src/app/modules/teacher/dash/dashboard/teacher-dashboard.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/teacher/dash/dashboard/teacher-dashboard.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTeacherDashDashboardTeacherDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-sidenav-content {\n  background-color: #fff;\n}\n\n.txt-white {\n  color: #fff !important;\n}\n\n.txt-white:hover {\n  color: #d4d4d4;\n}\n\n.sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 260px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.sidenav {\n  background-color: #0f5e5e;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.pd-top {\n  padding-top: 10%;\n}\n\n.pd-img {\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 100px;\n  padding-bottom: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.pd-top-min {\n  padding-top: 5%;\n}\n\n.side-start {\n  text-align: left;\n}\n\n.side-end {\n  text-align: right;\n}\n\n.side-text {\n  vertical-align: top;\n}\n\n.active-nav {\n  font-weight: bold;\n  background-color: #06565c;\n  color: #ebf3eb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL3RlYWNoZXIvZGFzaC9kYXNoYm9hcmQvdGVhY2hlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdGVhY2hlci9kYXNoL2Rhc2hib2FyZC90ZWFjaGVyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RlYWNoZXIvZGFzaC9kYXNoYm9hcmQvdGVhY2hlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnR4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi50eHQtd2hpdGU6aG92ZXIge1xuICBjb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI2MHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgOTQsIDk0KTtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGQtdG9wIHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLnBkLWltZyB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDo0MHB4O1xuICBtYXJnaW4tYm90dG9tOjQwcHg7XG59XG5cbi5wZC10b3AtbWluIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uc2lkZS1zdGFydCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zaWRlLWVuZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2lkZS10ZXh0IHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFjdGl2ZS1uYXYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDg2LCA5Mik7XG4gIGNvbG9yOiByZ2IoMjM1LCAyNDMsIDIzNSk7XG59XG4iLCJtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnR4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi50eHQtd2hpdGU6aG92ZXIge1xuICBjb2xvcjogI2Q0ZDRkNDtcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyNjBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY1ZTVlO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wZC10b3Age1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4ucGQtaW1nIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ucGQtdG9wLW1pbiB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLnNpZGUtc3RhcnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2lkZS1lbmQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNpZGUtdGV4dCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hY3RpdmUtbmF2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjU2NWM7XG4gIGNvbG9yOiAjZWJmM2ViO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/teacher/dash/dashboard/teacher-dashboard.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/teacher/dash/dashboard/teacher-dashboard.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: TeacherDashboardComponent */

  /***/
  function srcAppModulesTeacherDashDashboardTeacherDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherDashboardComponent", function () {
      return TeacherDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let TeacherDashboardComponent = class TeacherDashboardComponent {
      constructor(breakpointObserver, router) {
        this.breakpointObserver = breakpointObserver;
        this.router = router; // navigation

        this.home = 'txt-white row';
        this.users = 'txt-white row';
        this.settings = 'txt-white row';
        this.courses = 'txt-white row';
        this.topIcon = "./assets/images/scraper/logo_lg.png";
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
      }

      ngOnInit() {
        this.routerEvents();
      }

      routerEvents() {
        this.router.events.subscribe(e => {
          if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
            if (e.url === '/teacher') {
              this.navHome();
            } else if (e.url === '/teacher/users') {
              this.navUsers();
            } else if (e.url === '/teacher/courses') {
              this.navCourses();
            } else if (e.url === '/admin/settings') {
              this.navSettings();
            }
          }
        });
      }

      navHome() {
        this.home = 'txt-white row active-nav';
        this.users = this.courses = this.settings = 'txt-white row';
      }

      navUsers() {
        this.users = 'txt-white row active-nav';
        this.home = this.courses = this.settings = 'txt-white row';
      }

      navSettings() {
        this.settings = 'txt-white row active-nav';
        this.users = this.courses = this.home = 'txt-white row';
      }

      navCourses() {
        this.courses = 'txt-white row active-nav';
        this.users = this.settings = this.home = 'txt-white row';
      }

    };

    TeacherDashboardComponent.ctorParameters = () => [{
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    TeacherDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teacher-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teacher-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/dashboard/teacher-dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teacher-dashboard.component.scss */
      "./src/app/modules/teacher/dash/dashboard/teacher-dashboard.component.scss")).default]
    })], TeacherDashboardComponent);
    /***/
  },

  /***/
  "./src/app/modules/teacher/dash/pages/teacher-courses/teacher-courses.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/teacher/dash/pages/teacher-courses/teacher-courses.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTeacherDashPagesTeacherCoursesTeacherCoursesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\nth, td {\n  min-width: 100px;\n  width: 25%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.pd-top-min {\n  margin-top: 5%;\n  padding: 20px;\n  margin: auto;\n}\n\n.info-text {\n  padding-left: 5%;\n  text-align: left;\n  font-weight: bold;\n  color: darkslategray;\n  line-height: 30px;\n}\n\n.info-input {\n  text-align: left;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n.info-top {\n  padding-top: 5%;\n}\n\n.info-text-net {\n  padding-left: 5%;\n  text-align: left;\n  font-weight: bold;\n  color: darkslategray;\n  line-height: 33px;\n}\n\n.info-input-net {\n  text-align: left;\n  font-weight: bold;\n  line-height: 33px;\n  color: darkmagenta;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL3RlYWNoZXIvZGFzaC9wYWdlcy90ZWFjaGVyLWNvdXJzZXMvdGVhY2hlci1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3RlYWNoZXIvZGFzaC9wYWdlcy90ZWFjaGVyLWNvdXJzZXMvdGVhY2hlci1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RlYWNoZXIvZGFzaC9wYWdlcy90ZWFjaGVyLWNvdXJzZXMvdGVhY2hlci1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aCwgdGR7XG4gIG1pbi13aWR0aDoxMDBweDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBkLXRvcC1taW57XG4gIG1hcmdpbi10b3A6NSU7XG4gIHBhZGRpbmc6MjBweDtcbiAgbWFyZ2luOmF1dG87XG59XG5cblxuLmluZm8tdGV4dHtcbiAgcGFkZGluZy1sZWZ0OjUlO1xuICB0ZXh0LWFsaWduOmxlZnQ7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIGNvbG9yOmRhcmtzbGF0ZWdyYXk7XG4gIGxpbmUtaGVpZ2h0OjMwcHg7XG59XG5cbi5pbmZvLWlucHV0e1xuICB0ZXh0LWFsaWduOmxlZnQ7XG4gIGZvbnQtd2VpZ2h0OjQwMDtcbiAgbGluZS1oZWlnaHQ6MzBweDtcbn1cblxuLmluZm8tdG9we1xuICBwYWRkaW5nLXRvcDo1JTtcbn1cblxuLmluZm8tdGV4dC1uZXR7XG4gIHBhZGRpbmctbGVmdDo1JTtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICBmb250LXdlaWdodDpib2xkO1xuICBjb2xvcjpkYXJrc2xhdGVncmF5O1xuICBsaW5lLWhlaWdodDozM3B4O1xufVxuXG4uaW5mby1pbnB1dC1uZXR7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgbGluZS1oZWlnaHQ6MzNweDtcbiAgY29sb3I6ZGFya21hZ2VudGE7XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aCwgdGQge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB3aWR0aDogMjUlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGQtdG9wLW1pbiB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbmZvLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaW5mby1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaW5mby10b3Age1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5pbmZvLXRleHQtbmV0IHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuLmluZm8taW5wdXQtbmV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICBjb2xvcjogZGFya21hZ2VudGE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/teacher/dash/pages/teacher-courses/teacher-courses.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/teacher/dash/pages/teacher-courses/teacher-courses.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: TeacherCoursesComponent */

  /***/
  function srcAppModulesTeacherDashPagesTeacherCoursesTeacherCoursesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherCoursesComponent", function () {
      return TeacherCoursesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _teacher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../teacher.service */
    "./src/app/modules/teacher/teacher.service.ts");

    let TeacherCoursesComponent = class TeacherCoursesComponent {
      constructor(teacherService) {
        this.teacherService = teacherService;
        this.displayedColumns = ['user_type', 'name', 'email', 'amount_due', 'amount_paid', 'action']; // final payments list

        this.courses = []; // recieved state

        this.userType = 'serviceProvider';
      }

      ngOnInit() {// get admin for child comp use
        //  this.adminService.getAdminPayments();
        //  this.paymentDataSub = this.adminService.getMerchantPaymentsUpdateListener().subscribe(
        //    payments => {
        //      if (payments) {
        //        this.recievedPayments = payments;
        //        console.log(this.recievedPayments);
        //        this.dataSource = new MatTableDataSource(this.addPayments(this.recievedPayments, this.userType));
        //        this.dataSource.paginator = this.paginator;
        //        this.dataSource.sort = this.sort;
        //     }
        //    });
      }

      ngOnDestroy() {
        if (this.courseSub) {
          this.courseSub.unsubscribe();
        }
      }

      applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }

    };

    TeacherCoursesComponent.ctorParameters = () => [{
      type: _teacher_service__WEBPACK_IMPORTED_MODULE_4__["TeacherService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], TeacherCoursesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: true
    })], TeacherCoursesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TeacherCoursesComponent.prototype, "userType", void 0);
    TeacherCoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teacher-courses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teacher-courses.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-courses/teacher-courses.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teacher-courses.component.scss */
      "./src/app/modules/teacher/dash/pages/teacher-courses/teacher-courses.component.scss")).default]
    })], TeacherCoursesComponent);
    /***/
  },

  /***/
  "./src/app/modules/teacher/dash/pages/teacher-home/teacher-home.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/teacher/dash/pages/teacher-home/teacher-home.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTeacherDashPagesTeacherHomeTeacherHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVhY2hlci9kYXNoL3BhZ2VzL3RlYWNoZXItaG9tZS90ZWFjaGVyLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/teacher/dash/pages/teacher-home/teacher-home.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/teacher/dash/pages/teacher-home/teacher-home.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: TeacherHomeComponent */

  /***/
  function srcAppModulesTeacherDashPagesTeacherHomeTeacherHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherHomeComponent", function () {
      return TeacherHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TeacherHomeComponent = class TeacherHomeComponent {
      constructor() {}

      ngOnInit() {}

      ngOnDestroy() {}

    };
    TeacherHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teacher-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teacher-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-home/teacher-home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teacher-home.component.scss */
      "./src/app/modules/teacher/dash/pages/teacher-home/teacher-home.component.scss")).default]
    })], TeacherHomeComponent);
    /***/
  },

  /***/
  "./src/app/modules/teacher/dash/pages/teacher-settings/teacher-settings.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/modules/teacher/dash/pages/teacher-settings/teacher-settings.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTeacherDashPagesTeacherSettingsTeacherSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".max-col {\n  width: 800px;\n  max-width: 800px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL3RlYWNoZXIvZGFzaC9wYWdlcy90ZWFjaGVyLXNldHRpbmdzL3RlYWNoZXItc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdGVhY2hlci9kYXNoL3BhZ2VzL3RlYWNoZXItc2V0dGluZ3MvdGVhY2hlci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RlYWNoZXIvZGFzaC9wYWdlcy90ZWFjaGVyLXNldHRpbmdzL3RlYWNoZXItc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF4LWNvbHtcbiAgd2lkdGg6ODAwcHg7XG4gIG1heC13aWR0aDo4MDBweDtcbiAgbWFyZ2luLWxlZnQ6MjBweDtcbn1cbiIsIi5tYXgtY29sIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/teacher/dash/pages/teacher-settings/teacher-settings.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/teacher/dash/pages/teacher-settings/teacher-settings.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: TeacherSettingsComponent */

  /***/
  function srcAppModulesTeacherDashPagesTeacherSettingsTeacherSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherSettingsComponent", function () {
      return TeacherSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TeacherSettingsComponent = class TeacherSettingsComponent {
      constructor() {}

      ngOnInit() {}

    };
    TeacherSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teacher-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teacher-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-settings/teacher-settings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teacher-settings.component.scss */
      "./src/app/modules/teacher/dash/pages/teacher-settings/teacher-settings.component.scss")).default]
    })], TeacherSettingsComponent);
    /***/
  },

  /***/
  "./src/app/modules/teacher/dash/pages/teacher-users/teacher-users.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/teacher/dash/pages/teacher-users/teacher-users.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTeacherDashPagesTeacherUsersTeacherUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".max-col {\n  width: 800px;\n  max-width: 800px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXJhbi9Eb2N1bWVudHMvUHJvamVjdHMvb25saW5lLWxlYXJuaW5nLU1FQU4tdGhhcmluZHUvc3JjL2FwcC9tb2R1bGVzL3RlYWNoZXIvZGFzaC9wYWdlcy90ZWFjaGVyLXVzZXJzL3RlYWNoZXItdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdGVhY2hlci9kYXNoL3BhZ2VzL3RlYWNoZXItdXNlcnMvdGVhY2hlci11c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RlYWNoZXIvZGFzaC9wYWdlcy90ZWFjaGVyLXVzZXJzL3RlYWNoZXItdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF4LWNvbHtcbiAgd2lkdGg6ODAwcHg7XG4gIG1heC13aWR0aDo4MDBweDtcbiAgbWFyZ2luLWxlZnQ6MjBweDtcbn1cbiIsIi5tYXgtY29sIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/teacher/dash/pages/teacher-users/teacher-users.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/teacher/dash/pages/teacher-users/teacher-users.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TeacherUsersComponent */

  /***/
  function srcAppModulesTeacherDashPagesTeacherUsersTeacherUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherUsersComponent", function () {
      return TeacherUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TeacherUsersComponent = class TeacherUsersComponent {
      constructor() {}

      ngOnInit() {}

    };
    TeacherUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teacher-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teacher-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/dash/pages/teacher-users/teacher-users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teacher-users.component.scss */
      "./src/app/modules/teacher/dash/pages/teacher-users/teacher-users.component.scss")).default]
    })], TeacherUsersComponent);
    /***/
  },

  /***/
  "./src/app/modules/teacher/teacher-add-course/teacher-add-course.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/teacher/teacher-add-course/teacher-add-course.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTeacherTeacherAddCourseTeacherAddCourseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVhY2hlci90ZWFjaGVyLWFkZC1jb3Vyc2UvdGVhY2hlci1hZGQtY291cnNlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/teacher/teacher-add-course/teacher-add-course.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/teacher/teacher-add-course/teacher-add-course.component.ts ***!
    \************************************************************************************/

  /*! exports provided: TeacherAddCourseComponent */

  /***/
  function srcAppModulesTeacherTeacherAddCourseTeacherAddCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherAddCourseComponent", function () {
      return TeacherAddCourseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TeacherAddCourseComponent = class TeacherAddCourseComponent {
      constructor() {}

      ngOnInit() {}

    };
    TeacherAddCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teacher-add-course',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teacher-add-course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/teacher-add-course/teacher-add-course.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teacher-add-course.component.scss */
      "./src/app/modules/teacher/teacher-add-course/teacher-add-course.component.scss")).default]
    })], TeacherAddCourseComponent);
    /***/
  },

  /***/
  "./src/app/modules/teacher/teacher-add-videos/teacher-add-videos.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/teacher/teacher-add-videos/teacher-add-videos.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTeacherTeacherAddVideosTeacherAddVideosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVhY2hlci90ZWFjaGVyLWFkZC12aWRlb3MvdGVhY2hlci1hZGQtdmlkZW9zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/teacher/teacher-add-videos/teacher-add-videos.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/teacher/teacher-add-videos/teacher-add-videos.component.ts ***!
    \************************************************************************************/

  /*! exports provided: TeacherAddVideosComponent */

  /***/
  function srcAppModulesTeacherTeacherAddVideosTeacherAddVideosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherAddVideosComponent", function () {
      return TeacherAddVideosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TeacherAddVideosComponent = class TeacherAddVideosComponent {
      constructor() {}

      ngOnInit() {}

    };
    TeacherAddVideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teacher-add-videos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teacher-add-videos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/teacher/teacher-add-videos/teacher-add-videos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teacher-add-videos.component.scss */
      "./src/app/modules/teacher/teacher-add-videos/teacher-add-videos.component.scss")).default]
    })], TeacherAddVideosComponent);
    /***/
  },

  /***/
  "./src/app/modules/teacher/teacher.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/teacher/teacher.service.ts ***!
    \****************************************************/

  /*! exports provided: TeacherService */

  /***/
  function srcAppModulesTeacherTeacherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherService", function () {
      return TeacherService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _student_student_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../student/student.config */
    "./src/app/modules/student/student.config.ts");
    /* harmony import */


    var src_app_success_success_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/success/success.component */
    "./src/app/success/success.component.ts");

    let TeacherService = class TeacherService {
      constructor(http, router, dialog, _snackBar) {
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.lastIdUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.studentUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.classStudentsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentStudentUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.studentsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.headerDetailsListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // user login status

        this.isAuthenticated = false; // snack bars for notification display

        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
      } // GET


      getStudent(userId) {
        this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getStudent"] + userId).subscribe(res => {
          this.student = res.user;
          this.studentUpdated.next(this.student);
        });
      }

      getAuthStudent() {
        this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getAuthStudent"]).subscribe(res => {
          this.currentStudent = res.user;
          this.currentStudentUpdated.next(this.currentStudent);
        });
      }

      getStudents() {
        this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getStudents"]).subscribe(res => {
          this.studentsUpdated.next(res.users);
        });
      }

      getClassStudents(classId) {
        this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getClassStudents"] + classId).subscribe(res => {
          this.studentsUpdated.next(res.users);
        });
      } // get details for header


      getHeaderDetails() {
        if (this.token) {
          this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getHeader"]).subscribe(recievedHeader => {
            this.headerDetails = {
              userType: recievedHeader.user_type,
              userName: recievedHeader.user_name,
              profilePic: recievedHeader.profile_pic
            };
            this.headerDetailsListener.next(this.headerDetails);
          });
        }
      } // get last product id


      getLastUserId() {
        this.http.get(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["getLastId"]).subscribe(recievedId => {
          console.log(recievedId.lastid);
          this.lastId = recievedId.lastid;
          this.lastIdUpdated.next(this.lastId);
        });
      } // get token to be used by other services


      getToken() {
        return this.token;
      } // get authentication statusgetAuthAdmin


      getisAuth() {
        return this.isAuthenticated;
      } // listners for subjects


      getLastIdUpdateListener() {
        return this.lastIdUpdated.asObservable();
      }

      getAuhStatusListener() {
        return this.authStatusListener.asObservable();
      }

      getHeaderDetailsListener() {
        return this.headerDetailsListener.asObservable();
      }

      getStudentsUpdateListener() {
        return this.studentsUpdated.asObservable();
      }

      getStudentUpdatteListener() {
        return this.studentUpdated.asObservable();
      }

      getCurrentStudentUpdatedListener() {
        return this.currentStudentUpdated.asObservable();
      }

      getClassStudentsUpdatedListener() {
        return this.classStudentsUpdated.asObservable();
      } // POST , PUT


      signUp(user, password) {
        this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["postSignUp"], {
          user,
          password
        }).subscribe(recievedData => {
          console.log(recievedData.message);

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;

          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/']);

          this._snackBar.open(recievedData.message, 'Dismiss', {
            duration: 2500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
        }, error => {
          console.log(error);
        });
      } // update user profile


      updateStudent(user, image) {
        if (image) {
          const newImage = new FormData();
          newImage.append('images[]', image, image.name);
          this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["postUploadImage"], newImage).subscribe(recievedImage => {
            console.log(recievedImage);
            user.profilePic = recievedImage.profile_pic;
            this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["putUpdateStudent"], user).subscribe(recievedData => {
              console.log(recievedData.message);
              this.currentStudent = user;
              this.currentStudentUpdated.next(this.currentStudent);

              this.router.routeReuseStrategy.shouldReuseRoute = () => false;

              this.router.onSameUrlNavigation = 'reload';
              this.router.navigate(['/student/settings']);
              this.dialog.open(src_app_success_success_component__WEBPACK_IMPORTED_MODULE_7__["SuccessComponent"], {
                data: {
                  message: 'Your Profile Details Updated Successfully!'
                }
              });
            }, error => {
              console.log(error);
            });
          });
        } else {
          this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["putUpdateStudent"], user).subscribe(recievedData => {
            console.log(recievedData.message);
            this.currentStudent = user;
            this.currentStudentUpdated.next(this.currentStudent);

            this.router.routeReuseStrategy.shouldReuseRoute = () => false;

            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/student/settings']);
            this.dialog.open(src_app_success_success_component__WEBPACK_IMPORTED_MODULE_7__["SuccessComponent"], {
              data: {
                message: 'Your Profile Details Updated Successfully!'
              }
            });
          }, error => {
            console.log(error);
          });
        }
      } // update selected user


      updateSlectedStudent(user) {
        this.http.post(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["putUpdateSelectedStudent"], user).subscribe(recievedData => {
          console.log(recievedData.message);
          this.studentUpdated.next(user);

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;

          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/teacher/users']);

          this._snackBar.open('User\'s details updated!', 'Dismiss', {
            duration: 2500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
        }, error => {
          console.log(error);
        });
      } // user profile change password


      changeUserPassword(userType, currentPword, newPword) {} // code here
      // DELETE


      removeStudent(userId) {
        this.http.delete(_student_student_config__WEBPACK_IMPORTED_MODULE_6__["url"] + _student_student_config__WEBPACK_IMPORTED_MODULE_6__["deleteStudent"] + userId).subscribe(recievedData => {
          if (this.students.length) {
            const updatedUsers = this.students.filter(usr => usr.studentId !== userId);
            this.students = updatedUsers;
            this.studentsUpdated.next(this.students);

            this._snackBar.open(recievedData.message, 'Dismiss', {
              duration: 2500,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition
            });
          }
        }, error => {
          console.log(error);
        });
      }

    };

    TeacherService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
    }];

    TeacherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TeacherService);
    /***/
  },

  /***/
  "./src/app/no-right-click.directive.ts":
  /*!*********************************************!*\
    !*** ./src/app/no-right-click.directive.ts ***!
    \*********************************************/

  /*! exports provided: NoRightClickDirective */

  /***/
  function srcAppNoRightClickDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoRightClickDirective", function () {
      return NoRightClickDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NoRightClickDirective = class NoRightClickDirective {
      constructor() {}

      onRightClick(event) {
        event.preventDefault();
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event'])], NoRightClickDirective.prototype, "onRightClick", null);
    NoRightClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appNoRightClick]'
    })], NoRightClickDirective);
    /***/
  },

  /***/
  "./src/app/success/success.component.scss":
  /*!************************************************!*\
    !*** ./src/app/success/success.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuccessSuccessComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/success/success.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/success/success.component.ts ***!
    \**********************************************/

  /*! exports provided: SuccessComponent */

  /***/
  function srcAppSuccessSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessComponent", function () {
      return SuccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let SuccessComponent = class SuccessComponent {
      constructor(data) {
        this.data = data;
      }

      ngOnInit() {}

    };

    SuccessComponent.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }];

    SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./success.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./success.component.scss */
      "./src/app/success/success.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], SuccessComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/chiran/Documents/Projects/online-learning-MEAN-tharindu/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map