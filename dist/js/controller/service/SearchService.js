"use strict";
exports.__esModule = true;
exports.searchInAPI = void 0;
var URL = "https://pokeapi.co/api/v2/pokemon/";
/**
 * Executes a call to the API with params
 * @param {string} params
 */
function searchInAPI(params) {
    return new Promise(function (resolve, reject) {
        fetch(URL + params)
            .then(function (response) {
            if (response.ok) {
                response.json().then(resolve);
            }
            else {
                reject(response);
            }
        })["catch"](reject);
    });
}
exports.searchInAPI = searchInAPI;
