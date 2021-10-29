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
  const parentElement = document.createElement("div");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const pw = document.createElement("p");

  h2.textContent = `Nº:${pokemon.id} / ${pokemon.nomeOcidental}`;
  img.src = pokemon.spriteFrontal;
  p.textContent = `Type: ${pokemon.tipo1} ${
    pokemon.tipo2 ? " + " + pokemon.tipo2 : ""
  }`;
  pw.textContent = `Weight: ${pokemon.peso} (in hectograms)`;

  parentElement.append(h2, img, p, pw);
  return parentElement.innerHTML;
}

/**
 * Function that returns a literal string with pokemon stats data to be used in the element inner text
 * @param {Pokemon} pokemon
 * @returns {string}
 */
export function sucessTextWithPokemonStats(pokemon) {
  const parentElement = document.createElement("div");
  const p = document.createElement("p");
  const table = document.createElement("table");

  p.textContent = "Initial Stats of Pokémon";
  table.className = "stats-table";

  table.innerHTML = `
  <thead>
    ${Pokemon.statsLabel.map((stats) => `<td>${stats}</td>`).join("")}
  </thead>
  <tbody>
    ${pokemon.stats.map((valor) => `<td>${valor}</td>`).join("")}
  </tbody>
  `;

  parentElement.append(p, table);
  return parentElement.innerHTML;
}

/**
 *
 * @param {Response} response
 * @returns {string}
 */
export function errorMessageWithResponseCode(response) {
  const parentElement = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");

  h2.textContent = `Error ${response.status}`;
  p.textContent = `${errorMessages[response.status] || errorMessages.default}`;
  img.src = errorImageSrc;

  parentElement.append(h2, p, img);

  return parentElement.innerHTML;
}
