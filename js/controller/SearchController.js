import Pokemon from "../model/Pokemon.js";
import { searchInAPI } from "../service/SearchService.js";
import ViewController from "./ViewController.js";

export default class SearchController {
  /**
   * Inicializa um SeachController com referências para objetos necessários:
   * @param {ViewController} viewController
   */
  constructor(viewController) {
    this.lastSearched = 0;
    this._viewController = viewController;
  }

  /**
   * Executes a Call to the scearch service and updates the view with results
   * @param {string | number} param
   */
  doTheApiSearchAndUpdateControllers(param) {
    searchInAPI(param)
      .then((response) => {
        let pokemon = new Pokemon(response);
        this._viewController.setPokemonExibido(pokemon);
        this._viewController.updateSelectedView();
        this.lastSearched = pokemon.id;
      })
      .catch((errorResponse) => {
        this._viewController.renderErrorView(errorResponse);
        console.error(errorResponse);
      });
  }
  /**
   * Receives the HtmlInput text and call a method to executes a Call to the scearch service
   * @param {HTMLInputElement} searchInputHtmlElement
   */
  search(searchInputHtmlElement) {
    if (searchInputHtmlElement.value.length < 1) {
      return;
    }
    this.doTheApiSearchAndUpdateControllers(
      searchInputHtmlElement.value.toLowerCase()
    );
  }

  /**
   * Search data for the next pokemon
   */
  searchNext() {
    this.doTheApiSearchAndUpdateControllers(this.lastSearched + 1);
  }

  /**
   * Search data for the previous pokemon
   */
  searchPrevious() {
    if (this.lastSearched > 1) {
      this.doTheApiSearchAndUpdateControllers(this.lastSearched - 1);
    }
  }
}
