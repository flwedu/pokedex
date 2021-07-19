const $ = document.querySelector.bind(document);

// Set elementos html
const searchTextField = $("#search-text");
const searchButton = $("#botao-busca");

// Navigator
const buttonPrevious = $("#navigation-previous");
const buttonNext = $("#navigation-next");

// Instanciando objetos que desempenharão funções
const viewController = new ViewController(".results-window-data");
const searchController = new SearchController(searchTextField, viewController);
const autoCompleteController = new AutoCompleteController(
  ".auto-complete",
  searchTextField,
  "./data/pokemon_names.json"
);

// Monitorando o clique
searchButton.addEventListener("click", realizarBusca, true);

// Monitorando teclas digitadas no campo de texto
searchTextField.addEventListener("keydown", (event) => {
  keyMapper[event.key] ? keyMapper[event.key]() : keyMapper["Default"]();
});

// Mapeamento de todas as keys e ações disparadas
const keyMapper = {
  Enter: () => realizarBusca(),
  Default: () => autoCompleteController.searchAndUpdateView(),
};

buttonPrevious.addEventListener("click", () =>
  viewController.previousSelectedView()
);
buttonNext.addEventListener("click", () => viewController.nextSelectedView());

// Função que dispara busca
function realizarBusca() {
  searchController.search();
}
