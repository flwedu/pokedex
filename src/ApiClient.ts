import { MainClient, type Ability } from "pokenode-ts";
import { IPokemon } from "./model/Pokemon";
import { statusErrors } from "./util/custom-errors";
import { SearchMemo } from "./util/SearchMemo";

export class ApiClient {
	private client = new MainClient();
	private memo = new SearchMemo();

	public async get(query: string): Promise<IPokemon> {
		const cached = this.memo.get(query);
		if (cached) return cached;

		try {
			const isNumeric = /^\d+$/.test(query);
			const pokeData = isNumeric
				? await this.client.pokemon.getPokemonById(Number(query))
				: await this.client.pokemon.getPokemonByName(query.toLowerCase());

			const abilityDetails: Ability[] = await Promise.all(
				pokeData.abilities
					.filter((a) => a?.ability?.name)
					.map((a) => this.client.pokemon.getAbilityByName(a.ability.name))
			);

			const pokemon: IPokemon = {
				...(pokeData as unknown as IPokemon),
				ability: abilityDetails[0],
				abilityDetails,
			};

			this.memo.add(query, pokemon);
			this.memo.add(String(pokemon.id), pokemon);

			return pokemon;
		} catch (error: unknown) {
			const status = (error as { response?: { status?: number } }).response?.status;
			throw statusErrors[status ?? 0] ?? error;
		}
	}

	public async getTypePokemons(typeName: string): Promise<string[]> {
		const typeData = await this.client.pokemon.getTypeByName(typeName);
		return typeData.pokemon.map((p) => p.pokemon.name);
	}
}
