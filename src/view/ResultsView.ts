import { EventEmitter } from "../core/EventEmitter";
import { IPokemon } from "../model/Pokemon";
import { renderPokemonData, renderPokemonStats } from "./updateViewFunctions";


export const ResultsView = {

    // Declaring avaliables view
    avaliableViews: [renderPokemonData, renderPokemonStats],
    actualView: 0,

    // Functions to execute render the results
    renderView: function (pokemon: IPokemon) {
        ResultsView.avaliableViews[ResultsView.actualView](pokemon);
    },

    renderNextView: function (pokemon: IPokemon) {
        if (ResultsView.actualView < ResultsView.avaliableViews.length) {
            ResultsView.actualView++;
            ResultsView.avaliableViews[ResultsView.actualView](pokemon);
        }
    },

    renderpreviousView: function (pokemon: IPokemon) {
        if (ResultsView.actualView > 0) {
            ResultsView.actualView--;
            ResultsView.avaliableViews[ResultsView.actualView](pokemon);
        }
    },
}