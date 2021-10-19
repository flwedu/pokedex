/**
 * This class loads data from a file and provides an array with the pokemon names
 */
export default class AutoCompleteService {
  /**
   * @param {string} dataPath URL path to Pokémon names Json resource
   */
  constructor(dataPath) {
    this.loadDataFromFile(dataPath).then(
      (result) => (this._arrayDeDados = result)
    );
  }

  /**
   * Loads the data of an local JSON file.
   * @param {string | URL} dataPath URL of the file
   * @returns {JSON} an JSON object.
   */
  async loadDataFromFile(dataPath) {
    try {
      const results = await fetch(dataPath);
      if (results.ok) {
        return this.extractPropertiesToArray(await results.json());
      } else {
        throw new Error(results);
      }
    } catch (err) {
      console.error("Error getting pokémon lists to AutoCompleteService");
      console.error(err);
    }
  }

  /**
   * Extract values presents in JSON
   * @param {JSON} rawData data in JSON format.
   * @returns {string[]} a string array containing the extracted values.
   */
  extractPropertiesToArray(rawData) {
    // Transferindo os valores do objeto para o array
    // Dos valores já são retirados os nomes e convertidos para lowercase
    return Object.values(rawData).map((element) => element.name.toLowerCase());
  }

  /**
   * returns all values that matches a string.
   * @param {string} name the value to be searched in the array
   * @returns {string[]} a string array
   */
  listarPorAproximacao(name) {
    // Retornando os 5 primeiros elementos do array de dados que satisfaçam a query
    return this._arrayDeDados.filter((item) => item.includes(name)).slice(0, 5);
  }
}
