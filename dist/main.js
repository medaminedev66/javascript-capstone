/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #f1dabf;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  height: 3rem;\r\n  align-items: center;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n}\r\n\r\nheader h1 a {\r\n  text-decoration: none;\r\n  color: currentColor;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  flex: 1;\r\n  padding-left: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n.logo img {\r\n  margin-right: 0.5rem;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\nheader nav {\r\n  flex: 2;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  font-size: large;\r\n  font-weight: 400;\r\n  padding: 15px;\r\n}\r\n\r\nheader nav ul li {\r\n  padding: 0 20px;\r\n}\r\n\r\nheader nav ul li a {\r\n  text-decoration: none;\r\n  color: currentColor;\r\n}\r\n\r\nmain {\r\n  margin: 4rem;\r\n}\r\n\r\nmain .menuSection {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nmain .menuSection .menuItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  width: 22%;\r\n  margin: 2rem 4rem;\r\n}\r\n\r\nmain .menuSection .menuitem img {\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\n\r\nmain .menuSection .menuItem p {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n}\r\n\r\nmain .menuSection .menuItem .likeSpan {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\nmain .menuSection .menuItem button {\r\n  margin: 5px 7px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n  border: none;\r\n  border-radius: 5px;\r\n}\r\n\r\nmain .menuSection .menuItem button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n  height: 2.5rem;\r\n  align-items: center;\r\n}\r\n\r\nfooter span {\r\n  padding-left: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.432);\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s, opacity 0.5s;\r\n}\r\n\r\n.active {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.popup {\r\n  overflow-y: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 85%;\r\n  height: 85%;\r\n  background-color: #362417;\r\n  color: white;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar {\r\n  width: 0.3rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 1px grey;\r\n  border-radius: 10px;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb {\r\n  background: #68462d;\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa-times-circle {\r\n  color: #f1dabf;\r\n  align-self: flex-end;\r\n  margin: 0.8rem;\r\n}\r\n\r\n.popImage {\r\n  width: 400px;\r\n  height: auto;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.popTitle {\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.characteristic {\r\n  color: white;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  width: 350px;\r\n  justify-content: space-between;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n}\r\n\r\nh3 {\r\n  margin: 1rem 0 1rem 0;\r\n}\r\n\r\n.createComment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 4rem;\r\n  gap: 0.8rem;\r\n  width: 400px;\r\n}\r\n\r\n.submit {\r\n  width: 15%;\r\n  padding: 0.5rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n.nameInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.commentInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.likeIcon {\r\n  color: red;\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 40%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 90%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #f1dabf;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  height: 3rem;\r\n  align-items: center;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n}\r\n\r\nheader h1 a {\r\n  text-decoration: none;\r\n  color: currentColor;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  flex: 1;\r\n  padding-left: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n.logo img {\r\n  margin-right: 0.5rem;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\nheader nav {\r\n  flex: 2;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  font-size: large;\r\n  font-weight: 400;\r\n  padding: 15px;\r\n}\r\n\r\nheader nav ul li {\r\n  padding: 0 20px;\r\n}\r\n\r\nheader nav ul li a {\r\n  text-decoration: none;\r\n  color: currentColor;\r\n}\r\n\r\nmain {\r\n  margin: 4rem;\r\n}\r\n\r\nmain .menuSection {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nmain .menuSection .menuItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  width: 22%;\r\n  margin: 2rem 4rem;\r\n}\r\n\r\nmain .menuSection .menuitem img {\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\n\r\nmain .menuSection .menuItem p {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n}\r\n\r\nmain .menuSection .menuItem .likeSpan {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\nmain .menuSection .menuItem button {\r\n  margin: 5px 7px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n  border: none;\r\n  border-radius: 5px;\r\n}\r\n\r\nmain .menuSection .menuItem button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #92817a;\r\n  color: #362417;\r\n  height: 2.5rem;\r\n  align-items: center;\r\n}\r\n\r\nfooter span {\r\n  padding-left: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.432);\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s, opacity 0.5s;\r\n}\r\n\r\n.active {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.popup {\r\n  overflow-y: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 85%;\r\n  height: 85%;\r\n  background-color: #362417;\r\n  color: white;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar {\r\n  width: 0.3rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 1px grey;\r\n  border-radius: 10px;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb {\r\n  background: #68462d;\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa-times-circle {\r\n  color: #f1dabf;\r\n  align-self: flex-end;\r\n  margin: 0.8rem;\r\n}\r\n\r\n.popImage {\r\n  width: 400px;\r\n  height: auto;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.popTitle {\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.characteristic {\r\n  color: white;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  width: 350px;\r\n  justify-content: space-between;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n}\r\n\r\nh3 {\r\n  margin: 1rem 0 1rem 0;\r\n}\r\n\r\n.createComment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 4rem;\r\n  gap: 0.8rem;\r\n  width: 400px;\r\n}\r\n\r\n.submit {\r\n  width: 15%;\r\n  padding: 0.5rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n.nameInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.commentInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.likeIcon {\r\n  color: red;\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 40%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 90%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n    <title>Capstone</title>\r\n    <script src=\"https://kit.fontawesome.com/4f02d055e5.js\" crossorigin=\"anonymous\"></script>\r\n</head>\r\n<body>\r\n    \r\n    <header>\r\n        <div class=\"logo\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"meal\">\r\n            <h1> <a href=\"#\" class=\"homeCounter\">Restaurant Menu</a></h1>\r\n        </div>\r\n        \r\n        <nav>\r\n            <ul>\r\n                <li><a href=\"#\" class=\"menuCounter\"></a></li>\r\n                <li><a href=\"#\" class=\"seaFood\"></a></li>\r\n                <li><a href=\"#\" class=\"indianFood\"></a></li>\r\n            </ul>\r\n        </nav>\r\n    </header>\r\n    <main>\r\n        <ul class=\"homeList menuSection\">\r\n        </ul>\r\n       <ul class=\"menuList menuSection\">\r\n       </ul>\r\n       <ul class=\"indianList menuSection\">\r\n      </ul>\r\n      <ul class=\"seaList menuSection\">\r\n    </ul>\r\n    </main>\r\n    <footer>\r\n        <span>Created by Microverse under CC license</span>\r\n    </footer>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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
/***/ ((module) => {

const countMenuItems = ((meals) => meals.length);

module.exports = countMenuItems;


/***/ }),

