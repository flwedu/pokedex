import { EventEmitter } from "./core/EventEmitter";
import { searchInAPI } from "./service/SearchService";
import { button__next_pokemon, button__next_view, button__previous_pokemon, button__previous_view, button__search } from "./ui/Buttons";
import { searchTextField } from "./ui/DomElements";
import { renderPokemonData, renderPokemonStats, renderWithError } from "./view/updateViewFunctions";
let lastSearchedPokemon;
// Declaring avaliables view
const avaliableViews = [renderPokemonData, renderPokemonStats];
let actualView = 0;
// Functions to execute render the results
function renderView(pokemon) {
    avaliableViews[actualView](pokemon);
}
function renderNextView(pokemon) {
    if (actualView < avaliableViews.length) {
        actualView++;
        avaliableViews[actualView](pokemon);
    }
}
function renderpreviousView(pokemon) {
    if (actualView > 0) {
        actualView--;
        avaliableViews[actualView](pokemon);
    }
}
//Function to save the last search
function saveSearch(pokemon) {
    lastSearchedPokemon = pokemon;
    return pokemon;
}
// Buttons actions
button__search.addEventListener("click", () => {
    EventEmitter.emit("search", searchTextField.value);
});
button__next_view.addEventListener("click", () => {
    renderNextView(lastSearchedPokemon);
});
button__previous_view.addEventListener("click", () => {
    renderpreviousView(lastSearchedPokemon);
});
button__next_pokemon.addEventListener("click", () => {
    EventEmitter.emit("search", lastSearchedPokemon.id + 1);
});
button__previous_pokemon.addEventListener("click", () => {
    EventEmitter.emit("search", lastSearchedPokemon.id - 1);
});
// Listning to events
EventEmitter.on("search", (searchParam) => {
    searchInAPI(searchParam).then(saveSearch).then(renderView).catch(renderWithError);
});
