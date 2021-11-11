export default class AutoCompleteDrawer {
  private _elemento;
  private _referenciaParaCampoBusca;
  /**
   *
   * @param {HTMLElement} elemento
   * @param {HTMLInputElement} referenciaParaCampoBusca
   */
  constructor(elemento: any, referenciaParaCampoBusca: any) {
    this._elemento = elemento;
    this._referenciaParaCampoBusca = referenciaParaCampoBusca;
  }

  /**
   *
   * Atualiza o autocomplete com os elementos recebidos do controlador
   * @param {Array} listaResultados
   * @memberof AutoCompleteDrawer
   */
  update(listaResultados: any[]) {
    this._elemento.innerHTML = "";

    listaResultados.forEach((item) => {
      let elementoDaListaNaTela = document.createElement("div");
      elementoDaListaNaTela.innerHTML = `<p>${item}</p>`;

      elementoDaListaNaTela.addEventListener("click", () => {
        this._referenciaParaCampoBusca.value = item;
        this.closeList();
      });

      this._elemento.appendChild(elementoDaListaNaTela);
      this._elemento.classList.remove("invisible");
    });
  }

  /**
   * Esse método limpa a lista.
   */
  closeList() {
    this._elemento.classList.add("invisible");
    this._elemento.innerHTML = "";
  }
}
