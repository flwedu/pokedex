import AutoCompleteService from "../service/AutoCompleteService";
import AutoCompleteDrawer from "../view/AutoCompleteDrawer";
var dataPath = "./data/pokemon_names.json";
/**
 * Classe que cuida das ações da janela de preview de nomes digitados.
 */
var AutoCompleteController = /** @class */ (function () {
    function AutoCompleteController(resulsHtmlElement, searchInputElement) {
        this._autoCompleteDrawer = new AutoCompleteDrawer(resulsHtmlElement, searchInputElement);
        this._searchInputElement = searchInputElement;
        this._autoCompleteService = new AutoCompleteService(dataPath);
    }
    /**
     *
     * Método que solicita que o controller busque os resultados por nome e atualize a view
     * @param {string} name
     * @memberof AutoCompleteController
     */
    AutoCompleteController.prototype.searchAndUpdateView = function () {
        this._autoCompleteDrawer.update(this._autoCompleteService.listarPorAproximacao(this._searchInputElement.value));
    };
    /**
     * Solicita o fechamento da lista.
     */
    AutoCompleteController.prototype.closeList = function () {
        this._autoCompleteDrawer.closeList();
    };
    return AutoCompleteController;
}());
export default AutoCompleteController;
