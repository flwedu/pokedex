import { IPokemon } from "../../model/Pokemon";
import { ErrorScreen } from "./ErrorScreen";
import { LoadingScreen } from "./LoadingScreen";
import { PokemonAbilities } from "./PokemonAbilities";
import { PokemonData } from "./PokemonData";
import { PokemonStats } from "./PokemonStats";

export default interface IScreen {
	getHtml(pokemon: IPokemon): string;
}

export { ErrorScreen, LoadingScreen, PokemonAbilities, PokemonData, PokemonStats };
