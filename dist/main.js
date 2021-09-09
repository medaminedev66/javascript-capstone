/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #f1dabf;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  height: 3rem;\r\n  align-items: center;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  flex: 1;\r\n  padding-left: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n.logo img {\r\n  margin-right: 0.5rem;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\nheader nav {\r\n  flex: 2;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  font-size: large;\r\n  font-weight: 400;\r\n  padding: 15px;\r\n}\r\n\r\nheader nav ul li {\r\n  padding: 0 20px;\r\n}\r\n\r\nheader nav ul li a {\r\n  text-decoration: none;\r\n  color: currentColor;\r\n}\r\n\r\nmain {\r\n  margin: 4rem;\r\n}\r\n\r\nmain .menuSection {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nmain .menuSection .menuItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  width: 22%;\r\n  margin: 2rem 4rem;\r\n}\r\n\r\nmain .menuSection .menuitem img {\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\n\r\nmain .menuSection .menuItem p {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n}\r\n\r\nmain .menuSection .menuItem .likeSpan {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\nmain .menuSection .menuItem button {\r\n  margin: 5px 7px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n  border: none;\r\n  border-radius: 5px;\r\n}\r\n\r\nmain .menuSection .menuItem button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n  height: 2.5rem;\r\n  align-items: center;\r\n}\r\n\r\nfooter span {\r\n  padding-left: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.432);\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s, opacity 0.5s;\r\n}\r\n\r\n.active {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.popup {\r\n  overflow-y: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 85%;\r\n  height: 85%;\r\n  background-color: #362417;\r\n  color: white;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar {\r\n  width: 0.3rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 1px grey;\r\n  border-radius: 10px;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb {\r\n  background: #68462d;\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa-times-circle {\r\n  color: #f1dabf;\r\n  align-self: flex-end;\r\n  margin: 0.8rem;\r\n}\r\n\r\n.popImage {\r\n  width: 400px;\r\n  height: auto;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.popTitle {\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.characteristic {\r\n  color: white;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  width: 350px;\r\n  justify-content: space-between;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n}\r\n\r\nh3 {\r\n  margin: 1rem 0 1rem 0;\r\n}\r\n\r\n.createComment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 4rem;\r\n  gap: 0.8rem;\r\n  width: 400px;\r\n}\r\n\r\n.submit {\r\n  width: 15%;\r\n  padding: 0.5rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n.nameInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.commentInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.likeIcon {\r\n  color: red;\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 40%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 90%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #f1dabf;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  height: 3rem;\r\n  align-items: center;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  flex: 1;\r\n  padding-left: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n.logo img {\r\n  margin-right: 0.5rem;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\nheader nav {\r\n  flex: 2;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  font-size: large;\r\n  font-weight: 400;\r\n  padding: 15px;\r\n}\r\n\r\nheader nav ul li {\r\n  padding: 0 20px;\r\n}\r\n\r\nheader nav ul li a {\r\n  text-decoration: none;\r\n  color: currentColor;\r\n}\r\n\r\nmain {\r\n  margin: 4rem;\r\n}\r\n\r\nmain .menuSection {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nmain .menuSection .menuItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  width: 22%;\r\n  margin: 2rem 4rem;\r\n}\r\n\r\nmain .menuSection .menuitem img {\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\n\r\nmain .menuSection .menuItem p {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n}\r\n\r\nmain .menuSection .menuItem .likeSpan {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\nmain .menuSection .menuItem button {\r\n  margin: 5px 7px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n  border: none;\r\n  border-radius: 5px;\r\n}\r\n\r\nmain .menuSection .menuItem button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n  height: 2.5rem;\r\n  align-items: center;\r\n}\r\n\r\nfooter span {\r\n  padding-left: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.432);\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s, opacity 0.5s;\r\n}\r\n\r\n.active {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.popup {\r\n  overflow-y: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 85%;\r\n  height: 85%;\r\n  background-color: #362417;\r\n  color: white;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar {\r\n  width: 0.3rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 1px grey;\r\n  border-radius: 10px;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb {\r\n  background: #68462d;\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa-times-circle {\r\n  color: #f1dabf;\r\n  align-self: flex-end;\r\n  margin: 0.8rem;\r\n}\r\n\r\n.popImage {\r\n  width: 400px;\r\n  height: auto;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.popTitle {\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.characteristic {\r\n  color: white;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  width: 350px;\r\n  justify-content: space-between;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n}\r\n\r\nh3 {\r\n  margin: 1rem 0 1rem 0;\r\n}\r\n\r\n.createComment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 4rem;\r\n  gap: 0.8rem;\r\n  width: 400px;\r\n}\r\n\r\n.submit {\r\n  width: 15%;\r\n  padding: 0.5rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n.nameInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.commentInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.likeIcon {\r\n  color: red;\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 40%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 90%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/meal.svg */ "./src/img/meal.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n    <title>Capstone</title>\r\n    <script src=\"https://kit.fontawesome.com/4f02d055e5.js\" crossorigin=\"anonymous\"></script>\r\n</head>\r\n<body>\r\n    \r\n    <header>\r\n        <div class=\"logo\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"meal\">\r\n            <h1>Restaurant Menu</h1>\r\n        </div>\r\n        \r\n        <nav>\r\n            <ul>\r\n                <li><a href=\"#menuList\" id=\"menuCounter\"></a></li>\r\n                <li><a href=\"#seaList\" id=\"seaFood\"></a></li>\r\n                <li><a href=\"#indianList\" id=\"indianFood\"></a></li>\r\n            </ul>\r\n        </nav>\r\n    </header>\r\n    <main>\r\n       <ul class=\"menuSection\" id=\"menuList\">\r\n       </ul>\r\n       <ul class=\"menuSection\" id=\"indianList\">\r\n      </ul>\r\n      <ul class=\"menuSection\" id=\"seaList\">\r\n    </ul>\r\n    </main>\r\n    <footer>\r\n        <span>Created by Microverse under CC license</span>\r\n    </footer>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countMenuItems = ((meals) => meals.length);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countMenuItems);