/***/ "./src/getAPI.js":
/*!***********************!*\
  !*** ./src/getAPI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _getAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAPI.js */ "./src/getAPI.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter.js */ "./src/counter.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_counter_js__WEBPACK_IMPORTED_MODULE_3__);





const getDataAPI = 'https://www.themealdb.com/api/json/v1/1/';
const main = document.querySelector('.homeCounter');
const homeList = document.querySelector('.homeList');
const allItems = document.querySelector('.menuCounter');
const indianFood = document.querySelector('.indianFood');
const seaFood = document.querySelector('.seaFood');
const homeItems = document.querySelector('.menuList');
const indianItmes = document.querySelector('.indianList');
const seaItems = document.querySelector('.seaList');

(0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}search.php?f=b`).then((meals) => {
  (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, homeList);
  const mealsA = meals.meals;
  const itemsLength = _counter_js__WEBPACK_IMPORTED_MODULE_3___default()(mealsA);
  allItems.innerText = `Home (${itemsLength})`;
  main.addEventListener('click', () => {
    (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, homeList);
    homeItems.innerHTML = '';
    seaItems.innerHTML = '';
    indianItmes.innerHTML = '';
  });
  allItems.addEventListener('click', () => {
    (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, homeItems);
    homeList.innerHTML = '';
    seaItems.innerHTML = '';
    indianItmes.innerHTML = '';
  });
});

(0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}filter.php?c=Seafood`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = _counter_js__WEBPACK_IMPORTED_MODULE_3___default()(mealsA);
  seaFood.innerText = `Sea Food (${itemsLength})`;
  seaFood.addEventListener('click', () => {
    (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, seaItems);
    homeList.innerHTML = '';
    homeItems.innerHTML = '';
    indianItmes.innerHTML = '';
  });
});

