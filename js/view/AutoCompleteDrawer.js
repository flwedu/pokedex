var AutoCompleteDrawer = /** @class */ (function () {
    /**
     *
     * @param {HTMLElement} elemento
     * @param {HTMLInputElement} referenciaParaCampoBusca
     */
    function AutoCompleteDrawer(elemento, referenciaParaCampoBusca) {
        this._elemento = elemento;
        this._referenciaParaCampoBusca = referenciaParaCampoBusca;
    }
    /**
     *
     * Atualiza o autocomplete com os elementos recebidos do controlador
     * @param {Array} listaResultados
     * @memberof AutoCompleteDrawer
     */
    AutoCompleteDrawer.prototype.update = function (listaResultados) {
        var _this = this;
        this._elemento.innerHTML = "";
        listaResultados.forEach(function (item) {
            var elementoDaListaNaTela = document.createElement("div");
            elementoDaListaNaTela.innerHTML = "<p>" + item + "</p>";
            elementoDaListaNaTela.addEventListener("click", function () {
                _this._referenciaParaCampoBusca.value = item;
                _this.closeList();
            });
            _this._elemento.appendChild(elementoDaListaNaTela);
            _this._elemento.classList.remove("invisible");
        });
    };
    /**
     * Esse método limpa a lista.
     */
    AutoCompleteDrawer.prototype.closeList = function () {
        this._elemento.classList.add("invisible");
        this._elemento.innerHTML = "";
    };
    return AutoCompleteDrawer;
}());
export default AutoCompleteDrawer;
