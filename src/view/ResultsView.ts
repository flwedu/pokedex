import { app } from "../app";
import { EventEmitter } from "../core/EventEmitter";
import { IPokemon } from "../model/Pokemon";
import { display__data } from "../ui/DomElements";
import { errorWithResponseCode } from "./display/ErrorWithResponseCode";
import { pokemonAbilities } from "./display/PokemonAbilities";
import { pokemonData } from "./display/PokemonData";
import { pokemonStats } from "./display/PokemonStats";


export const ResultsView = {

    // Declaring avaliables view
    avaliableRenderViewsFunctions: [pokemonData, pokemonStats, pokemonAbilities],
    actualView: 0,

    // Functions to execute render the results
    renderView: async function (pokemon: IPokemon) {
        display__data.innerHTML = await ResultsView.avaliableRenderViewsFunctions[ResultsView.actualView](pokemon);
        playTransition();
    },

    renderNextView: function (pokemon: IPokemon) {
        if (ResultsView.actualView < ResultsView.avaliableRenderViewsFunctions.length - 1) {
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
    if (app.getLastSearchedPokemon())
        ResultsView.renderNextView(app.getLastSearchedPokemon());
})

EventEmitter.on("previousView", () => {
    if (app.getLastSearchedPokemon())
        ResultsView.renderpreviousView(app.getLastSearchedPokemon());
})