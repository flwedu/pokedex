import IScreen from ".";
import {IPokemon} from "../../model/Pokemon";
import {formatFirstLetterToUppercase} from "../../util/text";

export class PokemonData implements IScreen {
  getHtml(pokemon: IPokemon): string {
	  return `
  <div class="container">
  <h2>Nº:${pokemon.id} / ${formatFirstLetterToUppercase(pokemon.name)}</h2>
  <img src="${pokemon.sprites.front_default}" alt="${pokemon.name} picture">
  <p>Type: ${pokemon.types.map((type) => type.type.name).join(" & ")}</p>
  <p>Weight: ${pokemon.weight} (in hectograms)</p>
  </div>
  `;
  }
}
