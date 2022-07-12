import { PokemonStats } from "./screen";
import { UIFeatures } from "./UIFeatures";

describe("UI Features tests", () => {
  const successScreen = [
    new PokemonStats(),
    new PokemonStats(),
    new PokemonStats(),
  ];
  test("initNavigationDots() should render the correct innerHTML to a element", () => {
    const divElement = document.createElement("div");

    const uiFeatures = new UIFeatures();

    uiFeatures.initNavigationDots(divElement, successScreen);

    expect(divElement.innerHTML).toMatchInlineSnapshot(
      `"<input type=\\"button\\" class=\\"dot\\" id=\\"dot__0\\"><input type=\\"button\\" class=\\"dot\\" id=\\"dot__1\\"><input type=\\"button\\" class=\\"dot\\" id=\\"dot__2\\">"`
    );
  });

  test("changeActiveNavigationDot() should add the active class to the correct dot", () => {
    const divElement = document.createElement("div");

    const uiFeatures = new UIFeatures();

    uiFeatures.initNavigationDots(divElement, successScreen);
    uiFeatures.changeActiveNavigationDot(1);

    expect(divElement.innerHTML).toMatchInlineSnapshot(
      `"<input type=\\"button\\" class=\\"dot\\" id=\\"dot__0\\"><input type=\\"button\\" class=\\"dot active\\" id=\\"dot__1\\"><input type=\\"button\\" class=\\"dot\\" id=\\"dot__2\\">"`
    );
  });

  test("initNameSuggestion() should not render any <option> element", () => {
    const dataListElement = document.createElement("datalist");

    const uiFeatures = new UIFeatures();

    uiFeatures.initNameSuggestion(dataListElement, ["pikachu", "charmander"]);

    expect(dataListElement.innerHTML).toMatchInlineSnapshot(`""`);
  });

  test("updateNameSuggestion() should render the correct innerHTML to a element", () => {
    const dataListElement = document.createElement("datalist");

    const uiFeatures = new UIFeatures();

    uiFeatures.initNameSuggestion(dataListElement, ["bulbasaur", "charmander"]);
    uiFeatures.updateNameSuggestion("bul");

    expect(dataListElement.innerHTML).toMatchInlineSnapshot(
      `"<option value=\\"bulbasaur\\"></option>"`
    );
  });
});
