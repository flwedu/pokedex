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

/***/ "./dist/js/core/EventEmitter.js":
/*!**************************************!*\
  !*** ./dist/js/core/EventEmitter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventEmitter\": () => (/* binding */ EventEmitter)\n/* harmony export */ });\nconst EventEmitter = {\r\n    events: new Map(),\r\n    on: (topic, callback) => {\r\n        const oldEvents = EventEmitter.events.get(topic);\r\n        if (EventEmitter.events.has(topic)) {\r\n            EventEmitter.events.set(topic, [...oldEvents, callback]);\r\n        }\r\n        return EventEmitter.events.set(topic, [callback]);\r\n    },\r\n    emit: (topic, data) => {\r\n        const listeners = EventEmitter.events.get(topic);\r\n        if (Array.isArray(listeners) && listeners.length) {\r\n            listeners.forEach((event) => event(data));\r\n        }\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://pokedex/./dist/js/core/EventEmitter.js?");

/***/ }),

/***/ "./dist/js/index.js":
/*!**************************!*\
  !*** ./dist/js/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/EventEmitter */ \"./dist/js/core/EventEmitter.js\");\n/* harmony import */ var _service_SearchService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/SearchService */ \"./dist/js/service/SearchService.js\");\n/* harmony import */ var _ui_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Buttons */ \"./dist/js/ui/Buttons.js\");\n/* harmony import */ var _ui_DomElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/DomElements */ \"./dist/js/ui/DomElements.js\");\n/* harmony import */ var _view_updateViewFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/updateViewFunctions */ \"./dist/js/view/updateViewFunctions.js\");\n\r\n\r\n\r\n\r\n\r\nlet lastSearchedPokemon;\r\n// Declaring avaliables view\r\nconst avaliableViews = [_view_updateViewFunctions__WEBPACK_IMPORTED_MODULE_4__.renderPokemonData, _view_updateViewFunctions__WEBPACK_IMPORTED_MODULE_4__.renderPokemonStats];\r\nlet actualView = 0;\r\n// Functions to execute render the results\r\nfunction renderView(pokemon) {\r\n    avaliableViews[actualView](pokemon);\r\n}\r\nfunction renderNextView(pokemon) {\r\n    if (actualView < avaliableViews.length) {\r\n        actualView++;\r\n        avaliableViews[actualView](pokemon);\r\n    }\r\n}\r\nfunction renderpreviousView(pokemon) {\r\n    if (actualView > 0) {\r\n        actualView--;\r\n        avaliableViews[actualView](pokemon);\r\n    }\r\n}\r\n//Function to save the last search\r\nfunction saveSearch(pokemon) {\r\n    lastSearchedPokemon = pokemon;\r\n    return pokemon;\r\n}\r\n// Buttons actions\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_2__.button__search.addEventListener(\"click\", () => {\r\n    _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"search\", _ui_DomElements__WEBPACK_IMPORTED_MODULE_3__.searchTextField.value);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_2__.button__next_view.addEventListener(\"click\", () => {\r\n    renderNextView(lastSearchedPokemon);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_2__.button__previous_view.addEventListener(\"click\", () => {\r\n    renderpreviousView(lastSearchedPokemon);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_2__.button__next_pokemon.addEventListener(\"click\", () => {\r\n    _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"search\", lastSearchedPokemon.id + 1);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_2__.button__previous_pokemon.addEventListener(\"click\", () => {\r\n    _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"search\", lastSearchedPokemon.id - 1);\r\n});\r\n// Listning to events\r\n_core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.on(\"search\", (searchParam) => {\r\n    (0,_service_SearchService__WEBPACK_IMPORTED_MODULE_1__.searchInAPI)(searchParam).then(saveSearch).then(renderView).catch(_view_updateViewFunctions__WEBPACK_IMPORTED_MODULE_4__.renderWithError);\r\n});\r\n\n\n//# sourceURL=webpack://pokedex/./dist/js/index.js?");

/***/ }),

