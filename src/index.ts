import { EventEmitter } from "./core/EventEmitter";
import { IPokemon } from "./model/Pokemon";
import "./service/AutoCompleteService";
import { searchInAPI } from "./service/SearchService";
import { button__next_pokemon, button__next_view, button__previous_pokemon, button__previous_view, button__search } from "./ui/Buttons";
import { searchTextField } from "./ui/DomElements";
import { ResultsView } from "./view/ResultsView";
import { renderWithError } from "./view/updateViewFunctions";

let lastSearchedPokemon: undefined | IPokemon;

//Function to save the last search
function saveSearch(pokemon: IPokemon) {
    lastSearchedPokemon = pokemon;
    return pokemon;
};

// Buttons actions
button__search.addEventListener("click", () => {
    EventEmitter.emit("search", searchTextField.value);
})

button__next_view.addEventListener("click", () => {
    ResultsView.renderNextView(lastSearchedPokemon);
})

button__previous_view.addEventListener("click", () => {
    ResultsView.renderpreviousView(lastSearchedPokemon);
})

button__next_pokemon.addEventListener("click", () => {
    EventEmitter.emit("search", lastSearchedPokemon.id + 1);
})

button__previous_pokemon.addEventListener("click", () => {
    EventEmitter.emit("search", lastSearchedPokemon.id - 1);
})

// Listning to events
EventEmitter.on("search", (searchParam: string) => {
    searchInAPI(searchParam).then(saveSearch).then(ResultsView.renderView).catch(renderWithError);
})

