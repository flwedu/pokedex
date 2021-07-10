class ErrorView extends View {
  update(Response) {
    this.elemento.innerHTML = this.template(Response);
  }

  template(Response) {
    const errorImageSrc = "../../assets/error.svg";

    if (Response.status == 404)
      return `
        <h2>Erro 404:</h2>
        <p>Nenhum pokémon encontrado</p>
        <img src=${errorImageSrc}></img>
      `;

    return `
    <h2>Erro ${Response.status}:</h2>
    <img src=${errorImageSrc}></img>
  `;
  }
}
