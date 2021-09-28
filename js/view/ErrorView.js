const errorImageSrc = "../../assets/error.svg";

const errorMessages = {
  default: "Error",
  404: "No Pokémon found",
  500: "Server Error",
};
class ErrorView extends View {
  update(Response) {
    this.elemento.innerHTML = this.template(Response);
  }

  template(Response) {
    return `
        <h2>Erro 404:</h2>
        <p>${errorMessages[Response.status] | errorMessages.default}</p>
        <img src=${errorImageSrc}></img>
      `;
  }
}
