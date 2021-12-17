import { IPokemon } from "../model/Pokemon";
import { removeInvalidCharacters } from "../util/text";

const URL = "https://pokeapi.co/api/v2/pokemon/";
/**
 * Executes a call to the API with params
 * @param {string} params
 */
export function searchInAPI(params: string): Promise<IPokemon> {
  return new Promise((resolve, reject) => {
    fetch(URL + removeInvalidCharacters(params))
      .then((response) => {
        if (response.ok) {
          response.json().then(resolve);
        } else {
          reject(response);
        }
      })
      .catch(reject);
  });
}

export function searchInAPIforMoreData(args: string[]): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(args.join(""))
      .then((response) => {
        if (response.ok) {
          response.json().then(resolve);
        } else {
          reject(response);
        }
      })
      .catch(reject);
  });
}