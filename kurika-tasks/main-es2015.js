(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-timer/add-timer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-timer/add-timer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <app-timer-form></app-timer-form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<app-messages></app-messages>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/countdown-type-form/countdown-type-form.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/countdown-type-form/countdown-type-form.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"countdown\" class=\"form-group\">\n  <div class=\"input-group mb-3\">\n    <label for=\"timer-amount\" class=\"input-group-text input-group-prepend\">\n      Value\n    </label>\n    <input type=\"number\" id=\"timer-amount\" formControlName=\"amount\" class=\"form-control\" (change)=\"emit('amount')\">\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <label for=\"timer-unit\" class=\"input-group-text input-group-prepend\">\n      Units\n    </label>\n    <select id=\"timer-unit\" formControlName=\"unit\" class=\"form-control\" (change)=\"emit('unit')\">\n        <option *ngFor=\"let unit of units\" [ngValue]=\"unit\">\n          {{ unit }}\n        </option>\n      </select>\n  </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-timer/detail-timer.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-timer/detail-timer.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-row align-items-start\">\r\n  <a class=\"flex-grow-1 clickable\"\r\n    (click)=\"toggleCompleted(timer.id)\">\r\n    <h5 class=\"mb-1\">\r\n      <span *ngIf=\"timer.isCompleted\">✔</span>\r\n      <span *ngIf=\"!timer.isCompleted && timer.required\">⭐</span>\r\n      {{ timer.title }}\r\n    </h5>\r\n    <p *ngIf=\"timer.description\">{{ timer.description }}</p>\r\n    <div *ngIf=\"!timer.description\"><br/></div>\r\n  </a>\r\n  <button type=\"button\" \r\n    class=\"btn btn-outline-secondary\" \r\n    [routerLink]=\"['/timers/edit',timer.id]\">\r\n    Edit\r\n  </button>\r\n  <button type=\"button\" \r\n    class=\"btn btn-outline-danger\" \r\n    (click)=\"deleteTimer(timer.id)\">\r\n    Delete\r\n  </button>\r\n</div>\r\n<small class=\"text-muted\">\r\n  <span *ngIf=\"timer.isCompleted && !timer.countdown\">\r\n    Calculating...\r\n  </span>\r\n  <span *ngIf=\"timer.isCompleted && timer.countdown !== 'none'\">\r\n    {{ timer.countdown }}\r\n  </span>\r\n  <span *ngIf=\"timer.isCompleted && timer.countdown === 'none'\">\r\n    Does not reset\r\n  </span>\r\n  <span *ngIf=\"!timer.isCompleted && timer.completed.length > 0\">\r\n    Last completed {{ timer.completed[timer.completed.length-1].toDateString() }}\r\n  </span>\r\n  <span *ngIf=\"!timer.isCompleted && timer.completed.length === 0\">\r\n    <span *ngIf=\"timer.period !== 'nr'\">{{ timer.period }}</span>\r\n  </span>\r\n</small>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-timer/edit-timer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-timer/edit-timer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\" *ngIf=\"timer\">\n  <app-timer-form [timer]=\"timer\"></app-timer-form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <!--\n    This should function like a \"dashboard\" \n    Display a selection of timers that need attention (ones marked important)\n    Display some actions, such as 'add timer' widget thingy\n\n    (not yet ready to create this component - need to create the others first!)\n  -->\n  <!-- Important & Incomplete timers go here -->\n  <app-timers [restrictions]=\"restrictions\"></app-timers>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/message-display/message-display.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message-display/message-display.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"error\">\r\n  <div class=\"my-toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n    <div class=\"toast-header bg-danger text-light\">\r\n      <strong class=\"mr-auto\">{{ title }}</strong>\r\n      <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"toast-body\">\r\n      {{ message }}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!error\">\r\n  <div class=\"my-toast\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\r\n    <div class=\"toast-header bg-brand-secondary text-light\">\r\n      <strong class=\"mr-auto\">{{ title }}</strong>\r\n      <button type=\"button\" class=\"ml-2 mb-1 close text-light\" data-dismiss=\"toast\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"toast-body\">\r\n      {{ message }}\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"position:absolute; top: 60px; right: 5px;\">\r\n  <div *ngFor=\"let message of messages\">\r\n    <app-message-display \r\n      [id]=\"message.id\" \r\n      [title]=\"message.title\" \r\n      [message]=\"message.message\" \r\n      [error]=\"message.error\">\r\n    </app-message-display>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark bg-brand-primary navbar-expand\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Kurika</a>\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/timers\" [routerLinkActive]=\"'active'\"\n        [routerLinkActiveOptions]=\"{exact:true}\">\n        View Timers\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/timers/new\" [routerLinkActive]=\"'active'\">\n        New Timer\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/settings\" [routerLinkActive]=\"'active'\">\n        Settings\n      </a>\n    </li>\n  </ul>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-type-form/schedule-type-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-type-form/schedule-type-form.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"schedule\" class=\"form-group\">\n  <div class=\"form-check mb-3\">\n    <input type=\"checkbox\" \n      id=\"timer-UTC\"\n      class=\"form-check-input\"\n      formControlName=\"useUTC\"\n      (change)=\"emit('useUTC')\"\n      aria-describedby=\"timer-UTC-help\">\n    <label for=\"timer-UTC\" class=\"form-check-label\">\n      Use global time\n    </label>\n    <br/>\n    <small id=\"timer-UTC-help\" class=\"text-muted\">\n      Global time ignores changes due to Daylight Savings Time\n    </small>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <label for=\"timer-hour\" class=\"sr-only\">\n      Hours\n    </label>\n    <input type=\"number\" \n      id=\"timer-hour\" \n      formControlName=\"hour\" \n      placeholder=\"hours\"\n      class=\"form-control\" \n      (change)=\"emit('hour')\">\n\n    <label class=\"sr-only\" for=\"AM-or-PM\">\n      AM or PM\n    </label>\n    <select\n      id=\"AM-or-PM\"\n      formControlName=\"ampm\" \n      class=\"form-control\" \n      (change)=\"emit('ampm')\">\n      <option value=\"am\">AM / 24h</option>\n      <option value=\"pm\">PM</option>\n    </select>\n\n    <input type=\"number\" \n      id=\"timer-minute\" \n      formControlName=\"minute\" \n      placeholder=\"minutes\"\n      class=\"form-control\" \n      (change)=\"emit('minute')\">\n    <label for=\"timer-minute\" class=\"sr-only\">\n      Minutes\n    </label>\n  </div>\n\n  <button type=\"button\" \n    class=\"btn bg-brand-primary text-brand-accent mb-3\"\n    (click)=\"toggleDays()\">\n    {{ daysToggleLabel }}\n  </button>\n\n  <div formGroupName=\"dayOfWeek\"\n    (change)=\"emit('dayOfWeek')\">\n    <div class=\"form-check mb-3\">\n      <input type=\"checkbox\" \n        id=\"timer-monday\" \n        class=\"form-check-input\"\n        formControlName=\"monday\">\n      <label for=\"timer-monday\" class=\"form-check-label\">\n        Monday\n      </label>\n    </div>\n\n    <div class=\"form-check mb-3\">\n      <input type=\"checkbox\" \n        id=\"timer-tuesday\" \n        class=\"form-check-input\"\n        formControlName=\"tuesday\">\n      <label for=\"timer-tuesday\" class=\"form-check-label\">\n        Tuesday\n      </label>\n    </div>\n    \n    <div class=\"form-check mb-3\">\n      <input type=\"checkbox\" \n        id=\"timer-wednesday\" \n        class=\"form-check-input\"\n        formControlName=\"wednesday\">\n      <label for=\"timer-wednesday\" class=\"form-check-label\">\n        Wednesday\n      </label>\n    </div>\n  \n    <div class=\"form-check mb-3\">\n      <input type=\"checkbox\" \n        id=\"timer-thursday\" \n        class=\"form-check-input\"\n        formControlName=\"thursday\">\n      <label for=\"timer-thursday\" class=\"form-check-label\">\n        Thursday\n      </label>\n    </div>\n  \n    <div class=\"form-check mb-3\">\n      <input type=\"checkbox\" \n        id=\"timer-friday\" \n        class=\"form-check-input\"\n        formControlName=\"friday\">\n      <label for=\"timer-friday\" class=\"form-check-label\">\n        Friday\n      </label>\n    </div>\n\n    <div class=\"form-check mb-3\">\n      <input type=\"checkbox\" \n        id=\"timer-saturday\" \n        class=\"form-check-input\"\n        formControlName=\"saturday\">\n      <label for=\"timer-saturday\" class=\"form-check-label\">\n        Saturday\n      </label>\n    </div>\n\n    <div class=\"form-check mb-3\">\n      <input type=\"checkbox\" \n        id=\"timer-sunday\" \n        class=\"form-check-input\"\n        formControlName=\"sunday\">\n      <label for=\"timer-sunday\" class=\"form-check-label\">\n        Sunday\n      </label>\n    </div>\n  </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <div class=\"form-check\" *ngFor=\"let setting of settingsList\">\n    <input type=\"checkbox\" \n      class=\"form-check-input\" \n      value=\"\" \n      [id]=\"setting.name\" \n      [formControl]=\"settings[setting.name].control\"\n      (change)=\"updateSetting(setting.name)\">\n    <label class=\"form-check-label\" [for]=\"setting.name\">\n      {{ setting.text }}\n    </label>\n  </div>\n\n  <br/>\n\n  <button type=\"button\" \n    class=\"btn btn-outline-danger\"\n    (click)=\"deleteAllData()\">\n    Delete My Data\n  </button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slim-timer/slim-timer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slim-timer/slim-timer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-row\">\r\n  <a class=\"flex-grow-1 clickable\" \r\n    (click)=\"toggleCompleted(timer.id)\">\r\n    <h5 class=\"mb-1 d-inline-block\">\r\n      <div class=\"\" *ngIf=\"!timer.isCompleted\">\r\n        <span *ngIf=\"timer.required\">⭐</span>\r\n        {{ timer.title }}\r\n      </div>\r\n      <div class=\"strikethrough text-muted font-italic\" *ngIf=\"timer.isCompleted\">\r\n        <span *ngIf=\"timer.required\">⭐</span>\r\n        {{ timer.title }}\r\n      </div>\r\n    </h5>\r\n  </a>\r\n  <button type=\"button\" \r\n    class=\"btn info-icon\" \r\n    (click)=\"showInfo()\">\r\n    <svg width=\"24\" height=\"24\">\r\n      <use href=\"../../assets/icon/info-24px.svg#info\" x=\"0\" y=\"0\" />\r\n    </svg>\r\n  </button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-form/timer-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer-form/timer-form.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"timerForm\" (ngSubmit)=\"add()\" class=\"form-group\" style=\"max-width: 500px\">\n  <div class=\"input-group mb-3\">\n    <label for=\"timer-title\" class=\"input-group-text input-group-prepend\">\n      Title\n    </label>\n    <input type=\"text\" id=\"timer-title\" formControlName=\"title\" class=\"form-control\">\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <label for=\"timer-category\" class=\"input-group-text input-group-prepend\">\n      Category\n    </label>\n    <input type=\"text\" id=\"timer-category\" formControlName=\"category\" class=\"form-control\">\n    <div class=\"input-group-append\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\" disabled>+</button>\n    </div>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <label for=\"timer-description\" class=\"input-group-text input-group-prepend\">\n      Description\n    </label>\n    <textarea id=\"timer-description\" formControlName=\"description\" class=\"form-control\"></textarea>\n  </div>\n\n  <div class=\"form-check mb-3\">\n    <input type=\"checkbox\" \n      id=\"timer-completed\" \n      class=\"form-check-input\" \n      formControlName=\"isCompleted\">\n    <label for=\"timer-completed\" class=\"form-check-label\">\n      Create as Completed\n    </label>\n  </div>\n\n  <div class=\"form-check mb-3\">\n    <input type=\"checkbox\" \n      id=\"timer-required\" \n      class=\"form-check-input\"\n      formControlName=\"required\">\n    <label for=\"timer-required\" class=\"form-check-label\">\n      Mark as important\n    </label>\n  </div>\n\n  <div class=\"mb-3\">\n    <div class=\"form-check\">\n      <input type=\"radio\" \n        id=\"timer-noRepeat\" \n        class=\"form-check-input\"\n        formControlName=\"repeatType\"\n        value=\"noRepeat\">\n      <label for=\"timer-noRepeat\" class=\"form-check-label\">\n        Don't repeat\n      </label>\n    </div>\n\n    <div class=\"form-check\">\n      <input type=\"radio\" \n        id=\"timer-cdRepeat\" \n        class=\"form-check-input\"\n        formControlName=\"repeatType\"\n        value=\"cdRepeat\">\n      <label for=\"timer-cdRepeat\" class=\"form-check-label\">\n        Reset after a specified amount of time\n      </label>\n    </div>\n\n    <div class=\"form-check\">\n        <input type=\"radio\" \n          id=\"timer-scheduleRepeat\" \n          class=\"form-check-input\"\n          formControlName=\"repeatType\"\n          value=\"scheduleRepeat\">\n        <label for=\"timer-scheduleRepeat\" class=\"form-check-label\">\n          Reset at a specified time\n        </label>\n      </div>\n  </div>\n\n  <div *ngIf=\"timerForm.value.repeatType === 'cdRepeat'\" class=\"mb-3\">\n    <app-countdown-type-form [period]=\"timer.period\" (timerData)=\"setIntervalPeriod($event)\"></app-countdown-type-form>\n  </div>\n\n  <div *ngIf=\"timerForm.value.repeatType === 'scheduleRepeat'\" class=\"mb-3\">\n    <app-schedule-type-form [period]=\"timer.period\" (timerData)=\"setSchedulePeriod($event)\"></app-schedule-type-form>\n  </div>\n\n  <button type=\"submit\" class=\"btn bg-brand-primary text-brand-accent\">\n    <span *ngIf=\"isNew\">Add</span>\n    <span *ngIf=\"!isNew\">Save</span>\n  </button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timers/timers.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timers/timers.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content card-columns\">\r\n  <div class=\"card\" style=\"width: 300px;\" *ngFor=\"let category of timers\">\r\n    <div class=\"card-header\">\r\n      {{ category.category }}\r\n    </div>\r\n    <div class=\"list-group list-group-flush\">\r\n      <ng-container *ngFor=\"let timer of category.timers\">\r\n        <ng-container *ngIf=\"(timer.isCompleted && !settings.hideCompleted.value) || (!timer.isCompleted)\">\r\n          <!-- Slim Version -->\r\n          <ng-container *ngIf=\"settings.slimTimers.value\">\r\n            <app-slim-timer \r\n              class=\"list-group-item list-group-item-action\"\r\n              [timer]=\"timer\"\r\n              (info)=\"openDialog($event)\">\r\n            </app-slim-timer>\r\n          </ng-container>\r\n          <!-- Details Version -->\r\n          <ng-container *ngIf=\"!settings.slimTimers.value\">\r\n            <app-detail-timer \r\n              class=\"list-group-item list-group-item-action\"\r\n              [timer]=\"timer\">\r\n            </app-detail-timer>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"dialogIsOpen\" \r\n  class=\"my-modal\"\r\n  tabIndex=\"-1\" \r\n  role=\"dialog\" \r\n  aria-labeledby=\"dialog-title\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"modal-title\" id=\"dialog-title\">\r\n          {{ dialogData.title }}\r\n        </div>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeDialog()\" aria-label=\"close\">\r\n          &times;\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <span *ngIf=\"dialogData.isCompleted\">Next reset is at: {{ dialogData.resetTime.toLocaleString() }}</span>\r\n        <p *ngIf=\"dialogData.description\">{{ dialogData.description }}</p>\r\n        <p *ngIf=\"!dialogData.description\">No description available.</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/timers/edit',dialogData.id]\">Edit</button>\r\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"deleteTimer(dialogData.id)\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"closeDialog()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add-timer/add-timer.component.scss":
/*!****************************************************!*\
  !*** ./src/app/add-timer/add-timer.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC10aW1lci9hZGQtdGltZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/add-timer/add-timer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-timer/add-timer.component.ts ***!
  \**************************************************/
/*! exports provided: AddTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimerComponent", function() { return AddTimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddTimerComponent = class AddTimerComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddTimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-timer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-timer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-timer/add-timer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-timer.component.scss */ "./src/app/add-timer/add-timer.component.scss")).default]
    })
], AddTimerComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _add_timer_add_timer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-timer/add-timer.component */ "./src/app/add-timer/add-timer.component.ts");
/* harmony import */ var _edit_timer_edit_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-timer/edit-timer.component */ "./src/app/edit-timer/edit-timer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _timers_timers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timers/timers.component */ "./src/app/timers/timers.component.ts");








