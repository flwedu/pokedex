/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/styles.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/styles.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nhtml {\\n  font-size: 100%;\\n  box-sizing: border-box;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\nh2 {\\n  font-weight: 700;\\n  font-size: 1.4rem;\\n}\\n\\np {\\n  font-size: 1rem;\\n  text-align: center;\\n  text-justify: auto;\\n}\\n\\n.invisible {\\n  display: none;\\n}\\n\\n.auto-complete {\\n  position: relative;\\n  top: -2rem;\\n  left: -1rem;\\n  width: 10rem;\\n  height: fit-content;\\n  border: none;\\n  background: #b4f894;\\n}\\n.auto-complete p {\\n  margin: 0.3rem;\\n  color: #246d03;\\n  text-align: center;\\n  border-bottom: dotted 1px #246d03;\\n  cursor: pointer;\\n}\\n.auto-complete p:hover {\\n  font-weight: bold;\\n  background: #00ee9f;\\n}\\n\\n.main {\\n  width: 20rem;\\n  height: 28rem;\\n  background-color: #e60721;\\n  border: 0 solid #e60721;\\n  border-radius: 1rem;\\n  box-shadow: -0.2rem 0.5rem #242424;\\n}\\n\\n.container {\\n  margin: auto;\\n  display: grid;\\n  justify-items: center;\\n}\\n\\n.bottom {\\n  grid-template-rows: auto 2fr;\\n  width: 19rem;\\n  height: 13rem;\\n  background: #e60721;\\n}\\n\\n/* Display de resultados */\\n.display {\\n  margin-top: 1.5rem;\\n  width: 17.5rem;\\n  height: 12.5rem;\\n  background: linear-gradient(#66ff48, #b4f894);\\n  box-shadow: -2px 2px 0 inset #242424;\\n  /* Animação de transição */\\n}\\n.display__data {\\n  color: #246d03;\\n  padding: 0.5rem;\\n  /* Classe adicional que executa a animação */\\n}\\n.display__data.emtransicao {\\n  animation: fadein 1s;\\n}\\n@keyframes fadein {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\ntable,\\nth,\\ntd {\\n  font-size: 10px;\\n  text-align: center;\\n  border: 1px solid #000000;\\n  border-collapse: collapse;\\n  padding: 8px;\\n  width: 2rem;\\n}\\n\\n/* Left and right arrows */\\n#navigation {\\n  width: 17rem;\\n  grid-template-areas: \\\"a b\\\" \\\"c d\\\";\\n}\\n#navigation > input {\\n  margin: 0.5rem auto;\\n  box-sizing: border-box;\\n  font-size: x-small;\\n  text-transform: uppercase;\\n  letter-spacing: 1px;\\n  box-shadow: -1px 2px 0 #242424;\\n  text-decoration: none;\\n  width: 7rem;\\n  height: 2rem;\\n  text-align: center;\\n  background: #ffe800;\\n  border: none;\\n}\\n\\n/* Search bar & tools */\\n#search-tools {\\n  grid-template-columns: 12rem 2rem;\\n  justify-content: space-between;\\n}\\n\\n#search-text {\\n  width: 90%;\\n  padding: 0.4rem;\\n  text-align: center;\\n  box-shadow: -1px 1px 0 inset #242424;\\n}\\n\\n/* Botão de busca */\\n#botao-busca {\\n  width: 2rem;\\n  height: 2rem;\\n  background: none;\\n}\\n#botao-busca:hover {\\n  animation: spin 1s infinite linear;\\n}\\n\\n@keyframes spin {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokedex/./style/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://pokedex/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pokedex/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style/styles.scss":
/*!***************************!*\
  !*** ./style/styles.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pokedex/./style/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/core/EventEmitter.ts":
/*!**********************************!*\
  !*** ./src/core/EventEmitter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventEmitter\": () => (/* binding */ EventEmitter)\n/* harmony export */ });\nconst EventEmitter = {\r\n    events: new Map(),\r\n    on: (topic, callback) => {\r\n        const oldEvents = EventEmitter.events.get(topic);\r\n        if (EventEmitter.events.has(topic)) {\r\n            EventEmitter.events.set(topic, [...oldEvents, callback]);\r\n        }\r\n        return EventEmitter.events.set(topic, [callback]);\r\n    },\r\n    emit: (topic, data) => {\r\n        const listeners = EventEmitter.events.get(topic);\r\n        if (Array.isArray(listeners) && listeners.length) {\r\n            listeners.forEach((event) => event(data));\r\n        }\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://pokedex/./src/core/EventEmitter.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/styles.scss */ \"./style/styles.scss\");\n/* harmony import */ var _core_EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/EventEmitter */ \"./src/core/EventEmitter.ts\");\n/* harmony import */ var _view_AutoCompleteView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/AutoCompleteView */ \"./src/view/AutoCompleteView.ts\");\n/* harmony import */ var _service_SearchService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/SearchService */ \"./src/service/SearchService.ts\");\n/* harmony import */ var _ui_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Buttons */ \"./src/ui/Buttons.ts\");\n/* harmony import */ var _ui_DomElements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/DomElements */ \"./src/ui/DomElements.ts\");\n/* harmony import */ var _view_ResultsView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/ResultsView */ \"./src/view/ResultsView.ts\");\n/* harmony import */ var _view_updateViewFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/updateViewFunctions */ \"./src/view/updateViewFunctions.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet lastSearchedPokemon;\r\n//Function to save the last search\r\nfunction saveSearch(pokemon) {\r\n    lastSearchedPokemon = pokemon;\r\n    return pokemon;\r\n}\r\n;\r\n// Buttons actions\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.button__search.addEventListener(\"click\", () => {\r\n    _core_EventEmitter__WEBPACK_IMPORTED_MODULE_1__.EventEmitter.emit(\"search\", _ui_DomElements__WEBPACK_IMPORTED_MODULE_5__.input__search.value);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.button__next_view.addEventListener(\"click\", () => {\r\n    _view_ResultsView__WEBPACK_IMPORTED_MODULE_6__.ResultsView.renderNextView(lastSearchedPokemon);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.button__previous_view.addEventListener(\"click\", () => {\r\n    _view_ResultsView__WEBPACK_IMPORTED_MODULE_6__.ResultsView.renderpreviousView(lastSearchedPokemon);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.button__next_pokemon.addEventListener(\"click\", () => {\r\n    _core_EventEmitter__WEBPACK_IMPORTED_MODULE_1__.EventEmitter.emit(\"search\", lastSearchedPokemon.id + 1);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_4__.button__previous_pokemon.addEventListener(\"click\", () => {\r\n    _core_EventEmitter__WEBPACK_IMPORTED_MODULE_1__.EventEmitter.emit(\"search\", lastSearchedPokemon.id - 1);\r\n});\r\n// Listning to events\r\n_core_EventEmitter__WEBPACK_IMPORTED_MODULE_1__.EventEmitter.on(\"search\", (searchParam) => {\r\n    (0,_service_SearchService__WEBPACK_IMPORTED_MODULE_3__.searchInAPI)(searchParam).then(saveSearch).then(_view_ResultsView__WEBPACK_IMPORTED_MODULE_6__.ResultsView.renderView).catch(_view_updateViewFunctions__WEBPACK_IMPORTED_MODULE_7__.renderWithError);\r\n});\r\n\n\n//# sourceURL=webpack://pokedex/./src/index.ts?");

/***/ }),

