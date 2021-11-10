import { IPokemon } from "../model/Pokemon";
import { searchInAPI } from "../service/SearchService";
import ViewController from "./ViewController";

export default class SearchController {
  private _viewController: ViewController;
  private lastSearchedPokemon: IPokemon | undefined;
  /**
   * Inicializa um SeachController com referências para objetos necessários:
   * @param {ViewController} viewController
   */
  constructor(viewController: ViewController) {
    this._viewController = viewController;
  }

  /**
   * Executes a Call to the scearch service and updates the view with results
   * @param {string} param
   */
  doTheApiSearchAndUpdateControllers(param: string) {
    searchInAPI(param)
      .then((response) => {
        this.lastSearchedPokemon = response;
        this._viewController.setPokemonExibido(response);
        this._viewController.setSelectedView(0);
        this._viewController.updateSelectedView();
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
  search(searchInputHtmlElement: any) {
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
    return () => {
      if (this.lastSearchedPokemon)
        this.doTheApiSearchAndUpdateControllers(this.lastSearchedPokemon.id.toString());
    }
  }

  /**
   * Search data for the previous pokemon
   */
  searchPrevious() {
    return () => {
      if (this.lastSearchedPokemon && this.lastSearchedPokemon.id > 1) {
        this.doTheApiSearchAndUpdateControllers((this.lastSearchedPokemon.id - 1).toString());
      }
    };
  }
}
