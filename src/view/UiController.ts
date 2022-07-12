import { IPokemon } from "src/model/Pokemon";
import IScreen, { ErrorScreen } from "./screen";

type ScreenList = {
  success: IScreen[];
  error: ErrorScreen;
};

export class UiController {
  private renderedIndex: number;
  private lastIndex: number;
  private pokemon: IPokemon | undefined;

  constructor(
    private readonly uiElement: HTMLDivElement,
    private readonly screenList: ScreenList
  ) {
    this.renderedIndex = 0;
    this.lastIndex = screenList.success.length - 1;
  }

  public getRenderedIndex(): number {
    return this.renderedIndex;
  }

  public getRenderedPokemonId(): number {
    return this.pokemon?.id;
  }

  public renderSuccess(pokemon: IPokemon, id: number = this.renderedIndex) {
    this.pokemon = pokemon;
    this.uiElement.innerHTML = this.screenList.success[id].getHtml(
      this.pokemon
    );
  }

  public renderError(error: Error) {
    this.pokemon = undefined;
    this.uiElement.innerHTML = this.screenList.error.getHtml(error);
  }

  public renderNextSuccess() {
    if (!this.pokemon) return;
    if (this.renderedIndex < this.lastIndex) {
      this.renderedIndex++;
      this.renderSuccess(this.pokemon, this.renderedIndex);
    }
  }

  public renderPreviousSuccess() {
    if (!this.pokemon) return;
    if (this.renderedIndex > 0) {
      this.renderedIndex--;
      this.renderSuccess(this.pokemon, this.renderedIndex);
    }
  }
}
