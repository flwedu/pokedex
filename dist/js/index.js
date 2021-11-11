import AutoCompleteController from "./controller/AutoCompleteController";
import SearchController from "./controller/SearchController";
import ViewController from "./controller/ViewController";
// Set elementos html
const searchTextField = document.getElementById("search-text");
const searchButton = document.getElementById("botao-busca");
// Navigator
const buttonPrevious = document.getElementById("navigation-previous");
const buttonNext = document.getElementById("navigation-next");
// Instanciando objetos que desempenharão funções
const viewController = new ViewController(document.querySelector(".display__data"));
const searchController = new SearchController(viewController);
const autoCompleteController = new AutoCompleteController(document.querySelector(".auto-complete"), searchTextField);
// Monitorando o clique
searchButton.addEventListener("click", realizarBusca, false);
document
    .getElementById("pokemon-next")
    .addEventListener("click", searchController.searchNext(), false);
document
    .getElementById("pokemon-previous")
    .addEventListener("click", searchController.searchPrevious(), false);
// Monitorando teclas digitadas no campo de texto
searchTextField.addEventListener("keydown", (event) => {
    if (keyMapper.has(event.key.toString()))
        keyMapper.get(event.key.toString())();
    else
        keyMapper.get("Default")();
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
buttonPrevious.addEventListener("click", () => viewController.previousSelectedView());
buttonNext.addEventListener("click", () => viewController.nextSelectedView());
// Função que dispara busca
function realizarBusca() {
    searchController.search(searchTextField);
    autoCompleteController.closeList();
}
