import { ditto } from "../../util/mock_data";
import { pokemonStats } from "./PokemonStats";

describe("Pokemon stats screen", () => {
  it("should render the pokemon stats", () => {
    const html = pokemonStats(ditto);

    expect(html).toMatchSnapshot();
  });
});
