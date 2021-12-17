import { IPokemon } from "../../src/model/Pokemon";
import { ditto } from "../__mock__/ditto";

// Mocking input elements
jest.spyOn(document, "getElementById").mockReturnValue(document.createElement("input"))

import { app } from "../../src/app";

const pokemonData: IPokemon = ditto;

describe("saveSearch functions", () => {

    it("Should save and get last searched pokemon", () => {

        app.saveSearch(pokemonData);

        const lastSaved = app.getLastSearchedPokemon();

        expect(lastSaved).toEqual(pokemonData);
    })

})