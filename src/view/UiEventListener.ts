import EventEmitter from "../util/EventEmitter";
import { AppEvents } from "../util/events";
import { Buttons, DomElements } from "./ui";
import { UIFeatures } from "./UIFeatures";

export class UiEventListener {
	constructor(
		private readonly eventEmitter: EventEmitter,
		private readonly uiFeatures: UIFeatures,
	) {}

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

	}

	public listenToInput(): void {
		const input = DomElements.inputSearch;

		input.addEventListener("focus", () => {
			this.uiFeatures.openCombobox(input.value);
		});

		input.addEventListener("blur", () => {
			this.uiFeatures.closeCombobox();
		});

		input.addEventListener("keydown", (event: KeyboardEvent) => {
			if (event.key === "ArrowDown") {
				event.preventDefault();
				this.uiFeatures.navigateCombobox("down");
				return;
			}
			if (event.key === "ArrowUp") {
				event.preventDefault();
				this.uiFeatures.navigateCombobox("up");
				return;
			}
			if (event.key === "Escape") {
				input.value = "";
				input.blur();
				this.uiFeatures.closeCombobox();
			}
		});

		input.addEventListener("keyup", (event: KeyboardEvent) => {
			if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Escape") return;
			if (event.key === "Enter") {
				const selected = this.uiFeatures.confirmComboboxSelection();
				if (selected) {
					input.value = selected;
					this.uiFeatures.closeCombobox();
				}
				return this.search();
			}
			this.uiFeatures.openCombobox(input.value);
		});

		input.addEventListener("combobox:select", () => {
			this.search();
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
		if (query.length > 0) {
			this.uiFeatures.addToHistory(query);
			this.eventEmitter.emit(AppEvents.SEARCH, query);
		}
	}
}
