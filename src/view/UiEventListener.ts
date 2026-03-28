import EventEmitter from "../util/EventEmitter";
import { AppEvents } from "../util/events";
import { Buttons, DomElements } from "./ui";

export class UiEventListener {
	constructor(private readonly eventEmitter: EventEmitter) {}

	public listenToButtons(): void {
		DomElements.divNavigationButtons.addEventListener("click", (event: Event) => {
			switch (event.target) {
				case Buttons.previousView:
					this.eventEmitter.emit(AppEvents.PREV_VIEW);
					break;
				case Buttons.nextView:
					this.eventEmitter.emit(AppEvents.NEXT_VIEW);
					break;
				case Buttons.previousPokemon:
					this.eventEmitter.emit(AppEvents.PREV_POKEMON);
					break;
				case Buttons.nextPokemon:
					this.eventEmitter.emit(AppEvents.NEXT_POKEMON);
					break;
			}
		});

		Buttons.search.addEventListener("click", () => this.search());
	}

	public listenToInput(): void {
		DomElements.inputSearch.addEventListener("keyup", (event: KeyboardEvent) => {
			if (event.key === "Enter") {
				return this.search();
			}
			const input = event.target as HTMLInputElement;
			this.eventEmitter.emit(AppEvents.UPDATE_SUGGESTION, input.value);
		});

		DomElements.inputSearch.addEventListener("focus", () => {
			this.eventEmitter.emit(AppEvents.UPDATE_SUGGESTION, DomElements.inputSearch.value);
		});
	}

	public listenToDisplay(): void {
		DomElements.divResults.addEventListener("click", (event: Event) => {
			const target = event.target as HTMLElement;
			if (target.id === "toggle__shiny") {
				this.eventEmitter.emit(AppEvents.TOGGLE_SHINY);
			}
			if (target.id === "toggle__favorite") {
				this.eventEmitter.emit(AppEvents.TOGGLE_FAVORITE);
			}
			if (target.classList.contains("type-badge") && target.dataset["type"]) {
				this.eventEmitter.emit(AppEvents.SET_TYPE_FILTER, target.dataset["type"]);
			}
		});
	}

	public listenToKeyboard(): void {
		document.addEventListener("keydown", (event: KeyboardEvent) => {
			const isTyping = document.activeElement === DomElements.inputSearch;

			if (isTyping) {
				if (event.key === "Escape") {
					DomElements.inputSearch.value = "";
					DomElements.inputSearch.blur();
				}
				return;
			}

			switch (event.key) {
				case "ArrowLeft":
					event.preventDefault();
					this.eventEmitter.emit(AppEvents.PREV_POKEMON);
					break;
				case "ArrowRight":
					event.preventDefault();
					this.eventEmitter.emit(AppEvents.NEXT_POKEMON);
					break;
				case "ArrowUp":
					event.preventDefault();
					this.eventEmitter.emit(AppEvents.PREV_VIEW);
					break;
				case "ArrowDown":
					event.preventDefault();
					this.eventEmitter.emit(AppEvents.NEXT_VIEW);
					break;
				case "Escape":
					DomElements.inputSearch.value = "";
					DomElements.inputSearch.focus();
					break;
				case "s":
				case "S":
					this.eventEmitter.emit(AppEvents.TOGGLE_SHINY);
					break;
				case "f":
				case "F":
					this.eventEmitter.emit(AppEvents.TOGGLE_FAVORITE);
					break;
			}
		});
	}

	private search(): void {
		const query = DomElements.inputSearch.value;
		if (query.length > 0) this.eventEmitter.emit(AppEvents.SEARCH, query);
	}
}
