import { IPokemon } from "../model/Pokemon";
import { display__data } from "../ui/DomElements";
import { errorMessageWithResponseCode, sucessTextWithPokemonData, sucessTextWithPokemonStats } from "../util/ResponseDisplayMessages";

export const renderPokemonData = (pokemon: IPokemon) => {

    display__data.innerHTML = sucessTextWithPokemonData(pokemon);
    playTransition();
}

export const renderPokemonStats = (pokemon: IPokemon) => {

    display__data.innerHTML = sucessTextWithPokemonStats(pokemon);
    playTransition();
}

export const renderWithError = (response: Response) => {

    display__data.innerHTML = errorMessageWithResponseCode(response);
    playTransition();
}

function playTransition() {
    display__data.classList.add("emtransicao");
    setTimeout(() => display__data.classList.remove("emtransicao"), 1000);

}