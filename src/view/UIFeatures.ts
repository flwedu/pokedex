import IScreen from "./screen";

const HISTORY_KEY = "pokedex_search_history";
const MAX_HISTORY = 5;

function debounce(fn: (query: string) => void, delay: number): (query: string) => void {
	let timer: ReturnType<typeof setTimeout> | undefined;
	return (query: string) => {
		clearTimeout(timer);
		timer = setTimeout(() => fn(query), delay);
	};
}

export class UIFeatures {
	public dots: HTMLInputElement[] = [];
	private pokemonNames: string[] = [];
	private suggestionDataList!: HTMLDataListElement;
	private debouncedUpdate: (query: string) => void;

	constructor() {
		this.debouncedUpdate = debounce(this._updateSuggestions.bind(this), 150);
	}

	initNavigationDots(htmlEl: HTMLDivElement, successScreen: IScreen[]) {
		this.dots = successScreen.map((_, index) => {
			const dot = document.createElement("input");
			dot.type = "button";
			dot.className = "dot";
			dot.id = `dot__${index}`;
			htmlEl.appendChild(dot);
			return dot;
		});
	}

	changeActiveNavigationDot(id: number) {
		this.dots.forEach((dot) => dot.classList.remove("active"));
		if (id > -1) this.dots[id]?.classList.add("active");
	}

	initNameSuggestion(htmlEl: HTMLDataListElement, pokemonNames: string[]) {
		this.suggestionDataList = htmlEl;
		this.pokemonNames = pokemonNames;
	}

	updateNameSuggestion(query: string) {
		if (!this.suggestionDataList) return;
		this.debouncedUpdate(query);
	}

	addToHistory(query: string) {
		const normalized = query.toLowerCase().trim();
		if (!normalized) return;
		const history = this.getHistory().filter((h) => h !== normalized);
		history.unshift(normalized);
		try {
			localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));
		} catch {
			// localStorage not available (e.g. tests)
		}
	}

	private _updateSuggestions(query: string) {
		this.suggestionDataList.innerHTML = "";

		if (query.length === 0) {
			const history = this.getHistory();
			history.forEach((name) => {
				const option = document.createElement("option");
				option.value = name;
				this.suggestionDataList.appendChild(option);
			});
			return;
		}

		this.pokemonNames
			.filter((name) => name.toLowerCase().includes(query.toLowerCase()))
			.slice(0, 5)
			.forEach((name) => {
				const option = document.createElement("option");
				option.value = name;
				this.suggestionDataList.appendChild(option);
			});
	}

	private getHistory(): string[] {
		try {
			return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? "[]");
		} catch {
			return [];
		}
	}
}
