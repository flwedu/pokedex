import { IPokemon } from "../model/Pokemon";
import IScreen, { ErrorScreen, LoadingScreen } from "./screen";

type ScreenList = {
	success: IScreen[];
	error: ErrorScreen;
};

export class UiController {
	private renderedIndex: number;
	private lastIndex: number;
	private pokemon: IPokemon | undefined;
	private readonly loadingScreen = new LoadingScreen();

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

	public getLastPokemon(): IPokemon | undefined {
		return this.pokemon;
	}

	public renderLoading(): void {
		this.uiElement.innerHTML = this.loadingScreen.getHtml();
	}

	public renderSuccess(pokemon: IPokemon, id: number = this.renderedIndex): void {
		this.pokemon = pokemon;
		this.renderedIndex = id;
		this.uiElement.innerHTML = this.screenList.success[id].getHtml(this.pokemon);
	}

	public renderError(error: Error): void {
		this.pokemon = undefined;
		this.uiElement.innerHTML = this.screenList.error.getHtml(error);
	}

	public renderNextSuccess(): void {
		if (!this.pokemon) return;
		if (this.renderedIndex < this.lastIndex) {
			this.renderedIndex++;
			this.uiElement.innerHTML = this.screenList.success[this.renderedIndex].getHtml(this.pokemon);
		}
	}

	public renderPreviousSuccess(): void {
		if (!this.pokemon) return;
		if (this.renderedIndex > 0) {
			this.renderedIndex--;
			this.uiElement.innerHTML = this.screenList.success[this.renderedIndex].getHtml(this.pokemon);
		}
	}
}
