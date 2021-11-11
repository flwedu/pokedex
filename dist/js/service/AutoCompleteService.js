var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * This class loads data from a file and provides an array with the pokemon names
 */
export default class AutoCompleteService {
    /**
     * @param {string} dataPath URL path to Pokémon names Json resource
     */
    constructor(dataPath) {
        this.loadDataFromFile(dataPath)
            .then(this.extractPropertiesToArray)
            .then((result) => (this._arrayDeDados = result)).catch(() => this._arrayDeDados = []);
    }
    /**
     * Loads the data of an local JSON file.
     * @param {string | URL} dataPath URL of the file
     */
    loadDataFromFile(dataPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield fetch(dataPath);
                if (results.ok) {
                    return yield results.json();
                }
                else {
                    throw new Error(yield results.text());
                }
            }
            catch (err) {
                console.error("Error getting pokémon lists to AutoCompleteService");
                console.error(err);
            }
        });
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
