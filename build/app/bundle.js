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

/***/ "./dist/js/controller/AutoCompleteController.js":
/*!******************************************************!*\
  !*** ./dist/js/controller/AutoCompleteController.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AutoCompleteController)\n/* harmony export */ });\n/* harmony import */ var _service_AutoCompleteService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/AutoCompleteService */ \"./dist/js/service/AutoCompleteService.js\");\n/* harmony import */ var _view_AutoCompleteDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/AutoCompleteDrawer */ \"./dist/js/view/AutoCompleteDrawer.js\");\n\n\nconst dataPath = \"./data/pokemon_names.json\";\n/**\n * Classe que cuida das ações da janela de preview de nomes digitados.\n */\nclass AutoCompleteController {\n    constructor(resulsHtmlElement, searchInputElement) {\n        this._autoCompleteDrawer = new _view_AutoCompleteDrawer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](resulsHtmlElement, searchInputElement);\n        this._searchInputElement = searchInputElement;\n        this._autoCompleteService = new _service_AutoCompleteService__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dataPath);\n    }\n    /**\n     *\n     * Método que solicita que o controller busque os resultados por nome e atualize a view\n     * @param {string} name\n     * @memberof AutoCompleteController\n     */\n    searchAndUpdateView() {\n        this._autoCompleteDrawer.update(this._autoCompleteService.listarPorAproximacao(this._searchInputElement.value));\n    }\n    /**\n     * Solicita o fechamento da lista.\n     */\n    closeList() {\n        this._autoCompleteDrawer.closeList();\n    }\n}\n\n\n//# sourceURL=webpack://pokedex/./dist/js/controller/AutoCompleteController.js?");

/***/ }),

/***/ "./dist/js/controller/SearchController.js":
/*!************************************************!*\
  !*** ./dist/js/controller/SearchController.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SearchController)\n/* harmony export */ });\n/* harmony import */ var _service_SearchService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/SearchService */ \"./dist/js/service/SearchService.js\");\n\nclass SearchController {\n    /**\n     * Inicializa um SeachController com referências para objetos necessários:\n     * @param {ViewController} viewController\n     */\n    constructor(viewController) {\n        this._viewController = viewController;\n    }\n    /**\n     * Executes a Call to the scearch service and updates the view with results\n     * @param {string} param\n     */\n    doTheApiSearchAndUpdateControllers(param) {\n        (0,_service_SearchService__WEBPACK_IMPORTED_MODULE_0__.searchInAPI)(param)\n            .then((response) => {\n            this.lastSearchedPokemon = response;\n            this._viewController.setPokemonExibido(response);\n            this._viewController.setSelectedView(0);\n            this._viewController.updateSelectedView();\n        })\n            .catch((errorResponse) => {\n            this._viewController.renderErrorView(errorResponse);\n            console.error(errorResponse);\n        });\n    }\n    /**\n     * Receives the HtmlInput text and call a method to executes a Call to the scearch service\n     * @param {HTMLInputElement} searchInputHtmlElement\n     */\n    search(searchInputHtmlElement) {\n        if (searchInputHtmlElement.value.length < 1) {\n            return;\n        }\n        this.doTheApiSearchAndUpdateControllers(searchInputHtmlElement.value.toLowerCase());\n    }\n    /**\n     * Search data for the next pokemon\n     */\n    searchNext() {\n        return () => {\n            if (this.lastSearchedPokemon)\n                this.doTheApiSearchAndUpdateControllers((this.lastSearchedPokemon.id + 1).toString());\n        };\n    }\n    /**\n     * Search data for the previous pokemon\n     */\n    searchPrevious() {\n        return () => {\n            if (this.lastSearchedPokemon && this.lastSearchedPokemon.id > 1) {\n                this.doTheApiSearchAndUpdateControllers((this.lastSearchedPokemon.id - 1).toString());\n            }\n        };\n    }\n}\n\n\n//# sourceURL=webpack://pokedex/./dist/js/controller/SearchController.js?");

/***/ }),

