import { statsLabel } from "../model/Pokemon";
import formatText from "./text";
var errorImageSrc = "../../assets/error.svg";
var errorMessages = new Map();
errorMessages.set("default", "Error");
errorMessages.set("404", "No Pokémon found");
errorMessages.set("500", "Server Erro");
/**
 * Function that returns a literal string with pokemon data to be used in the element inner text
 * @param {IPokemon} pokemon
 * @returns {string}
 */
export function sucessTextWithPokemonData(pokemon) {
    var parentElement = document.createElement("div");
    var h2 = document.createElement("h2");
    var img = document.createElement("img");
    var p = document.createElement("p");
    var pw = document.createElement("p");
    h2.textContent = "N\u00BA:" + pokemon.id + " / " + formatText(pokemon.name);
    img.src = pokemon.sprites.front_default;
    p.textContent = "Type: " + pokemon.types.map(function (type) { return type.type.name; }).join("|");
    pw.textContent = "Weight: " + pokemon.weight + " (in hectograms)";
    parentElement.append(h2, img, p, pw);
    return parentElement.innerHTML;
}
/**
 * Function that returns a literal string with pokemon stats data to be used in the element inner text
 * @param {IPokemon} pokemon
 * @returns {string}
 */
export function sucessTextWithPokemonStats(pokemon) {
    var parentElement = document.createElement("div");
    var p = document.createElement("p");
    var table = document.createElement("table");
    p.textContent = "Initial Stats of Pokémon";
    table.className = "stats-table";
    table.innerHTML = "\n  <thead>\n    " + statsLabel.map(function (stats) { return "<td>" + stats + "</td>"; }).join("") + "\n  </thead>\n  <tbody>\n    " + pokemon.stats.map(function (stat) { return "<td>" + stat.base_stat + "<td>"; }) + "\n  </tbody>\n  ";
    parentElement.append(p, table);
    return parentElement.innerHTML;
}
/**
 *
 * @param {Response} response
 * @returns {string}
 */
export function errorMessageWithResponseCode(response) {
    var parentElement = document.createElement("div");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    var img = document.createElement("img");
    h2.textContent = "Error " + response.status;
    p.textContent = "" + (errorMessages.get(response.status.toString()) || errorMessages.get("default"));
    img.src = errorImageSrc;
    parentElement.append(h2, p, img);
    return parentElement.innerHTML;
}
