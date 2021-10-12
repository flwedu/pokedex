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
  const h2 = (document.createElement(
    "h2"
  ).textContent = `Nº:${pokemon.id} / ${pokemon.nomeOcidental}`);
  const img = (document.createElement("img").src = pokemon.spriteFrontal);
  const p = (document.createElement("p").textContent = `Type: ${
    pokemon.tipo1
  } ${pokemon.tipo2 ? " + " + pokemon.tipo2 : ""}`);
  const pw = (document.createElement(
    "p"
  ).textContent = `Weight: ${pokemon.peso} (in hectograms)`);

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
  const p = (document.createElement("p").textContent =
    "Initial Stats of Pokémon");
  const table = document.createElement("table");

  table.className = "stats-table";

  table.innerHTML = `
  <thead>
    ${pokemon.statsLabel.map((stats) => `<td>${stats}</td>`).join("")}
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
  const h2 = (document.createElement(
    "h2"
  ).textContent = `Error ${response.status}`);
  const p = (document.createElement("p").textContent = `${
    errorMessages[response.status] || errorMessages.default
  }`);
  const img = document.createElement("img");
  img.src = errorImageSrc;

  parentElement.append(h2, p, img);

  return parentElement.innerHTML;
}
