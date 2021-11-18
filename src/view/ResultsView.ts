import { EventEmitter } from "../core/EventEmitter";
import { getLastSearchedPokemon } from "../index";
import { IPokemon } from "../model/Pokemon";
import { display__data } from "../ui/DomElements";
import { errorWithResponseCode } from "./display/ErrorWithResponseCode";
import { pokemonData } from "./display/PokemonData";
import { pokemonStats } from "./display/PokemonStats";


export const ResultsView = {

    // Declaring avaliables view
    avaliableRenderViewsFunctions: [pokemonData, pokemonStats],
    actualView: 0,

    // Functions to execute render the results
    renderView: function (pokemon: IPokemon) {
        display__data.innerHTML = ResultsView.avaliableRenderViewsFunctions[ResultsView.actualView](pokemon);
        playTransition();
    },

    renderNextView: function (pokemon: IPokemon) {
        if (ResultsView.actualView < ResultsView.avaliableRenderViewsFunctions.length) {
            ResultsView.actualView++;
            ResultsView.renderView(pokemon);
        }
    },

    renderpreviousView: function (pokemon: IPokemon) {
        if (ResultsView.actualView > 0) {
            ResultsView.actualView--;
            ResultsView.renderView(pokemon);
        }
    },
    renderWithError: (response: Response) => {

        display__data.innerHTML = errorWithResponseCode(response);
        playTransition();
    }
}

function playTransition() {
    display__data.classList.add("emtransicao");
    setTimeout(() => display__data.classList.remove("emtransicao"), 1000);

}

EventEmitter.on("nextView", () => {
    if (getLastSearchedPokemon())
        ResultsView.renderNextView(getLastSearchedPokemon());
})

EventEmitter.on("previousView", () => {
    if (getLastSearchedPokemon())
        ResultsView.renderpreviousView(getLastSearchedPokemon());
})