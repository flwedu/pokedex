import { ditto } from "../../src/util/mock_data";

// Mocking input elements
jest
  .spyOn(document, "getElementById")
  .mockReturnValue(document.createElement("input"));

import { app } from "../../src/app";

describe("saveSearch functions", () => {
  it("Should save and get last searched pokemon", () => {
    app.saveSearch(ditto);

    const lastSaved = app.getLastSearchedPokemon();

    expect(lastSaved).toEqual(ditto);
  });
});
