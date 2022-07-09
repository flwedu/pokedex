import { ditto } from "../../../src/util/mock_data";
import { RenderView } from "../../../src/view/RenderView";
import { pokemonData, pokemonStats } from "../../../src/view/screen";

const display = document.createElement("div");
const render = new RenderView(display);
const view1 = pokemonData(ditto);
const view2 = pokemonStats(ditto);
render.viewFunctions = [pokemonData, pokemonStats];

it("Should render the innerHTML of the display HTML Element", async () => {
  await render.renderView(ditto);

  setTimeout(() => {
    expect(display).toMatchInlineSnapshot(view1);
  }, 1000);
});

it("Should render the innerHTML with the next function data", async () => {
  await render.renderNextView(ditto);

  setTimeout(() => {
    expect(display).toMatchInlineSnapshot(view2);
  }, 1000);
});

it("Should render the innerHTML of the display HTML Element with previous function data", async () => {
  await render.renderPreviousView(ditto);

  setTimeout(() => {
    expect(display).toMatchInlineSnapshot(view1);
  }, 1000);
});