const routes = [
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] },
    { path: 'timers/new', component: _add_timer_add_timer_component__WEBPACK_IMPORTED_MODULE_4__["AddTimerComponent"] },
    { path: 'timers/edit/:id', component: _edit_timer_edit_timer_component__WEBPACK_IMPORTED_MODULE_5__["EditTimerComponent"] },
    { path: 'timers', component: _timers_timers_component__WEBPACK_IMPORTED_MODULE_7__["TimersComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _timers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timers.service */ "./src/app/timers.service.ts");



let AppComponent = class AppComponent {
    constructor(_timers) {
        this._timers = _timers;
    }
    ngOnInit() {
        this._timers.init();
    }
};
AppComponent.ctorParameters = () => [
    { type: _timers_service__WEBPACK_IMPORTED_MODULE_2__["TimersService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _timer_form_timer_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timer-form/timer-form.component */ "./src/app/timer-form/timer-form.component.ts");
/* harmony import */ var _add_timer_add_timer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-timer/add-timer.component */ "./src/app/add-timer/add-timer.component.ts");
/* harmony import */ var _edit_timer_edit_timer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-timer/edit-timer.component */ "./src/app/edit-timer/edit-timer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _timers_timers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timers/timers.component */ "./src/app/timers/timers.component.ts");
/* harmony import */ var _countdown_type_form_countdown_type_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./countdown-type-form/countdown-type-form.component */ "./src/app/countdown-type-form/countdown-type-form.component.ts");
/* harmony import */ var _schedule_type_form_schedule_type_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./schedule-type-form/schedule-type-form.component */ "./src/app/schedule-type-form/schedule-type-form.component.ts");
/* harmony import */ var _slim_timer_slim_timer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./slim-timer/slim-timer.component */ "./src/app/slim-timer/slim-timer.component.ts");
/* harmony import */ var _detail_timer_detail_timer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./detail-timer/detail-timer.component */ "./src/app/detail-timer/detail-timer.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _message_display_message_display_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./message-display/message-display.component */ "./src/app/message-display/message-display.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
            _timer_form_timer_form_component__WEBPACK_IMPORTED_MODULE_9__["TimerFormComponent"],
            _add_timer_add_timer_component__WEBPACK_IMPORTED_MODULE_10__["AddTimerComponent"],
            _edit_timer_edit_timer_component__WEBPACK_IMPORTED_MODULE_11__["EditTimerComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _timers_timers_component__WEBPACK_IMPORTED_MODULE_13__["TimersComponent"],
            _countdown_type_form_countdown_type_form_component__WEBPACK_IMPORTED_MODULE_14__["CountdownTypeFormComponent"],
            _schedule_type_form_schedule_type_form_component__WEBPACK_IMPORTED_MODULE_15__["ScheduleTypeFormComponent"],
            _slim_timer_slim_timer_component__WEBPACK_IMPORTED_MODULE_16__["SlimTimerComponent"],
            _detail_timer_detail_timer_component__WEBPACK_IMPORTED_MODULE_17__["DetailTimerComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_18__["MessagesComponent"],
            _message_display_message_display_component__WEBPACK_IMPORTED_MODULE_19__["MessageDisplayComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/countdown-type-form/countdown-type-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/countdown-type-form/countdown-type-form.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZG93bi10eXBlLWZvcm0vY291bnRkb3duLXR5cGUtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/countdown-type-form/countdown-type-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/countdown-type-form/countdown-type-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: CountdownTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownTypeFormComponent", function() { return CountdownTypeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let CountdownTypeFormComponent = class CountdownTypeFormComponent {
    constructor() {
        this.period = null;
        this.isNew = true;
        this.timerData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.period) {
            this.isNew = false;
        }
        else {
            this.isNew = true;
        }
        let values = this.parsePeriod();
        this.countdown = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](values.amount),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](values.unit)
        });
        this.units = ["days", "hours", "minutes"];
        this.emit("amount");
        this.emit("unit");
    }
    parsePeriod() {
        if (this.period) {
            let split = this.period.split('-');
            if (split[0] === 'i') {
                return { amount: parseInt(split[1]), unit: split[2] };
            }
        }
        return { amount: 1, unit: 'hours' };
    }
    emit(property) {
        this.timerData.emit({ property: property, value: this.countdown.value[property] });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CountdownTypeFormComponent.prototype, "period", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CountdownTypeFormComponent.prototype, "timerData", void 0);
CountdownTypeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countdown-type-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./countdown-type-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/countdown-type-form/countdown-type-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./countdown-type-form.component.scss */ "./src/app/countdown-type-form/countdown-type-form.component.scss")).default]
    })
], CountdownTypeFormComponent);



