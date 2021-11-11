import View from "../view/View";
import {
  errorMessageWithResponseCode,
  sucessTextWithPokemonData,
  sucessTextWithPokemonStats,
} from "../util/ResponseDisplayMessages.js";
import { IPokemon } from "../model/Pokemon.js";
export default class ViewController {
  _errorView: View;
  _selectedView: number;
  _avaliableViews: View[];
  _pokemonExibido: IPokemon | undefined;
  /**
   * Inicializa um ViewController.
   * @param {HTMLElement} resultsHtmlElement: elemento Html que renderizará os resultados.
   */
  constructor(resultsHtmlElement: HTMLElement) {
    this._errorView = new View(
      resultsHtmlElement,
      errorMessageWithResponseCode
    );

    // Descreve quais as views disponíveis para exibição
    this._selectedView = 0;
    this._avaliableViews = [
      new View(resultsHtmlElement, sucessTextWithPokemonData),
      new View(resultsHtmlElement, sucessTextWithPokemonStats),
    ];
  }

  /**
   * Stores the pokemon data
   * @param {IPokemon} pokemon
   */
  setPokemonExibido(pokemon: IPokemon) {
    this._pokemonExibido = pokemon;
  }

  /**
   * Updates the selected view with pokemon data
   */
  updateSelectedView() {
    if (this._pokemonExibido)
      this.getSelectedView().update(this._pokemonExibido);
  }

  /**
   * Renderiza alguma mensagem de erro na tela de resultados.
   * @param {Response} responseError
   */
  renderErrorView(responseError: Response) {
    this._errorView.update(responseError);
  }

  /**
   * Muda a view selecionada para o id selecionado
   * @param {int} id
   */
  setSelectedView(id = 0) {
    if (id < this._avaliableViews.length - 1) this._selectedView = id;
    this.updateSelectedView();
  }

  /**
   * Seleciona a próxima view disponível
   */
  nextSelectedView() {
    if (this._selectedView < this._avaliableViews.length - 1)
      this._selectedView++;
    this.updateSelectedView();
  }

  /**
   * Seleciona a view desponível anterior
   */
  previousSelectedView() {
    if (this._selectedView > 0) this._selectedView--;
    this.updateSelectedView();
  }

  /**
   * Recupera o id da view que está selecionada
   */
  getSelectedView() {
    return this._avaliableViews[this._selectedView];
  }
}
