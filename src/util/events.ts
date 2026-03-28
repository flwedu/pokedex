export const AppEvents = {
	SEARCH: 'search',
	TOGGLE_SHINY: 'toggleShiny',
	TOGGLE_FAVORITE: 'toggleFavorite',
	NEXT_POKEMON: 'nextPokemon',
	PREV_POKEMON: 'previousPokemon',
	NEXT_VIEW: 'nextView',
	PREV_VIEW: 'previousView',
	UPDATE_SUGGESTION: 'updateNameSuggestion',
	SET_TYPE_FILTER: 'setTypeFilter',
} as const;

export type AppEvent = typeof AppEvents[keyof typeof AppEvents];