/***/ }),

/***/ "./src/app/detail-timer/detail-timer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/detail-timer/detail-timer.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC10aW1lci9kZXRhaWwtdGltZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/detail-timer/detail-timer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/detail-timer/detail-timer.component.ts ***!
  \********************************************************/
/*! exports provided: DetailTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTimerComponent", function() { return DetailTimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _timers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timers.service */ "./src/app/timers.service.ts");




let DetailTimerComponent = class DetailTimerComponent {
    constructor(_timers) {
        this._timers = _timers;
    }
    ngOnInit() {
    }
    toggleCompleted(id) {
        this._timers.toggleCompleted(id);
    }
    deleteTimer(id) {
        this._timers.deleteTimer(id);
    }
};
DetailTimerComponent.ctorParameters = () => [
    { type: _timers_service__WEBPACK_IMPORTED_MODULE_2__["TimersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetailTimerComponent.prototype, "timer", void 0);
DetailTimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-timer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail-timer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-timer/detail-timer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail-timer.component.scss */ "./src/app/detail-timer/detail-timer.component.scss")).default]
    })
], DetailTimerComponent);



/***/ }),

/***/ "./src/app/edit-timer/edit-timer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/edit-timer/edit-timer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdGltZXIvZWRpdC10aW1lci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/edit-timer/edit-timer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-timer/edit-timer.component.ts ***!
  \****************************************************/