/***/ "./src/service/AutoCompleteService.ts":
/*!********************************************!*\
  !*** ./src/service/AutoCompleteService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AutoCompleteService)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n/**\r\n * This class loads data from a file and provides an array with the pokemon names\r\n */\r\nclass AutoCompleteService {\r\n    /**\r\n     * @param {string} dataPath URL path to Pokémon names Json resource\r\n     */\r\n    constructor(dataPath) {\r\n        this.loadDataFromFile(dataPath)\r\n            .then(this.extractPropertiesToArray)\r\n            .then((result) => (this._arrayDeDados = result)).catch(() => this._arrayDeDados = []);\r\n    }\r\n    /**\r\n     * Loads the data of an local JSON file.\r\n     * @param {string | URL} dataPath URL of the file\r\n     */\r\n    loadDataFromFile(dataPath) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const results = yield fetch(dataPath);\r\n                if (results.ok) {\r\n                    return yield results.json();\r\n                }\r\n                else {\r\n                    throw new Error(yield results.text());\r\n                }\r\n            }\r\n            catch (err) {\r\n                console.error(\"Error getting pokémon lists to AutoCompleteService\");\r\n                console.error(err);\r\n            }\r\n        });\r\n    }\r\n    /**\r\n     * Extract values presents in JSON\r\n     * @param {JSON} rawData data in JSON format.\r\n     * @returns {string[]} a string array containing the extracted values.\r\n     */\r\n    extractPropertiesToArray(rawData) {\r\n        // Transferindo os valores do objeto para o array\r\n        // Dos valores já são retirados os nomes e convertidos para lowercase\r\n        return Object.values(rawData).map((element) => element.name.toLowerCase());\r\n    }\r\n    /**\r\n     * returns all values that matches a string.\r\n     * @param {string} name the value to be searched in the array\r\n     * @returns {string[]} a string array\r\n     */\r\n    listarPorAproximacao(name) {\r\n        // Retornando os 5 primeiros elementos do array de dados que satisfaçam a query\r\n        return this._arrayDeDados.filter((item) => item.includes(name)).slice(0, 5);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://pokedex/./src/service/AutoCompleteService.ts?");

/***/ }),

