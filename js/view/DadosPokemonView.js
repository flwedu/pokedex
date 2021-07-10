class DadosPokemonView extends View {
  /**
   *
   * Retorna um HTML pronto para exibição no painel escolhido.
   * @param {Pokemon} pokemon
   * @return {InnerHTML}
   * @memberof DadosPokemonView
   */
  template(pokemon) {
    return `
    <h2>Nº:${pokemon.id} / ${pokemon.nomeOcidental}</h2>
    <img src=${pokemon.spriteFrontal}></img>
    <p>Tipo: ${pokemon.tipo1}${pokemon.tipo2}</p>
    <p>Peso: ${pokemon.peso}</p>
    `;
  }
}
