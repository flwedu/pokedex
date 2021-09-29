import View from "../../js/view/View.js";

describe("Creating a View component", () => {
  test.skip("should create a View receiving a CSS selector", () => {
    const htmlElement = document.createElement("div");
    htmlElement.classList.add("results");

    const view = new View(".results");

    expect(view).toBeTruthy();
    expect(view).toBeInstanceOf(View);

    expect(view.elemento).toBeTruthy();
  });

  test("should create a View receiving a HtmlElement", () => {
    const htmlElement = document.createElement("div");
    const view = new View(htmlElement);

    expect(view).toBeTruthy();
    expect(view).toBeInstanceOf(View);

    expect(view.elemento).toBeTruthy();
  });
});
