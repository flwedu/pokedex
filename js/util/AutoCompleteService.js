class AutoCompleteService {
  constructor(dataPath) {
    this._arrayDeDados = [];
    this.onload(dataPath);
  }

  onload(dataPath) {
    fetch(dataPath)
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(res.status);
      })
      .then((res) => this.extrairPropertyParaArray(res))
      .catch(console.error);
  }

  extrairPropertyParaArray(objetoBruto) {
    // Transferindo os valores do objeto para o array
    // Dos valores já são retirados os nomes e convertidos para lowercase
    this._arrayDeDados = Object.values(objetoBruto).map((element) =>
      element.name.toLowerCase()
    );
  }

  listarPorAproximacao(name) {
    // Retornando os 5 primeiros elementos do array de dados que satisfaçãm a query
    return this._arrayDeDados.filter((item) => item.includes(name)).slice(0, 5);
  }
}
