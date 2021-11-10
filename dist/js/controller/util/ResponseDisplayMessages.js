"use strict";
exports.__esModule = true;
exports.errorMessageWithResponseCode = exports.sucessTextWithPokemonStats = exports.sucessTextWithPokemonData = void 0;
var Pokemon_1 = require("../model/Pokemon");
var text_1 = require("./text");
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
function sucessTextWithPokemonData(pokemon) {
    var parentElement = document.createElement("div");
    var h2 = document.createElement("h2");
    var img = document.createElement("img");
    var p = document.createElement("p");
    var pw = document.createElement("p");
    h2.textContent = "N\u00BA:" + pokemon.id + " / " + (0, text_1["default"])(pokemon.name);
    img.src = pokemon.sprites.front_default;
    p.textContent = "Type: " + pokemon.types.map(function (type) { return type.type.name; }).join("|");
    pw.textContent = "Weight: " + pokemon.weight + " (in hectograms)";
    parentElement.append(h2, img, p, pw);
    return parentElement.innerHTML;
}
exports.sucessTextWithPokemonData = sucessTextWithPokemonData;
/**
 * Function that returns a literal string with pokemon stats data to be used in the element inner text
 * @param {IPokemon} pokemon
 * @returns {string}
 */
function sucessTextWithPokemonStats(pokemon) {
    var parentElement = document.createElement("div");
    var p = document.createElement("p");
    var table = document.createElement("table");
    p.textContent = "Initial Stats of Pokémon";
    table.className = "stats-table";
    table.innerHTML = "\n  <thead>\n    " + Pokemon_1.statsLabel.map(function (stats) { return "<td>" + stats + "</td>"; }).join("") + "\n  </thead>\n  <tbody>\n    " + pokemon.stats.map(function (stat) { return "<td>" + stat.base_stat + "<td>"; }) + "\n  </tbody>\n  ";
    parentElement.append(p, table);
    return parentElement.innerHTML;
}
exports.sucessTextWithPokemonStats = sucessTextWithPokemonStats;
/**
 *
 * @param {Response} response
 * @returns {string}
 */
function errorMessageWithResponseCode(response) {
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
exports.errorMessageWithResponseCode = errorMessageWithResponseCode;