/*! exports provided: EditTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimerComponent", function() { return EditTimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _timers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timers.service */ "./src/app/timers.service.ts");
/* harmony import */ var src_types_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/types/timer */ "./src/types/timer.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");






let EditTimerComponent = class EditTimerComponent {
    constructor(_route, _timers, _messages) {
        this._route = _route;
        this._timers = _timers;
        this._messages = _messages;
    }
    ngOnInit() {
        this._route.paramMap.subscribe((params) => {
            this.id = params.get('id');
            this._timers.getById(this.id).subscribe((res) => {
                this.timer = new src_types_timer__WEBPACK_IMPORTED_MODULE_4__["Timer"](res);
            }, (err) => {
                console.error("Error:", err);
                this._messages.addError("Error", "Error encountered when retrieving a specified timer. Please see logs for details.");
            });
        });
    }
};
EditTimerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _timers_service__WEBPACK_IMPORTED_MODULE_3__["TimersService"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
EditTimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-timer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-timer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-timer/edit-timer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-timer.component.scss */ "./src/app/edit-timer/edit-timer.component.scss")).default]
    })
], EditTimerComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        this.restrictions = [
            'hideCompleted',
            'important'
        ];
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/indexed-db.service.ts":
/*!***************************************!*\
  !*** ./src/app/indexed-db.service.ts ***!
  \***************************************/
/*! exports provided: IndexedDbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedDbService", function() { return IndexedDbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



const DB_VER = 1;
let IndexedDbService = class IndexedDbService {
    constructor() { }
    initDB(dbName, storeNames) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            if (!('indexedDB' in window)) {
                observer.error("This browser doesn't support IndexedDB. Data saving will not work.");
            }
            else {
                // create or open IndexedDB
                let request = window.indexedDB.open(dbName, DB_VER);
                // handle errors opening DB
                request.onerror = (event) => {
                    observer.error(request.error);
                };
                // handle any DB upgrades
                request.onupgradeneeded = (event) => {
                    let db = event.target.result;
                    storeNames.forEach((store) => {
                        let upgrade = db.createObjectStore(store, { keyPath: 'id', autoIncrement: true });
                        // check for errors when upgrading the store
                        upgrade.onerror = () => {
                            observer.error(upgrade.error);
                        };
                        upgrade.onsuccess = () => {
                            observer.next("DB upgrade was successful!");
                        };
                    });
                    observer.complete();
                };
            }
        });
    }
    upgradeDB(db, storeName, error) {
        let upgrade = db.createObjectStore('timers', { keyPath: 'id', autoIncrement: true });
        // check for errors when upgrading the store
        upgrade.onerror = () => {
            error(upgrade.error);
        };
        upgrade.onsuccess = () => {
            console.log("DB upgrade was successful!");
        };
    }
    getData(dbName, storeName) {
        // prepare the observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            if (!('indexedDB' in window)) {
                observer.error("This browser doesn't support IndexedDB. Data saving will not work.");
            }
            else {
                // create or open IndexedDB
                let request = window.indexedDB.open(dbName, DB_VER);
                // handle errors opening DB
                request.onerror = (event) => {
                    observer.error(request.error);
                };
                // handle any DB upgrades
                request.onupgradeneeded = (event) => {
                    this.upgradeDB(event.target.result, storeName, observer.error);
                };
                // lastly, the success situation; retrieve the data
                request.onsuccess = (event) => {
                    let db = request.result;
                    let transaction = db.transaction(storeName, 'readonly');
                    let store = transaction.objectStore(storeName);
                    let objStoreReq = store.getAll();
                    // data retrieval successful:
                    objStoreReq.onsuccess = (event) => {
                        // resolve
                        event.target.result.forEach((result) => {
                            observer.next(result);
                        });
                        observer.complete();
                    };
                    // data retrieval error:
                    objStoreReq.onerror = (event) => {
                        observer.error(objStoreReq.error);
                    };
                };
            }
        });
    }
    getById(dbName, storeName, id) {
        // prepare the observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            if (!('indexedDB' in window)) {
                observer.error("This browser doesn't support IndexedDB. Data saving will not work.");
            }
            else {
                // create or open IndexedDB
                let request = window.indexedDB.open(dbName, DB_VER);
                // handle errors opening DB
                request.onerror = (event) => {
                    observer.error(request.error);
                };
                // handle any DB upgrades
                request.onupgradeneeded = (event) => {
                    this.upgradeDB(event.target.result, storeName, observer.error);
                };
                // lastly, the success situation; retrieve the data
                request.onsuccess = (event) => {
                    let db = request.result;
                    let transaction = db.transaction(storeName, 'readonly');
                    let store = transaction.objectStore(storeName);
                    let objStoreReq = store.get(id);
                    // data retrieval successful:
                    objStoreReq.onsuccess = (event) => {
                        // resolve
                        observer.next(event.target.result);
                        observer.complete();
                    };
                    // data retrieval error:
                    objStoreReq.onerror = (event) => {
                        observer.error(objStoreReq.error);
                    };
                };
            }
        });
    }
    addOrUpdateOne(dbName, storeName, item) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            if (!('indexedDB' in window)) {
                observer.error("This browser doesn't support IndexedDB. Data saving will not work.");
            }
            else {
                let request = window.indexedDB.open(dbName, DB_VER);
                // handle errors opening DB
                request.onerror = (event) => {
                    observer.error(request.error);
                };
                // handle any DB upgrades
                request.onupgradeneeded = (event) => {
                    this.upgradeDB(event.target.result, storeName, observer.error);
                };
                request.onsuccess = (event) => {
                    let db = request.result;
                    let transaction = db.transaction(storeName, 'readwrite');
                    let store = transaction.objectStore(storeName);
                    store.put(item);
                    transaction.oncomplete = (event) => {
                        // promise resolve here
                        observer.next(event.target.result);
                    };
                    transaction.onerror = (event) => {
                        observer.error(transaction.error);
                    };
                };
            }
        });
    }
    deleteOne(dbName, storeName, id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            let request = window.indexedDB.open(dbName, DB_VER);
            // handle errors opening DB
            request.onerror = (event) => {
                observer.error(request.error);
            };
            // handle any DB upgrades
            request.onupgradeneeded = (event) => {
                this.upgradeDB(event.target.result, storeName, observer.error);
            };
            request.onsuccess = (event) => {
                let db = request.result;
                let transaction = db.transaction(storeName, 'readwrite');
                let store = transaction.objectStore(storeName);
                let objStoreReq = store.delete(id);
                objStoreReq.onsuccess = (event) => {
                    // resolve
                    observer.next(event.target.result);
                };
                objStoreReq.onerror = (event) => {
                    observer.error(objStoreReq.error);
                };
                transaction.onerror = (event) => {
                    observer.error(transaction.error);
                };
            };
        });
    }
    deleteAll(dbName, storeName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            let request = window.indexedDB.open(dbName, DB_VER);
            // handle errors opening DB
            request.onerror = (event) => {
                observer.error(request.error);
            };
            // handle any DB upgrades
            request.onupgradeneeded = (event) => {
                this.upgradeDB(event.target.result, storeName, observer.error);
            };
            request.onsuccess = (event) => {
                let db = request.result;
                let transaction = db.transaction(storeName, 'readwrite');
                let store = transaction.objectStore(storeName);
                let objStoreReq = store.clear();
                objStoreReq.onsuccess = (event) => {
                    // resolve
                    observer.next(event.target.result);
                };
                objStoreReq.onerror = (event) => {
                    observer.error(objStoreReq.error);
                };
                transaction.onerror = (event) => {
                    observer.error(transaction.error);
                };
            };
        });
    }
};
IndexedDbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IndexedDbService);



/***/ }),

