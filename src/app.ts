import { ApiClient } from "./ApiClient";
import { IPokemon } from "./model/Pokemon";
import EventEmitter from "./util/EventEmitter";

import {
  ErrorScreen,
  PokemonAbilities,
  PokemonData,
  PokemonStats,
} from "./view/screen";
import { DomElements } from "./view/ui";
import { UiController } from "./view/UiController";
import { UiEventListener } from "./view/UiEventListener";
import { UIFeatures } from "./view/UIFeatures";

const searchResultsList = [] as IPokemon[];
const screenList = {
  success: [new PokemonData(), new PokemonStats(), new PokemonAbilities()],
  error: new ErrorScreen(),
};
const uiController = new UiController(DomElements.divResults, screenList);
const uiFeatures = new UIFeatures();
const apiClient = new ApiClient();
const eventEmitter = new EventEmitter();
const uiEventListener = new UiEventListener(eventEmitter);

//Function to save the last search
function saveSearch(pokemon: IPokemon) {
  if (searchResultsList.length > 10) searchResultsList.pop();
  searchResultsList.unshift(pokemon);
  return pokemon;
}

// Function to load the last saved pokemon
function getLastSearchedPokemon() {
  return searchResultsList[0];
}

uiEventListener.listenToButtons();
uiEventListener.listenToInput();
uiFeatures.initNavigationDots(
  DomElements.divNavigationDots,
  screenList.success
);
uiFeatures.changeActiveNavigationDot(0);
uiFeatures.initNameSuggestion(DomElements.listNameSuggestion);

// Listening to events
eventEmitter.on("search", (query: string) => {
  apiClient
    .get(query)
    .then((pokemon) => saveSearch(pokemon))
    .then((pokemon) => uiController.renderSuccess(pokemon))
    .catch((error) => uiController.renderError(error));
});

eventEmitter.on("nextPokemon", () => {
  if (getLastSearchedPokemon()) {
    const id = String(getLastSearchedPokemon().id + 1);
    eventEmitter.emit("search", id);
  }
});

eventEmitter.on("previousPokemon", () => {
  if (getLastSearchedPokemon()) {
    const id = String(getLastSearchedPokemon().id - 1);
    eventEmitter.emit("search", id);
  }
});

eventEmitter.on("nextView", () => {
  if (getLastSearchedPokemon()) {
    uiController.renderNextSuccess(getLastSearchedPokemon());
    const index = uiController.getRenderedIndex();
    uiFeatures.changeActiveNavigationDot(index);
  }
});

eventEmitter.on("previousView", () => {
  if (getLastSearchedPokemon()) {
    uiController.renderPreviousSuccess(getLastSearchedPokemon());
    const index = uiController.getRenderedIndex();
    uiFeatures.changeActiveNavigationDot(index);
  }
});

eventEmitter.on("updateNameSuggestion", (query: string) => {
  uiFeatures.updateNameSuggestion(query);
});
