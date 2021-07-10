// Set elementos html
const campoBusca = document.querySelector("#search-text");
const botaoBusca = document.querySelector("#botao-busca");

// Navigator
const botaoPrevious = document.querySelector("#navigation-previous");
const botaoNext = document.querySelector("#navigation-next");

// Instanciando objetos que desempenharão funções
const buscasController = new BuscasController(".results-window-data");

// Monitorando o clique
botaoBusca.addEventListener(
  "click",
  () => {
    buscasController.realizarBusca(campoBusca.value);
  },
  true
);

botaoPrevious.addEventListener("click", () =>
  buscasController.previousSelectedView()
);
botaoNext.addEventListener("click", () => buscasController.nextSelectedView());
