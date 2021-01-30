(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\angular_asignment\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AppComponent {
    constructor() {
        this.title = 'assignment';
        // resizeEvent = (event: any): void => {
        // 	console.log('hi');
        // }
        this.scrollEvent = (event) => {
            const n = event.srcElement.scrollingElement.scrollTop;
            if (n >= 50) {
                document.getElementById('header').style.background = 'white';
                document.getElementById('header').style.position = 'fixed';
                document.getElementById('header').style.width = '100%';
                document.getElementById('header').style.float = 'left';
                document.getElementById('header').style.zIndex = '11111';
                document.getElementById('header_content_holder').style.padding = '0%';
                document.getElementById('banner_content_holder').style.paddingTop = '144px';
            }
            else {
                document.getElementById('header').style.background = '';
                document.getElementById('header').style.position = '';
                document.getElementById('header').style.width = '';
                document.getElementById('header').style.float = '';
                document.getElementById('header').style.zIndex = '';
                document.getElementById('header_content_holder').style.padding = '1.5% 0%';
                document.getElementById('banner_content_holder').style.paddingTop = '';
            }
            console.log(event);
        };
    }
    ngOnInit() {
        window.addEventListener('scroll', this.scrollEvent, true);
        window.addEventListener('onresize', this.resizeEvent, true);
    }
    ngOnDestroy() {
        window.removeEventListener('scroll', this.scrollEvent, true);
        window.removeEventListener('onresize', this.resizeEvent, true);
    }
    showRangeValue(element) {
        console.log(element);
        console.log(element.getAttribute('source'));
        if (element.getAttribute('source') == 'income') {
            let input_range_value = '<i class="fa fa-inr" aria-hidden="true"></i>' + element.value + '000';
            element.previousElementSibling.innerHTML = input_range_value;
        }
        else {
            let input_range_value = '<i class="fa fa-inr" aria-hidden="true"></i>' + element.value + '00';
            element.previousElementSibling.innerHTML = input_range_value;
        }
    }
    openMobileMenu() {
        let mobile_menu = document.getElementById('mobile_menu');
        if (mobile_menu.style.display == 'block') {
            mobile_menu.style.display = 'none';
        }
        else {
            mobile_menu.style.display = 'block';
        }
    }
    resizeEvent(event) {
        if (event.srcElement.innerWidth > 850) {
            document.getElementById('mobile_menu').style.display = 'none';
        }
    }
    toggleCheckBox() {
        if (document.getElementById('custom_checkbox').style.background != 'blue') {
            document.getElementById('custom_checkbox').style.background = 'blue';
            document.getElementById('custom_checkbox_boll').style.marginLeft = '50%';
            // document.getElementById("loan_checkbox").checked = true;
            console.log(document.getElementById("loan_checkbox"));
        }
        else {
            document.getElementById('custom_checkbox').style.background = 'grey';
            document.getElementById('custom_checkbox_boll').style.marginLeft = '5%';
            // document.getElementById("loan_checkbox").checked = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 158, vars: 0, consts: [[1, "main_banner", 3, "resize"], ["id", "header", 1, "header"], ["id", "header_content_holder", 1, "header_content_holder", "container"], ["src", "assets/images/logo.png", "alt", "", 1, "company_logo"], [1, "navigation_bar"], [1, "hamburgur_menu", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "get_started_btn", "menu_item"], [1, "header_login_btn", "menu_item"], [1, "menu_item"], ["id", "mobile_menu", 1, "mobile_menu"], [1, "mobile_menu_item"], ["id", "banner_content_holder", 1, "banner_content_holder", "container"], [1, "banner_left_section"], [1, "banner_heading_container"], [1, "heading_border"], [1, "banner_image", "position_rel"], ["src", "assets/images/banner_image.png", "alt", ""], ["src", "assets/images/dots.png", 1, "floating_dots"], [1, "banner_right_section"], [1, "eligibility_calculator_container", "position_rel"], [1, "calculator_heading"], [1, "calculator_holder"], [1, "income_section", "field_block"], ["for", ""], [1, "income_value", "display_value"], ["aria-hidden", "true", 1, "fa", "fa-inr"], ["type", "range", "min", "100", "max", "300", "step", "1", "value", "0", "source", "income", 3, "input"], ["refEl", ""], [1, "range_label_holder"], [1, "low_range_holder"], [1, "high_range_holder"], [1, "expense_section", "field_block"], [1, "expense_value", "display_value"], ["type", "range", "min", "100", "max", "300", "step", "1", "value", "0", "source", "expense", 3, "input"], ["refEl2", ""], [1, "repayment_section", "field_block"], ["name", "", "id", "", 1, "input_style"], ["value", ""], [1, "loans_section", "flex", "field_block"], [1, "loan_label"], ["type", "checkbox", "id", "loan_checkbox", 1, "loan_checkbox"], ["id", "custom_checkbox", 1, "custom_checkbox", 3, "click"], ["id", "custom_checkbox_boll", 1, "custom_checkbox_boll"], [1, "emi_section", "field_block"], ["type", "text", "placeholder", "15,000", 1, "input_style"], ["src", "assets/images/dots.png", 1, "floating_dots_calc"], [1, "calculator_result_display"], [1, "result_display"], [1, "loan_result_section", "result_block"], [1, "result_heading"], [1, "emi_result_section", "result_block"], [1, "result_btn"], [1, "section_one"], [1, "container", "flex"], [1, "card_container_holder"], [1, "card_holder_block"], [1, "card"], [1, "card_image_parent"], [1, "card_image_holder"], ["src", "assets/images/Get_Paid_Instantly.png", 1, "card_image"], [1, "card_title"], [1, "card_discription"], ["src", "assets/images/Low_interest_rate.png", 1, "card_image"], ["src", "assets/images/Secure_Payments.png", 1, "card_image"], [1, "card", "card_margin_top"], ["src", "assets/images/freelancer_feature.png", 1, "card_image"], ["src", "assets/images/Covid.png", 1, "card_image"], [1, "section_form"], [1, "form_holder"], [1, "form_heading"], [1, "form_divider"], [1, "form_content", "card_discription"], [1, "get_open_account"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_0_listener($event) { return ctx.resizeEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_5_listener() { return ctx.openMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "We make it Super Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Eligibility Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Monthly Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_Template_input_input_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx.showRangeValue(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 1,00,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 3,00,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Monthly Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_Template_input_input_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65); return ctx.showRangeValue(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Repayment Tenure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "1 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "3 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Do you have any existing loans?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_80_listener() { return ctx.toggleCheckBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "EMI of existing loan [optional]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Loan Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " 1,00,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Your EMI will be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " 15,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " GET MONEY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Quick cash disbursement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Get tirms loans that your business needs within 72 hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Quick cash disbursement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Get tirms loans that your business needs within 72 hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Quick cash disbursement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Get tirms loans that your business needs within 72 hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Quick cash disbursement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Get tirms loans that your business needs within 72 hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Quick cash disbursement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Get tirms loans that your business needs within 72 hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Boost your business with Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Get your hands on a term loan that\u2019s crafted for your business ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Get An Open Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main_banner[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    background-image: url('circle_small.png') , url('circle.png');\r\n    background-size: 38% 64%, 73% 88%;\r\n    background-position: -27% 45%,158% -137%;\r\n    background-repeat: no-repeat,no-repeat;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n    margin: 0 auto;\r\n    padding: 1.5% 0%;\r\n}\r\n\r\n.company_logo[_ngcontent-%COMP%] {\r\n\theight: 75px;\r\n    width: 75px;\r\n}\r\n\r\n.navigation_bar[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    float: right;\t\r\n}\r\n\r\n.navigation_bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 100%;\r\n    padding-top: 8px;\r\n}\r\n\r\n.navigation_bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin-left: 45px;\r\n    line-height: 20px;\r\n    padding: 3px;\r\n    float: right;\r\n}\r\n\r\n.header_login_btn[_ngcontent-%COMP%] {\r\n    padding: 4px 18px !important;\r\n    border-radius: 60px 60px 60px 60px;\r\n    text-align: center;\r\n    color: #663398;\r\n    height: 20px;\r\n    overflow: hidden;\r\n    border: 2px solid #663398;\r\n    font-size: 14px;\r\n    line-height: 19px;\r\n    font-weight: bold;\r\n    margin-left: 45px;\r\n    cursor: pointer;\r\n}\r\n\r\n.get_started_btn[_ngcontent-%COMP%] {\r\n    margin-left: 18px !important;\r\n    background: #663398;\r\n    height: 20px;\r\n    overflow: hidden;\r\n    color: white;\r\n\tpadding: 4px 18px !important;\r\n    border-radius: 60px 60px 60px 60px;\r\n    text-align: center;\r\n    border: 2px solid #933c95;\r\n    font-size: 14px;\r\n    line-height: 19px;\r\n    font-weight: bold;\r\n    cursor: pointer;\t\r\n}\r\n\r\n.banner_left_section[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n}\r\n\r\n.banner_right_section[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    padding-top: 5%;\r\n    display: flex;\r\n}\r\n\r\n.banner_heading_container[_ngcontent-%COMP%] {\r\n    width: 58%;\r\n    font-family: sans-serif;\t\r\n    padding: 7% 34px;\r\n}\r\n\r\n.banner_heading_container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin-bottom: 3px;\r\n    font-weight: 100;\r\n    font-family: sans-serif;\r\n    font-size: 25px;\r\n}\r\n\r\n.heading_border[_ngcontent-%COMP%] {\r\n    height: 3px;\r\n    background: black;\r\n    width: 47%;\r\n    border-radius: 21%;\r\n}\r\n\r\n.flex[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n}\r\n\r\n.eligibility_calculator_container[_ngcontent-%COMP%] {\r\n    width: 47%;\r\n    background: white;\r\n    border-radius: 15px;\r\n    float: right;\r\n    font-family: sans-serif;\r\n    margin-left: 22%;\r\n    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\r\n}\r\n\r\n.banner_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 98%;\r\n    padding: 4% 1%;\r\n}\r\n\r\n.position_rel[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n}\r\n\r\n.banner_content_holder[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n}\r\n\r\n.calculator_holder[_ngcontent-%COMP%] {\r\n\tpadding: 11%;\r\n\toverflow: auto;\r\n}\r\n\r\n.calculator_heading[_ngcontent-%COMP%] {\r\n\tpadding: 4%;\r\n    background: #8080800d;\r\n    border-radius: 16px 14px 0px 0px;\r\n    text-align: center;\r\n}\r\n\r\n.field_block[_ngcontent-%COMP%]   .display_value[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    font-size: 19px;\r\n    float: left;\r\n}\r\n\r\n.field_block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\tfont-size: 13px;\r\n    width: 100%;\r\n    float: left;\r\n    padding-bottom: 5px;\r\n    color: #a7a7a7;\r\n}\r\n\r\n.field_block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n}\r\n\r\n.field_block[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n    float: left;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.range_label_holder[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #a7a7bb;\r\n    overflow: auto;\r\n    margin-top: 0px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.low_range_holder[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n}\r\n\r\n.high_range_holder[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%] {\r\n    margin: 10px 0;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]:focus {\r\n\toutline: none;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\r\n\twidth: 100%;\r\n\theight: 5px;\r\n\tcursor: pointer;\r\n\tanimate: 0.2s;\r\n\tbox-shadow: 0px 0px 0px #000000;\r\n\t\r\n\tbackground: #663398;\r\n\tborder-radius: 1px;\r\n\tborder: 0px solid #663398;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n\tbox-shadow: 0px 0px 0px #663398;\r\n\tborder: 1px solid #2497E3;\r\n\theight: 18px;\r\n\twidth: 18px;\r\n\tborder-radius: 25px;\r\n\t\r\n\tbackground: #663398;\r\n\tcursor: pointer;\r\n\t-webkit-appearance: none;\r\n\tmargin-top: -7px;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\r\n\tbackground: #663398;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]::-moz-range-track {\r\n\twidth: 100%;\r\n\theight: 5px;\r\n\tcursor: pointer;\r\n\tanimate: 0.2s;\r\n\tbox-shadow: 0px 0px 0px #663398;\r\n\t\r\n\tbackground: #663398;\r\n\tborder-radius: 1px;\r\n\tborder: 0px solid #663398;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]::-moz-range-thumb {\r\n\tbox-shadow: 0px 0px 0px #663398;\r\n\t\r\n\tborder: 1px solid #663398;\r\n\theight: 18px;\r\n\twidth: 18px;\r\n\tborder-radius: 25px;\r\n\tbackground: #663398;\r\n\tcursor: pointer;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]::-ms-track {\r\n\twidth: 100%;\r\n\theight: 5px;\r\n\tcursor: pointer;\r\n\tanimate: 0.2s;\r\n\tbackground: transparent;\r\n\tborder-color: transparent;\r\n\tcolor: transparent;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]::-ms-fill-lower {\r\n\t\r\n\tbackground: #663398;\r\n\tborder: 0px solid #000000;\r\n\tborder-radius: 2px;\r\n\tbox-shadow: 0px 0px 0px #000000;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]::-ms-fill-upper {\r\n\t\r\n\tbackground: #663398;\r\n\tborder: 0px solid #000000;\r\n\tborder-radius: 2px;\r\n\tbox-shadow: 0px 0px 0px #000000;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]::-ms-thumb {\r\n\tmargin-top: 1px;\r\n\tbox-shadow: 0px 0px 0px #000000;\r\n\tborder: 1px solid #2497E3;\r\n\theight: 18px;\r\n\twidth: 18px;\r\n\tborder-radius: 25px;\r\n\tbackground: #663398;\r\n\tcursor: pointer;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]:focus::-ms-fill-lower {\r\n\tbackground: #663398;\r\n}\r\n\r\ninput[type=range][_ngcontent-%COMP%]:focus::-ms-fill-upper {\r\n\tbackground: #663398;\r\n}\r\n\r\ninput[type=radio][_ngcontent-%COMP%] {\r\n\twidth: auto;\r\n}\r\n\r\n.repayment_section[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n    width: 98%;\r\n    font-size: 17px;\r\n    border: none;\r\n    border-bottom: 1px solid #eee;\r\n    color: #333232;\r\n    padding: 1%;\r\n}\r\n\r\n.input_style[_ngcontent-%COMP%]{\r\n    width: 98%;\r\n    font-size: 17px;\r\n    border: none;\r\n    border-bottom: 1px solid #eee;\r\n    color: #333232;\r\n    padding: 1%;\r\n    outline:none;\r\n}\r\n\r\n.emi_section[_ngcontent-%COMP%] {\r\n\tpadding-bottom: 0px;\r\n}\r\n\r\n.calculator_result_display[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    margin-left: 4px;\r\n    padding: 10% 0%;\r\n}\r\n\r\n.result_display[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n    height: 64%;\r\n    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\r\n    width: 100%;\r\n    background: #663398;\r\n    border-radius: 0px 25px 25px 0px;\r\n    color: white;\r\n    padding: 28% 0%;\r\n}\r\n\r\n.result_btn[_ngcontent-%COMP%] {\r\n    font-size: 1vw;\r\n    padding: 5% 10%;\r\n    background: white;\r\n    width: 40%;\r\n    color: #663398;\r\n    margin: 0 auto;\r\n    border-radius: 20px;\r\n}\r\n\r\n.result_btn[_ngcontent-%COMP%]:hover {\r\n\topacity: 0.5;\r\n\tcursor: pointer;\r\n}\r\n\r\n.get_open_account[_ngcontent-%COMP%] {\r\n\tfont-size: 1.3vw;\r\n    padding: 5% 10%;\r\n    background: white;\r\n    float: left;\r\n    color: #663398;\r\n    border: 1px solid;\r\n    margin-top: 20%;\r\n    border-radius: 36px;\r\n}\r\n\r\n.card_image_holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.bold[_ngcontent-%COMP%] {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.result_block[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n    line-height: 23px;\r\n    font-size: 19px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.section_one[_ngcontent-%COMP%] {\r\n\theight: 100vh;\r\n    margin-top: 8%;\r\n    background-image: url('sol_wave_bg.png');\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.card_container_holder[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    height: auto;\r\n    \r\n    display: flex;\r\n}\r\n\r\n.section_form[_ngcontent-%COMP%] {\r\n\twidth: 40%;\r\n    \r\n}\r\n\r\n.card_holder_block[_ngcontent-%COMP%] {\r\n\toverflow: auto;\r\n    padding-bottom: 2%;\r\n    width: 50%;\r\n}\r\n\r\n.card_margin_top[_ngcontent-%COMP%] {\r\n    margin-top: 35% !important;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    width: 72%;\r\n    height: 22vh;\r\n    background: #f9f9f9;\r\n    margin: 0 auto;\r\n    margin-top: 6%;\r\n    border-radius: 30px;\r\n    padding: 6%;\r\n    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\r\n}\r\n\r\n.card_image_parent[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.card_image_holder[_ngcontent-%COMP%] {\r\n    width: 55px;\r\n    height: 55px;\r\n    float: left;\r\n    border-radius: 50%;\r\n    background: grey;\r\n}\r\n\r\n.card_discription[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n    font-size: 15px;\r\n    color: #c0bcbc;\r\n}\r\n\r\n.card_title[_ngcontent-%COMP%] {\r\n    float: left;\r\n    font-size: 15px;\r\n    padding: 5% 0% 2%;\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.form_holder[_ngcontent-%COMP%] {\r\n    width: 59%;\r\n    margin: 0 auto;\r\n    margin-top: 48%;\r\n    overflow: auto;\r\n}\r\n\r\n.form_heading[_ngcontent-%COMP%] {\r\n\tfont-size: 19px;\r\n    font-family: arial;\r\n    float: left;\r\n}\r\n\r\n.form_heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 2% 0%;\r\n}\r\n\r\n.form_divider[_ngcontent-%COMP%] {\r\n    height: 3px;\r\n    width: 30%;\r\n    background: grey;\r\n    margin: 6% 0%;\r\n    float: left;\r\n}\r\n\r\n.floating_dots[_ngcontent-%COMP%] {\r\n    height: 38px;\r\n    width: 51%;\r\n    position: absolute;\r\n    bottom: -14px;\r\n    right: -76px;\r\n    z-index: -1;\r\n}\r\n\r\n.result_heading[_ngcontent-%COMP%] {\r\n    font-size: 1.3vw;\r\n    color: #eeeeeea1;\r\n}\r\n\r\n.floating_dots_calc[_ngcontent-%COMP%] {\r\n\theight: 38px;\r\n    width: 260px;\r\n    position: absolute;\r\n    bottom: -14px;\r\n    right: -194px;\r\n    z-index: -1;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n\tbackground: #bda0d5;\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   .card_discription[_ngcontent-%COMP%]{\r\n\tcolor: white;\r\n}\r\n\r\n.navigation_bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n\tcolor: #bda0d5;\r\n\tcursor: pointer;\r\n}\r\n\r\n.header_login_btn[_ngcontent-%COMP%]:hover {\r\n\tcolor: white !important;\r\n\tbackground: #663398;\r\n}\r\n\r\n.get_open_account[_ngcontent-%COMP%]:hover {\r\n\tbackground: #663398;\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n}\r\n\r\n.hamburgur_menu[_ngcontent-%COMP%] {\r\n\twidth: 12%;\r\n    color: #663398;\r\n    font-size: 4vw;\r\n    position: absolute;\r\n    top: 23px;\r\n    right: 2%;\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.mobile_menu[_ngcontent-%COMP%] {\r\n\twidth: 83%;\r\n    position: absolute;\r\n    background: #663398;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    z-index: 1111111;\r\n    display: none;\r\n}\r\n\r\n.mobile_menu_item[_ngcontent-%COMP%] {\r\n\tcolor: white;\r\n    padding: 2%;\r\n}\r\n\r\n.mobile_menu_item[_ngcontent-%COMP%]:hover {\r\n\tborder-bottom: 1px solid grey;\r\n\tcolor: grey;\r\n\tcursor: pointer;\r\n}\r\n\r\n.custom_checkbox[_ngcontent-%COMP%] {\r\n\twidth: 50px;\r\n    height: 20px;\r\n    background: grey;\r\n    border-radius: 15px;\r\n}\r\n\r\n.custom_checkbox_boll[_ngcontent-%COMP%] {\r\n    margin-top: 1px;\r\n    margin-left: 5%;\r\n    height: 18px;\r\n    width: 20px;\r\n    border-radius: 50%;\r\n    background: white;\r\n    float: left;\r\n}\r\n\r\n.loan_checkbox[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n}\r\n\r\n@media only screen and (min-width: 850px) {\r\n\t.mobile_menu[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 850px) {\r\n\t.banner_content_holder[_ngcontent-%COMP%] {\r\n\t    display: inherit;\r\n\t    float: left;\r\n\t    margin-left: 7%;\r\n\t}\r\n\r\n\t.banner_heading_container[_ngcontent-%COMP%] {\r\n\t\tpadding: 0% 5px;\r\n\t}\r\n\r\n\t.navigation_bar[_ngcontent-%COMP%] {\r\n\t    width: 62%;\r\n\t}\r\n\r\n\t.banner_left_section[_ngcontent-%COMP%] {\r\n\t    width: 84%;\r\n\t    float: left;\r\n\t}\r\n\r\n\t.banner_right_section[_ngcontent-%COMP%] {\r\n\t    width: 98%;\r\n\t    float: left;\r\n        margin-bottom: 8%;\r\n\t}\r\n\r\n\t.eligibility_calculator_container[_ngcontent-%COMP%] {\r\n\t\tmargin-left: 2%;\r\n\t\twidth: 62%;\r\n\t}\r\n\r\n\t.section_one[_ngcontent-%COMP%] {\r\n\t\tfloat: left;\r\n\t}\r\n\r\n\t.card_container_holder[_ngcontent-%COMP%] {\r\n\t    width: 100%;\r\n\t}\r\n\r\n\t.section_one[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\r\n\t\tdisplay: inherit;\r\n\t}\r\n\r\n\t.section_form[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.form_holder[_ngcontent-%COMP%] {\r\n\t    margin-top: 17%;\r\n\t}\r\n\r\n\t.get_open_account[_ngcontent-%COMP%] {\r\n\t    font-size: 2.3vw;\r\n\t}\r\n\r\n\t.menu_item[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.hamburgur_menu[_ngcontent-%COMP%] {\r\n\t\tdisplay: block;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDZEQUErRjtJQUMvRixpQ0FBaUM7SUFDakMsd0NBQXdDO0lBQ3hDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2YsNEJBQTRCO0lBQ3pCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQix1RUFBdUU7QUFDM0U7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxXQUFXO0lBQ1IscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtDQUNDLGVBQWU7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztJQUNSLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsYUFBYTtDQUNiLCtCQUErQjtDQUMvQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQywrQkFBK0I7Q0FDL0IseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLHdCQUF3QjtDQUN4QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGVBQWU7Q0FDZixhQUFhO0NBQ2IsK0JBQStCO0NBQy9CLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLCtCQUErQjtDQUMvQiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQiwrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsK0JBQStCO0NBQy9CLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osV0FBVztDQUNYLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7SUFDUixXQUFXO0lBQ1gsdUVBQXVFO0lBQ3ZFLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0lBQ1YsY0FBYztJQUNkLHdDQUF5RDtJQUN6RCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCOztBQUVBO0NBQ0MsVUFBVTtJQUNQLG9CQUFvQjtBQUN4Qjs7QUFFQTtDQUNDLGNBQWM7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVFQUF1RTtBQUMzRTs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztJQUNSLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxVQUFVO0lBQ1AsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtDQUNDLFVBQVU7SUFDUCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0lBQ1QsV0FBVztBQUNmOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztJQUNSLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0M7RUFDQyxhQUFhO0NBQ2Q7QUFDRDs7QUFHQTtDQUNDO0tBQ0ksZ0JBQWdCO0tBQ2hCLFdBQVc7S0FDWCxlQUFlO0NBQ25COztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtLQUNJLFVBQVU7Q0FDZDs7Q0FFQTtLQUNJLFVBQVU7S0FDVixXQUFXO0NBQ2Y7O0NBRUE7S0FDSSxVQUFVO0tBQ1YsV0FBVztRQUNSLGlCQUFpQjtDQUN4Qjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixVQUFVO0NBQ1g7O0NBRUE7RUFDQyxXQUFXO0NBQ1o7O0NBRUE7S0FDSSxXQUFXO0NBQ2Y7O0NBRUE7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxXQUFXO0NBQ1o7O0NBRUE7S0FDSSxlQUFlO0NBQ25COztDQUVBO0tBQ0ksZ0JBQWdCO0NBQ3BCOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsY0FBYztDQUNmO0FBQ0QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9iYW5uZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvY2lyY2xlX3NtYWxsLnBuZ1wiKSAsIHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvY2lyY2xlLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzglIDY0JSwgNzMlIDg4JTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNyUgNDUlLDE1OCUgLTEzNyU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxLjUlIDAlO1xyXG59XHJcblxyXG4uY29tcGFueV9sb2dvIHtcclxuXHRoZWlnaHQ6IDc1cHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxufVxyXG5cclxuLm5hdmlnYXRpb25fYmFyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHRcclxufVxyXG5cclxuLm5hdmlnYXRpb25fYmFyIHVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG5cclxuLm5hdmlnYXRpb25fYmFyIHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaGVhZGVyX2xvZ2luX2J0biB7XHJcbiAgICBwYWRkaW5nOiA0cHggMThweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweCA2MHB4IDYwcHggNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNjYzMzk4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2NjMzOTg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5nZXRfc3RhcnRlZF9idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICM2NjMzOTg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDRweCAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4IDYwcHggNjBweCA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzkzM2M5NTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHRcclxufVxyXG5cclxuLmJhbm5lcl9sZWZ0X3NlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmJhbm5lcl9yaWdodF9zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYmFubmVyX2hlYWRpbmdfY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1OCU7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcdFxyXG4gICAgcGFkZGluZzogNyUgMzRweDtcclxufVxyXG5cclxuLmJhbm5lcl9oZWFkaW5nX2NvbnRhaW5lciBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nX2JvcmRlciB7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQ3JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIxJTtcclxufVxyXG5cclxuLmZsZXgge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5lbGlnaWJpbGl0eV9jYWxjdWxhdG9yX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDclO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tbGVmdDogMjIlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbn1cclxuXHJcbi5iYW5uZXJfaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBwYWRkaW5nOiA0JSAxJTtcclxufVxyXG5cclxuLnBvc2l0aW9uX3JlbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFubmVyX2NvbnRlbnRfaG9sZGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FsY3VsYXRvcl9ob2xkZXIge1xyXG5cdHBhZGRpbmc6IDExJTtcclxuXHRvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNhbGN1bGF0b3JfaGVhZGluZyB7XHJcblx0cGFkZGluZzogNCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODA4MDgwMGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4IDE0cHggMHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZpZWxkX2Jsb2NrIC5kaXNwbGF5X3ZhbHVlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5maWVsZF9ibG9jayBsYWJlbHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGNvbG9yOiAjYTdhN2E3O1xyXG59XHJcblxyXG4uZmllbGRfYmxvY2sgaW5wdXR7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maWVsZF9ibG9jayB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucmFuZ2VfbGFiZWxfaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjYTdhN2JiO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG93X3JhbmdlX2hvbGRlciB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5oaWdoX3JhbmdlX2hvbGRlciB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXJhbmdlXSB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRhbmltYXRlOiAwLjJzO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDA7XHJcblx0LypiYWNrZ3JvdW5kOiAjMjQ5N0UzOyovXHJcblx0YmFja2dyb3VuZDogIzY2MzM5ODtcclxuXHRib3JkZXItcmFkaXVzOiAxcHg7XHJcblx0Ym9yZGVyOiAwcHggc29saWQgIzY2MzM5ODtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDBweCAjNjYzMzk4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyNDk3RTM7XHJcblx0aGVpZ2h0OiAxOHB4O1xyXG5cdHdpZHRoOiAxOHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblx0LypiYWNrZ3JvdW5kOiAjQTFEMEZGOyovXHJcblx0YmFja2dyb3VuZDogIzY2MzM5ODtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdG1hcmdpbi10b3A6IC03cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XHJcblx0YmFja2dyb3VuZDogIzY2MzM5ODtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2sge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRhbmltYXRlOiAwLjJzO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICM2NjMzOTg7XHJcblx0LypiYWNrZ3JvdW5kOiAjMjQ5N0UzOyovXHJcblx0YmFja2dyb3VuZDogIzY2MzM5ODtcclxuXHRib3JkZXItcmFkaXVzOiAxcHg7XHJcblx0Ym9yZGVyOiAwcHggc29saWQgIzY2MzM5ODtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICM2NjMzOTg7XHJcblx0Lypib3JkZXI6IDFweCBzb2xpZCAjMjQ5N0UzOyovXHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzY2MzM5ODtcclxuXHRoZWlnaHQ6IDE4cHg7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcclxuXHRiYWNrZ3JvdW5kOiAjNjYzMzk4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA1cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGFuaW1hdGU6IDAuMnM7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC1sb3dlciB7XHJcblx0LypiYWNrZ3JvdW5kOiAjMjQ5N0UzOyovXHJcblx0YmFja2dyb3VuZDogIzY2MzM5ODtcclxuXHRib3JkZXI6IDBweCBzb2xpZCAjMDAwMDAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtdXBwZXIge1xyXG5cdC8qYmFja2dyb3VuZDogIzI0OTdFMzsqL1xyXG5cdGJhY2tncm91bmQ6ICM2NjMzOTg7XHJcblx0Ym9yZGVyOiAwcHggc29saWQgIzAwMDAwMDtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10aHVtYiB7XHJcblx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDA7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzI0OTdFMztcclxuXHRoZWlnaHQ6IDE4cHg7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcclxuXHRiYWNrZ3JvdW5kOiAjNjYzMzk4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLWxvd2VyIHtcclxuXHRiYWNrZ3JvdW5kOiAjNjYzMzk4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtdXBwZXIge1xyXG5cdGJhY2tncm91bmQ6ICM2NjMzOTg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFkaW9dIHtcclxuXHR3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnJlcGF5bWVudF9zZWN0aW9uIHNlbGVjdHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgIGNvbG9yOiAjMzMzMjMyO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuXHJcbi5pbnB1dF9zdHlsZXtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgIGNvbG9yOiAjMzMzMjMyO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuXHJcbi5lbWlfc2VjdGlvbiB7XHJcblx0cGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmNhbGN1bGF0b3JfcmVzdWx0X2Rpc3BsYXkge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxMCUgMCU7XHJcbn1cclxuXHJcbi5yZXN1bHRfZGlzcGxheSB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDY0JTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYigwIDAgMCAvIDIwJSksIDAgNnB4IDIwcHggMCByZ2IoMCAwIDAgLyAxOSUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjYzMzk4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDI1cHggMjVweCAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyOCUgMCU7XHJcbn1cclxuXHJcbi5yZXN1bHRfYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgcGFkZGluZzogNSUgMTAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgY29sb3I6ICM2NjMzOTg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHRfYnRuOmhvdmVyIHtcclxuXHRvcGFjaXR5OiAwLjU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ2V0X29wZW5fYWNjb3VudCB7XHJcblx0Zm9udC1zaXplOiAxLjN2dztcclxuICAgIHBhZGRpbmc6IDUlIDEwJTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogIzY2MzM5ODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcclxufVxyXG5cclxuLmNhcmRfaW1hZ2VfaG9sZGVyIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvbGQge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucmVzdWx0X2Jsb2NrIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbl9vbmUge1xyXG5cdGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvc29sX3dhdmVfYmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmNhcmRfY29udGFpbmVyX2hvbGRlciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLypiYWNrZ3JvdW5kOiAjZWVlOyovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2VjdGlvbl9mb3JtIHtcclxuXHR3aWR0aDogNDAlO1xyXG4gICAgLypiYWNrZ3JvdW5kOiBwaW5rOyovXHJcbn1cclxuXHJcbi5jYXJkX2hvbGRlcl9ibG9jayB7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY2FyZF9tYXJnaW5fdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDM1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogNzIlO1xyXG4gICAgaGVpZ2h0OiAyMnZoO1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogNiU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2IoMCAwIDAgLyAyMCUpLCAwIDZweCAyMHB4IDAgcmdiKDAgMCAwIC8gMTklKTtcclxufVxyXG5cclxuLmNhcmRfaW1hZ2VfcGFyZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkX2ltYWdlX2hvbGRlciB7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuLmNhcmRfZGlzY3JpcHRpb24ge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNjMGJjYmM7XHJcbn1cclxuXHJcbi5jYXJkX3RpdGxlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNSUgMCUgMiU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtU2VtaUJvbGQ7Ki9cclxufVxyXG5cclxuLmZvcm1faG9sZGVyIHtcclxuICAgIHdpZHRoOiA1OSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQ4JTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybV9oZWFkaW5nIHtcclxuXHRmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZvcm1faGVhZGluZyBoMyB7XHJcbiAgICBtYXJnaW46IDIlIDAlO1xyXG59XHJcblxyXG4uZm9ybV9kaXZpZGVyIHtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICBtYXJnaW46IDYlIDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5mbG9hdGluZ19kb3RzIHtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHdpZHRoOiA1MSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xNHB4O1xyXG4gICAgcmlnaHQ6IC03NnB4O1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5yZXN1bHRfaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDEuM3Z3O1xyXG4gICAgY29sb3I6ICNlZWVlZWVhMTtcclxufVxyXG5cclxuLmZsb2F0aW5nX2RvdHNfY2FsYyB7XHJcblx0aGVpZ2h0OiAzOHB4O1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMTRweDtcclxuICAgIHJpZ2h0OiAtMTk0cHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNiZGEwZDU7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmNhcmRfZGlzY3JpcHRpb257XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbl9iYXIgdWwgbGk6aG92ZXIge1xyXG5cdGNvbG9yOiAjYmRhMGQ1O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlYWRlcl9sb2dpbl9idG46aG92ZXIge1xyXG5cdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQ6ICM2NjMzOTg7XHJcbn1cclxuXHJcbi5nZXRfb3Blbl9hY2NvdW50OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjNjYzMzk4O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oYW1idXJndXJfbWVudSB7XHJcblx0d2lkdGg6IDEyJTtcclxuICAgIGNvbG9yOiAjNjYzMzk4O1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIzcHg7XHJcbiAgICByaWdodDogMiU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9iaWxlX21lbnUge1xyXG5cdHdpZHRoOiA4MyU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjYzMzk4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTExMTExMTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2JpbGVfbWVudV9pdGVtIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLm1vYmlsZV9tZW51X2l0ZW06aG92ZXIge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG5cdGNvbG9yOiBncmV5O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmN1c3RvbV9jaGVja2JveCB7XHJcblx0d2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmN1c3RvbV9jaGVja2JveF9ib2xsIHtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmxvYW5fY2hlY2tib3gge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcclxuXHQubW9iaWxlX21lbnUge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcblx0LmJhbm5lcl9jb250ZW50X2hvbGRlciB7XHJcblx0ICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdCAgICBtYXJnaW4tbGVmdDogNyU7XHJcblx0fVxyXG5cclxuXHQuYmFubmVyX2hlYWRpbmdfY29udGFpbmVyIHtcclxuXHRcdHBhZGRpbmc6IDAlIDVweDtcclxuXHR9XHJcblxyXG5cdC5uYXZpZ2F0aW9uX2JhciB7XHJcblx0ICAgIHdpZHRoOiA2MiU7XHJcblx0fVxyXG5cclxuXHQuYmFubmVyX2xlZnRfc2VjdGlvbiB7XHJcblx0ICAgIHdpZHRoOiA4NCU7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdH1cclxuXHJcblx0LmJhbm5lcl9yaWdodF9zZWN0aW9uIHtcclxuXHQgICAgd2lkdGg6IDk4JTtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcblx0fVxyXG5cclxuXHQuZWxpZ2liaWxpdHlfY2FsY3VsYXRvcl9jb250YWluZXIge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIlO1xyXG5cdFx0d2lkdGg6IDYyJTtcclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uX29uZSB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHR9XHJcblxyXG5cdC5jYXJkX2NvbnRhaW5lcl9ob2xkZXIge1xyXG5cdCAgICB3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uX29uZSAuZmxleCB7XHJcblx0XHRkaXNwbGF5OiBpbmhlcml0O1xyXG5cdH1cclxuXHJcblx0LnNlY3Rpb25fZm9ybSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5mb3JtX2hvbGRlciB7XHJcblx0ICAgIG1hcmdpbi10b3A6IDE3JTtcclxuXHR9XHJcblxyXG5cdC5nZXRfb3Blbl9hY2NvdW50IHtcclxuXHQgICAgZm9udC1zaXplOiAyLjN2dztcclxuXHR9XHJcblxyXG5cdC5tZW51X2l0ZW0ge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5oYW1idXJndXJfbWVudSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map