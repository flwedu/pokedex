class DadosPokemonView {
  constructor(seletor) {
    this.elemento = document.querySelector(seletor);
  }

  update(pokemon) {
    this.elemento.innerHTML = this.template(pokemon);
  }

  template(pokemon) {
    return `
    <h2>${pokemon.nomeOcidental}</h2>
    <img src=${pokemon.spriteFrontal}></img>
    <p>Tipo: ${pokemon.tipo1}${pokemon.tipo2}</p>
    <p>Peso: ${pokemon.peso}</p>
    `;
  }
}
