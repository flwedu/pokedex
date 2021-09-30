import ErrorView from "../../js/view/ErrorView.js";
import { errorMessageWithResponseCode } from "../../js/util/ResponseDisplayMessages.js";

const fakeError404Response = {
  status: 404,
};

const fakeError500Response = {
  status: 500,
};

describe("Should show the correct message", () => {
  test("inner html of display element with error 404", () => {
    const htmlDisplayElement = document.createElement("div");
    const htmlWithExpectedText = document.createElement("div");

    const view = new ErrorView(htmlDisplayElement);

    view.update(fakeError404Response);
    htmlWithExpectedText.innerHTML =
      errorMessageWithResponseCode(fakeError404Response);

    expect(view._resultsHtmlElement).toBe(htmlDisplayElement.innerHTML);
  });

  test("inner html of display element with error 500", () => {
    const htmlDisplayElement = document.createElement("div");
    const htmlWithExpectedText = document.createElement("div");

    const view = new ErrorView(htmlDisplayElement);

    view.update(fakeError500Response);
    htmlWithExpectedText.innerHTML =
      errorMessageWithResponseCode(fakeError500Response);

    expect(view._resultsHtmlElement).toBe(htmlDisplayElement.innerHTML);
  });
});
