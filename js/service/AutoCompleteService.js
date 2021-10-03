const dataPath = "./data/pokemon_names.json";
export default class AutoCompleteService {
  constructor() {
    this._arrayDeDados = [];
    this.loadDataFromFile(dataPath);
  }

  loadDataFromFile(dataPath) {
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
    // Retornando os 5 primeiros elementos do array de dados que satisfaçam a query
    return this._arrayDeDados.filter((item) => item.includes(name)).slice(0, 5);
  }
}
