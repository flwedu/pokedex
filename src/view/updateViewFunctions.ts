import { IPokemon } from "../model/Pokemon";
import { display__data } from "../ui/DomElements";
import { errorMessageWithResponseCode, sucessTextWithPokemonData, sucessTextWithPokemonStats } from "../util/ResponseDisplayMessages";

export const renderPokemonData = (pokemon: IPokemon) => {

    display__data.innerHTML = sucessTextWithPokemonData(pokemon);
}

export const renderPokemonStats = (pokemon: IPokemon) => {

    display__data.innerHTML = sucessTextWithPokemonStats(pokemon);
}

export const renderWithError = (response: Response) => {

    display__data.innerHTML = errorMessageWithResponseCode(response);
}