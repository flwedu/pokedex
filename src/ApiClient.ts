import { IPokemon } from "./model/Pokemon";

export class ApiClient {
  private url: string = "https://pokeapi.co/api/v2/pokemon/";

  public async get(query: string): Promise<IPokemon> {
    try {
      const pokeResponse = await fetch(`${this.url}${query}`);
      const pokeData = await pokeResponse.json();

      const abilityUrl = pokeData.abilities[0].ability.url;
      const abilityResponse = await fetch(abilityUrl);
      const abilityData = await abilityResponse.json();

      const pokemon: IPokemon = {
        ...pokeData,
        ability: {
          ...abilityData,
        },
      };

      return pokemon;
    } catch (error) {
      return error;
    }
  }
}
