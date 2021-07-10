class BuscasController {
  constructor(seletorResultados) {
    this._url = "https://pokeapi.co/api/v2/pokemon/";
    this._dadosPokemonView = new DadosPokemonView(seletorResultados);
    this._statsPokemonView = new StatsPokemonView(seletorResultados);
    this._errorView = new ErrorView(seletorResultados);
  }

  async realizarBusca(param) {
    try {
      const dados = await fetch(this._url + param.toLowerCase());
      if (dados.ok) {
        const pokemon = new Pokemon(await dados.json());
        this._dadosPokemonView.update(pokemon);
      } else {
        this._errorView.update(dados);
      }
    } catch (error) {
      console.error("Erro ao obter dados do fetch");
      console.error(error);
    }
  }
}
