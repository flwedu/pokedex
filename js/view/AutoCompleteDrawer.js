export default class AutoCompleteDrawer {
  /**
   *
   * @param {HTMLElement} elemento
   * @param {HTMLInputElement} referenciaParaCampoBusca
   */
  constructor(elemento, referenciaParaCampoBusca) {
    this._elemento = elemento;
    this._referenciaParaCampoBusca = referenciaParaCampoBusca;
  }

  /**
   *
   * Atualiza o autocomplete com os elementos recebidos do controlador
   * @param {Array} listaResultados
   * @memberof AutoCompleteDrawer
   */
  update(listaResultados) {
    this.closeList();

    listaResultados.forEach((item) => {
      let elementoDaListaNaTela = document.createElement("div");
      elementoDaListaNaTela.innerHTML = `<p>${item}</p>`;

      elementoDaListaNaTela.addEventListener("click", () => {
        this._referenciaParaCampoBusca.value = item;
        this.closeList();
      });

      this._elemento.appendChild(elementoDaListaNaTela);
    });
  }

  /**
   * Esse método limpa a lista.
   */
  closeList() {
    this._elemento.innerHTML = "";
  }
}
