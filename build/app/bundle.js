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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/EventEmitter */ \"./src/core/EventEmitter.ts\");\n/* harmony import */ var _view_AutoCompleteView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/AutoCompleteView */ \"./src/view/AutoCompleteView.ts\");\n/* harmony import */ var _service_SearchService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/SearchService */ \"./src/service/SearchService.ts\");\n/* harmony import */ var _ui_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Buttons */ \"./src/ui/Buttons.ts\");\n/* harmony import */ var _ui_DomElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/DomElements */ \"./src/ui/DomElements.ts\");\n/* harmony import */ var _view_ResultsView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/ResultsView */ \"./src/view/ResultsView.ts\");\n/* harmony import */ var _view_updateViewFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/updateViewFunctions */ \"./src/view/updateViewFunctions.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet lastSearchedPokemon;\r\n//Function to save the last search\r\nfunction saveSearch(pokemon) {\r\n    lastSearchedPokemon = pokemon;\r\n    return pokemon;\r\n}\r\n;\r\n// Buttons actions\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_3__.button__search.addEventListener(\"click\", () => {\r\n    _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"search\", _ui_DomElements__WEBPACK_IMPORTED_MODULE_4__.searchTextField.value);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_3__.button__next_view.addEventListener(\"click\", () => {\r\n    _view_ResultsView__WEBPACK_IMPORTED_MODULE_5__.ResultsView.renderNextView(lastSearchedPokemon);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_3__.button__previous_view.addEventListener(\"click\", () => {\r\n    _view_ResultsView__WEBPACK_IMPORTED_MODULE_5__.ResultsView.renderpreviousView(lastSearchedPokemon);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_3__.button__next_pokemon.addEventListener(\"click\", () => {\r\n    _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"search\", lastSearchedPokemon.id + 1);\r\n});\r\n_ui_Buttons__WEBPACK_IMPORTED_MODULE_3__.button__previous_pokemon.addEventListener(\"click\", () => {\r\n    _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"search\", lastSearchedPokemon.id - 1);\r\n});\r\n// Listning to events\r\n_core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.on(\"search\", (searchParam) => {\r\n    (0,_service_SearchService__WEBPACK_IMPORTED_MODULE_2__.searchInAPI)(searchParam).then(saveSearch).then(_view_ResultsView__WEBPACK_IMPORTED_MODULE_5__.ResultsView.renderView).catch(_view_updateViewFunctions__WEBPACK_IMPORTED_MODULE_6__.renderWithError);\r\n});\r\n\n\n//# sourceURL=webpack://pokedex/./src/index.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchTextField\": () => (/* binding */ searchTextField),\n/* harmony export */   \"display__data\": () => (/* binding */ display__data),\n/* harmony export */   \"display__autocomplete\": () => (/* binding */ display__autocomplete)\n/* harmony export */ });\n/* harmony import */ var _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/EventEmitter */ \"./src/core/EventEmitter.ts\");\n\r\nconst searchTextField = document.getElementById(\"search-text\");\r\nconst display__data = document.querySelector(\".display__data\");\r\nconst display__autocomplete = document.getElementById(\"display__autocomplete\");\r\n// Monitorando teclas digitadas no campo de texto\r\nsearchTextField.addEventListener(\"keydown\", (event) => {\r\n    if (keyMapper.has(event.key.toString()))\r\n        keyMapper.get(event.key.toString())();\r\n    else\r\n        keyMapper.get(\"Default\")();\r\n});\r\n// Mapeamento de todas as keys e ações disparadas\r\nconst keyMapper = new Map();\r\nkeyMapper.set(\"Enter\", () => _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"search\", searchTextField.value));\r\nkeyMapper.set(\"Default\", () => _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"autoComplete\", searchTextField.value));\r\nkeyMapper.set(\"Backspace\", () => {\r\n    //@ts-ignore\r\n    if (searchTextField.value.length < 2) {\r\n        _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"closeAutoComplete\", null);\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://pokedex/./src/ui/DomElements.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/EventEmitter */ \"./src/core/EventEmitter.ts\");\n/* harmony import */ var _service_AutoCompleteService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/AutoCompleteService */ \"./src/service/AutoCompleteService.ts\");\n/* harmony import */ var _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/DomElements */ \"./src/ui/DomElements.ts\");\n\r\n\r\n\r\n// Autocomplete\r\nconst autoCompleteService = new _service_AutoCompleteService__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"data/pokemon_names.json\");\r\n_core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.on(\"autoComplete\", (text) => {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.display__autocomplete.innerHTML = \"\";\r\n    autoCompleteService.listarPorAproximacao(text).map(pokemon => {\r\n        const p = document.createElement(\"p\");\r\n        p.textContent = pokemon;\r\n        p.addEventListener(\"click\", () => {\r\n            _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.searchTextField.value = p.textContent;\r\n            _core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.emit(\"closeAutoComplete\", null);\r\n        });\r\n        _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.display__autocomplete.appendChild(p);\r\n    });\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.display__autocomplete.classList.remove(\"invisible\");\r\n});\r\n_core_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter.on(\"closeAutoComplete\", () => {\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.display__autocomplete.innerHTML = \"\";\r\n    _ui_DomElements__WEBPACK_IMPORTED_MODULE_2__.display__autocomplete.classList.add(\"invisible\");\r\n});\r\n\n\n//# sourceURL=webpack://pokedex/./src/view/AutoCompleteView.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;