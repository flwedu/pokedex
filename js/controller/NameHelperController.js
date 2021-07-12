/**
 * Classe que cuida das ações da janela de preview de nomes digitados.
 */
class NameHelperController {
  constructor(seletorElemento, urlFonteDeDados) {
    this._nameHelperView = new NameHelPerView(seletorElemento);
    this._nameHelperService = new NameHelperService(urlFonteDeDados);
  }

  /**
   *
   * Método que solicita que o controller busque os resultados por nome e atualize a view
   * @param {string} name
   * @memberof NameHelperController
   */
  searchAndUpdateView(name) {
    let listaResultados = this._nameHelperService.listarPorAproximacao(name);
    this._nameHelperView.update(listaResultados);
  }

  /**
   *Método que faz com que o controller peça a view para ficar visível ou invisível
   *
   * @param {boolean} value
   * @memberof NameHelperController
   */
  setViewVisibility(value) {
    this._nameHelperView.setVisibility(value);
  }
}
