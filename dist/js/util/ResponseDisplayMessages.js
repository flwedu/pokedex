import { statsLabel } from "../model/Pokemon.js";
import formatText from "./text.js";
const errorImageSrc = "../../assets/error.svg";
const errorMessages = new Map();
errorMessages.set("default", "Error");
errorMessages.set("404", "No Pokémon found");
errorMessages.set("500", "Server Erro");
/**
 * Function that returns a literal string with pokemon data to be used in the element inner text
 * @param {IPokemon} pokemon
 * @returns {string}
 */
export function sucessTextWithPokemonData(pokemon) {
  const parentElement = document.createElement("div");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const pw = document.createElement("p");
  h2.textContent = `Nº:${pokemon.id} / ${formatText(pokemon.name)}`;
  img.src = pokemon.sprites.front_default;
  p.textContent = `Type: ${pokemon.types
    .map((type) => type.type.name)
    .join("|")}`;
  pw.textContent = `Weight: ${pokemon.weight} (in hectograms)`;
  parentElement.append(h2, img, p, pw);
  return parentElement.innerHTML;
}
/**
 * Function that returns a literal string with pokemon stats data to be used in the element inner text
 * @param {IPokemon} pokemon
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
    ${statsLabel.map((stats) => `<td>${stats}</td>`).join("")}
  </thead>
  <tbody>
    ${pokemon.stats.map((stat) => `<td>${stat.base_stat}<td>`)}
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
  p.textContent = `${
    errorMessages.get(response.status.toString()) ||
    errorMessages.get("default")
  }`;
  img.src = errorImageSrc;
  parentElement.append(h2, p, img);
  return parentElement.innerHTML;
}
