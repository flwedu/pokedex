import IScreen from ".";
import { IPokemon } from "../../model/Pokemon";

export class PokemonAbilities implements IScreen {
  getHtml(pokemon: IPokemon): string {
    const { ability } = pokemon;
    const abilityInEnglish = ability.effect_entries.filter(
      (ability) => ability.language.name === "en"
    )[0];

    const html = `
    <h3>Ability:</h3>
    <h2>${ability.name}</h2>
        <p>"${abilityInEnglish.short_effect}"</p>
    `;
    return html;
  }
}
