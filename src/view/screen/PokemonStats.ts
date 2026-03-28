import IScreen from ".";
import { IPokemon } from "../../model/Pokemon";

const MAX_STAT = 255;

function statColor(value: number): string {
	if (value < 50) return "#cc3333";
	if (value < 80) return "#cc9933";
	if (value < 110) return "#4a9e3f";
	return "#00d4cc";
}

function formatStatName(name: string): string {
	return name
		.replace("special-attack", "sp.atk")
		.replace("special-defense", "sp.def")
		.replace("attack", "atk")
		.replace("defense", "def")
		.replace("speed", "spd");
}

export class PokemonStats implements IScreen {
	getHtml(pokemon: IPokemon): string {
		const statRows = pokemon.stats
			.map((stat) => {
				const pct = Math.round((stat.base_stat / MAX_STAT) * 100);
				const color = statColor(stat.base_stat);
				return `
					<div class="stat-row">
						<span class="stat-name">${formatStatName(stat.stat.name)}</span>
						<div class="stat-bar">
							<div class="stat-fill" style="width:${pct}%;background:${color};box-shadow:0 0 4px ${color}88"></div>
						</div>
						<span class="stat-value" style="color:${color}">${stat.base_stat}</span>
					</div>
				`;
			})
			.join("");

		return `
			<div class="pokemon-stats">
				<span class="stats-title">Base Stats</span>
				<div class="stats-list">${statRows}</div>
			</div>
		`;
	}
}
