import EventEmitter from "../util/EventEmitter";
import { Buttons, DomElements } from "./ui";

export class UiEventListener {
  constructor(private readonly eventEmitter: EventEmitter) {}

  public listenToButtons() {
    DomElements.divNavigationButtons.addEventListener(
      "click",
      (event: Event) => {
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
          case Buttons.search:
            this.eventEmitter.emit("search", DomElements.inputSearch.value);
            break;
        }
      }
    );
  }

  public listenToInput() {
    DomElements.inputSearch.addEventListener(
      "keyup",
      (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          this.eventEmitter.emit("search", DomElements.inputSearch.value);
        }
      }
    );
  }
}
