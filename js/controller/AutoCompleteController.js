import AutoCompleteService from "../service/AutoCompleteService.js";
import AutoCompleteDrawer from "../view/AutoCompleteDrawer.js";

/**
 * Classe que cuida das ações da janela de preview de nomes digitados.
 */
export default class AutoCompleteController {
  /**
   *
   * @param {HTMLElement} resulsHtmlElement
   * @param {HTMLInputElement} searchInputElement
   */
  constructor(resulsHtmlElement, searchInputElement) {
    this._autoCompleteDrawer = new AutoCompleteDrawer(
      resulsHtmlElement,
      searchInputElement
    );
    this._searchInputElement = searchInputElement;
    this._autoCompleteService = new AutoCompleteService();
  }

  /**
   *
   * Método que solicita que o controller busque os resultados por nome e atualize a view
   * @param {string} name
   * @memberof AutoCompleteController
   */
  searchAndUpdateView() {
    this._autoCompleteDrawer.update(
      this._autoCompleteService.listarPorAproximacao(
        this._searchInputElement.value
      )
    );
  }

  /**
   * Solicita o fechamento da lista.
   */
  closeList() {
    this._autoCompleteDrawer.closeList();
  }
}
