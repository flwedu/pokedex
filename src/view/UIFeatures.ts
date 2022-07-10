import IScreen from "./screen";

export class UIFeatures {
  public dots: HTMLInputElement[];

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
}