/***/ "./dist/js/controller/ViewController.js":
/*!**********************************************!*\
  !*** ./dist/js/controller/ViewController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ViewController)\n/* harmony export */ });\n/* harmony import */ var _view_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/View */ \"./dist/js/view/View.js\");\n/* harmony import */ var _util_ResponseDisplayMessages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ResponseDisplayMessages.js */ \"./dist/js/util/ResponseDisplayMessages.js\");\n\n\nclass ViewController {\n    /**\n     * Inicializa um ViewController.\n     * @param {HTMLElement} resultsHtmlElement: elemento Html que renderizará os resultados.\n     */\n    constructor(resultsHtmlElement) {\n        this._errorView = new _view_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"](resultsHtmlElement, _util_ResponseDisplayMessages_js__WEBPACK_IMPORTED_MODULE_1__.errorMessageWithResponseCode);\n        // Descreve quais as views disponíveis para exibição\n        this._selectedView = 0;\n        this._avaliableViews = [\n            new _view_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"](resultsHtmlElement, _util_ResponseDisplayMessages_js__WEBPACK_IMPORTED_MODULE_1__.sucessTextWithPokemonData),\n            new _view_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"](resultsHtmlElement, _util_ResponseDisplayMessages_js__WEBPACK_IMPORTED_MODULE_1__.sucessTextWithPokemonStats),\n        ];\n    }\n    /**\n     * Stores the pokemon data\n     * @param {IPokemon} pokemon\n     */\n    setPokemonExibido(pokemon) {\n        this._pokemonExibido = pokemon;\n    }\n    /**\n     * Updates the selected view with pokemon data\n     */\n    updateSelectedView() {\n        if (this._pokemonExibido)\n            this.getSelectedView().update(this._pokemonExibido);\n    }\n    /**\n     * Renderiza alguma mensagem de erro na tela de resultados.\n     * @param {Response} responseError\n     */\n    renderErrorView(responseError) {\n        this._errorView.update(responseError);\n    }\n    /**\n     * Muda a view selecionada para o id selecionado\n     * @param {int} id\n     */\n    setSelectedView(id = 0) {\n        if (id < this._avaliableViews.length - 1)\n            this._selectedView = id;\n        this.updateSelectedView();\n    }\n    /**\n     * Seleciona a próxima view disponível\n     */\n    nextSelectedView() {\n        if (this._selectedView < this._avaliableViews.length - 1)\n            this._selectedView++;\n        this.updateSelectedView();\n    }\n    /**\n     * Seleciona a view desponível anterior\n     */\n    previousSelectedView() {\n        if (this._selectedView > 0)\n            this._selectedView--;\n        this.updateSelectedView();\n    }\n    /**\n     * Recupera o id da view que está selecionada\n     */\n    getSelectedView() {\n        return this._avaliableViews[this._selectedView];\n    }\n}\n\n\n//# sourceURL=webpack://pokedex/./dist/js/controller/ViewController.js?");

/***/ }),

