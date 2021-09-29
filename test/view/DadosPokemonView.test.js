import Pokemon from "../../js/model/Pokemon.js";
import { sucessTextWithPokemonData } from "../../js/util/ResponseDisplayMessages.js";
import DadosPokemonView from "../../js/view/DadosPokemonView.js";
import { dittoData } from "../TestData.js";

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
    const htmlWithExpectedText = document.createElement("div");

    const view = new DadosPokemonView(htmlElement);

    const testPokemon = new Pokemon(dittoData);

    view.update(testPokemon);

    htmlWithExpectedText.innerHTML = sucessTextWithPokemonData(testPokemon);
    expect(htmlElement.innerHTML).toBe(htmlWithExpectedText.innerHTML);
  });
});
