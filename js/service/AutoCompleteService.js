const dataPath = "./data/pokemon_names.json";
export default class AutoCompleteService {
  constructor() {
    this._arrayDeDados = [];
    this.loadDataFromFile(dataPath);
  }

  async loadDataFromFile(dataPath) {
    try {
      const results = await fetch(dataPath);
      if (results.ok) {
        this._arrayDeDados = this.extractPropertiesToArray(
          await results.json()
        );
      } else {
        throw new Error(results);
      }
    } catch (err) {
      console.error("Error getting pokémon lists to AutoCompleteService");
      console.error(err);
    }
  }

  extractPropertiesToArray(rawData) {
    // Transferindo os valores do objeto para o array
    // Dos valores já são retirados os nomes e convertidos para lowercase
    return Object.values(rawData).map((element) => element.name.toLowerCase());
  }

  listarPorAproximacao(name) {
    // Retornando os 5 primeiros elementos do array de dados que satisfaçam a query
    return this._arrayDeDados.filter((item) => item.includes(name)).slice(0, 5);
  }
}
