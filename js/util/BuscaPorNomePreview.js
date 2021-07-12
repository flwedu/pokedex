class BuscaPorNomePreview {
  constructor(dataPath) {
    this._arrayDeDados = [];
    this.onload(dataPath, this.extrairPropertyParaArray.bind(this));
  }

  onload(dataPath, callback) {
    var requestFile = new XMLHttpRequest();
    requestFile.overrideMimeType("application/json");
    requestFile.open("GET", dataPath, true);
    requestFile.onreadystatechange = function () {
      if (requestFile.readyState === 4 && requestFile.status == "200") {
        let dadosBrutos = JSON.parse(requestFile.responseText);
        callback(dadosBrutos);
      }
    };
    requestFile.send(null);
  }

  extrairPropertyParaArray(objetoBruto) {
    // Transferindo os valores do objeto para o array
    // Dos valores já são retirados os nomes e convertidos para lowercase
    this._arrayDeDados = Object.values(objetoBruto).map((element) =>
      element.name.toLowerCase()
    );
    console.log(this._arrayDeDados);
  }

  listarPorAproximacao(name) {
    return this._arrayDeDados.filter((item) => item.includes(name));
  }
}
