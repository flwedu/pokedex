import ViewController from "./js/controller/ViewController.js";
import SearchController from "./js/controller/SearchController.js";
import AutoCompleteController from "./js/controller/AutoCompleteController.js";

const $ = document.querySelector.bind(document);

// Set elementos html
const searchTextField = $("#search-text");
const searchButton = $("#botao-busca");

// Navigator
const buttonPrevious = $("#navigation-previous");
const buttonNext = $("#navigation-next");

// Instanciando objetos que desempenharão funções
const viewController = new ViewController($(".results-window-data"));
const searchController = new SearchController(viewController);
const autoCompleteController = new AutoCompleteController(
  $(".auto-complete"),
  searchTextField
);

// Monitorando o clique
searchButton.addEventListener("click", realizarBusca, true);

// Monitorando teclas digitadas no campo de texto
searchTextField.addEventListener("keydown", (event) => {
  if (keyMapper[event.key]) keyMapper[event.key]();
  else keyMapper["Default"]();
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
  searchController.search(searchTextField);
}
