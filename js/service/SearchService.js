var URL = "https://pokeapi.co/api/v2/pokemon/";
/**
 * Executes a call to the API with params
 * @param {string} params
 */
export function searchInAPI(params) {
    return new Promise(function (resolve, reject) {
        fetch(URL + params)
            .then(function (response) {
            if (response.ok) {
                response.json().then(resolve);
            }
            else {
                reject(response);
            }
        })
            .catch(reject);
    });
}
