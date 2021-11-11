import { EventEmitter } from "./core/EventEmitter";
import { IPokemon } from "./model/Pokemon";
import { searchInAPI } from "./service/SearchService";
import { buttonNext, buttonPrevious, buttonSearch } from "./ui/Buttons";
import { searchTextField } from "./ui/DomElements";
import { renderPokemonData, renderPokemonStats, renderWithError } from "./view/updateViewFunctions";

let lastSearchedPokemon: IPokemon | undefined;

// Declaring avaliables view
const avaliableViews = [renderPokemonData, renderPokemonStats];
let actualView = 0;

// Functions to execute render the results
function renderView(pokemon: IPokemon) {
    avaliableViews[actualView](pokemon);
}

function renderNextView(pokemon: IPokemon) {
    if (actualView < avaliableViews.length) {
        actualView++;
        avaliableViews[actualView](pokemon);
    }
}

function renderpreviousView(pokemon: IPokemon) {
    if (actualView > 0) {
        actualView--;
        avaliableViews[actualView](pokemon);
    }
}

//Function to save the last search
function saveSearch(pokemon: IPokemon) {
    lastSearchedPokemon = pokemon;
    return pokemon;
}

// Buttons actions
buttonSearch.addEventListener("click", () => {
    EventEmitter.emit("search", searchTextField.value);
})

buttonNext.addEventListener("click", () => {
    renderNextView(lastSearchedPokemon);
})

buttonPrevious.addEventListener("click", () => {
    renderpreviousView(lastSearchedPokemon);
})

// Listning to events
EventEmitter.on("search", (searchParam: string) => {
    searchInAPI(searchParam).then(saveSearch).then(renderView).catch(renderWithError);
})