/***/ "./src/app/message-display/message-display.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/message-display/message-display.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UtZGlzcGxheS9tZXNzYWdlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/message-display/message-display.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/message-display/message-display.component.ts ***!
  \**************************************************************/
/*! exports provided: MessageDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDisplayComponent", function() { return MessageDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");




let MessageDisplayComponent = class MessageDisplayComponent {
    constructor(_messages) {
        this._messages = _messages;
    }
    ngOnInit() {
    }
    close() {
        this._messages.removeMessage(this.id);
    }
};
MessageDisplayComponent.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageDisplayComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageDisplayComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageDisplayComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageDisplayComponent.prototype, "error", void 0);
MessageDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/message-display/message-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message-display.component.scss */ "./src/app/message-display/message-display.component.scss")).default]
    })
], MessageDisplayComponent);



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const MAX_MESSAGES = 5;
const ONE_MINUTE = 60000;
let MessageService = class MessageService {
    constructor() {
        this.messages = [];
        this.timers = [];
    }
    getMessages() {
        return this.messages;
    }
    addMessage(title, message, error, delay) {
        if (!delay) {
            delay = ONE_MINUTE;
        }
        let id = generate();
        this.messages.push({
            id: id,
            title: title,
            message: message,
            error: error
        });
        this.timers[id] = setTimeout(() => {
            this.removeMessage(id);
        }, delay);
        if (this.messages.length > MAX_MESSAGES) {
            clearTimeout(this.timers[this.messages[0].id]);
            this.messages.shift();
        }
    }
    addNotice(title, message, delay) {
        this.addMessage(title, message, false, delay);
    }
    addError(title, message, delay) {
        this.addMessage(title, message, true, delay);
    }
    removeMessage(id) {
        for (let [index, msg] of this.messages.entries()) {
            if (msg.id === id) {
                clearTimeout(this.timers[this.messages[index].id]);
                this.messages.splice(index, 1);
                break;
            }
        }
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);

// ID generator
function partial() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(36);
}
function generate() {
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += partial();
    }
    return id;
}


/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



let MessagesComponent = class MessagesComponent {
    constructor(_messages) {
        this._messages = _messages;
    }
    ngOnInit() {
        this.messages = this._messages.getMessages();
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")).default]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/schedule-type-form/schedule-type-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/schedule-type-form/schedule-type-form.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlLXR5cGUtZm9ybS9zY2hlZHVsZS10eXBlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/schedule-type-form/schedule-type-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/schedule-type-form/schedule-type-form.component.ts ***!
  \********************************************************************/
/*! exports provided: ScheduleTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleTypeFormComponent", function() { return ScheduleTypeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





const SELECT_ALL = "Select All Days";
const DESELECT_ALL = "Deselect All Days";
let ScheduleTypeFormComponent = class ScheduleTypeFormComponent {
    constructor() {
        this.isNew = false;
        this.timerData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.period) {
            this.isNew = false;
        }
        else {
            this.isNew = true;
        }
        let data = this.parsePeriod();
        this.daysToggleLabel = SELECT_ALL;
        this.schedule = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            useUTC: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.useUTC),
            hour: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.hour),
            minute: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.minute),
            ampm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.ampm),
            dayOfWeek: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                sunday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.dayOfWeek.sunday),
                monday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.dayOfWeek.monday),
                tuesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.dayOfWeek.tuesday),
                wednesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.dayOfWeek.wednesday),
                thursday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.dayOfWeek.thursday),
                friday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.dayOfWeek.friday),
                saturday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.dayOfWeek.saturday),
            })
        });
        this.emit('useUTC');
        this.emit('hour');
        this.emit('minute');
        this.emit('dayOfWeek');
    }
    parsePeriod() {
        if (this.period) {
            let split = this.period.split('-');
            if (split[0] === 'r') {
                let result = {
                    // period strings are in 24h, use 'am'
                    ampm: 'am',
                    useUTC: split[1] === 'g' ? true : false,
                    // 2: year // unused
                    // 3: Months // unused
                    // 4: Day of Month // unused
                    // 5: Hours
                    hour: split[1] === 'g' ? parseInt(split[5]) - (new Date()).getTimezoneOffset() / 60 : split[5],
                    // 6: Minutes
                    minute: split[6],
                    // 7: Days of Week
                    dayOfWeek: {
                        sunday: split[7].includes('0') ? true : false,
                        monday: split[7].includes('1') ? true : false,
                        tuesday: split[7].includes('2') ? true : false,
                        wednesday: split[7].includes('3') ? true : false,
                        thursday: split[7].includes('4') ? true : false,
                        friday: split[7].includes('5') ? true : false,
                        saturday: split[7].includes('6') ? true : false,
                    }
                };
                return result;
            }
        }
        return {
            useUTC: true,
            hour: '',
            minute: '',
            ampm: 'am',
            dayOfWeek: {
                sunday: false,
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: false
            }
        };
    }
    emit(property) {
        if (property === 'dayOfWeek') {
            this.setDayOfWeekString();
            this.timerData.emit({ property: property, value: this.daysOfWeek });
        }
        else {
            this.timerData.emit({ property: property, value: this.schedule.value[property] });
        }
    }
    setDayOfWeekString() {
        let dow = this.schedule.value.dayOfWeek;
        this.daysOfWeek = '';
        this.daysOfWeek += dow.sunday ? '0' : '';
        this.daysOfWeek += dow.monday ? '1' : '';
        this.daysOfWeek += dow.tuesday ? '2' : '';
        this.daysOfWeek += dow.wednesday ? '3' : '';
        this.daysOfWeek += dow.thursday ? '4' : '';
        this.daysOfWeek += dow.friday ? '5' : '';
        this.daysOfWeek += dow.saturday ? '6' : '';
        if (this.daysOfWeek === '') {
            this.daysToggleLabel = SELECT_ALL;
        }
        else {
            this.daysToggleLabel = DESELECT_ALL;
        }
    }
    toggleDays() {
        if (this.daysToggleLabel === SELECT_ALL) {
            this.schedule.patchValue({
                dayOfWeek: {
                    sunday: true,
                    monday: true,
                    tuesday: true,
                    wednesday: true,
                    thursday: true,
                    friday: true,
                    saturday: true,
                }
            });
            this.daysToggleLabel = DESELECT_ALL;
        }
        else {
            this.schedule.patchValue({
                dayOfWeek: {
                    sunday: false,
                    monday: false,
                    tuesday: false,
                    wednesday: false,
                    thursday: false,
                    friday: false,
                    saturday: false,
                }
            });
            this.daysToggleLabel = SELECT_ALL;
        }
        this.emit("dayOfWeek");
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScheduleTypeFormComponent.prototype, "period", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ScheduleTypeFormComponent.prototype, "timerData", void 0);
ScheduleTypeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schedule-type-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule-type-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-type-form/schedule-type-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule-type-form.component.scss */ "./src/app/schedule-type-form/schedule-type-form.component.scss")).default]
    })
], ScheduleTypeFormComponent);



/***/ }),

/***/ "./src/app/settings.service.ts":
/*!*************************************!*\
  !*** ./src/app/settings.service.ts ***!
  \*************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _assets_data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/data/settings */ "./src/assets/data/settings.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");





