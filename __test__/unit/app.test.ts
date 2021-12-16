import { IPokemon } from "../../src/model/Pokemon";

// Mocking input elements
jest.spyOn(document, "getElementById").mockReturnValue(document.createElement("input"))

import { app } from "../../src/app";

const pokemonData: IPokemon = {
    id: 1,
    name: "bulbassaur",
    generation: {
        name: "",
        url: ""
    },
    sprites: {
        front_default: "",
        back_default: ""
    },
    weight: "",
    stats: [{
        stat: {
            name: "attack",
            url: null
        },
        base_stat: 0,
        effort: 0
    }],
    types: [{
        slot: 0,
        type: {
            name: "grass",
            url: null
        }
    }],
    abilities: [{
        ability: {
            name: "grass",
            url: null
        }, is_hidden: true, slot: 0
    }]
}

describe("saveSearch functions", () => {

    it("Should save and get last searched pokemon", () => {

        app.saveSearch(pokemonData);

        const lastSaved = app.getLastSearchedPokemon();

        expect(lastSaved).toEqual(pokemonData);
    })

})