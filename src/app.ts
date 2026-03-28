import { ApiClient } from "./ApiClient";
import EventEmitter from "./util/EventEmitter";
import { AppEvents } from "./util/events";

import {
	ErrorScreen,
	PokemonAbilities,
	PokemonData,
	PokemonStats,
} from "./view/screen";
import { toggleFavorite } from "./view/screen/PokemonData";
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
const uiEventListener = new UiEventListener(eventEmitter, uiFeatures);

uiEventListener.listenToButtons();
uiEventListener.listenToInput();
uiEventListener.listenToDisplay();
uiEventListener.listenToKeyboard();

uiFeatures.initNavigationDots(DomElements.divNavigationDots, screenList.success);
uiFeatures.changeActiveNavigationDot(0);

// Init combobox with DOM references immediately
uiFeatures.initCombobox(DomElements.comboboxDropdown, DomElements.inputSearch);

// Lazy-load Pokémon names on first input focus
let namesLoaded = false;
DomElements.inputSearch.addEventListener(
	"focus",
	() => {
		if (namesLoaded) return;
		namesLoaded = true;
		fetch("/assets/data/pokemon_names.json")
			.then((res) => res.json())
			.then((data: { list: { id: string; name: string }[] }) => {
				uiFeatures.setNames(data.list.map((p) => p.name));
			});
	},
	{ passive: true }
);

// ── Type filter state ──────────────────────────────────────────────────────
let typeFilterList: string[] | null = null;
let typeFilterIndex = 0;

function setTypeFilterIndicator(typeName: string | null): void {
	const el = document.getElementById("type__filter__indicator");
	if (!el) return;
	if (typeName) {
		el.textContent = `▸ ${typeName}`;
		el.className = `type-filter-indicator type--${typeName}`;
		el.style.display = "inline-block";
	} else {
		el.textContent = "";
		el.style.display = "none";
	}
}

// ── Event handlers ─────────────────────────────────────────────────────────

eventEmitter.on(AppEvents.SEARCH, (query: string) => {
	uiController.renderLoading();
	apiClient
		.get(query)
		.then((pokemon) => {
			uiController.renderSuccess(pokemon, 0);
			uiFeatures.changeActiveNavigationDot(0);
		})
		.catch((error: Error) => uiController.renderError(error));
});

eventEmitter.on(AppEvents.TOGGLE_SHINY, () => {
	pokemonData.toggleShiny();
	const currentPokemon = uiController.getLastPokemon();
	if (currentPokemon && uiController.getRenderedIndex() === 0) {
		uiController.renderSuccess(currentPokemon, 0);
	}
});

eventEmitter.on(AppEvents.TOGGLE_FAVORITE, () => {
	const currentPokemon = uiController.getLastPokemon();
	if (!currentPokemon) return;
	toggleFavorite(currentPokemon.id);
	if (uiController.getRenderedIndex() === 0) {
		uiController.renderSuccess(currentPokemon, 0);
	}
});

eventEmitter.on(AppEvents.NEXT_POKEMON, () => {
	if (typeFilterList) {
		typeFilterIndex = Math.min(typeFilterIndex + 1, typeFilterList.length - 1);
		eventEmitter.emit(AppEvents.SEARCH, typeFilterList[typeFilterIndex]);
		return;
	}
	const renderedId = uiController.getRenderedPokemonId();
	if (renderedId) {
		eventEmitter.emit(AppEvents.SEARCH, String(renderedId + 1));
	}
});

eventEmitter.on(AppEvents.PREV_POKEMON, () => {
	if (typeFilterList) {
		typeFilterIndex = Math.max(typeFilterIndex - 1, 0);
		eventEmitter.emit(AppEvents.SEARCH, typeFilterList[typeFilterIndex]);
		return;
	}
	const renderedId = uiController.getRenderedPokemonId();
	if (renderedId && renderedId > 1) {
		eventEmitter.emit(AppEvents.SEARCH, String(renderedId - 1));
	}
});

eventEmitter.on(AppEvents.NEXT_VIEW, () => {
	uiController.renderNextSuccess();
	uiFeatures.changeActiveNavigationDot(uiController.getRenderedIndex());
});

eventEmitter.on(AppEvents.PREV_VIEW, () => {
	uiController.renderPreviousSuccess();
	uiFeatures.changeActiveNavigationDot(uiController.getRenderedIndex());
});

eventEmitter.on(AppEvents.SET_TYPE_FILTER, async (typeName: string) => {
	const el = document.getElementById("type__filter__indicator");
	const isAlreadyActive = el?.textContent?.includes(typeName);

	if (isAlreadyActive) {
		typeFilterList = null;
		setTypeFilterIndicator(null);
		return;
	}

	uiController.renderLoading();
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
		const data = await res.json();
		typeFilterList = (
			data.pokemon as Array<{ pokemon: { name: string } }>
		).map((p) => p.pokemon.name);
		typeFilterIndex = 0;
		setTypeFilterIndicator(typeName);
		if (typeFilterList.length > 0) {
			eventEmitter.emit(AppEvents.SEARCH, typeFilterList[0]);
		}
	} catch {
		uiController.renderError(new Error("Failed to load type filter"));
	}
});