/***/ "./src/service/SearchService.ts":
/*!**************************************!*\
  !*** ./src/service/SearchService.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchInAPI\": () => (/* binding */ searchInAPI)\n/* harmony export */ });\nconst URL = \"https://pokeapi.co/api/v2/pokemon/\";\r\n/**\r\n * Executes a call to the API with params\r\n * @param {string} params\r\n */\r\nfunction searchInAPI(params) {\r\n    return new Promise((resolve, reject) => {\r\n        fetch(URL + params)\r\n            .then((response) => {\r\n            if (response.ok) {\r\n                response.json().then(resolve);\r\n            }\r\n            else {\r\n                reject(response);\r\n            }\r\n        })\r\n            .catch(reject);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://pokedex/./src/service/SearchService.ts?");

/***/ }),

/***/ "./src/ui/Buttons.ts":
/*!***************************!*\
  !*** ./src/ui/Buttons.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"button__next_view\": () => (/* binding */ button__next_view),\n/* harmony export */   \"button__previous_view\": () => (/* binding */ button__previous_view),\n/* harmony export */   \"button__search\": () => (/* binding */ button__search),\n/* harmony export */   \"button__next_pokemon\": () => (/* binding */ button__next_pokemon),\n/* harmony export */   \"button__previous_pokemon\": () => (/* binding */ button__previous_pokemon)\n/* harmony export */ });\nconst button__previous_view = document.getElementById(\"navigation-previous\");\r\nconst button__next_view = document.getElementById(\"navigation-next\");\r\nconst button__search = document.getElementById(\"botao-busca\");\r\nconst button__previous_pokemon = document.getElementById(\"pokemon-previous\");\r\nconst button__next_pokemon = document.getElementById(\"pokemon-next\");\r\n\r\n\n\n//# sourceURL=webpack://pokedex/./src/ui/Buttons.ts?");

/***/ }),

/***/ "./src/ui/DomElements.ts":
/*!*******************************!*\
  !*** ./src/ui/DomElements.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"input__search\": () => (/* binding */ input__search),\n/* harmony export */   \"display__data\": () => (/* binding */ display__data),\n/* harmony export */   \"display__autocomplete\": () => (/* binding */ display__autocomplete)\n/* harmony export */ });\n/* harmony import */ var _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/EventEmitter */ \"./src/core/EventEmitter.ts\");\n\r\nconst input__search = document.getElementById(\"search-text\");\r\nconst display__data = document.querySelector(\".display__data\");\r\nconst display__autocomplete = document.getElementById(\"display__autocomplete\");\r\n// Monitorando teclas digitadas no campo de texto\r\ninput__search.addEventListener(\"keydown\", (event) => {\r\n    if (keyMapper.has(event.key.toString()))\r\n        keyMapper.get(event.key.toString())();\r\n    else\r\n        keyMapper.get(\"Default\")();\r\n});\r\n// Mapeamento de todas as keys e ações disparadas\r\nconst keyMapper = new Map();\r\nkeyMapper.set(\"Enter\", () => _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"search\", input__search.value));\r\nkeyMapper.set(\"Default\", () => _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"autoComplete\", input__search.value));\r\nkeyMapper.set(\"Backspace\", () => {\r\n    //@ts-ignore\r\n    if (input__search.value.length < 2) {\r\n        _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"closeAutoComplete\", null);\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://pokedex/./src/ui/DomElements.ts?");

/***/ }),

