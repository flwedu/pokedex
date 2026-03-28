import IScreen from ".";
import { IPokemon } from "../../model/Pokemon";
import { formatFirstLetterToUppercase } from "../../util/text";

export class PokemonAbilities implements IScreen {
	getHtml(pokemon: IPokemon): string {
		const { ability } = pokemon;
		const abilityInEnglish = ability.effect_entries.find(
			(entry) => entry.language.name === "en"
		);

		const abilityName = formatFirstLetterToUppercase(
			ability.name.replace(/-/g, " ")
		);

		return `
			<div class="pokemon-ability">
				<span class="ability-label">Ability</span>
				<span class="ability-name">${abilityName}</span>
				<p class="ability-desc">"${abilityInEnglish?.short_effect ?? "No description available."}"</p>
			</div>
		`;
	}
}
