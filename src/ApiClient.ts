import {IPokemon} from "./model/Pokemon";
import {statusErrors} from "./util/custom-errors";
import {SearchMemo} from "./util/SearchMemo";

export class ApiClient {
	private url: string = "https://pokeapi.co/api/v2/pokemon/";
	private memo = new SearchMemo();

	public async get(query: string): Promise<IPokemon> {
		if (this.memo.has(query)) {
			return this.memo.get(query);
		}

		const pokeResponse = await fetch(`${this.url}${query.toLowerCase()}`);

		if (pokeResponse.status !== 200) {
			throw statusErrors[pokeResponse.status] ?? new Error();
		}

		const pokeData = await pokeResponse.json();

		const abilityUrl = pokeData.abilities[0].ability.url;
		const abilityResponse = await fetch(abilityUrl);
		const abilityData = await abilityResponse.json();

		// Merging Pokémon data and ability
		const pokemon: IPokemon = {
			...pokeData,
			ability: {
				...abilityData,
			},
		};

		this.memo.add(query, pokemon);
		this.memo.add(String(pokemon.id), pokemon);

		return pokemon;
	}
}
