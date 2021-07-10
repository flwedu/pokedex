class StatsPokemonView extends View {
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
