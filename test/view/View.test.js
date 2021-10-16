import {
  errorMessageWithResponseCode,
  sucessTextWithPokemonData,
  sucessTextWithPokemonStats,
} from "../../js/util/ResponseDisplayMessages.js";
import Pokemon from "../../js/model/Pokemon.js";
import View from "../../js/view/View.js";
import { dittoData } from "../TestData.js";

const pokemon = new Pokemon(dittoData);

describe("Creating a Sucess Pokemon data component", () => {
  const htmlElement = document.createElement("div");
  const view = new View(htmlElement, sucessTextWithPokemonData);

  test("should create a View receiving a HtmlElement", () => {
    expect(view).toBeTruthy();
    expect(view).toBeInstanceOf(View);

    expect(view._resultsHtmlElement).toBeTruthy();
  });

  test("Should return the correct data", () => {
    view.update(pokemon);

    const expectedInnerHTML = sucessTextWithPokemonData(pokemon);

    expect(view._resultsHtmlElement.innerHTML).toBe(expectedInnerHTML);
  });
});

describe("Creating a Sucess Pokemon stats data component", () => {
  const htmlElement = document.createElement("div");
  const view = new View(htmlElement, sucessTextWithPokemonStats);

  test("Should return the correct stats data", () => {
    view.update(pokemon);

    const expectedInnerHTML = sucessTextWithPokemonStats(pokemon);

    expect(view._resultsHtmlElement.innerHTML).toBe(expectedInnerHTML);
  });
});

describe("Creating a error view stats component", () => {
  const htmlElement = document.createElement("div");
  const view = new View(htmlElement, errorMessageWithResponseCode);

  test("Should return an 404 error message", () => {
    const response = { status: 404 };
    const expectedInnerHTML = errorMessageWithResponseCode(response);
    view.update(response);

    expect(view._resultsHtmlElement.innerHTML).toBe(expectedInnerHTML);
  });

  test("Should return an 500 error message", () => {
    const response = { status: 500 };
    const expectedInnerHTML = errorMessageWithResponseCode(response);
    view.update(response);

    expect(view._resultsHtmlElement.innerHTML).toBe(expectedInnerHTML);
  });
});
