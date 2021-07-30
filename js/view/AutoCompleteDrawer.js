class AutoCompleteDrawer {
  constructor(seletor, referenciaParaCampoBusca) {
    this._elemento = document.querySelector(seletor);
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
   * Esse método zera limpa a lista.
   */
  closeList() {
    this._elemento.innerHTML = "";
  }
}
