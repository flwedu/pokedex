class SearchController {
  /**
   * Inicializa um SeachController com referências para objetos necessários:
   * @param {HTMLElement} referenciaParaCampoBusca
   * @param {ViewController} referenciaParaViewController
   */
  constructor(referenciaParaCampoBusca, referenciaParaViewController) {
    this._referenciaParaCampoBusca = referenciaParaCampoBusca;
    this._viewController = referenciaParaViewController;

    this._url = "https://pokeapi.co/api/v2/pokemon/";

    // Nenhum pokemon foi buscado até o momento:
    this._pokemon = null;
  }

  /**
   * Executa uma requisição na API
   * Recebe o valor digitado via referencia para o campo de texto de buscas presente no construtor
   */
  async search() {
    try {
      const dataResponse = await fetch(
        this._url + this._referenciaParaCampoBusca.value.toLowerCase()
      );
      if (dataResponse.ok) {
        // Cria um novo pokemon com os dataResponse da Response
        this._pokemon = new Pokemon(await dataResponse.json());

        // Pede ao viewController para renderizar resultados
        this._viewController.setPokemonExibido(this._pokemon);
        this._viewController.updateSelectedView();
      } else {
        // Se a Response contiver algum erro, pede pra view de erros exibi-lo
        this._viewController.renderErrorView(dataResponse);
      }
    } catch (error) {
      // Caso haja algum erro com a Promise
      console.error("Erro ao obter dataResponse do fetch");
      console.error(error);
    }
  }
}