/***/ }),

/***/ "./src/getAPI.js":
/*!***********************!*\
  !*** ./src/getAPI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMenuData": () => (/* binding */ getMenuData),
/* harmony export */   "displayMenuItems": () => (/* binding */ displayMenuItems)
/* harmony export */ });
/* harmony import */ var _likeItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeItems.js */ "./src/likeItems.js");
/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/comments.js */ "./src/modules/comments.js");



const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'SdPyDAmNNIPTUZaw27JK';

const getMenuData = async (url) => {
  const score = await fetch(url);
  return score.json();
};
const displayMenuItems = (meals, homeItems) => {
  const mealsArray = meals.meals;
  mealsArray.forEach((m) => {
    let isLiked = false;
    const li = document.createElement('li');
    li.className = 'menuItem';
    li.id = 'innerItem';
    const image = document.createElement('img');
    image.src = m.strMealThumb;
    li.appendChild(image);
    const para = document.createElement('p');
    para.innerText = m.strMeal;

    const aTag = document.createElement('a');
    aTag.className = 'test';
    aTag.id = m.idMeal;

    const icon = document.createElement('i');
    icon.className = 'far fa-heart';
    icon.id = m.idMeal;

    aTag.appendChild(icon);
    para.appendChild(aTag);
    li.appendChild(para);

    const spans = document.createElement('span');
    spans.className = 'likeSpan';
    spans.id = 'spanLike';
    li.appendChild(spans);
    const btn = document.createElement('button');
    btn.innerText = 'Comment';
    btn.id = m.idMeal;
    btn.addEventListener('click', () => {
      (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(m);
    });
    li.appendChild(btn);
    homeItems.appendChild(li);
    if (isLiked === false) {
      aTag.classList.remove('likeIcon');
    } else {
      aTag.classList.add('likeIcon');
    }
    (0,_likeItems_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)(involvementAPI, appId).then((data) => {
      let isFound = false;
      data.forEach((item) => {
        if (item.item_id === m.idMeal) {
          isFound = true;
          spans.innerText = item.likes;
        }
      });
      if (isFound === false) {
        spans.innerText = 0;
      }
    });
    aTag.addEventListener('click', () => {
      if (isLiked === false) {
        (0,_likeItems_js__WEBPACK_IMPORTED_MODULE_0__.likeMeal)(involvementAPI, appId, m.idMeal).then((result) => {
          if (result) {
            (0,_likeItems_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)(involvementAPI, appId).then((data) => {
              data.forEach((item) => {
                if (item.item_id === m.idMeal) {
                  spans.innerText = item.likes;
                }
              });
            });
          }
        });
        isLiked = true;
        aTag.classList.add('likeIcon');
      } else {
        isLiked = false;
        aTag.classList.remove('likeIcon');
      }
    });
  });
};




/***/ }),

/***/ "./src/likeItems.js":
/*!**************************!*\
  !*** ./src/likeItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "likeMeal": () => (/* binding */ likeMeal),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
