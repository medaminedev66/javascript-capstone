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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Rubik&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #f0e9e1;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #cdc3b6;\r\n  color: #252426;\r\n  font-family: 'Libre Baskerville', serif;\r\n  padding: 0.5rem;\r\n}\r\n\r\nheader h1 a {\r\n  text-decoration: none;\r\n  color: currentColor;\r\n  font-family: 'Libre Baskerville', serif;\r\n  font-size: xx-large;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n}\r\n\r\n.logo img {\r\n  width: 60px;\r\n  height: 40px;\r\n}\r\n\r\nheader nav {\r\n  flex: 2;\r\n  margin: auto;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  font-size: small;\r\n  font-weight: 400;\r\n}\r\n\r\nheader nav ul li {\r\n  padding: 0.5rem 0.5rem;\r\n}\r\n\r\nheader nav ul li a {\r\n  text-decoration: none;\r\n  color: currentColor;\r\n  font-family: 'Merriweather', serif;\r\n}\r\n\r\nmain {\r\n  margin: 4rem;\r\n}\r\n\r\nmain .menuSection {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nmain .menuSection .menuItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  width: 22%;\r\n  margin: 2rem 4rem;\r\n}\r\n\r\nmain .menuSection .menuitem img {\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\n\r\n.meal-image {\r\n  border-style: double;\r\n  border-inline: 2px double;\r\n}\r\n\r\nmain .menuSection .menuItem p {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-family: 'Merriweather', serif;\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n}\r\n\r\nmain .menuSection .menuItem .likeSpan {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\nmain .menuSection .menuItem button {\r\n  margin: 5px 7px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  background-color: #252426;\r\n  color: #e0d7cf;\r\n  border: none;\r\n  border-radius: 0;\r\n}\r\n\r\nmain .menuSection .menuItem button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #252426;\r\n  color: #e0d7cf;\r\n  height: 2.5rem;\r\n  align-items: center;\r\n}\r\n\r\nfooter span {\r\n  padding-left: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.container {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.432);\r\n}\r\n\r\n.popup {\r\n  overflow-y: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 85%;\r\n  height: 85%;\r\n  background-color: #252426;\r\n  color: #e0d7cf;\r\n  border-radius: 1rem;\r\n  z-index: 10;\r\n  animation: drop 0.5s ease forwards;\r\n}\r\n\r\n@keyframes drop {\r\n  0% {\r\n    transform: translateY(100%);\r\n  }\r\n\r\n  70% {\r\n    transform: translateY(-20%);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0%);\r\n  }\r\n}\r\n\r\n.popup::-webkit-scrollbar {\r\n  width: 0.3rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 1px grey;\r\n  border-radius: 10px;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb {\r\n  background: #cdc3b6;\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa-times-circle {\r\n  position: sticky;\r\n  top: 0.8rem;\r\n  right: 0;\r\n  color: #f1dabf;\r\n  align-self: flex-end;\r\n  margin: 0.8rem;\r\n}\r\n\r\n.popImage {\r\n  width: 400px;\r\n  height: auto;\r\n  margin: 0 auto 1rem auto;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.popTitle {\r\n  text-align: center;\r\n}\r\n\r\n.characteristic {\r\n  font-size: 15px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  width: 350px;\r\n  justify-content: space-between;\r\n  margin: 1rem auto 1rem auto;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n}\r\n\r\nh3 {\r\n  margin: 1rem 0 1rem 0;\r\n}\r\n\r\n.createComment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 4rem;\r\n  gap: 0.8rem;\r\n  width: 400px;\r\n}\r\n\r\n.submit {\r\n  width: 15%;\r\n  padding: 0.5rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n.nameInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.commentInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.likeIcon {\r\n  color: red;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  header nav ul {\r\n    font-size: large;\r\n  }\r\n\r\n  header nav ul li {\r\n    padding: 1rem;\r\n    padding-bottom: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  header nav ul {\r\n    font-size: large;\r\n  }\r\n\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 40%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 90%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Rubik&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #f0e9e1;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #cdc3b6;\r\n  color: #252426;\r\n  font-family: 'Libre Baskerville', serif;\r\n  padding: 0.5rem;\r\n}\r\n\r\nheader h1 a {\r\n  text-decoration: none;\r\n  color: currentColor;\r\n  font-family: 'Libre Baskerville', serif;\r\n  font-size: xx-large;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n}\r\n\r\n.logo img {\r\n  width: 60px;\r\n  height: 40px;\r\n}\r\n\r\nheader nav {\r\n  flex: 2;\r\n  margin: auto;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  font-size: small;\r\n  font-weight: 400;\r\n}\r\n\r\nheader nav ul li {\r\n  padding: 0.5rem 0.5rem;\r\n}\r\n\r\nheader nav ul li a {\r\n  text-decoration: none;\r\n  color: currentColor;\r\n  font-family: 'Merriweather', serif;\r\n}\r\n\r\nmain {\r\n  margin: 4rem;\r\n}\r\n\r\nmain .menuSection {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nmain .menuSection .menuItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  width: 22%;\r\n  margin: 2rem 4rem;\r\n}\r\n\r\nmain .menuSection .menuitem img {\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\n\r\n.meal-image {\r\n  border-style: double;\r\n  border-inline: 2px double;\r\n}\r\n\r\nmain .menuSection .menuItem p {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-family: 'Merriweather', serif;\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n}\r\n\r\nmain .menuSection .menuItem .likeSpan {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\nmain .menuSection .menuItem button {\r\n  margin: 5px 7px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  background-color: #252426;\r\n  color: #e0d7cf;\r\n  border: none;\r\n  border-radius: 0;\r\n}\r\n\r\nmain .menuSection .menuItem button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #252426;\r\n  color: #e0d7cf;\r\n  height: 2.5rem;\r\n  align-items: center;\r\n}\r\n\r\nfooter span {\r\n  padding-left: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.container {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.432);\r\n}\r\n\r\n.popup {\r\n  overflow-y: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 85%;\r\n  height: 85%;\r\n  background-color: #252426;\r\n  color: #e0d7cf;\r\n  border-radius: 1rem;\r\n  z-index: 10;\r\n  animation: drop 0.5s ease forwards;\r\n}\r\n\r\n@keyframes drop {\r\n  0% {\r\n    transform: translateY(100%);\r\n  }\r\n\r\n  70% {\r\n    transform: translateY(-20%);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0%);\r\n  }\r\n}\r\n\r\n.popup::-webkit-scrollbar {\r\n  width: 0.3rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 1px grey;\r\n  border-radius: 10px;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb {\r\n  background: #cdc3b6;\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa-times-circle {\r\n  position: sticky;\r\n  top: 0.8rem;\r\n  right: 0;\r\n  color: #f1dabf;\r\n  align-self: flex-end;\r\n  margin: 0.8rem;\r\n}\r\n\r\n.popImage {\r\n  width: 400px;\r\n  height: auto;\r\n  margin: 0 auto 1rem auto;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.popTitle {\r\n  text-align: center;\r\n}\r\n\r\n.characteristic {\r\n  font-size: 15px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  width: 350px;\r\n  justify-content: space-between;\r\n  margin: 1rem auto 1rem auto;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin: 0.5rem auto 0.5rem auto;\r\n}\r\n\r\nh3 {\r\n  margin: 1rem 0 1rem 0;\r\n}\r\n\r\n.createComment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 4rem;\r\n  gap: 0.8rem;\r\n  width: 400px;\r\n}\r\n\r\n.submit {\r\n  width: 15%;\r\n  padding: 0.5rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n.nameInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.commentInput {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.likeIcon {\r\n  color: red;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  header nav ul {\r\n    font-size: large;\r\n  }\r\n\r\n  header nav ul li {\r\n    padding: 1rem;\r\n    padding-bottom: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  header nav ul {\r\n    font-size: large;\r\n  }\r\n\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 40%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  main .menuSection {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  main .menuSection .menuItem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    width: 90%;\r\n    margin: 2rem 2rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n    <title>Capstone</title>\r\n    <script src=\"https://kit.fontawesome.com/4f02d055e5.js\" crossorigin=\"anonymous\"></script>\r\n    <link href=\"//db.onlinewebfonts.com/c/69c633b2a4e41e8101c6f4f149655d5e?family=ING+Me\" rel=\"stylesheet\" type=\"text/css\"/>\r\n</head>\r\n<body>\r\n    \r\n    <header>\r\n        <div class=\"logo\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"meal\">\r\n            <h1> <a href=\"#\" class=\"homeCounter\">Restaurant Menu</a></h1>\r\n        </div>\r\n        <nav class=\"nav-bar\">\r\n            <ul class=\"menuHeader\">\r\n                <li><a href=\"#\" class=\"menuCounter\"></a></li>\r\n                <li><a href=\"#\" class=\"seaFood\"></a></li>\r\n                <li><a href=\"#\" class=\"indianFood\"></a></li>\r\n            </ul>\r\n        </nav>\r\n    </header>\r\n    <main>\r\n        <ul class=\"homeList menuSection\">\r\n        </ul>\r\n       <ul class=\"menuList menuSection\">\r\n       </ul>\r\n       <ul class=\"indianList menuSection\">\r\n      </ul>\r\n      <ul class=\"seaList menuSection\">\r\n    </ul>\r\n    </main>\r\n    <footer>\r\n        <span>Created by Microverse under CC license</span>\r\n    </footer>\r\n</body>\r\n</html>";
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

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePopup": () => (/* binding */ generatePopup),
/* harmony export */   "numberOfComments": () => (/* binding */ numberOfComments)
/* harmony export */ });
/* harmony import */ var _commentsApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsApi.js */ "./src/modules/commentsApi.js");