let SettingsService = class SettingsService {
    constructor(_cookies, _messages) {
        this._cookies = _cookies;
        this._messages = _messages;
    }
    init() {
        this.settings = {};
        _assets_data_settings__WEBPACK_IMPORTED_MODULE_3__["settings"].forEach((item) => {
            this.settings[item.name] = {
                text: item.text,
                value: (this._cookies.get(item.name) === 'true')
            };
        });
    }
    getSettings() {
        if (this.settings === undefined) {
            this.init();
        }
        return this.settings;
    }
    updateSetting(name, value) {
        if (this.settings[name]) {
            this.settings[name].value = value;
            this._cookies.set(name, value.toString());
            let updateStr = "Settings updated: " + this.settings[name].text + " has been ";
            updateStr += value ? " enabled." : " disabled.";
            this._messages.addNotice("Success", updateStr);
        }
    }
};
SettingsService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingsService);



/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _indexed_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../indexed-db.service */ "./src/app/indexed-db.service.ts");
/* harmony import */ var _assets_data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/data/settings */ "./src/assets/data/settings.ts");






let SettingsComponent = class SettingsComponent {
    constructor(_settingsServ, _idbServ) {
        this._settingsServ = _settingsServ;
        this._idbServ = _idbServ;
    }
    ngOnInit() {
        this.settingsList = [..._assets_data_settings__WEBPACK_IMPORTED_MODULE_5__["settings"]];
        this.settings = this._settingsServ.getSettings();
        _assets_data_settings__WEBPACK_IMPORTED_MODULE_5__["settings"].forEach((setting) => {
            this.settings[setting.name].control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.settings[setting.name].value);
        });
    }
    updateSetting(item) {
        this._settingsServ.updateSetting(item, this.settings[item].control.value);
    }
    deleteAllData() {
        this._idbServ.deleteAll("kurikia", "timers").subscribe((res) => {
            console.log("Delete All Result:", res);
        }, (err) => {
            console.error("Delete All Error:", err);
        }, () => {
            console.log("Delete All Complete");
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _indexed_db_service__WEBPACK_IMPORTED_MODULE_4__["IndexedDbService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/slim-timer/slim-timer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/slim-timer/slim-timer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaW0tdGltZXIvc2xpbS10aW1lci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/slim-timer/slim-timer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/slim-timer/slim-timer.component.ts ***!
  \****************************************************/
/*! exports provided: SlimTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlimTimerComponent", function() { return SlimTimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _timers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timers.service */ "./src/app/timers.service.ts");





let SlimTimerComponent = class SlimTimerComponent {
    constructor(_timers) {
        this._timers = _timers;
        this.info = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    showInfo() {
        this.info.emit(this.timer.id);
    }
    toggleCompleted(id) {
        this._timers.toggleCompleted(id);
    }
};
SlimTimerComponent.ctorParameters = () => [
    { type: _timers_service__WEBPACK_IMPORTED_MODULE_2__["TimersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SlimTimerComponent.prototype, "timer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SlimTimerComponent.prototype, "info", void 0);
SlimTimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slim-timer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slim-timer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slim-timer/slim-timer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slim-timer.component.scss */ "./src/app/slim-timer/slim-timer.component.scss")).default]
    })
], SlimTimerComponent);



/***/ }),

/***/ "./src/app/timer-form/timer-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/timer-form/timer-form.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyLWZvcm0vdGltZXItZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/timer-form/timer-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/timer-form/timer-form.component.ts ***!
  \****************************************************/
/*! exports provided: TimerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerFormComponent", function() { return TimerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _timers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timers.service */ "./src/app/timers.service.ts");
/* harmony import */ var _types_interval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/interval */ "./src/types/interval.ts");
/* harmony import */ var _types_schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/schedule */ "./src/types/schedule.ts");
/* harmony import */ var src_types_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/types/timer */ "./src/types/timer.ts");








let TimerFormComponent = class TimerFormComponent {
    constructor(_timerService) {
        this._timerService = _timerService;
        this.timer = null;
    }
    ngOnInit() {
        if (this.timer === null) {
            this.isNew = true;
            this.timer = new src_types_timer__WEBPACK_IMPORTED_MODULE_6__["Timer"]({
                title: '',
                category: '',
                description: '',
                required: false,
                isCompleted: false,
                completed: [],
                period: 'nr'
            });
        }
        else {
            this.isNew = false;
        }
        this.createFormGroup();
        this.countdownValues = new _types_interval__WEBPACK_IMPORTED_MODULE_4__["Interval"]();
        this.scheduleValues = new _types_schedule__WEBPACK_IMPORTED_MODULE_5__["Schedule"]();
    }
    createFormGroup() {
        let repeatTypeMap = new Map([
            ['n', 'noRepeat'],
            ['r', 'scheduleRepeat'],
            ['i', 'cdRepeat']
        ]);
        this.timerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.timer.title || ''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.timer.category || ''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.timer.description || ''),
            required: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.timer.required || false),
            isCompleted: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.timer.isCompleted || false),
            repeatType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](repeatTypeMap.get(this.timer.period[0]))
        });
    }
    setPeriod() {
        let setPeriodMap = new Map([
            ['noRepeat', () => {
                    return 'nr';
                }],
            ['cdRepeat', () => {
                    return 'i-' + this.countdownValues.amount + '-' + this.countdownValues.unit;
                }],
            ['scheduleRepeat', () => this.setScheduleRepeat()]
        ]);
        return setPeriodMap.get(this.timerForm.value.repeatType)();
    }
    setScheduleRepeat() {
        let useUTC = this.scheduleValues.useUTC;
        let period = 'r-';
        period += useUTC ? 'g' : 'l';
        period += '-' + "yyyy-mm-dd-";
        // validate/format hours & minutes
        let hours = this.validateHours();
        let minutes = this.validateMinutes();
        if (useUTC) {
            period += this.offsetAdjustment(hours, minutes);
        }
        else {
            // local time
            period += hours + '-' + minutes + '-';
        }
        period += this.scheduleValues.dayOfWeek;
        return period;
    }
    validateHours() {
        let hours;
        if (typeof this.scheduleValues.hour === "string") {
            hours = parseInt(this.scheduleValues.hour);
        }
        else {
            hours = this.scheduleValues.hour;
        }
        if (this.scheduleValues.ampm === "pm") {
            hours += 12;
        }
        return hours;
    }
    validateMinutes() {
        let minutes;
        if (typeof this.scheduleValues.minute === "string") {
            if (this.scheduleValues.minute === '') {
                minutes = 0;
            }
            else {
                minutes = parseInt(this.scheduleValues.minute);
            }
        }
        else {
            minutes = this.scheduleValues.minute;
        }
        return minutes;
    }
    offsetAdjustment(hours, minutes) {
        let offsetTotal = (new Date()).getTimezoneOffset();
        let offsetHours = Math.floor(offsetTotal / 60);
        let offsetMinutes = offsetTotal - (offsetHours * 60);
        return (hours + offsetHours) + '-' + (minutes + offsetMinutes) + '-';
    }
    setIntervalPeriod(event) {
        this.countdownValues[event.property] = event.value;
    }
    setSchedulePeriod(event) {
        this.scheduleValues[event.property] = event.value;
    }
    add() {
        let { title, required, isCompleted, description, category } = this.timerForm.value;
        if (this.isNew) {
            this._timerService.addTimer({
                title: title,
                required: required,
                isCompleted: isCompleted || false,
                period: this.setPeriod(),
                description: description,
                category: category,
                completed: []
            }, false);
        }
        else {
            this._timerService.addTimer({
                id: this.timer.id,
                title: title,
                required: required,
                isCompleted: isCompleted || false,
                period: this.setPeriod(),
                description: description,
                category: category,
                completed: []
            }, true);
        }
    }
};
TimerFormComponent.ctorParameters = () => [
    { type: _timers_service__WEBPACK_IMPORTED_MODULE_3__["TimersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimerFormComponent.prototype, "timer", void 0);
TimerFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timer-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-form/timer-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timer-form.component.scss */ "./src/app/timer-form/timer-form.component.scss")).default]
    })
], TimerFormComponent);



