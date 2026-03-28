import IScreen from ".";
import { IPokemon } from "../../model/Pokemon";
import { formatFirstLetterToUppercase } from "../../util/text";

function statColor(value: number): string {
	if (value < 50) return "#cc3333";
	if (value < 80) return "#cc9933";
	if (value < 110) return "#4a9e3f";
	return "#00d4cc";
}

export class PokemonData implements IScreen {
	private isShiny = false;

	public toggleShiny(): void {
		this.isShiny = !this.isShiny;
	}

	getHtml(pokemon: IPokemon): string {
		const officialArtwork = pokemon.sprites.other?.["official-artwork"];
		const imgSrc = this.isShiny
			? (officialArtwork?.front_shiny || pokemon.sprites.front_shiny || pokemon.sprites.front_default)
			: (officialArtwork?.front_default || pokemon.sprites.front_default);

		const typeBadges = pokemon.types
			.map((t) => `<span class="type-badge type--${t.type.name}">${t.type.name}</span>`)
			.join("");

		const heightM = (pokemon.height / 10).toFixed(1);
		const weightKg = (pokemon.weight / 10).toFixed(1);

		const imgClass = `pokemon-data__img${this.isShiny ? " pokemon-data__img--shiny" : ""}`;
		const btnClass = `shiny-btn${this.isShiny ? " shiny-btn--active" : ""}`;

		return `
			<div class="pokemon-data">
				<div class="pokemon-data__header">
					<span class="pokemon-data__id">#${String(pokemon.id).padStart(3, "0")}</span>
					<span class="pokemon-data__name">${formatFirstLetterToUppercase(pokemon.name)}</span>
				</div>
				<img class="${imgClass}" src="${imgSrc}" alt="${pokemon.name}">
				<div class="pokemon-data__types">${typeBadges}</div>
				<div class="pokemon-data__info">
					<span>wt: ${weightKg} kg</span>
					<span>ht: ${heightM} m</span>
				</div>
				<button id="toggle__shiny" class="${btnClass}">✨ ${this.isShiny ? "Normal" : "Shiny"}</button>
			</div>
		`;
	}
}
