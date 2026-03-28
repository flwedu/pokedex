import { IPokemon } from "./model/Pokemon";
import { IAbility } from "./model/Ability";
import { statusErrors } from "./util/custom-errors";
import { SearchMemo } from "./util/SearchMemo";

export class ApiClient {
	private url = "https://pokeapi.co/api/v2/pokemon/";
	private memo = new SearchMemo();

	public async get(query: string): Promise<IPokemon> {
		const cached = this.memo.get(query);
		if (cached) return cached;

		const pokeResponse = await fetch(`${this.url}${query.toLowerCase()}`);

		if (pokeResponse.status !== 200) {
			throw statusErrors[pokeResponse.status] ?? new Error();
		}

		const pokeData = await pokeResponse.json();

		const abilityEntries: Array<{ ability: { name: string; url: string }; is_hidden: boolean; slot: number }> =
			pokeData.abilities ?? [];

		const abilityDetails: IAbility[] = await Promise.all(
			abilityEntries
				.filter((a) => a?.ability?.url)
				.map(async (a) => {
					const res = await fetch(a.ability.url);
					return res.json() as Promise<IAbility>;
				})
		);

		const pokemon: IPokemon = {
			...pokeData,
			ability: abilityDetails[0],
			abilityDetails,
		};

		this.memo.add(query, pokemon);
		this.memo.add(String(pokemon.id), pokemon);

		return pokemon;
	}
}