const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'SdPyDAmNNIPTUZaw27JK';

const numberOfComments = async (involvementAPI, appId, id) => {
  let number = 0;
  await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(involvementAPI, appId, id).then((data) => {
    data.forEach((user, index) => {
      number = index + 1;
    });
  });
  return number;
};

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

  // const commentsNumber = 0;
  numberOfComments(involvementAPI, appId, meal.idMeal).then((result) => {
    commentH3.innerText = `Comments (${result})`;
  });
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
    ).then((result) => {
      if (result) {
        numberOfComments(involvementAPI, appId, meal.idMeal).then((result) => {
          commentH3.innerText = `Comments (${result})`;
        });
      }
    });

    generateComment(comments, user);

    nameInput.value = '';
    commentInput.value = '';
  });
};



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

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((module) => {

const countMenuItems = ((meals) => meals.length);

module.exports = countMenuItems;


/***/ }),

/***/ "./src/modules/getAPI.js":
/*!*******************************!*\
  !*** ./src/modules/getAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMenuData": () => (/* binding */ getMenuData),
/* harmony export */   "displayMenuItems": () => (/* binding */ displayMenuItems)
/* harmony export */ });
/* harmony import */ var _likeItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeItems.js */ "./src/modules/likeItems.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");



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
    image.className = 'meal-image';
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
      (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.generatePopup)(m);
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