/***/ "./src/util/ResponseDisplayMessages.ts":
/*!*********************************************!*\
  !*** ./src/util/ResponseDisplayMessages.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sucessTextWithPokemonData\": () => (/* binding */ sucessTextWithPokemonData),\n/* harmony export */   \"sucessTextWithPokemonStats\": () => (/* binding */ sucessTextWithPokemonStats),\n/* harmony export */   \"errorMessageWithResponseCode\": () => (/* binding */ errorMessageWithResponseCode)\n/* harmony export */ });\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ \"./src/util/text.ts\");\n\r\nconst errorImageSrc = \"../../assets/error.svg\";\r\nconst errorMessages = new Map();\r\nerrorMessages.set(\"default\", \"Error\");\r\nerrorMessages.set(\"404\", \"No Pokémon found\");\r\nerrorMessages.set(\"500\", \"Server Erro\");\r\n/**\r\n * Function that returns a literal string with pokemon data to be used in the element inner text\r\n * @param {IPokemon} pokemon\r\n * @returns {string}\r\n */\r\nfunction sucessTextWithPokemonData(pokemon) {\r\n    const parentElement = document.createElement(\"div\");\r\n    const h2 = document.createElement(\"h2\");\r\n    const img = document.createElement(\"img\");\r\n    const p = document.createElement(\"p\");\r\n    const pw = document.createElement(\"p\");\r\n    h2.textContent = `Nº:${pokemon.id} / ${(0,_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokemon.name)}`;\r\n    img.src = pokemon.sprites.front_default;\r\n    p.textContent = `Type: ${pokemon.types.map(type => type.type.name).join(\"|\")}`;\r\n    pw.textContent = `Weight: ${pokemon.weight} (in hectograms)`;\r\n    parentElement.append(h2, img, p, pw);\r\n    return parentElement.innerHTML;\r\n}\r\n/**\r\n * Function that returns a literal string with pokemon stats data to be used in the element inner text\r\n * @param {IPokemon} pokemon\r\n * @returns {string}\r\n */\r\nfunction sucessTextWithPokemonStats(pokemon) {\r\n    const parentElement = document.createElement(\"div\");\r\n    const p = document.createElement(\"p\");\r\n    const ul = document.createElement(\"ul\");\r\n    p.textContent = \"Initial Stats of Pokémon\";\r\n    ul.innerHTML = `\r\n  ${pokemon.stats.map(stat => `\r\n  <li>${stat.stat.name}: ${stat.base_stat}<li>\r\n  `).join(\"\")}\r\n  `;\r\n    parentElement.append(p, ul);\r\n    return parentElement.innerHTML;\r\n}\r\n/**\r\n *\r\n * @param {Response} response\r\n * @returns {string}\r\n */\r\nfunction errorMessageWithResponseCode(response) {\r\n    const parentElement = document.createElement(\"div\");\r\n    const h2 = document.createElement(\"h2\");\r\n    const p = document.createElement(\"p\");\r\n    const img = document.createElement(\"img\");\r\n    h2.textContent = `Error ${response.status}`;\r\n    p.textContent = `${errorMessages.get(response.status.toString()) || errorMessages.get(\"default\")}`;\r\n    img.src = errorImageSrc;\r\n    parentElement.append(h2, p, img);\r\n    return parentElement.innerHTML;\r\n}\r\n\n\n//# sourceURL=webpack://pokedex/./src/util/ResponseDisplayMessages.ts?");

/***/ }),

/***/ "./src/util/text.ts":
/*!**************************!*\
  !*** ./src/util/text.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatText)\n/* harmony export */ });\n// Classe responsável por funções de manipulação de texto\r\nfunction formatText(texto) {\r\n    let primeiraLetra = texto.slice(0, 1).toUpperCase();\r\n    let restanteDoTexto = texto.slice(1, texto.length).toLowerCase();\r\n    return primeiraLetra.concat(\"\", restanteDoTexto);\r\n}\r\n\n\n//# sourceURL=webpack://pokedex/./src/util/text.ts?");

/***/ }),

