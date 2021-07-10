class ErrorView {
  constructor(seletor) {
    this.elemento = document.querySelector(seletor);
  }

  update(Response) {
    this.elemento.innerHTML = this.template(Response);
  }

  template(Response) {
    return `
        <h2>Erro ${Response.status}:</h2>
        <h2>Nenhum pokémon encontrado</h2>
      `;
  }
}
