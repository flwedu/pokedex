// Set elementos html
const searchTextField = document.querySelector("#search-text");
const searchButton = document.querySelector("#botao-busca");

// Navigator
const buttonPrevious = document.querySelector("#navigation-previous");
const buttonNext = document.querySelector("#navigation-next");

// Instanciando objetos que desempenharão funções
const searchController = new SearchController(
  ".results-window-data",
  searchTextField
);
const autoCompleteController = new AutoCompleteController(
  ".auto-complete",
  searchTextField,
  "./data/pokemon_names.json"
);

// Monitorando o clique
searchButton.addEventListener("click", realizarBusca, true);

// Também se o 'Enter' foi teclado
searchTextField.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    realizarBusca();
  } else {
    autoCompleteController.searchAndUpdateView();
  }
});

buttonPrevious.addEventListener("click", () =>
  searchController.previousSelectedView()
);
buttonNext.addEventListener("click", () => searchController.nextSelectedView());

// Função que dispara busca
function realizarBusca() {
  searchController.search();
}