/***/ "./src/modules/likeItems.js":
/*!**********************************!*\
  !*** ./src/modules/likeItems.js ***!
  \**********************************/
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

/***/ "./src/img/meal.svg":
/*!**************************!*\
  !*** ./src/img/meal.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "695b22dca1bd9c626b19.svg";

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
/* harmony import */ var _modules_getAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getAPI.js */ "./src/modules/getAPI.js");
/* harmony import */ var _modules_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/counter.js */ "./src/modules/counter.js");
/* harmony import */ var _modules_counter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_counter_js__WEBPACK_IMPORTED_MODULE_3__);





const getDataAPI = 'https://www.themealdb.com/api/json/v1/1/';
const main = document.querySelector('.homeCounter');
const homeList = document.querySelector('.homeList');
const allItems = document.querySelector('.menuCounter');
const indianFood = document.querySelector('.indianFood');
const seaFood = document.querySelector('.seaFood');
const homeItems = document.querySelector('.menuList');
const indianItmes = document.querySelector('.indianList');
const seaItems = document.querySelector('.seaList');

(0,_modules_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}search.php?f=b`).then((meals) => {
  (0,_modules_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, homeList);
  const mealsA = meals.meals;
  const itemsLength = _modules_counter_js__WEBPACK_IMPORTED_MODULE_3___default()(mealsA);
  allItems.innerText = `HOME (${itemsLength})`;
  main.addEventListener('click', () => {
    (0,_modules_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, homeList);
    homeItems.innerHTML = '';
    seaItems.innerHTML = '';
    indianItmes.innerHTML = '';
  });
  allItems.addEventListener('click', () => {
    (0,_modules_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, homeItems);
    homeList.innerHTML = '';
    seaItems.innerHTML = '';
    indianItmes.innerHTML = '';
  });
});

(0,_modules_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}search.php?f=s`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = _modules_counter_js__WEBPACK_IMPORTED_MODULE_3___default()(mealsA);
  seaFood.innerText = `CONTINENTAL (${itemsLength})`;
  seaFood.addEventListener('click', () => {
    (0,_modules_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, seaItems);
    homeList.innerHTML = '';
    homeItems.innerHTML = '';
    indianItmes.innerHTML = '';
  });
});

