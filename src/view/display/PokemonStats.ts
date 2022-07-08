import { IPokemon } from "../../model/Pokemon";

export function pokemonStats(pokemon: IPokemon): string {
  const parentElement = document.createElement("div");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");

  h2.textContent = "Initial Stats:";

  ul.innerHTML = `
  ${pokemon.stats
    .map(
      (stat) => `
  <li><strong>${stat.stat.name}</strong>: ${stat.base_stat}<li>
  `
    )
    .join("")}
  `;

  parentElement.append(h2, ul);
  return parentElement.innerHTML;
}
