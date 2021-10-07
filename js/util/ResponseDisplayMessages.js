import Pokemon from "../model/Pokemon.js";

const errorImageSrc = "../../assets/error.svg";

const errorMessages = {
  default: "Error",
  404: "No Pokémon found",
  500: "Server Error",
};

/**
 * Function that returns a literal string with pokemon data to be used in the element inner text
 * @param {Pokemon} pokemon
 * @returns {string}
 */
export function sucessTextWithPokemonData(pokemon) {
  return `
    <h2>Nº:${pokemon.id} / ${pokemon.nomeOcidental}</h2>
    <img src="${pokemon.spriteFrontal}"></img>
    <p>Tipo: ${pokemon.tipo1} ${pokemon.tipo2 ? " + " + pokemon.tipo2 : ""}</p>
    <p>Peso: ${pokemon.peso}</p>
    `;
}

/**
 * Function that returns a literal string with pokemon stats data to be used in the element inner text
 * @param {Pokemon} pokemon
 * @returns {string}
 */
export function sucessTextWithPokemonStats(pokemon) {
  return `
      <p>Stats Iniciais do pokémon</p>
        <table class='stats-table'>
        <thead>
        ${pokemon.statsLabel.map((stats) => `<td>${stats}</td>`).join("")}
        </thead>
        <tbody>
        ${pokemon.stats.map((valor) => `<td>${valor}</td>`).join("")}
        </tbody>
        </table>
        `;
}

/**
 *
 * @param {Response} response
 * @returns {string}
 */
export function errorMessageWithResponseCode(response) {
  return `
        <h2>Error ${response.status}:</h2>
        <p>${errorMessages[response.status] || errorMessages.default}</p>
        <img src="${errorImageSrc}"></img>
      `;
}
