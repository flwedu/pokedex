import { EventEmitter } from "./core/EventEmitter";
import { IPokemon } from "./model/Pokemon";
import AutoCompleteService from "./service/AutoCompleteService";
import { searchInAPI } from "./service/SearchService";
import { button__next_pokemon, button__next_view, button__previous_pokemon, button__previous_view, button__search } from "./ui/Buttons";
import { display__autocomplete, searchTextField } from "./ui/DomElements";
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


// Autocomplete
const autoCompleteService = new AutoCompleteService("data/pokemon_names.json");

EventEmitter.on("autoComplete", (text: string) => {
    display__autocomplete.innerHTML = "";

    autoCompleteService.listarPorAproximacao(text).map(pokemon => {
        const p = document.createElement("p");
        p.textContent = pokemon;

        p.addEventListener("click", () => {
            searchTextField.value = p.textContent;
            EventEmitter.emit("closeAutoComplete", null);
        })

        display__autocomplete.appendChild(p);
    })
    display__autocomplete.classList.remove("invisible");
})

EventEmitter.on("closeAutoComplete", () => {
    display__autocomplete.innerHTML = "";
    display__autocomplete.classList.add("invisible");
})