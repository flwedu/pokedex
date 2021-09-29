import View from "./View.js";

const errorImageSrc = "../../assets/error.svg";

const errorMessages = {
  default: "Error",
  404: "No Pokémon found",
  500: "Server Error",
};
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
    return `
        <h2>Error ${response.status}:</h2>
        <p>${errorMessages[response.status] || errorMessages.default}</p>
        <img src=${errorImageSrc}></img>
      `;
  }
}
