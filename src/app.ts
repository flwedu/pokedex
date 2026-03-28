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

const pokemonData = new PokemonData();

const screenList = {
	success: [pokemonData, new PokemonStats(), new PokemonAbilities()],
	error: new ErrorScreen(),
};

const uiController = new UiController(DomElements.divResults, screenList);
const uiFeatures = new UIFeatures();
const apiClient = new ApiClient();
const eventEmitter = new EventEmitter();
const uiEventListener = new UiEventListener(eventEmitter);

uiEventListener.listenToButtons();
uiEventListener.listenToInput();
uiEventListener.listenToDisplay();

uiFeatures.initNavigationDots(DomElements.divNavigationDots, screenList.success);
uiFeatures.changeActiveNavigationDot(0);

fetch("/assets/data/pokemon_names.json")
	.then((res) => res.json())
	.then((data: { list: { id: string; name: string }[] }) => {
		const pokemonNames = data.list.map((p) => p.name);
		uiFeatures.initNameSuggestion(DomElements.listNameSuggestion, pokemonNames);
	});

eventEmitter.on("search", (query: string) => {
	uiController.renderLoading();
	apiClient
		.get(query)
		.then((pokemon) => {
			uiController.renderSuccess(pokemon, 0);
			uiFeatures.changeActiveNavigationDot(0);
		})
		.catch((error) => uiController.renderError(error));
});

eventEmitter.on("toggleShiny", () => {
	pokemonData.toggleShiny();
	const currentPokemon = uiController.getLastPokemon();
	if (currentPokemon && uiController.getRenderedIndex() === 0) {
		uiController.renderSuccess(currentPokemon, 0);
	}
});

eventEmitter.on("nextPokemon", () => {
	const renderedId = uiController.getRenderedPokemonId();
	if (renderedId) {
		eventEmitter.emit("search", String(renderedId + 1));
	}
});

eventEmitter.on("previousPokemon", () => {
	const renderedId = uiController.getRenderedPokemonId();
	if (renderedId && renderedId > 1) {
		eventEmitter.emit("search", String(renderedId - 1));
	}
});

eventEmitter.on("nextView", () => {
	uiController.renderNextSuccess();
	uiFeatures.changeActiveNavigationDot(uiController.getRenderedIndex());
});

eventEmitter.on("previousView", () => {
	uiController.renderPreviousSuccess();
	uiFeatures.changeActiveNavigationDot(uiController.getRenderedIndex());
});

eventEmitter.on("updateNameSuggestion", (query: string) => {
	uiFeatures.updateNameSuggestion(query);
});
