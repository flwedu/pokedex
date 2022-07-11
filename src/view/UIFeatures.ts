import IScreen from "./screen";

export class UIFeatures {
  public dots: HTMLInputElement[];
  private pokemonNames: string[] = [];
  private suggestionDataList: HTMLDataListElement;

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
    if (id > -1) this.dots[id].classList.add("active");
  }

  initNameSuggestion(htmlEl: HTMLDataListElement) {
    this.suggestionDataList = htmlEl;

    fetch("../../assets/data/pokemon_names.json")
      .then((res) => res.json())
      .then((data: { list: { id: string; name: string }[] }) => {
        this.pokemonNames = data.list.map((pokemon) => pokemon.name);
      });
  }

  updateNameSuggestion(query: string) {
    const renderOption = (name: string) => {
      const option = document.createElement("option");
      option.value = name;
      this.suggestionDataList.appendChild(option);
    };

    this.suggestionDataList.innerHTML = "";
    if (query.length > 0) {
      const filteredNames = this.pokemonNames
        .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
      filteredNames.forEach(renderOption);
    }
  }
}