/***/ "./src/view/AutoCompleteView.ts":
/*!**************************************!*\
  !*** ./src/view/AutoCompleteView.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/EventEmitter */ \"./src/core/EventEmitter.ts\");\n/* harmony import */ var _service_AutoCompleteService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/AutoCompleteService */ \"./src/service/AutoCompleteService.ts\");\n/* harmony import */ var _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/DomElements */ \"./src/ui/DomElements.ts\");\n\r\n\r\n\r\n// Autocomplete\r\nconst autoCompleteService = new _service_AutoCompleteService__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"data/pokemon_names.json\");\r\n_core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.on(\"autoComplete\", (text) => {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.display__autocomplete.innerHTML = \"\";\r\n    autoCompleteService.listarPorAproximacao(text).map(pokemon => {\r\n        const p = document.createElement(\"p\");\r\n        p.textContent = pokemon;\r\n        p.addEventListener(\"click\", () => {\r\n            _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.input__search.value = p.textContent;\r\n            _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"closeAutoComplete\", null);\r\n        });\r\n        _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.display__autocomplete.appendChild(p);\r\n    });\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.display__autocomplete.classList.remove(\"invisible\");\r\n});\r\n_core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.on(\"closeAutoComplete\", () => {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.display__autocomplete.innerHTML = \"\";\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.display__autocomplete.classList.add(\"invisible\");\r\n});\r\n\n\n//# sourceURL=webpack://pokedex/./src/view/AutoCompleteView.ts?");

/***/ }),

/***/ "./src/view/ResultsView.ts":
/*!*********************************!*\
  !*** ./src/view/ResultsView.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ResultsView\": () => (/* binding */ ResultsView)\n/* harmony export */ });\n/* harmony import */ var _updateViewFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateViewFunctions */ \"./src/view/updateViewFunctions.ts\");\n\r\nconst ResultsView = {\r\n    // Declaring avaliables view\r\n    avaliableViews: [_updateViewFunctions__WEBPACK_IMPORTED_MODULE_0__.renderPokemonData, _updateViewFunctions__WEBPACK_IMPORTED_MODULE_0__.renderPokemonStats],\r\n    actualView: 0,\r\n    // Functions to execute render the results\r\n    renderView: function (pokemon) {\r\n        ResultsView.avaliableViews[ResultsView.actualView](pokemon);\r\n    },\r\n    renderNextView: function (pokemon) {\r\n        if (ResultsView.actualView < ResultsView.avaliableViews.length) {\r\n            ResultsView.actualView++;\r\n            ResultsView.avaliableViews[ResultsView.actualView](pokemon);\r\n        }\r\n    },\r\n    renderpreviousView: function (pokemon) {\r\n        if (ResultsView.actualView > 0) {\r\n            ResultsView.actualView--;\r\n            ResultsView.avaliableViews[ResultsView.actualView](pokemon);\r\n        }\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://pokedex/./src/view/ResultsView.ts?");

/***/ }),

/***/ "./src/view/updateViewFunctions.ts":
/*!*****************************************!*\
  !*** ./src/view/updateViewFunctions.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPokemonData\": () => (/* binding */ renderPokemonData),\n/* harmony export */   \"renderPokemonStats\": () => (/* binding */ renderPokemonStats),\n/* harmony export */   \"renderWithError\": () => (/* binding */ renderWithError)\n/* harmony export */ });\n/* harmony import */ var _ui_DomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/DomElements */ \"./src/ui/DomElements.ts\");\n/* harmony import */ var _util_ResponseDisplayMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ResponseDisplayMessages */ \"./src/util/ResponseDisplayMessages.ts\");\n\r\n\r\nconst renderPokemonData = (pokemon) => {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_0__.display__data.innerHTML = (0,_util_ResponseDisplayMessages__WEBPACK_IMPORTED_MODULE_1__.sucessTextWithPokemonData)(pokemon);\r\n    playTransition();\r\n};\r\nconst renderPokemonStats = (pokemon) => {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_0__.display__data.innerHTML = (0,_util_ResponseDisplayMessages__WEBPACK_IMPORTED_MODULE_1__.sucessTextWithPokemonStats)(pokemon);\r\n    playTransition();\r\n};\r\nconst renderWithError = (response) => {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_0__.display__data.innerHTML = (0,_util_ResponseDisplayMessages__WEBPACK_IMPORTED_MODULE_1__.errorMessageWithResponseCode)(response);\r\n    playTransition();\r\n};\r\nfunction playTransition() {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_0__.display__data.classList.add(\"emtransicao\");\r\n    setTimeout(() => _ui_DomElements__WEBPACK_IMPORTED_MODULE_0__.display__data.classList.remove(\"emtransicao\"), 1000);\r\n}\r\n\n\n//# sourceURL=webpack://pokedex/./src/view/updateViewFunctions.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;