const likeMeal = async (involvmentAPI, appId, id) => {
  const likes = await fetch(`${involvmentAPI}/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return likes.status === 201;
};

const getLikes = async (involvmentAPI, appId) => {
  const like = await fetch(`${involvmentAPI}/${appId}/likes`);
  const data = await like.json();
  return data;
};




/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentsApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsApi.js */ "./src/modules/commentsApi.js");


const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'SdPyDAmNNIPTUZaw27JK';

const generateInfo = (element, meal) => {
  const category = document.createElement('p');
  const textCategory = meal.strCategory;
  category.innerText = `Category: ${textCategory}`;
  const area = document.createElement('p');
  const textArea = meal.strArea;
  area.innerText = `Area: ${textArea}`;
  const instructions = document.createElement('p');
  const textInstructions = meal.strInstructions;
  instructions.innerText = `Instructions: ${textInstructions}`;
  const children = [category, area, instructions];
  children.forEach((child) => element.appendChild(child));
};

const generateComment = (element, user) => {
  const comment = document.createElement('div');
  const date = document.createElement('p');
  const name = document.createElement('p');
  const theComment = document.createElement('span');
  date.innerText = user.creation_date;
  name.innerText = user.username;
  theComment.innerText = user.comment;
  const children = [date, name, theComment];
  children.forEach((child) => comment.appendChild(child));
  comment.className = 'comment';
  element.appendChild(comment);
};

const generatePopup = (meal) => {
  // commentMeal(involvementAPI, appId, meal.idMeal);

  const container = document.createElement('div');
  const popup = document.createElement('div');
  const closeBtn = document.createElement('i');
  const popImage = document.createElement('img');

  const popTitle = document.createElement('h2');
  const popCharacteristic = document.createElement('div');
  generateInfo(popCharacteristic, meal);

  const commentH3 = document.createElement('h3');
  const comments = document.createElement('div');
  (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(involvementAPI, appId, meal.idMeal).then((data) => {
    data.forEach((user) => {
      generateComment(comments, user);
    });
  });

  const createCommentH3 = document.createElement('h3');
  const createComment = document.createElement('form');
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Name...';
  const commentInput = document.createElement('textarea');
  commentInput.placeholder = 'Comment...';
  const submit = document.createElement('button');
  submit.type = 'button';

  const children = [
    closeBtn,
    popImage,
    popTitle,
    popCharacteristic,
    commentH3,
    comments,
    createCommentH3,
    createComment,
  ];
  const formChildren = [nameInput, commentInput, submit];
  formChildren.forEach((child) => createComment.appendChild(child));
  children.forEach((child) => popup.appendChild(child));
  container.appendChild(popup);
  document.body.appendChild(container);

  container.className = 'container';
  popup.className = 'popup';
  closeBtn.className = 'fas fa-times-circle';
  popImage.className = 'popImage';
  popTitle.className = 'popTitle';
  popCharacteristic.className = 'characteristic';
  createComment.className = 'createComment';
  submit.className = 'submit';
  nameInput.className = 'nameInput';
  commentInput.className = 'commentInput';
  container.classList.add('active');

  commentH3.innerText = 'Comments ()';
  createCommentH3.innerText = 'Create a comment';
  popImage.src = meal.strMealThumb;
  popTitle.innerText = meal.strMeal;
  submit.innerText = 'Submit';

  closeBtn.addEventListener('click', () => {
    document.body.removeChild(container);
  });

  submit.addEventListener('click', () => {
    const d = new Date();
    const user = {
      creation_date: d.toISOString().slice(0, 10),
      username: nameInput.value,
      comment: commentInput.value,
    };
    (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_0__.commentMeal)(
      involvementAPI,
      appId,
      meal.idMeal,
      user.username,
      user.comment,
    );
    generateComment(comments, user);
    nameInput.value = '';
    commentInput.value = '';
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePopup);


/***/ }),

/***/ "./src/modules/commentsApi.js":
/*!************************************!*\
  !*** ./src/modules/commentsApi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentMeal": () => (/* binding */ commentMeal),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
const commentMeal = async (
  involvmentAPI,
  appId,
  mealId,
  nameUser,
  commentUser,
) => {
  const comments = await fetch(`${involvmentAPI}/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: mealId,
      username: nameUser,
      comment: commentUser,
    }),
  });
  return comments.status === 201;
};
const getComments = async (involvmentAPI, appId, mealId) => {
  const comment = await fetch(
    `${involvmentAPI}/${appId}/comments/?item_id=${mealId}`,
  );
  const data = await comment.json();
  return data;
};




/***/ }),

/***/ "./src/img/meal.svg":
/*!**************************!*\
  !*** ./src/img/meal.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2c3d7795cdaf9e06477.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _getAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAPI.js */ "./src/getAPI.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter.js */ "./src/counter.js");





const getDataAPI = 'https://www.themealdb.com/api/json/v1/1/';
const allItems = document.getElementById('menuCounter');
const indianFood = document.getElementById('indianFood');
const seaFood = document.getElementById('seaFood');
const homeItems = document.getElementById('menuList');
const indianItmes = document.getElementById('indianList');
const seaItems = document.getElementById('seaList');

allItems.addEventListener('click', () => {
  indianItmes.style.display = 'none';
  seaItems.style.display = 'none';
  (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}search.php?f=b`).then((meals) => {
    (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, homeItems);
  });
});

(0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}search.php?f=b`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = (0,_counter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mealsA);
  (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, homeItems);
  allItems.innerText = `Home (${itemsLength})`;
});

(0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}filter.php?c=Seafood`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = (0,_counter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mealsA);
  seaFood.innerText = `Sea Food (${itemsLength})`;
});

(0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}filter.php?a=Canadian`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = (0,_counter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mealsA);
  indianFood.innerText = `Candian Food (${itemsLength})`;
});

