import Pokemon from "../model/Pokemon.js";
/**
 * Classe que representa objetos que retornam HTML que serão renderizados no DOM
 *
 * @class View
 */
export default class View {
  /**
   * Creates an instance of View.
   * @param {HTMLElement} seletor Elemento HTML que renderizará o texto vindo do método template()
   * @memberof View
   */
  constructor(seletor) {
    // Verifica se foi passado um seletor ou o próprio elemento html
    if (typeof seletor == typeof "string")
      this.elemento = document.querySelector(seletor);
    else this.elemento = seletor;
  }

  /**
   * Recebe um objeto com os dados, cria um template e passa para o elemento HTML (escolhido no construtor) que irá renderiza-lo.
   * @param {Pokemon} pokemon Objeto que encapsula todos os dados retornados pela busca.
   * @memberof View
   */
  update(pokemon) {
    this.elemento.innerHTML = this.template(pokemon);

    // Adiciona uma classe que fará com que uma animação de fadein seja executada
    this.elemento.classList.add("emtransicao");
    setTimeout(() => this.elemento.classList.remove("emtransicao"), 500);
  }

  /**
   * Método que gera um template que será renderizado pelo elemento HTML escolhido no construtor.
   * @param {Pokemon} pokemon Objeto que encapsula todos os dados para exibição.
   * @return {InnerHTML} texto HTML pronto para ser renderizado.
   * @memberof View
   */
  template(pokemon) {
    // Método default da classe. Deve ser implementado pelos objetos que extendem essa classe.
    console.error(
      "O método template de um objeto herdado de View deve ser implementado"
    );
  }
}
