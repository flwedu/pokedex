import Pokemon from "../../js/model/Pokemon.js";
import DadosPokemonView from "../../js/view/DadosPokemonView.js";
import { dittoData, HtmlWithDittoData } from "../TestData.js";

describe("Should create a View with pokemon data", () => {
  test("Should create an View object", () => {
    const htmlElement = document.createElement("div");
    const view = new DadosPokemonView(htmlElement);

    expect(view).toBeInstanceOf(DadosPokemonView);
    expect(view._resultsHtmlElement).toBeTruthy();
  });
});

describe("Should render the correct pokemon data", () => {
  test("InnerHTML of View Element is correct", () => {
    const htmlElement = document.createElement("div");
    const view = new DadosPokemonView(htmlElement);

    view.update(new Pokemon(dittoData));

    expect(htmlElement.innerHTML).toBe(HtmlWithDittoData);
  });
});
