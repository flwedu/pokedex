import { ditto } from "../../util/mock_data";
import { PokemonData } from "./";

describe("Pokemon data screen", () => {
  it("should render the pokemon data", () => {
    const screen = new PokemonData();
    const html = screen.getHtml(ditto);

    expect(html).toMatchSnapshot();
  });
});
