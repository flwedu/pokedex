import EventEmitter from "../util/EventEmitter";
import { Buttons, DomElements } from "./ui";

export class UiEventListener {
	constructor(private readonly eventEmitter: EventEmitter) {}

	public listenToButtons(): void {
		DomElements.divNavigationButtons.addEventListener("click", (event: Event) => {
			switch (event.target) {
				case Buttons.previousView:
					this.eventEmitter.emit("previousView", null);
					break;
				case Buttons.nextView:
					this.eventEmitter.emit("nextView", null);
					break;
				case Buttons.previousPokemon:
					this.eventEmitter.emit("previousPokemon", null);
					break;
				case Buttons.nextPokemon:
					this.eventEmitter.emit("nextPokemon", null);
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
			this.eventEmitter.emit("updateNameSuggestion", input.value);
		});
	}

	public listenToDisplay(): void {
		DomElements.divResults.addEventListener("click", (event: Event) => {
			const target = event.target as HTMLElement;
			if (target.id === "toggle__shiny") {
				this.eventEmitter.emit("toggleShiny", null);
			}
		});
	}

	private search(): void {
		const query = DomElements.inputSearch.value;
		if (query.length > 0) this.eventEmitter.emit("search", query);
	}
}
