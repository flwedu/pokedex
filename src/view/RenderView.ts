import { IPokemon } from "../model/Pokemon";
import {
  errorScreen,
  pokemonAbilities,
  pokemonData,
  pokemonStats,
} from "./screen";

export class RenderView {
  // Declaring available view
  viewFunctions: Function[];
  actualView: number;

  constructor(private display: HTMLDivElement) {
    this.viewFunctions = [pokemonData, pokemonStats, pokemonAbilities];
    this.actualView = 0;
  }

  // Functions to execute render the results
  async renderView(pokemon: IPokemon) {
    this.display.innerHTML = await this.viewFunctions[this.actualView](pokemon);
    playTransition(this.display);
  }

  async renderNextView(pokemon: IPokemon) {
    if (this.actualView < this.viewFunctions.length - 1) {
      this.actualView++;
      await this.renderView(pokemon);
    }
  }

  async renderPreviousView(pokemon: IPokemon) {
    if (this.actualView > 0) {
      this.actualView--;
      await this.renderView(pokemon);
    }
  }
  async renderWithError(response: Response) {
    this.display.innerHTML = errorScreen(response);
    playTransition(this.display);
  }
}

function playTransition(display: HTMLElement) {
  display.classList.add("emtransicao");
  setTimeout(() => display.classList.remove("emtransicao"), 1000);
}
