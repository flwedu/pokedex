"use strict";
exports.__esModule = true;
var View_1 = require("../view/View");
var ResponseDisplayMessages_js_1 = require("../util/ResponseDisplayMessages.js");
var ViewController = /** @class */ (function () {
    /**
     * Inicializa um ViewController.
     * @param {HTMLElement} resultsHtmlElement: elemento Html que renderizará os resultados.
     */
    function ViewController(resultsHtmlElement) {
        this._errorView = new View_1["default"](resultsHtmlElement, ResponseDisplayMessages_js_1.errorMessageWithResponseCode);
        // Descreve quais as views disponíveis para exibição
        this._selectedView = 0;
        this._avaliableViews = [
            new View_1["default"](resultsHtmlElement, ResponseDisplayMessages_js_1.sucessTextWithPokemonData),
            new View_1["default"](resultsHtmlElement, ResponseDisplayMessages_js_1.sucessTextWithPokemonStats),
        ];
    }
    /**
     * Stores the pokemon data
     * @param {IPokemon} pokemon
     */
    ViewController.prototype.setPokemonExibido = function (pokemon) {
        this._pokemonExibido = pokemon;
    };
    /**
     * Updates the selected view with pokemon data
     */
    ViewController.prototype.updateSelectedView = function () {
        if (this._pokemonExibido)
            this.getSelectedView().update(this._pokemonExibido);
    };
    /**
     * Renderiza alguma mensagem de erro na tela de resultados.
     * @param {Response} responseError
     */
    ViewController.prototype.renderErrorView = function (responseError) {
        this._errorView.update(responseError);
    };
    /**
     * Muda a view selecionada para o id selecionado
     * @param {int} id
     */
    ViewController.prototype.setSelectedView = function (id) {
        if (id === void 0) { id = 0; }
        if (id < this._avaliableViews.length - 1)
            this._selectedView = id;
        this.updateSelectedView();
    };
    /**
     * Seleciona a próxima view disponível
     */
    ViewController.prototype.nextSelectedView = function () {
        if (this._selectedView < this._avaliableViews.length - 1)
            this._selectedView++;
        this.updateSelectedView();
    };
    /**
     * Seleciona a view desponível anterior
     */
    ViewController.prototype.previousSelectedView = function () {
        if (this._selectedView > 0)
            this._selectedView--;
        this.updateSelectedView();
    };
    /**
     * Recupera o id da view que está selecionada
     */
    ViewController.prototype.getSelectedView = function () {
        return this._avaliableViews[this._selectedView];
    };
    return ViewController;
}());
exports["default"] = ViewController;
