class BuscasController {
  constructor(seletorResultados) {
    this._url = "https://pokeapi.co/api/v2/pokemon/";
    this._dadosPokemonView = new DadosPokemonView(seletorResultados);
    this._statsPokemonView = new StatsPokemonView(seletorResultados);
    this._errorView = new ErrorView(seletorResultados);

    // Nenhum pokemon foi buscado até o momento:
    this._pokemon = null;

    // Descreve quais as views disponíveis para exibição
    this._selectedView = 0;
    this._avaliableViews = [this._dadosPokemonView, this._statsPokemonView];
  }

  /**
   * Executa uma requisição na API
   * @param {string} param
   */
  async realizarBusca(param) {
    try {
      const dados = await fetch(this._url + param.toLowerCase());
      if (dados.ok) {
        // Cria um novo pokemon com os dados da Response
        this._pokemon = new Pokemon(await dados.json());

        // Reseta a view selecionada
        this.setSelectedView(0);

        // Atualiza os resultados na tela
        this.updateSelectedView();
      } else {
        // Se a Response contiver algum erro, pede pra view de erros exibi-lo
        this._errorView.update(dados);
      }
    } catch (error) {
      // Caso haja algum erro com a Promise
      console.error("Erro ao obter dados do fetch");
      console.error(error);
    }
  }

  /**
   * Pede a view selecionada para renderizar os dados recebidos
   */
  updateSelectedView() {
    if (this._pokemon) this.getSelectedView().update(this._pokemon);
    else console.error("Ainda não foi buscado nenhum pokemon");
  }

  /**
   * Muda a view selecionada para o id selecionado
   * @param {int} id
   */
  setSelectedView(id = 0) {
    if (id < this._avaliableViews.length - 1) this._selectedView = id;
    this.updateSelectedView();
  }

  /**
   * Seleciona a próxima view disponível
   */
  nextSelectedView() {
    if (this._selectedView < this._avaliableViews.length - 1)
      this._selectedView++;
    this.updateSelectedView();
  }

  /**
   * Seleciona a view desponível anterior
   */
  previousSelectedView() {
    if (this._selectedView > 0) this._selectedView--;
    this.updateSelectedView();
  }

  /**
   * Recupera o id da view que está selecionada
   */
  getSelectedView() {
    return this._avaliableViews[this._selectedView];
  }
}