/***/ "./dist/js/index.js":
/*!**************************!*\
  !*** ./dist/js/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_AutoCompleteController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/AutoCompleteController */ \"./dist/js/controller/AutoCompleteController.js\");\n/* harmony import */ var _controller_SearchController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/SearchController */ \"./dist/js/controller/SearchController.js\");\n/* harmony import */ var _controller_ViewController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/ViewController */ \"./dist/js/controller/ViewController.js\");\n\n\n\n// Set elementos html\nconst searchTextField = document.getElementById(\"search-text\");\nconst searchButton = document.getElementById(\"botao-busca\");\n// Navigator\nconst buttonPrevious = document.getElementById(\"navigation-previous\");\nconst buttonNext = document.getElementById(\"navigation-next\");\n// Instanciando objetos que desempenharão funções\nconst viewController = new _controller_ViewController__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelector(\".display__data\"));\nconst searchController = new _controller_SearchController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](viewController);\nconst autoCompleteController = new _controller_AutoCompleteController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector(\".auto-complete\"), searchTextField);\n// Monitorando o clique\nsearchButton.addEventListener(\"click\", realizarBusca, false);\ndocument\n    .getElementById(\"pokemon-next\")\n    .addEventListener(\"click\", searchController.searchNext(), false);\ndocument\n    .getElementById(\"pokemon-previous\")\n    .addEventListener(\"click\", searchController.searchPrevious(), false);\n// Monitorando teclas digitadas no campo de texto\nsearchTextField.addEventListener(\"keydown\", (event) => {\n    if (keyMapper.has(event.key.toString()))\n        keyMapper.get(event.key.toString())();\n    else\n        keyMapper.get(\"Default\")();\n});\n// Mapeamento de todas as keys e ações disparadas\nconst keyMapper = new Map();\nkeyMapper.set(\"Enter\", () => realizarBusca());\nkeyMapper.set(\"Default\", () => autoCompleteController.searchAndUpdateView());\nkeyMapper.set(\"Backspace\", () => {\n    //@ts-ignore\n    if (searchTextField.value.length < 2) {\n        autoCompleteController.closeList();\n    }\n});\nbuttonPrevious.addEventListener(\"click\", () => viewController.previousSelectedView());\nbuttonNext.addEventListener(\"click\", () => viewController.nextSelectedView());\n// Função que dispara busca\nfunction realizarBusca() {\n    searchController.search(searchTextField);\n    autoCompleteController.closeList();\n}\n\n\n//# sourceURL=webpack://pokedex/./dist/js/index.js?");

/***/ }),

/***/ "./dist/js/model/Pokemon.js":
/*!**********************************!*\
  !*** ./dist/js/model/Pokemon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"statsLabel\": () => (/* binding */ statsLabel)\n/* harmony export */ });\nconst statsLabel = [\"HP\", \"ATK\", \"DEF\", \"SP.ATK\", \"SP.DEF\", \"SPEED\"];\n\n\n//# sourceURL=webpack://pokedex/./dist/js/model/Pokemon.js?");

/***/ }),

/***/ "./dist/js/service/AutoCompleteService.js":
/*!************************************************!*\
  !*** ./dist/js/service/AutoCompleteService.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AutoCompleteService)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n/**\n * This class loads data from a file and provides an array with the pokemon names\n */\nclass AutoCompleteService {\n    /**\n     * @param {string} dataPath URL path to Pokémon names Json resource\n     */\n    constructor(dataPath) {\n        this.loadDataFromFile(dataPath)\n            .then(this.extractPropertiesToArray)\n            .then((result) => (this._arrayDeDados = result)).catch(() => this._arrayDeDados = []);\n    }\n    /**\n     * Loads the data of an local JSON file.\n     * @param {string | URL} dataPath URL of the file\n     */\n    loadDataFromFile(dataPath) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const results = yield fetch(dataPath);\n                if (results.ok) {\n                    return yield results.json();\n                }\n                else {\n                    throw new Error(yield results.text());\n                }\n            }\n            catch (err) {\n                console.error(\"Error getting pokémon lists to AutoCompleteService\");\n                console.error(err);\n            }\n        });\n    }\n    /**\n     * Extract values presents in JSON\n     * @param {JSON} rawData data in JSON format.\n     * @returns {string[]} a string array containing the extracted values.\n     */\n    extractPropertiesToArray(rawData) {\n        // Transferindo os valores do objeto para o array\n        // Dos valores já são retirados os nomes e convertidos para lowercase\n        return Object.values(rawData).map((element) => element.name.toLowerCase());\n    }\n    /**\n     * returns all values that matches a string.\n     * @param {string} name the value to be searched in the array\n     * @returns {string[]} a string array\n     */\n    listarPorAproximacao(name) {\n        // Retornando os 5 primeiros elementos do array de dados que satisfaçam a query\n        return this._arrayDeDados.filter((item) => item.includes(name)).slice(0, 5);\n    }\n}\n\n\n//# sourceURL=webpack://pokedex/./dist/js/service/AutoCompleteService.js?");

/***/ }),

