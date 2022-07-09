import { IPokemon } from "./model/Pokemon";
import { statusErrors } from "./util/custom-errors";

export class ApiClient {
  private url: string = "https://pokeapi.co/api/v2/pokemon/";

  public async get(query: string): Promise<IPokemon> {
    const pokeResponse = await fetch(`${this.url}${query}`);

    if (pokeResponse.status !== 200) {
      const error = statusErrors[pokeResponse.status] ?? new Error();
      throw error;
    }

    const pokeData = await pokeResponse.json();

    const abilityUrl = pokeData.abilities[0].ability.url;
    const abilityResponse = await fetch(abilityUrl);
    const abilityData = await abilityResponse.json();

    // Merging pokemon data and ability
    const pokemon: IPokemon = {
      ...pokeData,
      ability: {
        ...abilityData,
      },
    };

    return pokemon;
  }
}
