import Pokemon from "../../js/model/Pokemon.js";
import { sucessTextWithPokemonStats } from "../../js/util/ResponseDisplayMessages.js";
import StatsPokemonView from "../../js/view/StatsPokemonView.js";
import { dittoData } from "../TestData.js";

describe("Should create a View with pokemon stats data", () => {
  test("Should create an View object", () => {
    const htmlElement = document.createElement("div");
    const view = new StatsPokemonView(htmlElement);

    expect(view).toBeInstanceOf(StatsPokemonView);
    expect(view._resultsHtmlElement).toBeTruthy();
  });
});

describe("Should render the correct pokemon stats data", () => {
  test("InnerHTML of View Element is correct", () => {
    const htmlElement = document.createElement("div");
    const htmlWithExpectedText = document.createElement("div");

    const view = new StatsPokemonView(htmlElement);

    const testPokemon = new Pokemon(dittoData);

    view.update(testPokemon);

    htmlWithExpectedText.innerHTML = sucessTextWithPokemonStats(testPokemon);
    expect(htmlElement.innerHTML).toBe(htmlWithExpectedText.innerHTML);
  });
});
