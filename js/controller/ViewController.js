import Pokemon from "../model/Pokemon.js";
import ErrorView from "../view/ErrorView.js";
import DadosPokemonView from "../view/DadosPokemonView.js";
import StatsPokemonView from "../view/StatsPokemonView.js";
export default class ViewController {
  /**
   * Inicializa um ViewController.
   * @param {HTMLElement} resultsHtmlElement: elemento Html que renderizará os resultados.
   */
  constructor(resultsHtmlElement) {
    this._errorView = new ErrorView(resultsHtmlElement);

    // Descreve quais as views disponíveis para exibição
    this._selectedView = 0;
    this._avaliableViews = [
      new DadosPokemonView(resultsHtmlElement),
      new StatsPokemonView(resultsHtmlElement),
    ];

    this._pokemonExibido = null;
  }

  /**
   * Armazena os dados sobre o pokemon pesquisado para exibição posterior
   * @param {Pokemon} pokemon
   */
  setPokemonExibido(pokemon) {
    this._pokemonExibido = pokemon;
  }

  /**
   * Atualiza a view selecionada com os dados pesquisados.
   * Caso ainda não tenha sido realizada nenhuma pesquisa, lança um erro
   */
  updateSelectedView() {
    if (this._pokemonExibido)
      this.getSelectedView().update(this._pokemonExibido);
    else console.error("Ainda não foi buscado nenhum pokemon");
  }

  /**
   * Renderiza alguma mensagem de erro na tela de resultados.
   * @param {Response} responseError
   */
  renderErrorView(responseError) {
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
