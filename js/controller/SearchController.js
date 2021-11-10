import { searchInAPI } from "../service/SearchService";
var SearchController = /** @class */ (function () {
    /**
     * Inicializa um SeachController com referências para objetos necessários:
     * @param {ViewController} viewController
     */
    function SearchController(viewController) {
        this._viewController = viewController;
    }
    /**
     * Executes a Call to the scearch service and updates the view with results
     * @param {string} param
     */
    SearchController.prototype.doTheApiSearchAndUpdateControllers = function (param) {
        var _this = this;
        searchInAPI(param)
            .then(function (response) {
            _this.lastSearchedPokemon = response;
            _this._viewController.setPokemonExibido(response);
            _this._viewController.setSelectedView(0);
            _this._viewController.updateSelectedView();
        })
            .catch(function (errorResponse) {
            _this._viewController.renderErrorView(errorResponse);
            console.error(errorResponse);
        });
    };
    /**
     * Receives the HtmlInput text and call a method to executes a Call to the scearch service
     * @param {HTMLInputElement} searchInputHtmlElement
     */
    SearchController.prototype.search = function (searchInputHtmlElement) {
        if (searchInputHtmlElement.value.length < 1) {
            return;
        }
        this.doTheApiSearchAndUpdateControllers(searchInputHtmlElement.value.toLowerCase());
    };
    /**
     * Search data for the next pokemon
     */
    SearchController.prototype.searchNext = function () {
        var _this = this;
        return function () {
            if (_this.lastSearchedPokemon)
                _this.doTheApiSearchAndUpdateControllers(_this.lastSearchedPokemon.id.toString());
        };
    };
    /**
     * Search data for the previous pokemon
     */
    SearchController.prototype.searchPrevious = function () {
        var _this = this;
        return function () {
            if (_this.lastSearchedPokemon && _this.lastSearchedPokemon.id > 1) {
                _this.doTheApiSearchAndUpdateControllers((_this.lastSearchedPokemon.id - 1).toString());
            }
        };
    };
    return SearchController;
}());
export default SearchController;
