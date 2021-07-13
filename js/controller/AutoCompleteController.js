/**
 * Classe que cuida das ações da janela de preview de nomes digitados.
 */
class AutoCompleteController {
  constructor(seletorElemento, referenciaParaCampoBusca, urlFonteDeDados) {
    this._autoCompleteDrawer = new AutoCompleteDrawer(
      seletorElemento,
      referenciaParaCampoBusca
    );
    this._referenciaParaCampoBusca = referenciaParaCampoBusca;
    this._autoCompleteService = new AutoCompleteService(urlFonteDeDados);
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
        this._referenciaParaCampoBusca.value
      )
    );
  }
}