(0,_modules_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMenuData)(`${getDataAPI}filter.php?a=Canadian`).then((meals) => {
  const mealsA = meals.meals;
  const itemsLength = _modules_counter_js__WEBPACK_IMPORTED_MODULE_3___default()(mealsA);
  indianFood.innerText = `CANADIAN FOOD (${itemsLength})`;
  indianFood.addEventListener('click', () => {
    (0,_modules_getAPI_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuItems)(meals, indianItmes);
    homeList.innerHTML = '';
    homeItems.innerHTML = '';
    seaItems.innerHTML = '';
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQW1CLDBCQUEwQixPQUFPLEtBQUssV0FBVyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZ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QWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSwrREFBVyxJQUFJLFdBQVc7QUFDMUI7QUFDQSxzQkFBc0IsMERBQWM7QUFDcEMsc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQSxJQUFJLG9FQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsK0RBQVcsSUFBSSxXQUFXO0FBQzFCO0FBQ0Esc0JBQXNCLDBEQUFjO0FBQ3BDLDJDQUEyQyxZQUFZO0FBQ3ZEO0FBQ0EsSUFBSSxvRUFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50c0FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY291bnRlci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0QVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9saWtlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrQmFza2VydmlsbGUmZmFtaWx5PVJ1YmlrJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGU5ZTE7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGMzYjY7XFxyXFxuICBjb2xvcjogIzI1MjQyNjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIGZsZXg6IDI7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5tZW51U2VjdGlvbiB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDIyJTtcXHJcXG4gIG1hcmdpbjogMnJlbSA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5tZW51U2VjdGlvbiAubWVudWl0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiA0NXB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWFnZSB7XFxyXFxuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcXHJcXG4gIGJvcmRlci1pbmxpbmU6IDJweCBkb3VibGU7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSAubGlrZVNwYW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIGJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDVweCA3cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjQyNjtcXHJcXG4gIGNvbG9yOiAjZTBkN2NmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIGJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNDI2O1xcclxcbiAgY29sb3I6ICNlMGQ3Y2Y7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBzcGFuIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgaGVpZ2h0OiA4NSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNDI2O1xcclxcbiAgY29sb3I6ICNlMGQ3Y2Y7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBhbmltYXRpb246IGRyb3AgMC41cyBlYXNlIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGRyb3Age1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA3MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggZ3JleTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2RjM2I2O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRpbWVzLWNpcmNsZSB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwLjhyZW07XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGNvbG9yOiAjZjFkYWJmO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW46IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcEltYWdlIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3BUaXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaGFyYWN0ZXJpc3RpYyB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgd2lkdGg6IDM1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwLjVyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlQ29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lSW5wdXQge1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudElucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VJY29uIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgaGVhZGVyIG5hdiB1bCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsIGxpIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgaGVhZGVyIG5hdiB1bCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFD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Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlJmZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlOWUxO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjM2I2O1xcclxcbiAgY29sb3I6ICMyNTI0MjY7XFxyXFxuICBmb250LWZhbWlseTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBoMSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxyXFxuICBmb250LWZhbWlseTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWY7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB7XFxyXFxuICBmbGV4OiAyO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxyXFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbjogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24ge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAyMiU7XFxyXFxuICBtYXJnaW46IDJyZW0gNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudVNlY3Rpb24gLm1lbnVpdGVtIGltZyB7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW1hZ2Uge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XFxyXFxuICBib3JkZXItaW5saW5lOiAycHggZG91YmxlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0gcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5tZW51U2VjdGlvbiAubWVudUl0ZW0gLmxpa2VTcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSBidXR0b24ge1xcclxcbiAgbWFyZ2luOiA1cHggN3B4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI0MjY7XFxyXFxuICBjb2xvcjogI2UwZDdjZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnVTZWN0aW9uIC5tZW51SXRlbSBidXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjQyNjtcXHJcXG4gIGNvbG9yOiAjZTBkN2NmO1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgc3BhbiB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQzMik7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGhlaWdodDogODUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjQyNjtcXHJcXG4gIGNvbG9yOiAjZTBkN2NmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgYW5pbWF0aW9uOiBkcm9wIDAuNXMgZWFzZSBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBkcm9wIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNzAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IGdyZXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogI2NkYzNiNjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mYS10aW1lcy1jaXJjbGUge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHRvcDogMC44cmVtO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBjb2xvcjogI2YxZGFiZjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3BJbWFnZSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcmFjdGVyaXN0aWMge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvIDFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMC41cmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZUNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbiAgZ2FwOiAwLjhyZW07XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQge1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZUlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRJbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5saWtlSWNvbiB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlciBuYXYgdWwge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIGhlYWRlciBuYXYgdWwge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAubWVudVNlY3Rpb24ge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgbWFpbiAubWVudVNlY3Rpb24ge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAubWVudVNlY3Rpb24gLm1lbnVJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWVhbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuPGhlYWQ+XFxyXFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXHJcXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIj5cXHJcXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcclxcbiAgICA8c2NyaXB0IHNyYz0naHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2EwNzZkMDUzOTkuanMnIGNyb3Nzb3JpZ2luPSdhbm9ueW1vdXMnPjwvc2NyaXB0PlxcclxcbiAgICA8dGl0bGU+Q2Fwc3RvbmU8L3RpdGxlPlxcclxcbiAgICA8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzRmMDJkMDU1ZTUuanNcXFwiIGNyb3Nzb3JpZ2luPVxcXCJhbm9ueW1vdXNcXFwiPjwvc2NyaXB0PlxcclxcbiAgICA8bGluayBocmVmPVxcXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzY5YzYzM2IyYTRlNDFlODEwMWM2ZjRmMTQ5NjU1ZDVlP2ZhbWlseT1JTkcrTWVcXFwiIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgdHlwZT1cXFwidGV4dC9jc3NcXFwiLz5cXHJcXG48L2hlYWQ+XFxyXFxuPGJvZHk+XFxyXFxuICAgIFxcclxcbiAgICA8aGVhZGVyPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcIm1lYWxcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImhvbWVDb3VudGVyXFxcIj5SZXN0YXVyYW50IE1lbnU8L2E+PC9oMT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwibmF2LWJhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJtZW51SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJtZW51Q291bnRlclxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwic2VhRm9vZFxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiaW5kaWFuRm9vZFxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvbmF2PlxcclxcbiAgICA8L2hlYWRlcj5cXHJcXG4gICAgPG1haW4+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcImhvbWVMaXN0IG1lbnVTZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgICAgIDx1bCBjbGFzcz1cXFwibWVudUxpc3QgbWVudVNlY3Rpb25cXFwiPlxcclxcbiAgICAgICA8L3VsPlxcclxcbiAgICAgICA8dWwgY2xhc3M9XFxcImluZGlhbkxpc3QgbWVudVNlY3Rpb25cXFwiPlxcclxcbiAgICAgIDwvdWw+XFxyXFxuICAgICAgPHVsIGNsYXNzPVxcXCJzZWFMaXN0IG1lbnVTZWN0aW9uXFxcIj5cXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPC9tYWluPlxcclxcbiAgICA8Zm9vdGVyPlxcclxcbiAgICAgICAgPHNwYW4+Q3JlYXRlZCBieSBNaWNyb3ZlcnNlIHVuZGVyIENDIGxpY2Vuc2U8L3NwYW4+XFxyXFxuICAgIDwvZm9vdGVyPlxcclxcbjwvYm9keT5cXHJcXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY29tbWVudE1lYWwsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50c0FwaS5qcyc7XG5cbmNvbnN0IGludm9sdmVtZW50QVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzJztcbmNvbnN0IGFwcElkID0gJ1NkUHlEQW1OTklQVFVaYXcyN0pLJztcblxuY29uc3QgbnVtYmVyT2ZDb21tZW50cyA9IGFzeW5jIChpbnZvbHZlbWVudEFQSSwgYXBwSWQsIGlkKSA9PiB7XG4gIGxldCBudW1iZXIgPSAwO1xuICBhd2FpdCBnZXRDb21tZW50cyhpbnZvbHZlbWVudEFQSSwgYXBwSWQsIGlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgbnVtYmVyID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG51bWJlcjtcbn07XG5cbmNvbnN0IGdlbmVyYXRlSW5mbyA9IChlbGVtZW50LCBtZWFsKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB0ZXh0Q2F0ZWdvcnkgPSBtZWFsLnN0ckNhdGVnb3J5O1xuICBjYXRlZ29yeS5pbm5lclRleHQgPSBgQ2F0ZWdvcnk6ICR7dGV4dENhdGVnb3J5fWA7XG4gIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHRleHRBcmVhID0gbWVhbC5zdHJBcmVhO1xuICBhcmVhLmlubmVyVGV4dCA9IGBBcmVhOiAke3RleHRBcmVhfWA7XG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgdGV4dEluc3RydWN0aW9ucyA9IG1lYWwuc3RySW5zdHJ1Y3Rpb25zO1xuICBpbnN0cnVjdGlvbnMuaW5uZXJUZXh0ID0gYEluc3RydWN0aW9uczogJHt0ZXh0SW5zdHJ1Y3Rpb25zfWA7XG4gIGNvbnN0IGNoaWxkcmVuID0gW2NhdGVnb3J5LCBhcmVhLCBpbnN0cnVjdGlvbnNdO1xuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVDb21tZW50ID0gKGVsZW1lbnQsIHVzZXIpID0+IHtcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB0aGVDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkYXRlLmlubmVyVGV4dCA9IHVzZXIuY3JlYXRpb25fZGF0ZTtcbiAgbmFtZS5pbm5lclRleHQgPSB1c2VyLnVzZXJuYW1lO1xuICB0aGVDb21tZW50LmlubmVyVGV4dCA9IHVzZXIuY29tbWVudDtcbiAgY29uc3QgY2hpbGRyZW4gPSBbZGF0ZSwgbmFtZSwgdGhlQ29tbWVudF07XG4gIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjb21tZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIGNvbW1lbnQuY2xhc3NOYW1lID0gJ2NvbW1lbnQnO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbW1lbnQpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVQb3B1cCA9IChtZWFsKSA9PiB7XG4gIC8vIGNvbW1lbnRNZWFsKGludm9sdmVtZW50QVBJLCBhcHBJZCwgbWVhbC5pZE1lYWwpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3QgcG9wSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBjb25zdCBwb3BUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHBvcENoYXJhY3RlcmlzdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdlbmVyYXRlSW5mbyhwb3BDaGFyYWN0ZXJpc3RpYywgbWVhbCk7XG5cbiAgY29uc3QgY29tbWVudEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ2V0Q29tbWVudHMoaW52b2x2ZW1lbnRBUEksIGFwcElkLCBtZWFsLmlkTWVhbCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGRhdGEuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgZ2VuZXJhdGVDb21tZW50KGNvbW1lbnRzLCB1c2VyKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlQ29tbWVudEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgY3JlYXRlQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdOYW1lLi4uJztcbiAgY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgY29tbWVudElucHV0LnBsYWNlaG9sZGVyID0gJ0NvbW1lbnQuLi4nO1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0LnR5cGUgPSAnYnV0dG9uJztcblxuICBjb25zdCBjaGlsZHJlbiA9IFtcbiAgICBjbG9zZUJ0bixcbiAgICBwb3BJbWFnZSxcbiAgICBwb3BUaXRsZSxcbiAgICBwb3BDaGFyYWN0ZXJpc3RpYyxcbiAgICBjb21tZW50SDMsXG4gICAgY29tbWVudHMsXG4gICAgY3JlYXRlQ29tbWVudEgzLFxuICAgIGNyZWF0ZUNvbW1lbnQsXG4gIF07XG4gIGNvbnN0IGZvcm1DaGlsZHJlbiA9IFtuYW1lSW5wdXQsIGNvbW1lbnRJbnB1dCwgc3VibWl0XTtcbiAgZm9ybUNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjcmVhdGVDb21tZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBwb3B1cC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXApO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAnO1xuICBjbG9zZUJ0bi5jbGFzc05hbWUgPSAnZmFzIGZhLXRpbWVzLWNpcmNsZSc7XG4gIHBvcEltYWdlLmNsYXNzTmFtZSA9ICdwb3BJbWFnZSc7XG4gIHBvcFRpdGxlLmNsYXNzTmFtZSA9ICdwb3BUaXRsZSc7XG4gIHBvcENoYXJhY3RlcmlzdGljLmNsYXNzTmFtZSA9ICdjaGFyYWN0ZXJpc3RpYyc7XG4gIGNyZWF0ZUNvbW1lbnQuY2xhc3NOYW1lID0gJ2NyZWF0ZUNvbW1lbnQnO1xuICBzdWJtaXQuY2xhc3NOYW1lID0gJ3N1Ym1pdCc7XG4gIG5hbWVJbnB1dC5jbGFzc05hbWUgPSAnbmFtZUlucHV0JztcbiAgY29tbWVudElucHV0LmNsYXNzTmFtZSA9ICdjb21tZW50SW5wdXQnO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgLy8gY29uc3QgY29tbWVudHNOdW1iZXIgPSAwO1xuICBudW1iZXJPZkNvbW1lbnRzKGludm9sdmVtZW50QVBJLCBhcHBJZCwgbWVhbC5pZE1lYWwpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIGNvbW1lbnRIMy5pbm5lclRleHQgPSBgQ29tbWVudHMgKCR7cmVzdWx0fSlgO1xuICB9KTtcbiAgY3JlYXRlQ29tbWVudEgzLmlubmVyVGV4dCA9ICdDcmVhdGUgYSBjb21tZW50JztcbiAgcG9wSW1hZ2Uuc3JjID0gbWVhbC5zdHJNZWFsVGh1bWI7XG4gIHBvcFRpdGxlLmlubmVyVGV4dCA9IG1lYWwuc3RyTWVhbDtcbiAgc3VibWl0LmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICBjcmVhdGlvbl9kYXRlOiBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgdXNlcm5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnRJbnB1dC52YWx1ZSxcbiAgICB9O1xuICAgIGNvbW1lbnRNZWFsKFxuICAgICAgaW52b2x2ZW1lbnRBUEksXG4gICAgICBhcHBJZCxcbiAgICAgIG1lYWwuaWRNZWFsLFxuICAgICAgdXNlci51c2VybmFtZSxcbiAgICAgIHVzZXIuY29tbWVudCxcbiAgICApLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBudW1iZXJPZkNvbW1lbnRzKGludm9sdmVtZW50QVBJLCBhcHBJZCwgbWVhbC5pZE1lYWwpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGNvbW1lbnRIMy5pbm5lclRleHQgPSBgQ29tbWVudHMgKCR7cmVzdWx0fSlgO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGdlbmVyYXRlQ29tbWVudChjb21tZW50cywgdXNlcik7XG5cbiAgICBuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICBjb21tZW50SW5wdXQudmFsdWUgPSAnJztcbiAgfSk7XG59O1xuZXhwb3J0IHsgZ2VuZXJhdGVQb3B1cCwgbnVtYmVyT2ZDb21tZW50cyB9O1xuIiwiY29uc3QgY29tbWVudE1lYWwgPSBhc3luYyAoXG4gIGludm9sdm1lbnRBUEksXG4gIGFwcElkLFxuICBtZWFsSWQsXG4gIG5hbWVVc2VyLFxuICBjb21tZW50VXNlcixcbikgPT4ge1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoKGAke2ludm9sdm1lbnRBUEl9LyR7YXBwSWR9L2NvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBtZWFsSWQsXG4gICAgICB1c2VybmFtZTogbmFtZVVzZXIsXG4gICAgICBjb21tZW50OiBjb21tZW50VXNlcixcbiAgICB9KSxcbiAgfSk7XG4gIHJldHVybiBjb21tZW50cy5zdGF0dXMgPT09IDIwMTtcbn07XG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpbnZvbHZtZW50QVBJLCBhcHBJZCwgbWVhbElkKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtpbnZvbHZtZW50QVBJfS8ke2FwcElkfS9jb21tZW50cy8/aXRlbV9pZD0ke21lYWxJZH1gLFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgY29tbWVudC5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IHsgY29tbWVudE1lYWwsIGdldENvbW1lbnRzIH07XG4iLCJjb25zdCBjb3VudE1lbnVJdGVtcyA9ICgobWVhbHMpID0+IG1lYWxzLmxlbmd0aCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvdW50TWVudUl0ZW1zO1xyXG4iLCJpbXBvcnQgeyBsaWtlTWVhbCwgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VJdGVtcy5qcyc7XHJcbmltcG9ydCB7IGdlbmVyYXRlUG9wdXAgfSBmcm9tICcuL2NvbW1lbnRzLmpzJztcclxuXHJcbmNvbnN0IGludm9sdmVtZW50QVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzJztcclxuY29uc3QgYXBwSWQgPSAnU2RQeURBbU5OSVBUVVphdzI3SksnO1xyXG5cclxuY29uc3QgZ2V0TWVudURhdGEgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgY29uc3Qgc2NvcmUgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIHJldHVybiBzY29yZS5qc29uKCk7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlNZW51SXRlbXMgPSAobWVhbHMsIGhvbWVJdGVtcykgPT4ge1xyXG4gIGNvbnN0IG1lYWxzQXJyYXkgPSBtZWFscy5tZWFscztcclxuICBtZWFsc0FycmF5LmZvckVhY2goKG0pID0+IHtcclxuICAgIGxldCBpc0xpa2VkID0gZmFsc2U7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5jbGFzc05hbWUgPSAnbWVudUl0ZW0nO1xyXG4gICAgbGkuaWQgPSAnaW5uZXJJdGVtJztcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWFnZS5jbGFzc05hbWUgPSAnbWVhbC1pbWFnZSc7XHJcbiAgICBpbWFnZS5zcmMgPSBtLnN0ck1lYWxUaHVtYjtcclxuICAgIGxpLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhLmlubmVyVGV4dCA9IG0uc3RyTWVhbDtcclxuXHJcbiAgICBjb25zdCBhVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYVRhZy5jbGFzc05hbWUgPSAndGVzdCc7XHJcbiAgICBhVGFnLmlkID0gbS5pZE1lYWw7XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhciBmYS1oZWFydCc7XHJcbiAgICBpY29uLmlkID0gbS5pZE1lYWw7XHJcblxyXG4gICAgYVRhZy5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIHBhcmEuYXBwZW5kQ2hpbGQoYVRhZyk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChwYXJhKTtcclxuXHJcbiAgICBjb25zdCBzcGFucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNwYW5zLmNsYXNzTmFtZSA9ICdsaWtlU3Bhbic7XHJcbiAgICBzcGFucy5pZCA9ICdzcGFuTGlrZSc7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChzcGFucyk7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bi5pbm5lclRleHQgPSAnQ29tbWVudCc7XHJcbiAgICBidG4uaWQgPSBtLmlkTWVhbDtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZ2VuZXJhdGVQb3B1cChtKTtcclxuICAgIH0pO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgIGhvbWVJdGVtcy5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBpZiAoaXNMaWtlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgYVRhZy5jbGFzc0xpc3QucmVtb3ZlKCdsaWtlSWNvbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYVRhZy5jbGFzc0xpc3QuYWRkKCdsaWtlSWNvbicpO1xyXG4gICAgfVxyXG4gICAgZ2V0TGlrZXMoaW52b2x2ZW1lbnRBUEksIGFwcElkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2U7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLml0ZW1faWQgPT09IG0uaWRNZWFsKSB7XHJcbiAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgIHNwYW5zLmlubmVyVGV4dCA9IGl0ZW0ubGlrZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGlzRm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgc3BhbnMuaW5uZXJUZXh0ID0gMDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBhVGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoaXNMaWtlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICBsaWtlTWVhbChpbnZvbHZlbWVudEFQSSwgYXBwSWQsIG0uaWRNZWFsKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgZ2V0TGlrZXMoaW52b2x2ZW1lbnRBUEksIGFwcElkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pdGVtX2lkID09PSBtLmlkTWVhbCkge1xyXG4gICAgICAgICAgICAgICAgICBzcGFucy5pbm5lclRleHQgPSBpdGVtLmxpa2VzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpc0xpa2VkID0gdHJ1ZTtcclxuICAgICAgICBhVGFnLmNsYXNzTGlzdC5hZGQoJ2xpa2VJY29uJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXNMaWtlZCA9IGZhbHNlO1xyXG4gICAgICAgIGFUYWcuY2xhc3NMaXN0LnJlbW92ZSgnbGlrZUljb24nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRNZW51RGF0YSwgZGlzcGxheU1lbnVJdGVtcyB9O1xyXG4iLCJjb25zdCBsaWtlTWVhbCA9IGFzeW5jIChpbnZvbHZtZW50QVBJLCBhcHBJZCwgaWQpID0+IHtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZtZW50QVBJfS8ke2FwcElkfS9saWtlc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgfSksXG4gIH0pO1xuICByZXR1cm4gbGlrZXMuc3RhdHVzID09PSAyMDE7XG59O1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jIChpbnZvbHZtZW50QVBJLCBhcHBJZCkgPT4ge1xuICBjb25zdCBsaWtlID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2bWVudEFQSX0vJHthcHBJZH0vbGlrZXNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGxpa2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCB7IGxpa2VNZWFsLCBnZXRMaWtlcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vaW5kZXguaHRtbCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBnZXRNZW51RGF0YSwgZGlzcGxheU1lbnVJdGVtcyB9IGZyb20gJy4vbW9kdWxlcy9nZXRBUEkuanMnO1xyXG5pbXBvcnQgY291bnRNZW51SXRlbXMgZnJvbSAnLi9tb2R1bGVzL2NvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgZ2V0RGF0YUFQSSA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvJztcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lQ291bnRlcicpO1xyXG5jb25zdCBob21lTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lTGlzdCcpO1xyXG5jb25zdCBhbGxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Q291bnRlcicpO1xyXG5jb25zdCBpbmRpYW5Gb29kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGlhbkZvb2QnKTtcclxuY29uc3Qgc2VhRm9vZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFGb29kJyk7XHJcbmNvbnN0IGhvbWVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51TGlzdCcpO1xyXG5jb25zdCBpbmRpYW5JdG1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpYW5MaXN0Jyk7XHJcbmNvbnN0IHNlYUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYUxpc3QnKTtcclxuXHJcbmdldE1lbnVEYXRhKGAke2dldERhdGFBUEl9c2VhcmNoLnBocD9mPWJgKS50aGVuKChtZWFscykgPT4ge1xyXG4gIGRpc3BsYXlNZW51SXRlbXMobWVhbHMsIGhvbWVMaXN0KTtcclxuICBjb25zdCBtZWFsc0EgPSBtZWFscy5tZWFscztcclxuICBjb25zdCBpdGVtc0xlbmd0aCA9IGNvdW50TWVudUl0ZW1zKG1lYWxzQSk7XHJcbiAgYWxsSXRlbXMuaW5uZXJUZXh0ID0gYEhPTUUgKCR7aXRlbXNMZW5ndGh9KWA7XHJcbiAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpc3BsYXlNZW51SXRlbXMobWVhbHMsIGhvbWVMaXN0KTtcclxuICAgIGhvbWVJdGVtcy5pbm5lckhUTUwgPSAnJztcclxuICAgIHNlYUl0ZW1zLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaW5kaWFuSXRtZXMuaW5uZXJIVE1MID0gJyc7XHJcbiAgfSk7XHJcbiAgYWxsSXRlbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkaXNwbGF5TWVudUl0ZW1zKG1lYWxzLCBob21lSXRlbXMpO1xyXG4gICAgaG9tZUxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBzZWFJdGVtcy5pbm5lckhUTUwgPSAnJztcclxuICAgIGluZGlhbkl0bWVzLmlubmVySFRNTCA9ICcnO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmdldE1lbnVEYXRhKGAke2dldERhdGFBUEl9c2VhcmNoLnBocD9mPXNgKS50aGVuKChtZWFscykgPT4ge1xyXG4gIGNvbnN0IG1lYWxzQSA9IG1lYWxzLm1lYWxzO1xyXG4gIGNvbnN0IGl0ZW1zTGVuZ3RoID0gY291bnRNZW51SXRlbXMobWVhbHNBKTtcclxuICBzZWFGb29kLmlubmVyVGV4dCA9IGBDT05USU5FTlRBTCAoJHtpdGVtc0xlbmd0aH0pYDtcclxuICBzZWFGb29kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGlzcGxheU1lbnVJdGVtcyhtZWFscywgc2VhSXRlbXMpO1xyXG4gICAgaG9tZUxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBob21lSXRlbXMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpbmRpYW5JdG1lcy5pbm5lckhUTUwgPSAnJztcclxuICB9KTtcclxufSk7XHJcblxyXG5nZXRNZW51RGF0YShgJHtnZXREYXRhQVBJfWZpbHRlci5waHA/YT1DYW5hZGlhbmApLnRoZW4oKG1lYWxzKSA9PiB7XHJcbiAgY29uc3QgbWVhbHNBID0gbWVhbHMubWVhbHM7XHJcbiAgY29uc3QgaXRlbXNMZW5ndGggPSBjb3VudE1lbnVJdGVtcyhtZWFsc0EpO1xyXG4gIGluZGlhbkZvb2QuaW5uZXJUZXh0ID0gYENBTkFESUFOIEZPT0QgKCR7aXRlbXNMZW5ndGh9KWA7XHJcbiAgaW5kaWFuRm9vZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpc3BsYXlNZW51SXRlbXMobWVhbHMsIGluZGlhbkl0bWVzKTtcclxuICAgIGhvbWVMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgaG9tZUl0ZW1zLmlubmVySFRNTCA9ICcnO1xyXG4gICAgc2VhSXRlbXMuaW5uZXJIVE1MID0gJyc7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=