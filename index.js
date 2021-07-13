// Set elementos html
const campoBusca = document.querySelector("#search-text");
const botaoBusca = document.querySelector("#botao-busca");

// Navigator
const botaoPrevious = document.querySelector("#navigation-previous");
const botaoNext = document.querySelector("#navigation-next");

// Instanciando objetos que desempenharão funções
const searchController = new SearchController(
  ".results-window-data",
  campoBusca
);
const autoCompleteController = new AutoCompleteController(
  ".auto-complete",
  campoBusca,
  "./data/pokemon_names.json"
);

// Monitorando o clique
botaoBusca.addEventListener("click", realizarBusca, true);

// Também se o 'Enter' foi teclado
campoBusca.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    realizarBusca();
  } else {
    autoCompleteController.searchAndUpdateView();
  }
});

botaoPrevious.addEventListener("click", () =>
  searchController.previousSelectedView()
);
botaoNext.addEventListener("click", () => searchController.nextSelectedView());

// Função que dispara busca
function realizarBusca() {
  searchController.search();
}
