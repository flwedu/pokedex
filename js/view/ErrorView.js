import View from "./View.js";

const errorImageSrc = "../../assets/error.svg";

const errorMessages = {
  default: "Error",
  404: "No Pokémon found",
  500: "Server Error",
};
export default class ErrorView extends View {
  update(Response) {
    this._resultsHtmlElement.innerHTML = this.template(Response);
  }

  template(Response) {
    return `
        <h2>Erro:</h2>
        <p>${errorMessages[Response.status] | errorMessages.default}</p>
        <img src=${errorImageSrc}></img>
      `;
  }
}
