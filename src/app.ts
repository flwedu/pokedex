import { EventEmitter } from "./core/EventEmitter";
import { IPokemon } from "./model/Pokemon";
import { searchInAPI } from "./service/SearchService";
import { ResultsView } from "./view/ResultsView";

export const app = {

    searchResultsList: [] as IPokemon[],

    //Function to save the last search
    saveSearch(pokemon: IPokemon) {
        if (app.searchResultsList.length > 10)
            app.searchResultsList.pop();
        app.searchResultsList.unshift(pokemon);
        return pokemon;
    },

    // Function to load the last saved pokemon
    getLastSearchedPokemon() {
        return app.searchResultsList[0];
    }
}

// Listning to events
EventEmitter.on("search", (searchParam: string) => {
    searchInAPI(searchParam).then(app.saveSearch).then(ResultsView.renderView).catch(ResultsView.renderWithError);
})

EventEmitter.on("nextPokemon", () => {
    if (app.getLastSearchedPokemon())
        EventEmitter.emit("search", app.getLastSearchedPokemon().id + 1);
})

EventEmitter.on("previousPokemon", () => {
    if (app.getLastSearchedPokemon())
        EventEmitter.emit("search", app.getLastSearchedPokemon().id - 1);
})