class NameHelPerView extends View {
  /**
   * Método que realiza a atualização do elemento com os dados
   *
   * @param {Array} listaResultados
   * @memberof NameHelPerView
   */
  update(listaResultados) {
    this.elemento.innerHTML = this.template(listaResultados);
  }

  /**
   *
   * Gera o template que será exibido pelo método update()
   * @param {Array} listaResultados
   * @return {*}
   * @memberof NameHelPerView
   */
  template(listaResultados) {
    return `

        ${listaResultados.map((item) => `<p>${item}</p>`).join("")}
        
        `;
  }

  /**
   *
   * Controla a visibilidade do elemento HelperView
   * @param {boolean} value
   * @memberof NameHelPerView
   */
  setVisibility(value) {
    this.elemento.style.visibility = value ? "visible" : "hidden";
  }
}
