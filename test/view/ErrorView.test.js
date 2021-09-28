import ErrorView from "../../js/view/ErrorView.js";

test("Should create an 404 error view message", () => {
  let elementoHtml = new HTMLDivElement();
  let errorView = new ErrorView(elementoHtml);

  errorView.update({ status: 404 });

  expect(elementoHtml.innerHTML.toString().includes("404"));
});
