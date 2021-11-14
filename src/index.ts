import "../style/styles.scss";
import { EventEmitter } from "./core/EventEmitter";
import { IPokemon } from "./model/Pokemon";
import { searchInAPI } from "./service/SearchService";
import "./ui/Buttons"
import "./view/AutoCompleteView";
import { ResultsView } from "./view/ResultsView";

let lastSearchedPokemon: undefined | IPokemon;

//Function to save the last search
export function saveSearch(pokemon: IPokemon) {
    lastSearchedPokemon = pokemon;
    return pokemon;
};

// Function to load the last saved pokemon
export function getLastSearchedPokemon() {
    return lastSearchedPokemon;
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