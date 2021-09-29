import View from "../../js/view/View.js";

describe("Creating a View component", () => {
  test("should create a View receiving a HtmlElement", () => {
    const htmlElement = document.createElement("div");
    const view = new View(htmlElement);

    expect(view).toBeTruthy();
    expect(view).toBeInstanceOf(View);

    expect(view._resultsHtmlElement).toBeTruthy();
  });
});
