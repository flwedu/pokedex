import { EventEmitter } from "./core/EventEmitter";
import { IPokemon } from "./model/Pokemon";
import { searchInAPI } from "./service/SearchService";
import { ResultsView } from "./view/ResultsView";

const searchResultsList: IPokemon[] = [];

//Function to save the last search
export function saveSearch(pokemon: IPokemon) {
    if (searchResultsList.length > 10)
        searchResultsList.pop();
    searchResultsList.unshift(pokemon);
    return pokemon;
};

// Function to load the last saved pokemon
export function getLastSearchedPokemon() {
    return searchResultsList[0];
}

// Listning to events
EventEmitter.on("search", (searchParam: string) => {
    searchInAPI(searchParam).then(saveSearch).then(ResultsView.renderView).catch(ResultsView.renderWithError);
})

EventEmitter.on("nextPokemon", () => {
    if (getLastSearchedPokemon())
        EventEmitter.emit("search", getLastSearchedPokemon().id + 1);
})

EventEmitter.on("previousPokemon", () => {
    if (getLastSearchedPokemon())
        EventEmitter.emit("search", getLastSearchedPokemon().id - 1);
})