import ViewController from "./js/controller/ViewController.js";
import SearchController from "./js/controller/SearchController.js";
import AutoCompleteController from "./js/controller/AutoCompleteController.js";

// Set elementos html
const searchTextField = document.querySelector("#search-text");
const searchButton = document.querySelector("#botao-busca");

// Navigator
const buttonPrevious = document.querySelector("#navigation-previous");
const buttonNext = document.querySelector("#navigation-next");

// Instanciando objetos que desempenharão funções
const viewController = new ViewController(document.querySelector(".top__data"));
const searchController = new SearchController(viewController);
const autoCompleteController = new AutoCompleteController(
  document.querySelector(".auto-complete"),
  searchTextField
);

// Monitorando o clique
searchButton.addEventListener("click", realizarBusca, false);
document
  .querySelector("#pokemon-next")
  .addEventListener("click", searchController.searchNext(), false);
document
  .querySelector("#pokemon-previous")
  .addEventListener("click", searchController.searchPrevious(), false);

// Monitorando teclas digitadas no campo de texto
searchTextField.addEventListener("keydown", (event) => {
  if (keyMapper[event.key]) keyMapper[event.key]();
  else keyMapper["Default"]();
});

// Mapeamento de todas as keys e ações disparadas
const keyMapper = {
  Enter: () => realizarBusca(),
  Default: () => autoCompleteController.searchAndUpdateView(),
  Backspace: () => {
    if (searchTextField.value.length < 2) {
      autoCompleteController.closeList();
    }
  },
};

buttonPrevious.addEventListener("click", () =>
  viewController.previousSelectedView()
);
buttonNext.addEventListener("click", () => viewController.nextSelectedView());

// Função que dispara busca
function realizarBusca() {
  searchController.search(searchTextField);
}
