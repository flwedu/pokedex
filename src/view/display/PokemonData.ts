import { IPokemon } from "../../model/Pokemon";
import formatText from "../../util/text";

export function pokemonData(pokemon: IPokemon): string {
    const parentElement = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const pw = document.createElement("p");

    h2.textContent = `Nº:${pokemon.id} / ${formatText(pokemon.name)}`;
    img.src = pokemon.sprites.front_default;
    p.textContent = `Type: ${pokemon.types.map(type => type.type.name).join(" & ")}`;
    pw.textContent = `Weight: ${pokemon.weight} (in hectograms)`;

    parentElement.append(h2, img, p, pw);
    return parentElement.innerHTML;
}