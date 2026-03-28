import IScreen from ".";
import { IPokemon } from "../../model/Pokemon";
import { formatFirstLetterToUppercase } from "../../util/text";

export class PokemonAbilities implements IScreen {
	getHtml(pokemon: IPokemon): string {
		const abilities = pokemon.abilityDetails ?? (pokemon.ability ? [pokemon.ability] : []);

		if (abilities.length === 0) {
			return `
				<div class="pokemon-ability">
					<span class="ability-label">Abilities</span>
					<p class="ability-desc">No ability data available.</p>
				</div>
			`;
		}

		const abilityItems = abilities
			.map((ability, index) => {
				const abilityInEnglish = ability.effect_entries?.find(
					(entry) => entry.language.name === "en"
				);
				const name = formatFirstLetterToUppercase(ability.name.replace(/-/g, " "));
				const isHidden = pokemon.abilities[index]?.is_hidden ?? false;

				return `
				<div class="ability-item${isHidden ? " ability-item--hidden" : ""}">
					<span class="ability-name">
						${name}${isHidden ? ' <span class="ability-hidden-tag">hidden</span>' : ""}
					</span>
					<p class="ability-desc">"${abilityInEnglish?.short_effect ?? "No description available."}"</p>
				</div>
			`;
			})
			.join("");

		return `
			<div class="pokemon-ability">
				<span class="ability-label">Abilities</span>
				${abilityItems}
			</div>
		`;
	}
}