/***/ }),

/***/ "./src/app/timers.service.ts":
/*!***********************************!*\
  !*** ./src/app/timers.service.ts ***!
  \***********************************/
/*! exports provided: TimersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimersService", function() { return TimersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _indexed_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexed-db.service */ "./src/app/indexed-db.service.ts");
/* harmony import */ var _types_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/timer */ "./src/types/timer.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");





let TimersService = class TimersService {
    constructor(_idb, _messages) {
        this._idb = _idb;
        this._messages = _messages;
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }
    init() {
        this.categories = [{
                category: "No Category",
                timers: []
            }];
        this.dashCategories = [{
                category: "No Category",
                timers: []
            }];
        this._idb.getData("kurika", "timers").subscribe((res) => {
            this.setTimer(res);
        }, (err) => {
            console.error("Error retrieving timer data:", err);
            this._messages.addError("Error", "An error was encountered when attempting to retrieve your data. Please see the logs.");
        }, () => {
            this._messages.addNotice("Success", "Timers retrieval complete.");
            this.cleanCategories();
        });
        this.interval = setInterval(() => this.tick(), 10000);
    }
    tick() {
        this.categories.forEach((item) => {
            item.timers.forEach((timer) => {
                if (timer.isCompleted) {
                    timer.tickCountdown(10000);
                }
            });
        });
    }
    setTimer(timer) {
        let n = new _types_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"](timer);
        if (timer.category === undefined || timer.category === '') {
            timer.category = "No Category";
        }
        let i = this.categories.findIndex((category) => category.category === timer.category);
        if (i === -1) {
            this.categories.push({
                category: timer.category,
                timers: [n]
            });
        }
        else {
            this.categories[i].timers.push(n);
        }
        // add to dash array (maybe)
        if (!timer.isCompleted && timer.required) {
            i = this.dashCategories.findIndex((category) => category.category === timer.category);
            if (i === -1) {
                this.dashCategories.push({
                    category: timer.category,
                    timers: [n]
                });
            }
            else {
                this.categories[i].timers.push(n);
            }
        }
    }
    cleanCategories() {
        let toRemove = [];
        this.categories.forEach((category, i) => {
            if (category.timers.length === 0) {
                toRemove.push(i);
            }
        });
        toRemove.reverse().forEach((i) => {
            this.categories.splice(i, 1);
        });
        // reset to clean dashCategories
        toRemove = [];
        this.dashCategories.forEach((category, i) => {
            if (category.timers.length === 0) {
                toRemove.push(i);
            }
        });
        toRemove.reverse().forEach((i) => {
            this.dashCategories.splice(i, 1);
        });
    }
    addTimer(n, update = false) {
        let nTimer = new _types_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"](n);
        if (!update) {
            this.setTimer(nTimer);
        }
        this._idb.addOrUpdateOne("kurika", "timers", nTimer).subscribe(() => {
            this._messages.addNotice("Success", "Your new timer has been saved!");
        }, (err) => {
            console.error("Error saving timer:", err);
            this._messages.addError("Error", "Your new timer has not been saved. Please see the logs.");
        });
    }
    deleteTimer(id) {
        this.categories.forEach((item, i) => {
            item.timers.forEach((timer, j) => {
                if (timer.id === id) {
                    this.categories[i].timers.splice(j, 1);
                    this.cleanCategories();
                }
            });
        });
        this._idb.deleteOne("kurika", "timers", id).subscribe(() => {
            console.log("deleted timer");
            this._messages.addNotice("Success", "Your timer has been deleted.");
        }, (err) => {
            console.error("Error deleting timer:", err);
            this._messages.addError("Error", "There was an error deleting your timer. Please see the logs.");
        }, () => {
            console.log("deleted timer: complete");
        });
    }
    getTimers(restrictions) {
        if (restrictions && restrictions.includes("hideCompleted") && restrictions.includes("important")) {
            return this.dashCategories;
        }
        return this.categories;
    }
    getById(id) {
        return this._idb.getById("kurika", "timers", id);
    }
    toggleCompleted(id) {
        this.categories.forEach((item, i) => {
            item.timers.forEach((timer, j) => {
                if (timer.id === id) {
                    this.categories[i].timers[j].toggleComplete();
                    this._idb.addOrUpdateOne("kurika", "timers", this.categories[i].timers[j]).subscribe(() => {
                        this._messages.addNotice("Success", "Timer status has been updated");
                    }, (err) => {
                        console.log("Update error:", err);
                        this._messages.addError("Error", "Error updating timer status");
                    });
                }
            });
        });
    }
};
TimersService.ctorParameters = () => [
    { type: _indexed_db_service__WEBPACK_IMPORTED_MODULE_2__["IndexedDbService"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
TimersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TimersService);



/***/ }),

/***/ "./src/app/timers/timers.component.scss":
/*!**********************************************!*\
  !*** ./src/app/timers/timers.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVycy90aW1lcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/timers/timers.component.ts":
/*!********************************************!*\
  !*** ./src/app/timers/timers.component.ts ***!
  \********************************************/
/*! exports provided: TimersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimersComponent", function() { return TimersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _timers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timers.service */ "./src/app/timers.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings.service.ts");





let TimersComponent = class TimersComponent {
    constructor(_timers, _settings) {
        this._timers = _timers;
        this._settings = _settings;
        this.dialogIsOpen = false;
        this.dialogData = null;
    }
    ngOnInit() {
        this.getTimers();
        this.settings = this._settings.getSettings();
    }
    getTimers() {
        this.timers = this._timers.getTimers(this.restrictions);
    }
    deleteTimer(id) {
        this._timers.deleteTimer(id);
        if (this.dialogIsOpen && this.dialogData.id === id) {
            this.closeDialog();
        }
    }
    toggleCompleted(id) {
        this._timers.toggleCompleted(id);
    }
    openDialog(id) {
        console.log("Open dialog for ID:", id);
        this.dialogIsOpen = true;
        for (let inTimers of this.timers) {
            for (let timer of inTimers.timers) {
                if (timer.id === id) {
                    this.dialogData = timer;
                }
            }
        }
    }
    closeDialog() {
        this.dialogIsOpen = false;
        this.dialogData = null;
    }
};
TimersComponent.ctorParameters = () => [
    { type: _timers_service__WEBPACK_IMPORTED_MODULE_2__["TimersService"] },
    { type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimersComponent.prototype, "restrictions", void 0);
TimersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timers/timers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timers.component.scss */ "./src/app/timers/timers.component.scss")).default]
    })
], TimersComponent);



/***/ }),

/***/ "./src/assets/data/settings.ts":
/*!*************************************!*\
  !*** ./src/assets/data/settings.ts ***!
  \*************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const settings = [
    {
        name: "hideCompleted",
        text: "Hide completed timers"
    },
    {
        name: "slimTimers",
        text: "Slim timers"
    }
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/types/interval.ts":
/*!*******************************!*\
  !*** ./src/types/interval.ts ***!
  \*******************************/
/*! exports provided: Interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return Interval; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Interval {
    constructor(amount, unit) {
        this.amount = amount || undefined;
        this.unit = unit || undefined;
    }
}


/***/ }),

/***/ "./src/types/schedule.ts":
/*!*******************************!*\
  !*** ./src/types/schedule.ts ***!
  \*******************************/
