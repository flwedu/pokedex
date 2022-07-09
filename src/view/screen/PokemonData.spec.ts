import { ditto } from "../../util/mock_data";
import { pokemonData } from "./PokemonData";

describe("Pokemon data screen", () => {
  it("should render the pokemon data", () => {
    const html = pokemonData(ditto);

    expect(html).toMatchSnapshot();
  });
});
