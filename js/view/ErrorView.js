class ErrorView extends View {
  update(Response) {
    this.elemento.innerHTML = this.template(Response);
  }

  template(Response) {
    if (Response.status == 404)
      return `
        <h2>Erro 404:</h2>
        <p>Nenhum pokémon encontrado</p>
        <img src="../../assets/error.svg"></img>
      `;

    return `
    <h2>Erro ${Response.status}:</h2>
    <img src="../../assets/error.svg"></img>
  `;
  }
}
