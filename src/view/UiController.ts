import { IPokemon } from "src/model/Pokemon";
import IScreen, { ErrorScreen } from "./screen";

type ScreenList = {
  success: IScreen[];
  error: ErrorScreen;
};

export class UiController {
  private renderedIndex: number;
  private lastIndex: number;

  constructor(
    private readonly uiElement: HTMLDivElement,
    private readonly screenList: ScreenList
  ) {
    this.renderedIndex = 0;
    this.lastIndex = screenList.success.length - 1;
  }

  public renderSuccess(pokemon: IPokemon, id: number = this.renderedIndex) {
    this.uiElement.innerHTML = this.screenList.success[id].getHtml(pokemon);
  }

  public renderError(response: Response) {
    this.uiElement.innerHTML = this.screenList.error.getHtml(response);
  }

  public renderNextSuccess(pokemon: IPokemon) {
    if (this.renderedIndex < this.lastIndex) {
      this.renderedIndex++;
      this.renderSuccess(pokemon, this.renderedIndex);
    }
  }

  public renderPreviousSuccess(pokemon: IPokemon) {
    if (this.renderedIndex > 0) {
      this.renderedIndex--;
      this.renderSuccess(pokemon, this.renderedIndex);
    }
  }
}
