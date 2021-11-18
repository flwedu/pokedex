import { IPokemon } from "../../model/Pokemon";

export function pokemonStats(pokemon: IPokemon): string {
  const parentElement = document.createElement("div");
  const p = document.createElement("p");
  const ul = document.createElement("ul");

  p.textContent = "Initial Stats of Pokémon";

  ul.innerHTML = `
  ${pokemon.stats.map(stat => `
  <li>${stat.stat.name}: ${stat.base_stat}<li>
  `).join("")}
  `;

  parentElement.append(p, ul);
  return parentElement.innerHTML;
}
