const URL = "https://pokeapi.co/api/v2/pokemon/";
/**
 * Executes a call to the API with params
 * @param {string} params
 */
export function searchInAPI(params) {
  return new Promise((resolve, reject) => {
    fetch(URL + params)
      .then((response) => {
        if (response.status == 200) {
          response.json().then(resolve);
        } else {
          reject(response);
        }
      })
      .catch(reject);
  });
}