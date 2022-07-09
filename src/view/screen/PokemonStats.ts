import IScreen from ".";
import { IPokemon } from "../../model/Pokemon";

export class PokemonStats implements IScreen {
  getHtml(pokemon: IPokemon): string {
    const statsList = pokemon.stats
      .map((stat) => `<li>${stat.stat.name}: ${stat.base_stat}</li>`)
      .join("\n");

    const html = `
  <div class="container">
  <h2>Initial Stats:</h2>
  <ul>
  ${statsList}
  </ul>
  </div>
  `;
    return html;
  }
}
