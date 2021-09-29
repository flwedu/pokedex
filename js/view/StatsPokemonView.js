import Pokemon from "../model/Pokemon.js";
import { sucessTextWithPokemonStats } from "../util/ResponseDisplayMessages.js";
import View from "./View.js";

export default class StatsPokemonView extends View {
  /**
   *
   * @param {Pokemon} pokemon
   * @returns {}
   */
  template(pokemon) {
    return sucessTextWithPokemonStats(pokemon);
  }
}
