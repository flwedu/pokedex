import IScreen from "./screen";

const HISTORY_KEY = "pokedex_search_history";
const MAX_HISTORY = 5;

function debounce(fn: (query: string) => void, delay: number): (query: string) => void {
	let timer: ReturnType<typeof setTimeout> | undefined;
	return (query: string) => {
		clearTimeout(timer);
		timer = setTimeout(() => fn(query), delay);
	};
}

export class UIFeatures {
	public dots: HTMLInputElement[] = [];
	private pokemonNames: string[] = [];
	private dropdown!: HTMLDivElement;
	private input!: HTMLInputElement;
	private activeIndex = -1;
	private currentItems: string[] = [];
	private debouncedBuild: (query: string) => void;

	constructor() {
		this.debouncedBuild = debounce(this._buildDropdown.bind(this), 150);
	}

	// ── Navigation dots ───────────────────────────────────────────────────────

	initNavigationDots(htmlEl: HTMLDivElement, successScreen: IScreen[]) {
		this.dots = successScreen.map((_, index) => {
			const dot = document.createElement("input");
			dot.type = "button";
			dot.className = "dot";
			dot.id = `dot__${index}`;
			htmlEl.appendChild(dot);
			return dot;
		});
	}

	changeActiveNavigationDot(id: number) {
		this.dots.forEach((dot) => dot.classList.remove("active"));
		if (id > -1) this.dots[id]?.classList.add("active");
	}

	// ── Combobox ─────────────────────────────────────────────────────────────

	initCombobox(dropdown: HTMLDivElement, input: HTMLInputElement) {
		this.dropdown = dropdown;
		this.input = input;
		this.dropdown.style.display = "none";
	}

	setNames(names: string[]) {
		this.pokemonNames = names;
	}

	openCombobox(query: string) {
		if (!this.dropdown) return;
		this.debouncedBuild(query);
	}

	closeCombobox() {
		if (!this.dropdown) return;
		this.dropdown.style.display = "none";
		this.activeIndex = -1;
		this.currentItems = [];
	}

	isComboboxOpen(): boolean {
		return !!this.dropdown && this.dropdown.style.display !== "none";
	}

	navigateCombobox(direction: "up" | "down") {
		if (!this.isComboboxOpen() || this.currentItems.length === 0) return;
		const len = this.currentItems.length;
		if (direction === "down") {
			this.activeIndex = Math.min(this.activeIndex + 1, len - 1);
		} else {
			this.activeIndex = Math.max(this.activeIndex - 1, -1);
		}
		this._highlightActive();
	}

	confirmComboboxSelection(): string | null {
		if (this.activeIndex >= 0 && this.activeIndex < this.currentItems.length) {
			return this.currentItems[this.activeIndex];
		}
		return null;
	}

	// ── History ───────────────────────────────────────────────────────────────

	addToHistory(query: string) {
		const normalized = query.toLowerCase().trim();
		if (!normalized) return;
		const history = this.getHistory().filter((h) => h !== normalized);
		history.unshift(normalized);
		try {
			localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));
		} catch {
			// localStorage not available (e.g. tests)
		}
	}

	// ── Private ───────────────────────────────────────────────────────────────

	private _buildDropdown(query: string) {
		this.activeIndex = -1;

		type ItemType = "history" | "suggestion";
		const items: Array<{ label: string; type: ItemType }> = [];

		const history = this.getHistory();

		if (query.length === 0) {
			history.forEach((h) => items.push({ label: h, type: "history" }));
		} else {
			const q = query.toLowerCase();
			// History matches first
			history
				.filter((h) => h.includes(q))
				.forEach((h) => items.push({ label: h, type: "history" }));
			// Name suggestions: startsWith first, then contains
			const startsWith = this.pokemonNames.filter((n) =>
				n.toLowerCase().startsWith(q)
			);
			const contains = this.pokemonNames.filter(
				(n) => n.toLowerCase().includes(q) && !n.toLowerCase().startsWith(q)
			);
			[...startsWith, ...contains]
				.slice(0, 6)
				.forEach((n) => items.push({ label: n, type: "suggestion" }));
		}

		const sliced = items.slice(0, 7);

		if (sliced.length === 0) {
			this.dropdown.style.display = "none";
			this.currentItems = [];
			return;
		}

		this.currentItems = sliced.map((i) => i.label);
		this.dropdown.innerHTML = "";

		sliced.forEach((item, index) => {
			const el = document.createElement("div");
			el.className = `combobox__item combobox__item--${item.type}`;
			el.setAttribute("role", "option");

			const icon = document.createElement("span");
			icon.className = "combobox__item-icon";
			icon.textContent = item.type === "history" ? "⏱" : "◆";

			const label = document.createElement("span");
			label.className = "combobox__item-label";
			label.textContent = item.label;

			el.appendChild(icon);
			el.appendChild(label);

			el.addEventListener("mousedown", (e) => {
				e.preventDefault(); // prevent input blur
				this.activeIndex = index;
				this.input.value = item.label;
				this.closeCombobox();
				this.input.dispatchEvent(new CustomEvent("combobox:select", { bubbles: true }));
			});

			this.dropdown.appendChild(el);
		});

		this.dropdown.style.display = "block";
	}

	private _highlightActive() {
		const items = this.dropdown.querySelectorAll<HTMLDivElement>(".combobox__item");
		items.forEach((el, i) => {
			el.classList.toggle("combobox__item--active", i === this.activeIndex);
		});
		if (this.activeIndex >= 0 && this.activeIndex < this.currentItems.length) {
			this.input.value = this.currentItems[this.activeIndex];
		} else if (this.activeIndex === -1) {
			// Reset to what was originally typed — handled by caller
		}
	}

	private getHistory(): string[] {
		try {
			return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? "[]");
		} catch {
			return [];
		}
	}
}