indianFood.addEventListener('click', () => {
  homeItems.style.display = 'none';
  seaItems.style.display = 'none';
  (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}filter.php?a=Canadian`).then((meals) => {
    (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, indianItmes);
  });
});

seaFood.addEventListener('click', () => {
  homeItems.style.display = 'none';
  indianItmes.style.display = 'none';
  (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}filter.php?c=Seafood`).then((meals) => {
    (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, seaItems);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0s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Ozs7Ozs7OztBQ3JCc0I7QUFDRDtBQUN1QztBQUNsQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBVyxJQUFJLFdBQVc7QUFDNUIsSUFBSSw0REFBZ0I7QUFDcEIsR0FBRztBQUNILENBQUM7O0FBRUQsdURBQVcsSUFBSSxXQUFXO0FBQzFCO0FBQ0Esc0JBQXNCLHVEQUFjO0FBQ3BDLEVBQUUsNERBQWdCO0FBQ2xCLGdDQUFnQyxZQUFZO0FBQzVDLENBQUM7O0FBRUQsdURBQVcsSUFBSSxXQUFXO0FBQzFCO0FBQ0Esc0JBQXNCLHVEQUFjO0FBQ3BDLG1DQUFtQyxZQUFZO0FBQy9DLENBQUM7O0FBRUQsdURBQVcsSUFBSSxXQUFXO0FBQzFCO0FBQ0Esc0JBQXNCLHVEQUFjO0FBQ3BDLDBDQUEwQyxZQUFZO0FBQ3RELENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBVyxJQUFJLFdBQVc7QUFDNUIsSUFBSSw0REFBZ0I7QUFDcEIsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBVyxJQUFJLFdBQVc7QUFDNUIsSUFBSSw0REFBZ0I7QUFDcEIsR0FBRztBQUNILENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9nZXRBUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9saWtlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50c0FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFkYWJmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyODE3YTtcXHJcXG4gIGNvbG9yOiAjMzYyNDE3O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIGZsZXg6IDI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW46IDRyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMjIlO1xcclxcbiAgbWFyZ2luOiAycmVtIDRyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51aXRlbSBpbWcge1xcclxcbiAgd2lkdGg6IDQ1cHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIC5saWtlU3BhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0gYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogNXB4IDdweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI4MTdhO1xcclxcbiAgY29sb3I6ICMzNjI0MTc7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSBidXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyODE3YTtcXHJcXG4gIGNvbG9yOiAjMzYyNDE3O1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgc3BhbiB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQzMik7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDg1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjI0MTc7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCBncmV5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM2ODQ2MmQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdGltZXMtY2lyY2xlIHtcXHJcXG4gIGNvbG9yOiAjZjFkYWJmO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW46IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcEltYWdlIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVGl0bGUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcmFjdGVyaXN0aWMge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW46IDAuNXJlbSBhdXRvIDAuNXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVDb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxNSU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWVJbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW5wdXQge1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUljb24ge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWRhYmY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI4MTdhO1xcclxcbiAgY29sb3I6ICMzNjI0MTc7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYge1xcclxcbiAgZmxleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbjogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24ge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAyMiU7XFxyXFxuICBtYXJnaW46IDJyZW0gNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVpdGVtIGltZyB7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0gLmxpa2VTcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSBidXR0b24ge1xcclxcbiAgbWFyZ2luOiA1cHggN3B4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MjgxN2E7XFxyXFxuICBjb2xvcjogIzM2MjQxNztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIGJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI4MTdhO1xcclxcbiAgY29sb3I6ICMzNjI0MTc7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBzcGFuIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGhlaWdodDogODUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MjQxNztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IGdyZXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogIzY4NDYyZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mYS10aW1lcy1jaXJjbGUge1xcclxcbiAgY29sb3I6ICNmMWRhYmY7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbjogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wSW1hZ2Uge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwLjVyZW0gYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3BUaXRsZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaGFyYWN0ZXJpc3RpYyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgd2lkdGg6IDM1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwLjVyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZUNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbiAgZ2FwOiAwLjhyZW07XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQge1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZUlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRJbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5saWtlSWNvbiB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIG1haW4gLm1lbnVTZWN0aW9uIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIG1hcmdpbjogMnJlbSAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIG1haW4gLm1lbnVTZWN0aW9uIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogMnJlbSAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL21lYWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbjxoZWFkPlxcclxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxyXFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCI+XFxyXFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXHJcXG4gICAgPHNjcmlwdCBzcmM9J2h0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9hMDc2ZDA1Mzk5LmpzJyBjcm9zc29yaWdpbj0nYW5vbnltb3VzJz48L3NjcmlwdD5cXHJcXG4gICAgPHRpdGxlPkNhcHN0b25lPC90aXRsZT5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS80ZjAyZDA1NWU1LmpzXFxcIiBjcm9zc29yaWdpbj1cXFwiYW5vbnltb3VzXFxcIj48L3NjcmlwdD5cXHJcXG48L2hlYWQ+XFxyXFxuPGJvZHk+XFxyXFxuICAgIFxcclxcbiAgICA8aGVhZGVyPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcIm1lYWxcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMT5SZXN0YXVyYW50IE1lbnU8L2gxPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDxuYXY+XFxyXFxuICAgICAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI21lbnVMaXN0XFxcIiBpZD1cXFwibWVudUNvdW50ZXJcXFwiPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI3NlYUxpc3RcXFwiIGlkPVxcXCJzZWFGb29kXFxcIj48L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNpbmRpYW5MaXN0XFxcIiBpZD1cXFwiaW5kaWFuRm9vZFxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvbmF2PlxcclxcbiAgICA8L2hlYWRlcj5cXHJcXG4gICAgPG1haW4+XFxyXFxuICAgICAgIDx1bCBjbGFzcz1cXFwibWVudVNlY3Rpb25cXFwiIGlkPVxcXCJtZW51TGlzdFxcXCI+XFxyXFxuICAgICAgIDwvdWw+XFxyXFxuICAgICAgIDx1bCBjbGFzcz1cXFwibWVudVNlY3Rpb25cXFwiIGlkPVxcXCJpbmRpYW5MaXN0XFxcIj5cXHJcXG4gICAgICA8L3VsPlxcclxcbiAgICAgIDx1bCBjbGFzcz1cXFwibWVudVNlY3Rpb25cXFwiIGlkPVxcXCJzZWFMaXN0XFxcIj5cXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPC9tYWluPlxcclxcbiAgICA8Zm9vdGVyPlxcclxcbiAgICAgICAgPHNwYW4+Q3JlYXRlZCBieSBNaWNyb3ZlcnNlIHVuZGVyIENDIGxpY2Vuc2U8L3NwYW4+XFxyXFxuICAgIDwvZm9vdGVyPlxcclxcbjwvYm9keT5cXHJcXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY291bnRNZW51SXRlbXMgPSAoKG1lYWxzKSA9PiBtZWFscy5sZW5ndGgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudE1lbnVJdGVtczsiLCJpbXBvcnQgeyBsaWtlTWVhbCwgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VJdGVtcy5qcyc7XG5pbXBvcnQgZ2VuZXJhdGVQb3B1cCBmcm9tICcuL21vZHVsZXMvY29tbWVudHMuanMnO1xuXG5jb25zdCBpbnZvbHZlbWVudEFQSSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcyc7XG5jb25zdCBhcHBJZCA9ICdTZFB5REFtTk5JUFRVWmF3MjdKSyc7XG5cbmNvbnN0IGdldE1lbnVEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCBzY29yZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIHJldHVybiBzY29yZS5qc29uKCk7XG59O1xuY29uc3QgZGlzcGxheU1lbnVJdGVtcyA9IChtZWFscywgaG9tZUl0ZW1zKSA9PiB7XG4gIGNvbnN0IG1lYWxzQXJyYXkgPSBtZWFscy5tZWFscztcbiAgbWVhbHNBcnJheS5mb3JFYWNoKChtKSA9PiB7XG4gICAgbGV0IGlzTGlrZWQgPSBmYWxzZTtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuY2xhc3NOYW1lID0gJ21lbnVJdGVtJztcbiAgICBsaS5pZCA9ICdpbm5lckl0ZW0nO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gbS5zdHJNZWFsVGh1bWI7XG4gICAgbGkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5pbm5lclRleHQgPSBtLnN0ck1lYWw7XG5cbiAgICBjb25zdCBhVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFUYWcuY2xhc3NOYW1lID0gJ3Rlc3QnO1xuICAgIGFUYWcuaWQgPSBtLmlkTWVhbDtcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAnZmFyIGZhLWhlYXJ0JztcbiAgICBpY29uLmlkID0gbS5pZE1lYWw7XG5cbiAgICBhVGFnLmFwcGVuZENoaWxkKGljb24pO1xuICAgIHBhcmEuYXBwZW5kQ2hpbGQoYVRhZyk7XG4gICAgbGkuYXBwZW5kQ2hpbGQocGFyYSk7XG5cbiAgICBjb25zdCBzcGFucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFucy5jbGFzc05hbWUgPSAnbGlrZVNwYW4nO1xuICAgIHNwYW5zLmlkID0gJ3NwYW5MaWtlJztcbiAgICBsaS5hcHBlbmRDaGlsZChzcGFucyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmlubmVyVGV4dCA9ICdDb21tZW50JztcbiAgICBidG4uaWQgPSBtLmlkTWVhbDtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnZW5lcmF0ZVBvcHVwKG0pO1xuICAgIH0pO1xuICAgIGxpLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgaG9tZUl0ZW1zLmFwcGVuZENoaWxkKGxpKTtcbiAgICBpZiAoaXNMaWtlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGFUYWcuY2xhc3NMaXN0LnJlbW92ZSgnbGlrZUljb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVRhZy5jbGFzc0xpc3QuYWRkKCdsaWtlSWNvbicpO1xuICAgIH1cbiAgICBnZXRMaWtlcyhpbnZvbHZlbWVudEFQSSwgYXBwSWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaXRlbV9pZCA9PT0gbS5pZE1lYWwpIHtcbiAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBzcGFucy5pbm5lclRleHQgPSBpdGVtLmxpa2VzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChpc0ZvdW5kID09PSBmYWxzZSkge1xuICAgICAgICBzcGFucy5pbm5lclRleHQgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFUYWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoaXNMaWtlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgbGlrZU1lYWwoaW52b2x2ZW1lbnRBUEksIGFwcElkLCBtLmlkTWVhbCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgZ2V0TGlrZXMoaW52b2x2ZW1lbnRBUEksIGFwcElkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLml0ZW1faWQgPT09IG0uaWRNZWFsKSB7XG4gICAgICAgICAgICAgICAgICBzcGFucy5pbm5lclRleHQgPSBpdGVtLmxpa2VzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpc0xpa2VkID0gdHJ1ZTtcbiAgICAgICAgYVRhZy5jbGFzc0xpc3QuYWRkKCdsaWtlSWNvbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNMaWtlZCA9IGZhbHNlO1xuICAgICAgICBhVGFnLmNsYXNzTGlzdC5yZW1vdmUoJ2xpa2VJY29uJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZ2V0TWVudURhdGEsIGRpc3BsYXlNZW51SXRlbXMgfTtcbiIsImNvbnN0IGxpa2VNZWFsID0gYXN5bmMgKGludm9sdm1lbnRBUEksIGFwcElkLCBpZCkgPT4ge1xyXG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2bWVudEFQSX0vJHthcHBJZH0vbGlrZXNgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGxpa2VzLnN0YXR1cyA9PT0gMjAxO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoaW52b2x2bWVudEFQSSwgYXBwSWQpID0+IHtcclxuICBjb25zdCBsaWtlID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2bWVudEFQSX0vJHthcHBJZH0vbGlrZXNgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgbGlrZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgeyBsaWtlTWVhbCwgZ2V0TGlrZXMgfTtcclxuIiwiaW1wb3J0IHsgY29tbWVudE1lYWwsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50c0FwaS5qcyc7XHJcblxyXG5jb25zdCBpbnZvbHZlbWVudEFQSSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcyc7XHJcbmNvbnN0IGFwcElkID0gJ1NkUHlEQW1OTklQVFVaYXcyN0pLJztcclxuXHJcbmNvbnN0IGdlbmVyYXRlSW5mbyA9IChlbGVtZW50LCBtZWFsKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgdGV4dENhdGVnb3J5ID0gbWVhbC5zdHJDYXRlZ29yeTtcclxuICBjYXRlZ29yeS5pbm5lclRleHQgPSBgQ2F0ZWdvcnk6ICR7dGV4dENhdGVnb3J5fWA7XHJcbiAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB0ZXh0QXJlYSA9IG1lYWwuc3RyQXJlYTtcclxuICBhcmVhLmlubmVyVGV4dCA9IGBBcmVhOiAke3RleHRBcmVhfWA7XHJcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHRleHRJbnN0cnVjdGlvbnMgPSBtZWFsLnN0ckluc3RydWN0aW9ucztcclxuICBpbnN0cnVjdGlvbnMuaW5uZXJUZXh0ID0gYEluc3RydWN0aW9uczogJHt0ZXh0SW5zdHJ1Y3Rpb25zfWA7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBbY2F0ZWdvcnksIGFyZWEsIGluc3RydWN0aW9uc107XHJcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxufTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlQ29tbWVudCA9IChlbGVtZW50LCB1c2VyKSA9PiB7XHJcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB0aGVDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGRhdGUuaW5uZXJUZXh0ID0gdXNlci5jcmVhdGlvbl9kYXRlO1xyXG4gIG5hbWUuaW5uZXJUZXh0ID0gdXNlci51c2VybmFtZTtcclxuICB0aGVDb21tZW50LmlubmVyVGV4dCA9IHVzZXIuY29tbWVudDtcclxuICBjb25zdCBjaGlsZHJlbiA9IFtkYXRlLCBuYW1lLCB0aGVDb21tZW50XTtcclxuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY29tbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xyXG4gIGNvbW1lbnQuY2xhc3NOYW1lID0gJ2NvbW1lbnQnO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29tbWVudCk7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZVBvcHVwID0gKG1lYWwpID0+IHtcclxuICAvLyBjb21tZW50TWVhbChpbnZvbHZlbWVudEFQSSwgYXBwSWQsIG1lYWwuaWRNZWFsKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBjb25zdCBwb3BJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICBjb25zdCBwb3BUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29uc3QgcG9wQ2hhcmFjdGVyaXN0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBnZW5lcmF0ZUluZm8ocG9wQ2hhcmFjdGVyaXN0aWMsIG1lYWwpO1xyXG5cclxuICBjb25zdCBjb21tZW50SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZ2V0Q29tbWVudHMoaW52b2x2ZW1lbnRBUEksIGFwcElkLCBtZWFsLmlkTWVhbCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgZGF0YS5mb3JFYWNoKCh1c2VyKSA9PiB7XHJcbiAgICAgIGdlbmVyYXRlQ29tbWVudChjb21tZW50cywgdXNlcik7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY3JlYXRlQ29tbWVudEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBjb25zdCBjcmVhdGVDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ05hbWUuLi4nO1xyXG4gIGNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgY29tbWVudElucHV0LnBsYWNlaG9sZGVyID0gJ0NvbW1lbnQuLi4nO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHN1Ym1pdC50eXBlID0gJ2J1dHRvbic7XHJcblxyXG4gIGNvbnN0IGNoaWxkcmVuID0gW1xyXG4gICAgY2xvc2VCdG4sXHJcbiAgICBwb3BJbWFnZSxcclxuICAgIHBvcFRpdGxlLFxyXG4gICAgcG9wQ2hhcmFjdGVyaXN0aWMsXHJcbiAgICBjb21tZW50SDMsXHJcbiAgICBjb21tZW50cyxcclxuICAgIGNyZWF0ZUNvbW1lbnRIMyxcclxuICAgIGNyZWF0ZUNvbW1lbnQsXHJcbiAgXTtcclxuICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBbbmFtZUlucHV0LCBjb21tZW50SW5wdXQsIHN1Ym1pdF07XHJcbiAgZm9ybUNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjcmVhdGVDb21tZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHBvcHVwLmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAnO1xyXG4gIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdmYXMgZmEtdGltZXMtY2lyY2xlJztcclxuICBwb3BJbWFnZS5jbGFzc05hbWUgPSAncG9wSW1hZ2UnO1xyXG4gIHBvcFRpdGxlLmNsYXNzTmFtZSA9ICdwb3BUaXRsZSc7XHJcbiAgcG9wQ2hhcmFjdGVyaXN0aWMuY2xhc3NOYW1lID0gJ2NoYXJhY3RlcmlzdGljJztcclxuICBjcmVhdGVDb21tZW50LmNsYXNzTmFtZSA9ICdjcmVhdGVDb21tZW50JztcclxuICBzdWJtaXQuY2xhc3NOYW1lID0gJ3N1Ym1pdCc7XHJcbiAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICduYW1lSW5wdXQnO1xyXG4gIGNvbW1lbnRJbnB1dC5jbGFzc05hbWUgPSAnY29tbWVudElucHV0JztcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gIGNvbW1lbnRIMy5pbm5lclRleHQgPSAnQ29tbWVudHMgKCknO1xyXG4gIGNyZWF0ZUNvbW1lbnRIMy5pbm5lclRleHQgPSAnQ3JlYXRlIGEgY29tbWVudCc7XHJcbiAgcG9wSW1hZ2Uuc3JjID0gbWVhbC5zdHJNZWFsVGh1bWI7XHJcbiAgcG9wVGl0bGUuaW5uZXJUZXh0ID0gbWVhbC5zdHJNZWFsO1xyXG4gIHN1Ym1pdC5pbm5lclRleHQgPSAnU3VibWl0JztcclxuXHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XHJcbiAgfSk7XHJcblxyXG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgY3JlYXRpb25fZGF0ZTogZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcclxuICAgICAgdXNlcm5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgY29tbWVudDogY29tbWVudElucHV0LnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGNvbW1lbnRNZWFsKFxyXG4gICAgICBpbnZvbHZlbWVudEFQSSxcclxuICAgICAgYXBwSWQsXHJcbiAgICAgIG1lYWwuaWRNZWFsLFxyXG4gICAgICB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICB1c2VyLmNvbW1lbnQsXHJcbiAgICApO1xyXG4gICAgZ2VuZXJhdGVDb21tZW50KGNvbW1lbnRzLCB1c2VyKTtcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgY29tbWVudElucHV0LnZhbHVlID0gJyc7XHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUG9wdXA7XHJcbiIsImNvbnN0IGNvbW1lbnRNZWFsID0gYXN5bmMgKFxyXG4gIGludm9sdm1lbnRBUEksXHJcbiAgYXBwSWQsXHJcbiAgbWVhbElkLFxyXG4gIG5hbWVVc2VyLFxyXG4gIGNvbW1lbnRVc2VyLFxyXG4pID0+IHtcclxuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoKGAke2ludm9sdm1lbnRBUEl9LyR7YXBwSWR9L2NvbW1lbnRzYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBtZWFsSWQsXHJcbiAgICAgIHVzZXJuYW1lOiBuYW1lVXNlcixcclxuICAgICAgY29tbWVudDogY29tbWVudFVzZXIsXHJcbiAgICB9KSxcclxuICB9KTtcclxuICByZXR1cm4gY29tbWVudHMuc3RhdHVzID09PSAyMDE7XHJcbn07XHJcbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGludm9sdm1lbnRBUEksIGFwcElkLCBtZWFsSWQpID0+IHtcclxuICBjb25zdCBjb21tZW50ID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgJHtpbnZvbHZtZW50QVBJfS8ke2FwcElkfS9jb21tZW50cy8/aXRlbV9pZD0ke21lYWxJZH1gLFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbW1lbnQuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY29tbWVudE1lYWwsIGdldENvbW1lbnRzIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL2luZGV4Lmh0bWwnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnZXRNZW51RGF0YSwgZGlzcGxheU1lbnVJdGVtcyB9IGZyb20gJy4vZ2V0QVBJLmpzJztcbmltcG9ydCBjb3VudE1lbnVJdGVtcyBmcm9tICcuL2NvdW50ZXIuanMnO1xuXG5jb25zdCBnZXREYXRhQVBJID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS8nO1xuY29uc3QgYWxsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUNvdW50ZXInKTtcbmNvbnN0IGluZGlhbkZvb2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kaWFuRm9vZCcpO1xuY29uc3Qgc2VhRm9vZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFGb29kJyk7XG5jb25zdCBob21lSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUxpc3QnKTtcbmNvbnN0IGluZGlhbkl0bWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGlhbkxpc3QnKTtcbmNvbnN0IHNlYUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYUxpc3QnKTtcblxuYWxsSXRlbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGluZGlhbkl0bWVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHNlYUl0ZW1zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGdldE1lbnVEYXRhKGAke2dldERhdGFBUEl9c2VhcmNoLnBocD9mPWJgKS50aGVuKChtZWFscykgPT4ge1xuICAgIGRpc3BsYXlNZW51SXRlbXMobWVhbHMsIGhvbWVJdGVtcyk7XG4gIH0pO1xufSk7XG5cbmdldE1lbnVEYXRhKGAke2dldERhdGFBUEl9c2VhcmNoLnBocD9mPWJgKS50aGVuKChtZWFscykgPT4ge1xuICBjb25zdCBtZWFsc0EgPSBtZWFscy5tZWFscztcbiAgY29uc3QgaXRlbXNMZW5ndGggPSBjb3VudE1lbnVJdGVtcyhtZWFsc0EpO1xuICBkaXNwbGF5TWVudUl0ZW1zKG1lYWxzLCBob21lSXRlbXMpO1xuICBhbGxJdGVtcy5pbm5lclRleHQgPSBgSG9tZSAoJHtpdGVtc0xlbmd0aH0pYDtcbn0pO1xuXG5nZXRNZW51RGF0YShgJHtnZXREYXRhQVBJfWZpbHRlci5waHA/Yz1TZWFmb29kYCkudGhlbigobWVhbHMpID0+IHtcbiAgY29uc3QgbWVhbHNBID0gbWVhbHMubWVhbHM7XG4gIGNvbnN0IGl0ZW1zTGVuZ3RoID0gY291bnRNZW51SXRlbXMobWVhbHNBKTtcbiAgc2VhRm9vZC5pbm5lclRleHQgPSBgU2VhIEZvb2QgKCR7aXRlbXNMZW5ndGh9KWA7XG59KTtcblxuZ2V0TWVudURhdGEoYCR7Z2V0RGF0YUFQSX1maWx0ZXIucGhwP2E9Q2FuYWRpYW5gKS50aGVuKChtZWFscykgPT4ge1xuICBjb25zdCBtZWFsc0EgPSBtZWFscy5tZWFscztcbiAgY29uc3QgaXRlbXNMZW5ndGggPSBjb3VudE1lbnVJdGVtcyhtZWFsc0EpO1xuICBpbmRpYW5Gb29kLmlubmVyVGV4dCA9IGBDYW5kaWFuIEZvb2QgKCR7aXRlbXNMZW5ndGh9KWA7XG59KTtcblxuaW5kaWFuRm9vZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaG9tZUl0ZW1zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHNlYUl0ZW1zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGdldE1lbnVEYXRhKGAke2dldERhdGFBUEl9ZmlsdGVyLnBocD9hPUNhbmFkaWFuYCkudGhlbigobWVhbHMpID0+IHtcbiAgICBkaXNwbGF5TWVudUl0ZW1zKG1lYWxzLCBpbmRpYW5JdG1lcyk7XG4gIH0pO1xufSk7XG5cbnNlYUZvb2QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGhvbWVJdGVtcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpbmRpYW5JdG1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBnZXRNZW51RGF0YShgJHtnZXREYXRhQVBJfWZpbHRlci5waHA/Yz1TZWFmb29kYCkudGhlbigobWVhbHMpID0+IHtcbiAgICBkaXNwbGF5TWVudUl0ZW1zKG1lYWxzLCBzZWFJdGVtcyk7XG4gIH0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9