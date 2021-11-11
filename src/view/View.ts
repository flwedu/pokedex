import { IPokemon } from "../model/Pokemon";

/**
 * Classe que representa objetos que retornam HTML que serão renderizados no DOM
 *
 * @class View
 */
export default class View {
  private _resultsHtmlElement: HTMLElement;
  private _responseDisplayMessageFunction: Function /**
 * Classe que representa objetos que retornam HTML que serão renderizados no DOM
 *
 * @class View
 */;
  /**
   * Creates an instance of View.
   * @param {HTMLElement} resultsHtmlElement HTMLElement que renderizará o texto
   * @param {Function} responseDisplayMessageFunction função que formatará os dados e retornará uma string a ser exibida no InnerHTMl do HTMLElement.
   * @memberof View
   */
  constructor(resultsHtmlElement: HTMLElement, responseDisplayMessageFunction: Function) {
    this._resultsHtmlElement = resultsHtmlElement;
    this._responseDisplayMessageFunction = responseDisplayMessageFunction;
  }

  /**
   * Recebe um objeto com os dados, cria um template e passa para o elemento HTML (escolhido no construtor) que irá renderiza-lo.
   * @param {IPokemon | Response} data Objeto que encapsula todos os dados para exibição.
   * @memberof View
   */
  update(data: IPokemon | Response) {
    this._resultsHtmlElement.innerHTML = this.template(data);

    // Adiciona uma classe que fará com que uma animação de fadein seja executada
    this._resultsHtmlElement.classList.add("emtransicao");
    setTimeout(
      () => this._resultsHtmlElement.classList.remove("emtransicao"),
      500
    );
  }

  /**
   * Método que gera um template que será renderizado pelo elemento HTML escolhido no construtor.
   * @param {IPokemon | Response} data Objeto que encapsula todos os dados para exibição.
   * @return {InnerHTML} texto HTML pronto para ser renderizado pelo HTMLElement.
   * @memberof View
   */
  template(data: IPokemon | Response) {
    return this._responseDisplayMessageFunction(data);
  }
}
