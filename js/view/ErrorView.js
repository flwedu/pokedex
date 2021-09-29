import { errorMessageWithResponseCode } from "../util/ResponseDisplayMessages.js";
import View from "./View.js";

export default class ErrorView extends View {
  /**
   *
   * @param {Response} response
   */
  update(response) {
    this._resultsHtmlElement.innerHTML = this.template(response);
  }

  /**
   *
   * @param {Response} response
   * @returns {string} literal string.
   */
  template(response) {
    return errorMessageWithResponseCode(response);
  }
}
