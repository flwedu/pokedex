import IScreen from ".";
import { IPokemon } from "../../model/Pokemon";
import { formatFirstLetterToUppercase } from "../../util/text";

const FAVORITES_KEY = "pokedex_favorites";

function getFavorites(): Set<number> {
	try {
		const stored = localStorage.getItem(FAVORITES_KEY);
		return new Set(stored ? (JSON.parse(stored) as number[]) : []);
	} catch {
		return new Set();
	}
}

export function toggleFavorite(id: number): void {
	const favorites = getFavorites();
	if (favorites.has(id)) {
		favorites.delete(id);
	} else {
		favorites.add(id);
	}
	try {
		localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
	} catch {
		// localStorage not available
	}
}

export function isFavorite(id: number): boolean {
	return getFavorites().has(id);
}

export class PokemonData implements IScreen {
	private isShiny = false;

	public toggleShiny(): void {
		this.isShiny = !this.isShiny;
	}

	getHtml(pokemon: IPokemon): string {
		const officialArtwork = pokemon.sprites.other?.["official-artwork"];
		const imgSrc = this.isShiny
			? (officialArtwork?.front_shiny ?? pokemon.sprites.front_shiny ?? pokemon.sprites.front_default)
			: (officialArtwork?.front_default ?? pokemon.sprites.front_default);

		const typeBadges = pokemon.types
			.map(
				(t) =>
					`<span class="type-badge type--${t.type.name}" data-type="${t.type.name}">${t.type.name}</span>`
			)
			.join("");

		const heightM = (pokemon.height / 10).toFixed(1);
		const weightKg = (pokemon.weight / 10).toFixed(1);

		const imgClass = `pokemon-data__img${this.isShiny ? " pokemon-data__img--shiny" : ""}`;
		const shinyBtnClass = `shiny-btn${this.isShiny ? " shiny-btn--active" : ""}`;
		const favBtnClass = `fav-btn${isFavorite(pokemon.id) ? " fav-btn--active" : ""}`;

		return `
			<div class="pokemon-data">
				<div class="pokemon-data__header">
					<span class="pokemon-data__id">#${String(pokemon.id).padStart(3, "0")}</span>
					<span class="pokemon-data__name">${formatFirstLetterToUppercase(pokemon.name)}</span>
					<button id="toggle__favorite" class="${favBtnClass}" title="Favorite (F)">★</button>
				</div>
				<img class="${imgClass}" src="${imgSrc}" alt="${pokemon.name}">
				<div class="pokemon-data__types">${typeBadges}</div>
				<div class="pokemon-data__info">
					<span>wt: ${weightKg} kg</span>
					<span>ht: ${heightM} m</span>
				</div>
				<button id="toggle__shiny" class="${shinyBtnClass}" title="Shiny (S)">✨ ${this.isShiny ? "Normal" : "Shiny"}</button>
			</div>
		`;
	}
}
