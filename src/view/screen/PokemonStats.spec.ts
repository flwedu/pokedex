import { ditto } from "../../util/mock_data";
import { PokemonStats } from "./";

describe("Pokemon stats screen", () => {
  it("should render the pokemon stats", () => {
    const screen = new PokemonStats();
    const html = screen.getHtml(ditto);

    expect(html).toMatchSnapshot();
  });
});
