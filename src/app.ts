import { ApiClient } from "./ApiClient";
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

const screenList = {
	success: [new PokemonData(), new PokemonStats(), new PokemonAbilities()],
	error: new ErrorScreen(),
};
const uiController = new UiController(DomElements.divResults, screenList);
const uiFeatures = new UIFeatures();
const apiClient = new ApiClient();
const eventEmitter = new EventEmitter();
const uiEventListener = new UiEventListener(eventEmitter);

uiEventListener.listenToButtons();
uiEventListener.listenToInput();
uiFeatures.initNavigationDots(
	DomElements.divNavigationDots,
	screenList.success
);
uiFeatures.changeActiveNavigationDot(0);

// Loading name suggestions
fetch("../../assets/data/pokemon_names.json")
	.then((res) => res.json())
	.then((data: { list: { id: string; name: string }[] }) => {
		const pokemonNames = data.list.map((pokemon) => pokemon.name);
		uiFeatures.initNameSuggestion(DomElements.listNameSuggestion, pokemonNames);
	});

// Listening to events
eventEmitter.on("search", (query: string) => {
	apiClient
		.get(query)
		.then((pokemon) => uiController.renderSuccess(pokemon))
		.catch((error) => uiController.renderError(error));
});

eventEmitter.on("nextPokemon", () => {
	const renderedId = uiController.getRenderedPokemonId();
	if (renderedId) {
		const nextId = String(renderedId + 1);
		eventEmitter.emit("search", nextId);
	}
});

eventEmitter.on("previousPokemon", () => {
	const renderedId = uiController.getRenderedPokemonId();
	if (renderedId && renderedId > 0) {
		const previousId = String(renderedId - 1);
		eventEmitter.emit("search", previousId);
	}
});

eventEmitter.on("nextView", () => {
	uiController.renderNextSuccess();
	const index = uiController.getRenderedIndex();
	uiFeatures.changeActiveNavigationDot(index);
});

eventEmitter.on("previousView", () => {
	uiController.renderPreviousSuccess();
	const index = uiController.getRenderedIndex();
	uiFeatures.changeActiveNavigationDot(index);
});

eventEmitter.on("updateNameSuggestion", (query: string) => {
	uiFeatures.updateNameSuggestion(query);
});
