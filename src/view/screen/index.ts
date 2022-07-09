import { IPokemon } from "src/model/Pokemon";
import { ErrorScreen } from "./ErrorScreen";
import { PokemonAbilities } from "./PokemonAbilities";
import { PokemonData } from "./PokemonData";
import { PokemonStats } from "./PokemonStats";

export default interface IScreen {
  getHtml(pokemon: IPokemon): string;
}

export { ErrorScreen, PokemonAbilities, PokemonData, PokemonStats };