/***/ "./dist/js/service/SearchService.js":
/*!******************************************!*\
  !*** ./dist/js/service/SearchService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchInAPI\": () => (/* binding */ searchInAPI)\n/* harmony export */ });\nconst URL = \"https://pokeapi.co/api/v2/pokemon/\";\n/**\n * Executes a call to the API with params\n * @param {string} params\n */\nfunction searchInAPI(params) {\n    return new Promise((resolve, reject) => {\n        fetch(URL + params)\n            .then((response) => {\n            if (response.ok) {\n                response.json().then(resolve);\n            }\n            else {\n                reject(response);\n            }\n        })\n            .catch(reject);\n    });\n}\n\n\n//# sourceURL=webpack://pokedex/./dist/js/service/SearchService.js?");

/***/ }),

/***/ "./dist/js/util/ResponseDisplayMessages.js":
/*!*************************************************!*\
  !*** ./dist/js/util/ResponseDisplayMessages.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sucessTextWithPokemonData\": () => (/* binding */ sucessTextWithPokemonData),\n/* harmony export */   \"sucessTextWithPokemonStats\": () => (/* binding */ sucessTextWithPokemonStats),\n/* harmony export */   \"errorMessageWithResponseCode\": () => (/* binding */ errorMessageWithResponseCode)\n/* harmony export */ });\n/* harmony import */ var _model_Pokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Pokemon */ \"./dist/js/model/Pokemon.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./dist/js/util/text.js\");\n\n\nconst errorImageSrc = \"../../assets/error.svg\";\nconst errorMessages = new Map();\nerrorMessages.set(\"default\", \"Error\");\nerrorMessages.set(\"404\", \"No Pokémon found\");\nerrorMessages.set(\"500\", \"Server Erro\");\n/**\n * Function that returns a literal string with pokemon data to be used in the element inner text\n * @param {IPokemon} pokemon\n * @returns {string}\n */\nfunction sucessTextWithPokemonData(pokemon) {\n    const parentElement = document.createElement(\"div\");\n    const h2 = document.createElement(\"h2\");\n    const img = document.createElement(\"img\");\n    const p = document.createElement(\"p\");\n    const pw = document.createElement(\"p\");\n    h2.textContent = `Nº:${pokemon.id} / ${(0,_text__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon.name)}`;\n    img.src = pokemon.sprites.front_default;\n    p.textContent = `Type: ${pokemon.types.map(type => type.type.name).join(\"|\")}`;\n    pw.textContent = `Weight: ${pokemon.weight} (in hectograms)`;\n    parentElement.append(h2, img, p, pw);\n    return parentElement.innerHTML;\n}\n/**\n * Function that returns a literal string with pokemon stats data to be used in the element inner text\n * @param {IPokemon} pokemon\n * @returns {string}\n */\nfunction sucessTextWithPokemonStats(pokemon) {\n    const parentElement = document.createElement(\"div\");\n    const p = document.createElement(\"p\");\n    const table = document.createElement(\"table\");\n    p.textContent = \"Initial Stats of Pokémon\";\n    table.className = \"stats-table\";\n    table.innerHTML = `\n  <thead>\n    ${_model_Pokemon__WEBPACK_IMPORTED_MODULE_0__.statsLabel.map((stats) => `<td>${stats}</td>`).join(\"\")}\n  </thead>\n  <tbody>\n    ${pokemon.stats.map(stat => `<td>${stat.base_stat}<td>`)}\n  </tbody>\n  `;\n    parentElement.append(p, table);\n    return parentElement.innerHTML;\n}\n/**\n *\n * @param {Response} response\n * @returns {string}\n */\nfunction errorMessageWithResponseCode(response) {\n    const parentElement = document.createElement(\"div\");\n    const h2 = document.createElement(\"h2\");\n    const p = document.createElement(\"p\");\n    const img = document.createElement(\"img\");\n    h2.textContent = `Error ${response.status}`;\n    p.textContent = `${errorMessages.get(response.status.toString()) || errorMessages.get(\"default\")}`;\n    img.src = errorImageSrc;\n    parentElement.append(h2, p, img);\n    return parentElement.innerHTML;\n}\n\n\n//# sourceURL=webpack://pokedex/./dist/js/util/ResponseDisplayMessages.js?");

/***/ }),

