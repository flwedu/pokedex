class StatsPokemonView {
  constructor(seletor) {
    this.elemento = document.querySelector(seletor);
  }

  update(pokemon) {
    this.elemento.innerHTML = this.template(pokemon);
  }

  template(pokemon) {
    return `
        <table>
        <thead>
        ${pokemon.statsLabel.map((stats) => `<td>${stats}</td>`)}
        </thead>
        <tbody>
        ${pokemon.stats.map((valor) => `<td>${valor}</td>`)}
        </tbody>
        </table>
        `;
  }
}
