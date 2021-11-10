import AutoCompleteController from "./controller/AutoCompleteController.js";
import SearchController from "./controller/SearchController.js";
import ViewController from "./controller/ViewController.js";
// Set elementos html
const searchTextField = document.getElementById("search-text");
const searchButton = document.getElementById("botao-busca");
// Navigator
const buttonPrevious = document.getElementById("navigation-previous");
const buttonNext = document.getElementById("navigation-next");
// Instanciando objetos que desempenharão funções
const viewController = new ViewController(
  document.querySelector(".display__data")
);
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
  if (keyMapper.has(event.key)) keyMapper.get(event.key);
  else keyMapper.get("Default");
});
// Mapeamento de todas as keys e ações disparadas
const keyMapper = new Map();
keyMapper.set("Enter", () => realizarBusca());
keyMapper.set("Default", () => autoCompleteController.searchAndUpdateView());
keyMapper.set("Backspace", () => {
  //@ts-ignore
  if (searchTextField.value.length < 2) {
    autoCompleteController.closeList();
  }
});
buttonPrevious.addEventListener("click", () =>
  viewController.previousSelectedView()
);
buttonNext.addEventListener("click", () => viewController.nextSelectedView());
// Função que dispara busca
function realizarBusca() {
  searchController.search(searchTextField);
  autoCompleteController.closeList();
}
