class View {
  constructor(seletor) {
    this.elemento = document.querySelector(seletor);
  }

  update(pokemon) {
    this.elemento.innerHTML = this.template(pokemon);

    // Adiciona uma classe que fará com que uma animação de fadein seja executada
    this.elemento.classList.add("emtransicao");
    setTimeout(() => this.elemento.classList.remove("emtransicao"), 500);
  }

  template(pokemon) {
    console.error(
      "O método template de um objeto herdado de View deve ser implementado"
    );
  }
}
