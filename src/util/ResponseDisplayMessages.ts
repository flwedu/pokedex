import { IPokemon } from "../model/Pokemon";
import formatText from "./text";

const errorImageSrc = "../../assets/error.svg";

const errorMessages = new Map();
errorMessages.set("default", "Error");
errorMessages.set("404", "No Pokémon found");
errorMessages.set("500", "Server Error");

/**
 * Function that returns a literal string with pokemon data to be used in the element inner text
 * @param {IPokemon} pokemon
 * @returns {string}
 */
export function pokemonData(pokemon: IPokemon): string {
  const parentElement = document.createElement("div");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const pw = document.createElement("p");

  h2.textContent = `Nº:${pokemon.id} / ${formatText(pokemon.name)}`;
  img.src = pokemon.sprites.front_default;
  p.textContent = `Type: ${pokemon.types.map(type => type.type.name).join(" & ")}`;
  pw.textContent = `Weight: ${pokemon.weight} (in hectograms)`;

  parentElement.append(h2, img, p, pw);
  return parentElement.innerHTML;
}

/**
 * Function that returns a literal string with pokemon stats data to be used in the element inner text
 * @param {IPokemon} pokemon
 * @returns {string}
 */
export function pokemonStats(pokemon: IPokemon): string {
  const parentElement = document.createElement("div");
  const p = document.createElement("p");
  const ul = document.createElement("ul");

  p.textContent = "Initial Stats of Pokémon";

  ul.innerHTML = `
  ${pokemon.stats.map(stat => `
  <li>${stat.stat.name}: ${stat.base_stat}<li>
  `).join("")}
  `;

  parentElement.append(p, ul);
  return parentElement.innerHTML;
}

export function pokemonAbilities(pokemon: IPokemon) {

}

/**
 *
 * @param {Response} response
 * @returns {string}
 */
export function errorMessageWithResponseCode(response: Response): string {
  const parentElement = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");

  h2.textContent = `Error ${response.status}`;
  p.textContent = `${errorMessages.get(response.status.toString()) || errorMessages.get("default")}`;
  img.src = errorImageSrc;

  parentElement.append(h2, p, img);

  return parentElement.innerHTML;
}
