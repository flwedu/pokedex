import { ditto } from "../util/mock_data";
import {
  PokemonData,
  PokemonStats,
  PokemonAbilities,
  ErrorScreen,
} from "./screen";
import { UiController } from "./UiController";

describe("UI Controller tests", () => {
  const mockUiElement = document.createElement("div");
  const screenList = {
    success: [new PokemonData(), new PokemonStats(), new PokemonAbilities()],
    error: new ErrorScreen(),
  };

  const pokemon = ditto;

  it("should render the first screen", () => {
    const uiController = new UiController(mockUiElement, screenList);
    uiController.renderSuccess(pokemon);

    expect(mockUiElement.innerHTML).toEqual(
      screenList.success[0].getHtml(pokemon)
    );
  });

  it("should render the second screen", () => {
    const uiController = new UiController(mockUiElement, screenList);
    uiController.renderSuccess(pokemon);
    uiController.renderNextSuccess();

    expect(mockUiElement.innerHTML).toEqual(
      screenList.success[1].getHtml(pokemon)
    );
  });

  it("should render the first screen again", () => {
    const uiController = new UiController(mockUiElement, screenList);
    uiController.renderSuccess(pokemon);
    uiController.renderPreviousSuccess();

    expect(mockUiElement.innerHTML).toEqual(
      screenList.success[0].getHtml(pokemon)
    );
  });
});
