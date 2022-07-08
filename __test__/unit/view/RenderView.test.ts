import { ditto } from "../../__mock__/ditto";
import { RenderView } from "../../../src/view/RenderView";

const display = document.createElement("div");
const render = new RenderView(display);
const pokemonMockData = ditto;
const function1 = () => `<div>function1</div>`;
const function2 = () => `<div>function2</div>`;
render.viewFunctions = [function1, function2];

it("Should render the innerHTML of the display HTML Element", async () => {
  await render.renderView(pokemonMockData);

  expect(display.innerHTML).toEqual(function1());
});

it("Should render the innerHTML with the next function data", async () => {
  await render.renderNextView(pokemonMockData);

  expect(display.innerHTML).toEqual(function2());
});

it("Should render the innerHTML of the display HTML Element with previous function data", async () => {
  await render.renderPreviousView(pokemonMockData);

  expect(display.innerHTML).toEqual(function1());
});