/*! exports provided: Schedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return Schedule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Schedule {
    constructor(useUTC, hour, minute, dayOfWeek) {
        this.useUTC = useUTC || undefined;
        this.hour = hour || undefined;
        this.minute = minute || undefined;
        this.dayOfWeek = dayOfWeek || undefined;
    }
}


/***/ }),

/***/ "./src/types/timer.ts":
/*!****************************!*\
  !*** ./src/types/timer.ts ***!
  \****************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/*
  period shoud be set to:

  i-XX-unit:
    interval XX weeks / interval XX hours
  r-x-yyyy-mm-dd-hh-mm-#dow:
    regular-(local/global)-year-month-day-hour-minute-# day of week
    where x is 'l' or 'g'
  nr
    no repeat

  these strings will be parsed out for dynamic resets
  year/month are not planned to be used right now, but there in case I do decide to use them
  day might be used, undecided (set to 0)
  hours used, as in: 15 UTC for daily/8 UTC for weekly
  # day of week: useful for "do on specific days" such as weekly reset, fashion report, etc.
*/
class Timer {
    constructor(n) {
        this.id = n.id || generate();
        this.title = n.title;
        this.required = n.required;
        this.category = n.category;
        this.description = n.description;
        this.isCompleted = n.isCompleted;
        if (this.isCompleted) {
            if (this.completed === undefined || this.completed.length === 0)
                this.completed = [new Date()];
        }
        else {
            this.completed = [...n.completed];
        }
        this.period = n.period;
        this.resetTime = n.resetTime || null;
        if (this.resetTime !== null) {
            this.checkReset();
        }
        if (this.isCompleted && this.resetTime === null) {
            this.setReset();
        }
    }
    toggleComplete() {
        this.isCompleted = !this.isCompleted;
        if (this.isCompleted) {
            this.completed.push(new Date());
            if (this.completed.length > 7) {
                this.completed.shift();
            }
            this.setReset();
            // generate a countdown
        }
        else {
            this.completed.pop();
        }
    }
    checkReset() {
        if (this.period === 'nr') {
            return;
        }
        // if current time is MORE than `resetTime`, reset
        if ((new Date()).valueOf() > this.resetTime.valueOf()) {
            this.isCompleted = false;
            this.resetTime = null;
            this.countdown = null;
            this.countdownMS = null;
        }
        else {
            if (!this.countdown || !this.countdownMS) {
                this.setCountdown();
            }
        }
    }
    setCountdown() {
        if (this.period !== 'nr') {
            this.countdownMS = this.resetTime.valueOf() - (new Date()).valueOf();
            this.updateCountdownString();
        }
        else {
            this.countdown = "none";
        }
    }
    tickCountdown(amount) {
        if (this.countdownMS) {
            this.countdownMS -= amount;
        }
        if (this.countdownMS <= 0) {
            this.checkReset();
        }
        else {
            this.updateCountdownString();
        }
    }
    updateCountdownString() {
        if (this.period === 'nr') {
            this.countdown = "none";
            return;
        }
        let remainingMS = this.countdownMS;
        let dayMS = 1000 * 60 * 60 * 24;
        let hourMS = 1000 * 60 * 60;
        let minuteMS = 1000 * 60;
        let secondMS = 1000;
        let days = Math.floor(remainingMS / dayMS);
        remainingMS -= days * dayMS;
        let hours = Math.floor(remainingMS / hourMS);
        remainingMS -= hours * hourMS;
        // create the string next
        let cdString = "";
        if (days > 0) {
            cdString += days + " days";
            if (hours > 0) {
                cdString += " and " + hours + " hours";
            }
        }
        else {
            let minutes = Math.floor(remainingMS / minuteMS);
            remainingMS -= minutes * minuteMS;
            let seconds;
            if (remainingMS >= 10000) {
                seconds = Math.floor(remainingMS / secondMS);
            }
            else {
                seconds = 0;
            }
            // don't care about anything remaining after seconds
            cdString += hours.toString().padStart(2, "0") + ":";
            cdString += minutes.toString().padStart(2, "0") + ":";
            cdString += seconds.toString().padStart(2, "0");
        }
        this.countdown = "Resets in " + cdString;
    }
    setReset() {
        let reset = this.period.split('-');
        this.resetTime = new Date();
        switch (reset[0]) {
            case 'nr':
                // no reset: nothing happens!
                break;
            case 'i':
                // reset after reset[1] amount of reset[2] units
                let amount = parseInt(reset[1]);
                switch (reset[2]) {
                    case "minutes":
                        this.resetTime.setMinutes(this.resetTime.getMinutes() + amount);
                        break;
                    case "hours":
                        this.resetTime.setHours(this.resetTime.getHours() + amount);
                        break;
                    case "days":
                        this.resetTime.setDate(this.resetTime.getDate() + amount);
                        break;
                    default:
                        console.error(`ERROR: interval unit ${reset[2]} not recognized.`);
                }
                break;
            case 'r':
                /*
                  0: 'r(g/l)'
                  1: global/local
                  2: year // currently unused
                  3: month // currently unused
                  4: day of month // currently unused
                  5: hours
                  6: minutes
                  7: days of week
                */
                let useUTC = false;
                if (reset[1] === 'g') {
                    useUTC = true;
                }
                // reset[2] (unused)
                // reset[3] (unused)
                // reset[4] (unused)
                let hours = parseInt(reset[5]);
                let minutes = parseInt(reset[6]);
                let daysofweek = reset[7].split('').map(str => parseInt(str));
                // calculate & set the date
                this.resetTime.setDate(this.resetTime.getDate() + this.distance(daysofweek, hours, useUTC));
                if (useUTC) {
                    this.resetTime.setUTCHours(hours);
                    this.resetTime.setUTCMinutes(minutes);
                }
                else {
                    this.resetTime.setHours(hours);
                    this.resetTime.setMinutes(minutes);
                }
                this.resetTime.setSeconds(0);
                this.resetTime.setMilliseconds(0);
                break;
            default:
                console.error("Errors were made in setReset()'s switch block!", reset[0]);
        }
        this.setCountdown();
    }
    distance(daysofweek, hours, isUTC) {
        const DAYS_IN_WEEK = 7;
        // this logic block is specifically for Days of Week
        let index;
        let distance;
        // if today is a reset day
        if (daysofweek.indexOf(this.resetTime.getDay()) > -1) {
            // get the index of the day of week
            index = daysofweek.indexOf(this.resetTime.getDay());
            // if the target hours are later than current hour:
            // make sure to check against UTC if the timer is Global
            let currentHours;
            if (isUTC) {
                currentHours = this.resetTime.getUTCHours();
            }
            else {
                currentHours = this.resetTime.getHours();
            }
            if (currentHours >= hours) {
                if (daysofweek.length === 1) {
                    // when there's only one day, set this.resetTime to the next occurance
                    distance = 7;
                }
                else {
                    // set the reset to the next day
                    index++;
                    distance = (DAYS_IN_WEEK + daysofweek[index] - this.resetTime.getDay()) % 7;
                }
            }
            else {
                // when the hours haven't passed, it's the same day.
                distance = 0;
            }
        }
        else {
            // get the next day of week from today, and use it as the index
            for (let day of daysofweek) {
                if (day > this.resetTime.getDay()) {
                    distance = (DAYS_IN_WEEK + day - this.resetTime.getDay()) % 7;
                    break;
                }
            }
            // for loop will fail to set day if the next occurance has already passed
            if (distance === undefined) {
                distance = (DAYS_IN_WEEK + daysofweek[0] - this.resetTime.getDay()) % 7;
            }
        }
        return distance;
    }
}
// ID generator
function partial() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(36);
}
function generate() {
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += partial();
    }
    return id;
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ceg94\Development\kurika-tasks\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map