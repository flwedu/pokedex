/**
 * This class loads data from a file and provides an array with the pokemon names
 */
export default class AutoCompleteService {
  private _arrayDeDados: any;
  /**
   * @param {string} dataPath URL path to Pokémon names Json resource
   */
  constructor(dataPath: string) {
    this.loadDataFromFile(dataPath)
      .then(this.extractPropertiesToArray)
      .then((result) => (this._arrayDeDados = result)
      ).catch(() => this._arrayDeDados = []);
  }

  /**
   * Loads the data of an local JSON file.
   * @param {string | URL} dataPath URL of the file
   */
  async loadDataFromFile(dataPath: string) {
    try {
      const results = await fetch(dataPath);
      if (results.ok) {
        return await results.json();
      } else {
        throw new Error(await results.text());
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
  private extractPropertiesToArray(rawData: JSON): string[] {
    // Transferindo os valores do objeto para o array
    // Dos valores já são retirados os nomes e convertidos para lowercase
    return Object.values(rawData).map((element) => element.name.toLowerCase());
  }

  /**
   * returns all values that matches a string.
   * @param {string} name the value to be searched in the array
   * @returns {string[]} a string array
   */
  public listarPorAproximacao(name: string): string[] {
    // Retornando os 5 primeiros elementos do array de dados que satisfaçam a query
    return this._arrayDeDados.filter((item: string) => item.includes(name.toLowerCase())).slice(0, 6);
  }
}
