/**
 * Classe que representa objetos que retornam HTML que serão renderizados no DOM
 *
 * @class View
 */
var View = /** @class */ (function () {
    /**
     * Creates an instance of View.
     * @param {HTMLElement} resultsHtmlElement HTMLElement que renderizará o texto
     * @param {Function} responseDisplayMessageFunction função que formatará os dados e retornará uma string a ser exibida no InnerHTMl do HTMLElement.
     * @memberof View
     */
    function View(resultsHtmlElement, responseDisplayMessageFunction) {
        this._resultsHtmlElement = resultsHtmlElement;
        this._responseDisplayMessageFunction = responseDisplayMessageFunction;
    }
    /**
     * Recebe um objeto com os dados, cria um template e passa para o elemento HTML (escolhido no construtor) que irá renderiza-lo.
     * @param {IPokemon | Response} data Objeto que encapsula todos os dados para exibição.
     * @memberof View
     */
    View.prototype.update = function (data) {
        var _this = this;
        this._resultsHtmlElement.innerHTML = this.template(data);
        // Adiciona uma classe que fará com que uma animação de fadein seja executada
        this._resultsHtmlElement.classList.add("emtransicao");
        setTimeout(function () { return _this._resultsHtmlElement.classList.remove("emtransicao"); }, 500);
    };
    /**
     * Método que gera um template que será renderizado pelo elemento HTML escolhido no construtor.
     * @param {IPokemon | Response} data Objeto que encapsula todos os dados para exibição.
     * @return {InnerHTML} texto HTML pronto para ser renderizado pelo HTMLElement.
     * @memberof View
     */
    View.prototype.template = function (data) {
        return this._responseDisplayMessageFunction(data);
    };
    return View;
}());
export default View;