(0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}filter.php?a=Canadian`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = _counter_js__WEBPACK_IMPORTED_MODULE_3___default()(mealsA);
  indianFood.innerText = `Candian Food (${itemsLength})`;
  indianFood.addEventListener('click', () => {
    (0,_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, indianItmes);
    homeList.innerHTML = '';
    homeItems.innerHTML = '';
    seaItems.innerHTML = '';
  });
});

// main.addEventListener('click', () => {
//   getMenuData(`${getDataAPI}search.php?f=b`).then((meals) => {
//     displayMenuItems(meals, homeList);
//   });
//   homeItems.innerHTML = '';
//   seaItems.innerHTML = '';
//   indianItmes.innerHTML = '';
// });

// allItems.addEventListener('click', () => {
//   getMenuData(`${getDataAPI}search.php?f=b`).then((meals) => {
//     displayMenuItems(meals, homeItems);
//   });
//   homeList.innerHTML = '';
//   seaItems.innerHTML = '';
//   indianItmes.innerHTML = '';
// });

// indianFood.addEventListener('click', () => {
//   getMenuData(`${getDataAPI}filter.php?a=Canadian`).then((meals) => {
//     displayMenuItems(meals, indianItmes);
//   });
//   homeList.innerHTML = '';
//   homeItems.innerHTML = '';
//   seaItems.innerHTML = '';
// });

// seaFood.addEventListener('click', () => {
//   getMenuData(`${getDataAPI}filter.php?c=Seafood`).then((meals) => {
//     displayMenuItems(meals, seaItems);
//   });
//   homeList.innerHTML = '';
//   homeItems.innerHTML = '';
//   indianItmes.innerHTML = '';
// });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFh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bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9nZXRBUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9saWtlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50c0FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFkYWJmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyODE3YTtcXHJcXG4gIGNvbG9yOiAjMzYyNDE3O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIGZsZXg6IDI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW46IDRyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMjIlO1xcclxcbiAgbWFyZ2luOiAycmVtIDRyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51aXRlbSBpbWcge1xcclxcbiAgd2lkdGg6IDQ1cHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIC5saWtlU3BhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0gYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogNXB4IDdweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI4MTdhO1xcclxcbiAgY29sb3I6ICMzNjI0MTc7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSBidXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyODE3YTtcXHJcXG4gIGNvbG9yOiAjMzYyNDE3O1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgc3BhbiB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQzMik7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDg1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjI0MTc7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCBncmV5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM2ODQ2MmQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdGltZXMtY2lyY2xlIHtcXHJcXG4gIGNvbG9yOiAjZjFkYWJmO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW46IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcEltYWdlIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVGl0bGUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcmFjdGVyaXN0aWMge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW46IDAuNXJlbSBhdXRvIDAuNXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVDb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxNSU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWVJbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW5wdXQge1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUljb24ge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFB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XHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFkYWJmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyODE3YTtcXHJcXG4gIGNvbG9yOiAjMzYyNDE3O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIGZsZXg6IDI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW46IDRyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMjIlO1xcclxcbiAgbWFyZ2luOiAycmVtIDRyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51aXRlbSBpbWcge1xcclxcbiAgd2lkdGg6IDQ1cHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIC5saWtlU3BhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0gYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogNXB4IDdweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI4MTdhO1xcclxcbiAgY29sb3I6ICMzNjI0MTc7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSBidXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyODE3YTtcXHJcXG4gIGNvbG9yOiAjMzYyNDE3O1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgc3BhbiB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQzMik7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDg1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjI0MTc7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCBncmV5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM2ODQ2MmQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdGltZXMtY2lyY2xlIHtcXHJcXG4gIGNvbG9yOiAjZjFkYWJmO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW46IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcEltYWdlIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVGl0bGUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcmFjdGVyaXN0aWMge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW46IDAuNXJlbSBhdXRvIDAuNXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVDb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxNSU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWVJbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW5wdXQge1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUljb24ge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9tZWFsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXHJcXG48aGVhZD5cXHJcXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcclxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiPlxcclxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxyXFxuICAgIDxzY3JpcHQgc3JjPSdodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vYTA3NmQwNTM5OS5qcycgY3Jvc3NvcmlnaW49J2Fub255bW91cyc+PC9zY3JpcHQ+XFxyXFxuICAgIDx0aXRsZT5DYXBzdG9uZTwvdGl0bGU+XFxyXFxuICAgIDxzY3JpcHQgc3JjPVxcXCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vNGYwMmQwNTVlNS5qc1xcXCIgY3Jvc3NvcmlnaW49XFxcImFub255bW91c1xcXCI+PC9zY3JpcHQ+XFxyXFxuPC9oZWFkPlxcclxcbjxib2R5PlxcclxcbiAgICBcXHJcXG4gICAgPGhlYWRlcj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJtZWFsXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDE+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJob21lQ291bnRlclxcXCI+UmVzdGF1cmFudCBNZW51PC9hPjwvaDE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPG5hdj5cXHJcXG4gICAgICAgICAgICA8dWw+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibWVudUNvdW50ZXJcXFwiPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcInNlYUZvb2RcXFwiPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImluZGlhbkZvb2RcXFwiPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L25hdj5cXHJcXG4gICAgPC9oZWFkZXI+XFxyXFxuICAgIDxtYWluPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJob21lTGlzdCBtZW51U2VjdGlvblxcXCI+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICAgICA8dWwgY2xhc3M9XFxcIm1lbnVMaXN0IG1lbnVTZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgPC91bD5cXHJcXG4gICAgICAgPHVsIGNsYXNzPVxcXCJpbmRpYW5MaXN0IG1lbnVTZWN0aW9uXFxcIj5cXHJcXG4gICAgICA8L3VsPlxcclxcbiAgICAgIDx1bCBjbGFzcz1cXFwic2VhTGlzdCBtZW51U2VjdGlvblxcXCI+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDwvbWFpbj5cXHJcXG4gICAgPGZvb3Rlcj5cXHJcXG4gICAgICAgIDxzcGFuPkNyZWF0ZWQgYnkgTWljcm92ZXJzZSB1bmRlciBDQyBsaWNlbnNlPC9zcGFuPlxcclxcbiAgICA8L2Zvb3Rlcj5cXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvdW50TWVudUl0ZW1zID0gKChtZWFscykgPT4gbWVhbHMubGVuZ3RoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3VudE1lbnVJdGVtcztcbiIsImltcG9ydCB7IGxpa2VNZWFsLCBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZUl0ZW1zLmpzJztcbmltcG9ydCBnZW5lcmF0ZVBvcHVwIGZyb20gJy4vbW9kdWxlcy9jb21tZW50cy5qcyc7XG5cbmNvbnN0IGludm9sdmVtZW50QVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzJztcbmNvbnN0IGFwcElkID0gJ1NkUHlEQW1OTklQVFVaYXcyN0pLJztcblxuY29uc3QgZ2V0TWVudURhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHNjb3JlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgcmV0dXJuIHNjb3JlLmpzb24oKTtcbn07XG5jb25zdCBkaXNwbGF5TWVudUl0ZW1zID0gKG1lYWxzLCBob21lSXRlbXMpID0+IHtcbiAgY29uc3QgbWVhbHNBcnJheSA9IG1lYWxzLm1lYWxzO1xuICBtZWFsc0FycmF5LmZvckVhY2goKG0pID0+IHtcbiAgICBsZXQgaXNMaWtlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc05hbWUgPSAnbWVudUl0ZW0nO1xuICAgIGxpLmlkID0gJ2lubmVySXRlbSc7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBtLnN0ck1lYWxUaHVtYjtcbiAgICBsaS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLmlubmVyVGV4dCA9IG0uc3RyTWVhbDtcblxuICAgIGNvbnN0IGFUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYVRhZy5jbGFzc05hbWUgPSAndGVzdCc7XG4gICAgYVRhZy5pZCA9IG0uaWRNZWFsO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmYXIgZmEtaGVhcnQnO1xuICAgIGljb24uaWQgPSBtLmlkTWVhbDtcblxuICAgIGFUYWcuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgcGFyYS5hcHBlbmRDaGlsZChhVGFnKTtcbiAgICBsaS5hcHBlbmRDaGlsZChwYXJhKTtcblxuICAgIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW5zLmNsYXNzTmFtZSA9ICdsaWtlU3Bhbic7XG4gICAgc3BhbnMuaWQgPSAnc3Bhbkxpa2UnO1xuICAgIGxpLmFwcGVuZENoaWxkKHNwYW5zKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xuICAgIGJ0bi5pZCA9IG0uaWRNZWFsO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdlbmVyYXRlUG9wdXAobSk7XG4gICAgfSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBob21lSXRlbXMuYXBwZW5kQ2hpbGQobGkpO1xuICAgIGlmIChpc0xpa2VkID09PSBmYWxzZSkge1xuICAgICAgYVRhZy5jbGFzc0xpc3QucmVtb3ZlKCdsaWtlSWNvbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhVGFnLmNsYXNzTGlzdC5hZGQoJ2xpa2VJY29uJyk7XG4gICAgfVxuICAgIGdldExpa2VzKGludm9sdmVtZW50QVBJLCBhcHBJZCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgbGV0IGlzRm91bmQgPSBmYWxzZTtcbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pdGVtX2lkID09PSBtLmlkTWVhbCkge1xuICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xuICAgICAgICAgIHNwYW5zLmlubmVyVGV4dCA9IGl0ZW0ubGlrZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGlzRm91bmQgPT09IGZhbHNlKSB7XG4gICAgICAgIHNwYW5zLmlubmVyVGV4dCA9IDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYVRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChpc0xpa2VkID09PSBmYWxzZSkge1xuICAgICAgICBsaWtlTWVhbChpbnZvbHZlbWVudEFQSSwgYXBwSWQsIG0uaWRNZWFsKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBnZXRMaWtlcyhpbnZvbHZlbWVudEFQSSwgYXBwSWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbV9pZCA9PT0gbS5pZE1lYWwpIHtcbiAgICAgICAgICAgICAgICAgIHNwYW5zLmlubmVyVGV4dCA9IGl0ZW0ubGlrZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlzTGlrZWQgPSB0cnVlO1xuICAgICAgICBhVGFnLmNsYXNzTGlzdC5hZGQoJ2xpa2VJY29uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc0xpa2VkID0gZmFsc2U7XG4gICAgICAgIGFUYWcuY2xhc3NMaXN0LnJlbW92ZSgnbGlrZUljb24nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBnZXRNZW51RGF0YSwgZGlzcGxheU1lbnVJdGVtcyB9O1xuIiwiY29uc3QgbGlrZU1lYWwgPSBhc3luYyAoaW52b2x2bWVudEFQSSwgYXBwSWQsIGlkKSA9PiB7XHJcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZtZW50QVBJfS8ke2FwcElkfS9saWtlc2AsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogaWQsXHJcbiAgICB9KSxcclxuICB9KTtcclxuICByZXR1cm4gbGlrZXMuc3RhdHVzID09PSAyMDE7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jIChpbnZvbHZtZW50QVBJLCBhcHBJZCkgPT4ge1xyXG4gIGNvbnN0IGxpa2UgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZtZW50QVBJfS8ke2FwcElkfS9saWtlc2ApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsaWtlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGxpa2VNZWFsLCBnZXRMaWtlcyB9O1xyXG4iLCJpbXBvcnQgeyBjb21tZW50TWVhbCwgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRzQXBpLmpzJztcclxuXHJcbmNvbnN0IGludm9sdmVtZW50QVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzJztcclxuY29uc3QgYXBwSWQgPSAnU2RQeURBbU5OSVBUVVphdzI3SksnO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVJbmZvID0gKGVsZW1lbnQsIG1lYWwpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB0ZXh0Q2F0ZWdvcnkgPSBtZWFsLnN0ckNhdGVnb3J5O1xyXG4gIGNhdGVnb3J5LmlubmVyVGV4dCA9IGBDYXRlZ29yeTogJHt0ZXh0Q2F0ZWdvcnl9YDtcclxuICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHRleHRBcmVhID0gbWVhbC5zdHJBcmVhO1xyXG4gIGFyZWEuaW5uZXJUZXh0ID0gYEFyZWE6ICR7dGV4dEFyZWF9YDtcclxuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgdGV4dEluc3RydWN0aW9ucyA9IG1lYWwuc3RySW5zdHJ1Y3Rpb25zO1xyXG4gIGluc3RydWN0aW9ucy5pbm5lclRleHQgPSBgSW5zdHJ1Y3Rpb25zOiAke3RleHRJbnN0cnVjdGlvbnN9YDtcclxuICBjb25zdCBjaGlsZHJlbiA9IFtjYXRlZ29yeSwgYXJlYSwgaW5zdHJ1Y3Rpb25zXTtcclxuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xyXG59O1xyXG5cclxuY29uc3QgZ2VuZXJhdGVDb21tZW50ID0gKGVsZW1lbnQsIHVzZXIpID0+IHtcclxuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHRoZUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZGF0ZS5pbm5lclRleHQgPSB1c2VyLmNyZWF0aW9uX2RhdGU7XHJcbiAgbmFtZS5pbm5lclRleHQgPSB1c2VyLnVzZXJuYW1lO1xyXG4gIHRoZUNvbW1lbnQuaW5uZXJUZXh0ID0gdXNlci5jb21tZW50O1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gW2RhdGUsIG5hbWUsIHRoZUNvbW1lbnRdO1xyXG4gIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjb21tZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgY29tbWVudC5jbGFzc05hbWUgPSAnY29tbWVudCc7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb21tZW50KTtcclxufTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlUG9wdXAgPSAobWVhbCkgPT4ge1xyXG4gIC8vIGNvbW1lbnRNZWFsKGludm9sdmVtZW50QVBJLCBhcHBJZCwgbWVhbC5pZE1lYWwpO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGNvbnN0IHBvcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gIGNvbnN0IHBvcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb25zdCBwb3BDaGFyYWN0ZXJpc3RpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGdlbmVyYXRlSW5mbyhwb3BDaGFyYWN0ZXJpc3RpYywgbWVhbCk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBnZXRDb21tZW50cyhpbnZvbHZlbWVudEFQSSwgYXBwSWQsIG1lYWwuaWRNZWFsKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBkYXRhLmZvckVhY2goKHVzZXIpID0+IHtcclxuICAgICAgZ2VuZXJhdGVDb21tZW50KGNvbW1lbnRzLCB1c2VyKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjcmVhdGVDb21tZW50SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNvbnN0IGNyZWF0ZUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZS4uLic7XHJcbiAgY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBjb21tZW50SW5wdXQucGxhY2Vob2xkZXIgPSAnQ29tbWVudC4uLic7XHJcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc3VibWl0LnR5cGUgPSAnYnV0dG9uJztcclxuXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBbXHJcbiAgICBjbG9zZUJ0bixcclxuICAgIHBvcEltYWdlLFxyXG4gICAgcG9wVGl0bGUsXHJcbiAgICBwb3BDaGFyYWN0ZXJpc3RpYyxcclxuICAgIGNvbW1lbnRIMyxcclxuICAgIGNvbW1lbnRzLFxyXG4gICAgY3JlYXRlQ29tbWVudEgzLFxyXG4gICAgY3JlYXRlQ29tbWVudCxcclxuICBdO1xyXG4gIGNvbnN0IGZvcm1DaGlsZHJlbiA9IFtuYW1lSW5wdXQsIGNvbW1lbnRJbnB1dCwgc3VibWl0XTtcclxuICBmb3JtQ2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNyZWF0ZUNvbW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gcG9wdXAuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG4gIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cCc7XHJcbiAgY2xvc2VCdG4uY2xhc3NOYW1lID0gJ2ZhcyBmYS10aW1lcy1jaXJjbGUnO1xyXG4gIHBvcEltYWdlLmNsYXNzTmFtZSA9ICdwb3BJbWFnZSc7XHJcbiAgcG9wVGl0bGUuY2xhc3NOYW1lID0gJ3BvcFRpdGxlJztcclxuICBwb3BDaGFyYWN0ZXJpc3RpYy5jbGFzc05hbWUgPSAnY2hhcmFjdGVyaXN0aWMnO1xyXG4gIGNyZWF0ZUNvbW1lbnQuY2xhc3NOYW1lID0gJ2NyZWF0ZUNvbW1lbnQnO1xyXG4gIHN1Ym1pdC5jbGFzc05hbWUgPSAnc3VibWl0JztcclxuICBuYW1lSW5wdXQuY2xhc3NOYW1lID0gJ25hbWVJbnB1dCc7XHJcbiAgY29tbWVudElucHV0LmNsYXNzTmFtZSA9ICdjb21tZW50SW5wdXQnO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgY29tbWVudEgzLmlubmVyVGV4dCA9ICdDb21tZW50cyAoKSc7XHJcbiAgY3JlYXRlQ29tbWVudEgzLmlubmVyVGV4dCA9ICdDcmVhdGUgYSBjb21tZW50JztcclxuICBwb3BJbWFnZS5zcmMgPSBtZWFsLnN0ck1lYWxUaHVtYjtcclxuICBwb3BUaXRsZS5pbm5lclRleHQgPSBtZWFsLnN0ck1lYWw7XHJcbiAgc3VibWl0LmlubmVyVGV4dCA9ICdTdWJtaXQnO1xyXG5cclxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuICB9KTtcclxuXHJcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICBjcmVhdGlvbl9kYXRlOiBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxyXG4gICAgICB1c2VybmFtZTogbmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICBjb21tZW50OiBjb21tZW50SW5wdXQudmFsdWUsXHJcbiAgICB9O1xyXG4gICAgY29tbWVudE1lYWwoXHJcbiAgICAgIGludm9sdmVtZW50QVBJLFxyXG4gICAgICBhcHBJZCxcclxuICAgICAgbWVhbC5pZE1lYWwsXHJcbiAgICAgIHVzZXIudXNlcm5hbWUsXHJcbiAgICAgIHVzZXIuY29tbWVudCxcclxuICAgICk7XHJcbiAgICBnZW5lcmF0ZUNvbW1lbnQoY29tbWVudHMsIHVzZXIpO1xyXG4gICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICBjb21tZW50SW5wdXQudmFsdWUgPSAnJztcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVQb3B1cDtcclxuIiwiY29uc3QgY29tbWVudE1lYWwgPSBhc3luYyAoXHJcbiAgaW52b2x2bWVudEFQSSxcclxuICBhcHBJZCxcclxuICBtZWFsSWQsXHJcbiAgbmFtZVVzZXIsXHJcbiAgY29tbWVudFVzZXIsXHJcbikgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2bWVudEFQSX0vJHthcHBJZH0vY29tbWVudHNgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGl0ZW1faWQ6IG1lYWxJZCxcclxuICAgICAgdXNlcm5hbWU6IG5hbWVVc2VyLFxyXG4gICAgICBjb21tZW50OiBjb21tZW50VXNlcixcclxuICAgIH0pLFxyXG4gIH0pO1xyXG4gIHJldHVybiBjb21tZW50cy5zdGF0dXMgPT09IDIwMTtcclxufTtcclxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaW52b2x2bWVudEFQSSwgYXBwSWQsIG1lYWxJZCkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBmZXRjaChcclxuICAgIGAke2ludm9sdm1lbnRBUEl9LyR7YXBwSWR9L2NvbW1lbnRzLz9pdGVtX2lkPSR7bWVhbElkfWAsXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgY29tbWVudC5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjb21tZW50TWVhbCwgZ2V0Q29tbWVudHMgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vaW5kZXguaHRtbCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdldE1lbnVEYXRhLCBkaXNwbGF5TWVudUl0ZW1zIH0gZnJvbSAnLi9nZXRBUEkuanMnO1xuaW1wb3J0IGNvdW50TWVudUl0ZW1zIGZyb20gJy4vY291bnRlci5qcyc7XG5cbmNvbnN0IGdldERhdGFBUEkgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xLyc7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVDb3VudGVyJyk7XG5jb25zdCBob21lTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lTGlzdCcpO1xuY29uc3QgYWxsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUNvdW50ZXInKTtcbmNvbnN0IGluZGlhbkZvb2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5kaWFuRm9vZCcpO1xuY29uc3Qgc2VhRm9vZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFGb29kJyk7XG5jb25zdCBob21lSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUxpc3QnKTtcbmNvbnN0IGluZGlhbkl0bWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGlhbkxpc3QnKTtcbmNvbnN0IHNlYUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYUxpc3QnKTtcblxuZ2V0TWVudURhdGEoYCR7Z2V0RGF0YUFQSX1zZWFyY2gucGhwP2Y9YmApLnRoZW4oKG1lYWxzKSA9PiB7XG4gIGRpc3BsYXlNZW51SXRlbXMobWVhbHMsIGhvbWVMaXN0KTtcbiAgY29uc3QgbWVhbHNBID0gbWVhbHMubWVhbHM7XG4gIGNvbnN0IGl0ZW1zTGVuZ3RoID0gY291bnRNZW51SXRlbXMobWVhbHNBKTtcbiAgYWxsSXRlbXMuaW5uZXJUZXh0ID0gYEhvbWUgKCR7aXRlbXNMZW5ndGh9KWA7XG4gIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlzcGxheU1lbnVJdGVtcyhtZWFscywgaG9tZUxpc3QpO1xuICAgIGhvbWVJdGVtcy5pbm5lckhUTUwgPSAnJztcbiAgICBzZWFJdGVtcy5pbm5lckhUTUwgPSAnJztcbiAgICBpbmRpYW5JdG1lcy5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG4gIGFsbEl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlNZW51SXRlbXMobWVhbHMsIGhvbWVJdGVtcyk7XG4gICAgaG9tZUxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgc2VhSXRlbXMuaW5uZXJIVE1MID0gJyc7XG4gICAgaW5kaWFuSXRtZXMuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xufSk7XG5cbmdldE1lbnVEYXRhKGAke2dldERhdGFBUEl9ZmlsdGVyLnBocD9jPVNlYWZvb2RgKS50aGVuKChtZWFscykgPT4ge1xuICBjb25zdCBtZWFsc0EgPSBtZWFscy5tZWFscztcbiAgY29uc3QgaXRlbXNMZW5ndGggPSBjb3VudE1lbnVJdGVtcyhtZWFsc0EpO1xuICBzZWFGb29kLmlubmVyVGV4dCA9IGBTZWEgRm9vZCAoJHtpdGVtc0xlbmd0aH0pYDtcbiAgc2VhRm9vZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5TWVudUl0ZW1zKG1lYWxzLCBzZWFJdGVtcyk7XG4gICAgaG9tZUxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgaG9tZUl0ZW1zLmlubmVySFRNTCA9ICcnO1xuICAgIGluZGlhbkl0bWVzLmlubmVySFRNTCA9ICcnO1xuICB9KTtcbn0pO1xuXG5nZXRNZW51RGF0YShgJHtnZXREYXRhQVBJfWZpbHRlci5waHA/YT1DYW5hZGlhbmApLnRoZW4oKG1lYWxzKSA9PiB7XG4gIGNvbnN0IG1lYWxzQSA9IG1lYWxzLm1lYWxzO1xuICBjb25zdCBpdGVtc0xlbmd0aCA9IGNvdW50TWVudUl0ZW1zKG1lYWxzQSk7XG4gIGluZGlhbkZvb2QuaW5uZXJUZXh0ID0gYENhbmRpYW4gRm9vZCAoJHtpdGVtc0xlbmd0aH0pYDtcbiAgaW5kaWFuRm9vZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5TWVudUl0ZW1zKG1lYWxzLCBpbmRpYW5JdG1lcyk7XG4gICAgaG9tZUxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgaG9tZUl0ZW1zLmlubmVySFRNTCA9ICcnO1xuICAgIHNlYUl0ZW1zLmlubmVySFRNTCA9ICcnO1xuICB9KTtcbn0pO1xuXG4vLyBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICBnZXRNZW51RGF0YShgJHtnZXREYXRhQVBJfXNlYXJjaC5waHA/Zj1iYCkudGhlbigobWVhbHMpID0+IHtcbi8vICAgICBkaXNwbGF5TWVudUl0ZW1zKG1lYWxzLCBob21lTGlzdCk7XG4vLyAgIH0pO1xuLy8gICBob21lSXRlbXMuaW5uZXJIVE1MID0gJyc7XG4vLyAgIHNlYUl0ZW1zLmlubmVySFRNTCA9ICcnO1xuLy8gICBpbmRpYW5JdG1lcy5pbm5lckhUTUwgPSAnJztcbi8vIH0pO1xuXG4vLyBhbGxJdGVtcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgZ2V0TWVudURhdGEoYCR7Z2V0RGF0YUFQSX1zZWFyY2gucGhwP2Y9YmApLnRoZW4oKG1lYWxzKSA9PiB7XG4vLyAgICAgZGlzcGxheU1lbnVJdGVtcyhtZWFscywgaG9tZUl0ZW1zKTtcbi8vICAgfSk7XG4vLyAgIGhvbWVMaXN0LmlubmVySFRNTCA9ICcnO1xuLy8gICBzZWFJdGVtcy5pbm5lckhUTUwgPSAnJztcbi8vICAgaW5kaWFuSXRtZXMuaW5uZXJIVE1MID0gJyc7XG4vLyB9KTtcblxuLy8gaW5kaWFuRm9vZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgZ2V0TWVudURhdGEoYCR7Z2V0RGF0YUFQSX1maWx0ZXIucGhwP2E9Q2FuYWRpYW5gKS50aGVuKChtZWFscykgPT4ge1xuLy8gICAgIGRpc3BsYXlNZW51SXRlbXMobWVhbHMsIGluZGlhbkl0bWVzKTtcbi8vICAgfSk7XG4vLyAgIGhvbWVMaXN0LmlubmVySFRNTCA9ICcnO1xuLy8gICBob21lSXRlbXMuaW5uZXJIVE1MID0gJyc7XG4vLyAgIHNlYUl0ZW1zLmlubmVySFRNTCA9ICcnO1xuLy8gfSk7XG5cbi8vIHNlYUZvb2QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgIGdldE1lbnVEYXRhKGAke2dldERhdGFBUEl9ZmlsdGVyLnBocD9jPVNlYWZvb2RgKS50aGVuKChtZWFscykgPT4ge1xuLy8gICAgIGRpc3BsYXlNZW51SXRlbXMobWVhbHMsIHNlYUl0ZW1zKTtcbi8vICAgfSk7XG4vLyAgIGhvbWVMaXN0LmlubmVySFRNTCA9ICcnO1xuLy8gICBob21lSXRlbXMuaW5uZXJIVE1MID0gJyc7XG4vLyAgIGluZGlhbkl0bWVzLmlubmVySFRNTCA9ICcnO1xuLy8gfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9