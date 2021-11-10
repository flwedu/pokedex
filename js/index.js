import AutoCompleteController from "./controller/AutoCompleteController";
import SearchController from "./controller/SearchController";
import ViewController from "./controller/ViewController";
// Set elementos html
var searchTextField = document.getElementById("search-text");
var searchButton = document.getElementById("botao-busca");
// Navigator
var buttonPrevious = document.getElementById("navigation-previous");
var buttonNext = document.getElementById("navigation-next");
// Instanciando objetos que desempenharão funções
var viewController = new ViewController(document.querySelector(".display__data"));
var searchController = new SearchController(viewController);
var autoCompleteController = new AutoCompleteController(document.querySelector(".auto-complete"), searchTextField);
// Monitorando o clique
searchButton.addEventListener("click", realizarBusca, false);
document
    .querySelector("#pokemon-next")
    .addEventListener("click", searchController.searchNext(), false);
document
    .querySelector("#pokemon-previous")
    .addEventListener("click", searchController.searchPrevious(), false);
// Monitorando teclas digitadas no campo de texto
searchTextField.addEventListener("keydown", function (event) {
    if (keyMapper.has(event.key))
        keyMapper.get(event.key);
    else
        keyMapper.get("Default");
});
// Mapeamento de todas as keys e ações disparadas
var keyMapper = new Map();
keyMapper.set("Enter", function () { return realizarBusca(); });
keyMapper.set("Default", function () { return autoCompleteController.searchAndUpdateView(); });
keyMapper.set("Backspace", function () {
    //@ts-ignore
    if (searchTextField.value.length < 2) {
        autoCompleteController.closeList();
    }
});
buttonPrevious.addEventListener("click", function () {
    return viewController.previousSelectedView();
});
buttonNext.addEventListener("click", function () { return viewController.nextSelectedView(); });
// Função que dispara busca
function realizarBusca() {
    searchController.search(searchTextField);
    autoCompleteController.closeList();
}