/***/ "./dist/js/service/SearchService.js":
/*!******************************************!*\
  !*** ./dist/js/service/SearchService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchInAPI\": () => (/* binding */ searchInAPI)\n/* harmony export */ });\nconst URL = \"https://pokeapi.co/api/v2/pokemon/\";\r\n/**\r\n * Executes a call to the API with params\r\n * @param {string} params\r\n */\r\nfunction searchInAPI(params) {\r\n    return new Promise((resolve, reject) => {\r\n        fetch(URL + params)\r\n            .then((response) => {\r\n            if (response.ok) {\r\n                response.json().then(resolve);\r\n            }\r\n            else {\r\n                reject(response);\r\n            }\r\n        })\r\n            .catch(reject);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://pokedex/./dist/js/service/SearchService.js?");

/***/ }),

/***/ "./dist/js/ui/Buttons.js":
/*!*******************************!*\
  !*** ./dist/js/ui/Buttons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"button__next_view\": () => (/* binding */ button__next_view),\n/* harmony export */   \"button__previous_view\": () => (/* binding */ button__previous_view),\n/* harmony export */   \"button__search\": () => (/* binding */ button__search),\n/* harmony export */   \"button__next_pokemon\": () => (/* binding */ button__next_pokemon),\n/* harmony export */   \"button__previous_pokemon\": () => (/* binding */ button__previous_pokemon)\n/* harmony export */ });\nconst button__previous_view = document.getElementById(\"navigation-previous\");\r\nconst button__next_view = document.getElementById(\"navigation-next\");\r\nconst button__search = document.getElementById(\"botao-busca\");\r\nconst button__previous_pokemon = document.getElementById(\"pokemon-previous\");\r\nconst button__next_pokemon = document.getElementById(\"pokemon-next\");\r\n\r\n\n\n//# sourceURL=webpack://pokedex/./dist/js/ui/Buttons.js?");

/***/ }),

/***/ "./dist/js/ui/DomElements.js":
/*!***********************************!*\
  !*** ./dist/js/ui/DomElements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchTextField\": () => (/* binding */ searchTextField),\n/* harmony export */   \"display__data\": () => (/* binding */ display__data)\n/* harmony export */ });\n/* harmony import */ var _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/EventEmitter */ \"./dist/js/core/EventEmitter.js\");\n\r\nconst searchTextField = document.getElementById(\"search-text\");\r\nconst display__data = document.querySelector(\".display__data\");\r\n// Monitorando teclas digitadas no campo de texto\r\nsearchTextField.addEventListener(\"keydown\", (event) => {\r\n    if (keyMapper.has(event.key.toString()))\r\n        keyMapper.get(event.key.toString())();\r\n    else\r\n        keyMapper.get(\"Default\")();\r\n});\r\n// Mapeamento de todas as keys e ações disparadas\r\nconst keyMapper = new Map();\r\nkeyMapper.set(\"Enter\", () => _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"search\", searchTextField.value));\r\nkeyMapper.set(\"Default\", () => _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"updateAutoComplete\", searchTextField.value));\r\nkeyMapper.set(\"Backspace\", () => {\r\n    //@ts-ignore\r\n    if (searchTextField.value.length < 2) {\r\n        _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"closeAutoComplete\", null);\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://pokedex/./dist/js/ui/DomElements.js?");

/***/ }),

