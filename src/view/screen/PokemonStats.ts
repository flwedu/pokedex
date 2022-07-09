import { IPokemon } from "../../model/Pokemon";

export function pokemonStats(pokemon: IPokemon): string {
  const statsList = pokemon.stats
    .map((stat) => `<li>${stat.stat.name}: ${stat.base_stat}</li>`)
    .join("\n");

  const html = `
  <div>
  <h2>Initial Stats:</h2>
  <ul>
  ${statsList}
  </ul>
  </div>
  `;
  return html;
}
