import Pokemon from "../model/Pokemon.js";
import { searchInAPI } from "../service/SearchService.js";
import ViewController from "./ViewController.js";

export default class SearchController {
  /**
   * Inicializa um SeachController com referências para objetos necessários:
   * @param {ViewController} viewController
   */
  constructor(viewController) {
    this._viewController = viewController;
  }

  /**
   * Executes a Call to the scearch service
   * @param {HTMLInputElement} searchInputHtmlElement
   */
  search(searchInputHtmlElement) {
    if (searchInputHtmlElement.value.length < 1) {
      return;
    }
    searchInAPI(searchInputHtmlElement.value.toLowerCase())
      .then((response) => {
        this._viewController.setPokemonExibido(new Pokemon(response));
        this._viewController.updateSelectedView();
      })
      .catch((errorResponse) => {
        this._viewController.renderErrorView(errorResponse);
        console.error(errorResponse);
      });
  }
}
