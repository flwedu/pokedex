class View {
  constructor(seletor) {
    this.elemento = document.querySelector(seletor);
  }

  update(pokemon) {
    this.elemento.innerHTML = this.template(pokemon);
  }

  template(pokemon) {
    console.error(
      "O método template de um objeto herdado de View deve ser implementado"
    );
  }
}