/***/ "./dist/js/util/text.js":
/*!******************************!*\
  !*** ./dist/js/util/text.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatText)\n/* harmony export */ });\n// Classe responsável por funções de manipulação de texto\nfunction formatText(texto) {\n    let primeiraLetra = texto.slice(0, 1).toUpperCase();\n    let restanteDoTexto = texto.slice(1, texto.length).toLowerCase();\n    return primeiraLetra.concat(\"\", restanteDoTexto);\n}\n\n\n//# sourceURL=webpack://pokedex/./dist/js/util/text.js?");

/***/ }),

/***/ "./dist/js/view/AutoCompleteDrawer.js":
/*!********************************************!*\
  !*** ./dist/js/view/AutoCompleteDrawer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AutoCompleteDrawer)\n/* harmony export */ });\nclass AutoCompleteDrawer {\n    /**\n     *\n     * @param {HTMLElement} elemento\n     * @param {HTMLInputElement} referenciaParaCampoBusca\n     */\n    constructor(elemento, referenciaParaCampoBusca) {\n        this._elemento = elemento;\n        this._referenciaParaCampoBusca = referenciaParaCampoBusca;\n    }\n    /**\n     *\n     * Atualiza o autocomplete com os elementos recebidos do controlador\n     * @param {Array} listaResultados\n     * @memberof AutoCompleteDrawer\n     */\n    update(listaResultados) {\n        this._elemento.innerHTML = \"\";\n        listaResultados.forEach((item) => {\n            let elementoDaListaNaTela = document.createElement(\"div\");\n            elementoDaListaNaTela.innerHTML = `<p>${item}</p>`;\n            elementoDaListaNaTela.addEventListener(\"click\", () => {\n                this._referenciaParaCampoBusca.value = item;\n                this.closeList();\n            });\n            this._elemento.appendChild(elementoDaListaNaTela);\n            this._elemento.classList.remove(\"invisible\");\n        });\n    }\n    /**\n     * Esse método limpa a lista.\n     */\n    closeList() {\n        this._elemento.classList.add(\"invisible\");\n        this._elemento.innerHTML = \"\";\n    }\n}\n\n\n//# sourceURL=webpack://pokedex/./dist/js/view/AutoCompleteDrawer.js?");

/***/ }),

/***/ "./dist/js/view/View.js":
/*!******************************!*\
  !*** ./dist/js/view/View.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\n/**\n * Classe que representa objetos que retornam HTML que serão renderizados no DOM\n *\n * @class View\n */\nclass View {\n    /**\n     * Creates an instance of View.\n     * @param {HTMLElement} resultsHtmlElement HTMLElement que renderizará o texto\n     * @param {Function} responseDisplayMessageFunction função que formatará os dados e retornará uma string a ser exibida no InnerHTMl do HTMLElement.\n     * @memberof View\n     */\n    constructor(resultsHtmlElement, responseDisplayMessageFunction) {\n        this._resultsHtmlElement = resultsHtmlElement;\n        this._responseDisplayMessageFunction = responseDisplayMessageFunction;\n    }\n    /**\n     * Recebe um objeto com os dados, cria um template e passa para o elemento HTML (escolhido no construtor) que irá renderiza-lo.\n     * @param {IPokemon | Response} data Objeto que encapsula todos os dados para exibição.\n     * @memberof View\n     */\n    update(data) {\n        this._resultsHtmlElement.innerHTML = this.template(data);\n        // Adiciona uma classe que fará com que uma animação de fadein seja executada\n        this._resultsHtmlElement.classList.add(\"emtransicao\");\n        setTimeout(() => this._resultsHtmlElement.classList.remove(\"emtransicao\"), 500);\n    }\n    /**\n     * Método que gera um template que será renderizado pelo elemento HTML escolhido no construtor.\n     * @param {IPokemon | Response} data Objeto que encapsula todos os dados para exibição.\n     * @return {InnerHTML} texto HTML pronto para ser renderizado pelo HTMLElement.\n     * @memberof View\n     */\n    template(data) {\n        return this._responseDisplayMessageFunction(data);\n    }\n}\n\n\n//# sourceURL=webpack://pokedex/./dist/js/view/View.js?");

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