/***/ "./dist/js/util/ResponseDisplayMessages.js":
/*!*************************************************!*\
  !*** ./dist/js/util/ResponseDisplayMessages.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sucessTextWithPokemonData\": () => (/* binding */ sucessTextWithPokemonData),\n/* harmony export */   \"sucessTextWithPokemonStats\": () => (/* binding */ sucessTextWithPokemonStats),\n/* harmony export */   \"errorMessageWithResponseCode\": () => (/* binding */ errorMessageWithResponseCode)\n/* harmony export */ });\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ \"./dist/js/util/text.js\");\n\r\nconst errorImageSrc = \"../../assets/error.svg\";\r\nconst errorMessages = new Map();\r\nerrorMessages.set(\"default\", \"Error\");\r\nerrorMessages.set(\"404\", \"No Pokémon found\");\r\nerrorMessages.set(\"500\", \"Server Erro\");\r\n/**\r\n * Function that returns a literal string with pokemon data to be used in the element inner text\r\n * @param {IPokemon} pokemon\r\n * @returns {string}\r\n */\r\nfunction sucessTextWithPokemonData(pokemon) {\r\n    const parentElement = document.createElement(\"div\");\r\n    const h2 = document.createElement(\"h2\");\r\n    const img = document.createElement(\"img\");\r\n    const p = document.createElement(\"p\");\r\n    const pw = document.createElement(\"p\");\r\n    h2.textContent = `Nº:${pokemon.id} / ${(0,_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokemon.name)}`;\r\n    img.src = pokemon.sprites.front_default;\r\n    p.textContent = `Type: ${pokemon.types.map(type => type.type.name).join(\"|\")}`;\r\n    pw.textContent = `Weight: ${pokemon.weight} (in hectograms)`;\r\n    parentElement.append(h2, img, p, pw);\r\n    return parentElement.innerHTML;\r\n}\r\n/**\r\n * Function that returns a literal string with pokemon stats data to be used in the element inner text\r\n * @param {IPokemon} pokemon\r\n * @returns {string}\r\n */\r\nfunction sucessTextWithPokemonStats(pokemon) {\r\n    const parentElement = document.createElement(\"div\");\r\n    const p = document.createElement(\"p\");\r\n    const ul = document.createElement(\"ul\");\r\n    p.textContent = \"Initial Stats of Pokémon\";\r\n    ul.innerHTML = `\r\n  ${pokemon.stats.map(stat => `\r\n  <li>${stat.stat.name}: ${stat.base_stat}<li>\r\n  `).join(\"\")}\r\n  `;\r\n    parentElement.append(p, ul);\r\n    return parentElement.innerHTML;\r\n}\r\n/**\r\n *\r\n * @param {Response} response\r\n * @returns {string}\r\n */\r\nfunction errorMessageWithResponseCode(response) {\r\n    const parentElement = document.createElement(\"div\");\r\n    const h2 = document.createElement(\"h2\");\r\n    const p = document.createElement(\"p\");\r\n    const img = document.createElement(\"img\");\r\n    h2.textContent = `Error ${response.status}`;\r\n    p.textContent = `${errorMessages.get(response.status.toString()) || errorMessages.get(\"default\")}`;\r\n    img.src = errorImageSrc;\r\n    parentElement.append(h2, p, img);\r\n    return parentElement.innerHTML;\r\n}\r\n\n\n//# sourceURL=webpack://pokedex/./dist/js/util/ResponseDisplayMessages.js?");

/***/ }),

/***/ "./dist/js/util/text.js":
/*!******************************!*\
  !*** ./dist/js/util/text.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatText)\n/* harmony export */ });\n// Classe responsável por funções de manipulação de texto\r\nfunction formatText(texto) {\r\n    let primeiraLetra = texto.slice(0, 1).toUpperCase();\r\n    let restanteDoTexto = texto.slice(1, texto.length).toLowerCase();\r\n    return primeiraLetra.concat(\"\", restanteDoTexto);\r\n}\r\n\n\n//# sourceURL=webpack://pokedex/./dist/js/util/text.js?");

/***/ }),

/***/ "./dist/js/view/updateViewFunctions.js":
/*!*********************************************!*\
  !*** ./dist/js/view/updateViewFunctions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPokemonData\": () => (/* binding */ renderPokemonData),\n/* harmony export */   \"renderPokemonStats\": () => (/* binding */ renderPokemonStats),\n/* harmony export */   \"renderWithError\": () => (/* binding */ renderWithError)\n/* harmony export */ });\n/* harmony import */ var _ui_DomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/DomElements */ \"./dist/js/ui/DomElements.js\");\n/* harmony import */ var _util_ResponseDisplayMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ResponseDisplayMessages */ \"./dist/js/util/ResponseDisplayMessages.js\");\n\r\n\r\nconst renderPokemonData = (pokemon) => {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_0__.display__data.innerHTML = (0,_util_ResponseDisplayMessages__WEBPACK_IMPORTED_MODULE_1__.sucessTextWithPokemonData)(pokemon);\r\n};\r\nconst renderPokemonStats = (pokemon) => {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_0__.display__data.innerHTML = (0,_util_ResponseDisplayMessages__WEBPACK_IMPORTED_MODULE_1__.sucessTextWithPokemonStats)(pokemon);\r\n};\r\nconst renderWithError = (response) => {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_0__.display__data.innerHTML = (0,_util_ResponseDisplayMessages__WEBPACK_IMPORTED_MODULE_1__.errorMessageWithResponseCode)(response);\r\n};\r\n\n\n//# sourceURL=webpack://pokedex/./dist/js/view/updateViewFunctions.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/js/index.js");
/******/ 	
/******/ })()
;