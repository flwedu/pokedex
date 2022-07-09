import { IPokemon } from "./model/Pokemon";
import { searchInAPI } from "./service/SearchService";
import { display__data } from "./ui/DomElements";
import { RenderView } from "./view/RenderView";
import { EventEmitter } from "./core/EventEmitter";

export const app = {
  searchResultsList: [] as IPokemon[],

  //Function to save the last search
  saveSearch(pokemon: IPokemon) {
    if (app.searchResultsList.length > 10) app.searchResultsList.pop();
    app.searchResultsList.unshift(pokemon);
    return pokemon;
  },

  // Function to load the last saved pokemon
  getLastSearchedPokemon() {
    return app.searchResultsList[0];
  },
};

const render = new RenderView(display__data);

// Listening to events
EventEmitter.on("search", (searchParam: string) => {
  searchInAPI(searchParam)
    .then((data) => app.saveSearch(data))
    .then((data) => render.renderView(data))
    .catch((error) => render.renderWithError(error));

  EventEmitter.emit("closeAutoComplete", null);
});

EventEmitter.on("nextPokemon", () => {
  if (app.getLastSearchedPokemon())
    EventEmitter.emit("search", app.getLastSearchedPokemon().id + 1);
});

EventEmitter.on("previousPokemon", () => {
  if (app.getLastSearchedPokemon())
    EventEmitter.emit("search", app.getLastSearchedPokemon().id - 1);
});

EventEmitter.on("nextView", () => {
  if (app.getLastSearchedPokemon())
    render.renderNextView(app.getLastSearchedPokemon());
});

EventEmitter.on("previousView", () => {
  if (app.getLastSearchedPokemon())
    render.renderPreviousView(app.getLastSearchedPokemon());
});
