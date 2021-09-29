import Pokemon from "../model/Pokemon.js";
import { sucessTextWithPokemonData } from "../util/ResponseDisplayMessages.js";
import View from "./View.js";
export default class DadosPokemonView extends View {
  /**
   *
   * @param {Pokemon} pokemon
   * @return {}
   */
  template(pokemon) {
    return sucessTextWithPokemonData(pokemon);
  }
}
