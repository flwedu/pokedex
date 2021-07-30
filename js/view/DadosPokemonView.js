class DadosPokemonView extends View {
  template(pokemon) {
    return `
    <h2>Nº:${pokemon.id} / ${pokemon.nomeOcidental}</h2>
    <img src=${pokemon.spriteFrontal}></img>
    <p>Tipo: ${pokemon.tipo1}${pokemon.tipo2}</p>
    <p>Peso: ${pokemon.peso}</p>
    `;
  }
}
