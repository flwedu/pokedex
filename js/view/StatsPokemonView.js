class StatsPokemonView extends View {
  template(pokemon) {
    return `
      <p>Stats Iniciais do pokémon</p>
        <table class='stats-table'>
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
