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
			`"<input type="button" class="dot" id="dot__0"><input type="button" class="dot" id="dot__1"><input type="button" class="dot" id="dot__2">"`
		);
	});

	test("changeActiveNavigationDot() should add the active class to the correct dot", () => {
		const divElement = document.createElement("div");

		const uiFeatures = new UIFeatures();

		uiFeatures.initNavigationDots(divElement, successScreen);
		uiFeatures.changeActiveNavigationDot(1);

		expect(divElement.innerHTML).toMatchInlineSnapshot(
			`"<input type="button" class="dot" id="dot__0"><input type="button" class="dot active" id="dot__1"><input type="button" class="dot" id="dot__2">"`
		);
	});

	test("initCombobox() should store references without throwing", () => {
		const dropdown = document.createElement("div");
		const input = document.createElement("input");

		const uiFeatures = new UIFeatures();
		uiFeatures.initCombobox(dropdown, input);

		expect(uiFeatures.isComboboxOpen()).toBe(false);
	});

	test("openCombobox() with names should render suggestion items after debounce", () => {
		vi.useFakeTimers();
		const dropdown = document.createElement("div");
		const input = document.createElement("input");

		const uiFeatures = new UIFeatures();
		uiFeatures.initCombobox(dropdown, input);
		uiFeatures.setNames(["bulbasaur", "charmander"]);
		uiFeatures.openCombobox("bul");

		vi.runAllTimers();
		vi.useRealTimers();

		expect(dropdown.querySelectorAll(".combobox__item").length).toBe(1);
		expect(dropdown.querySelector(".combobox__item-label")?.textContent).toBe("bulbasaur");
	});
});
