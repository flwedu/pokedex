// Set elementos html
const campoBusca = document.querySelector("#search-text");
const botaoBusca = document.querySelector("#botao-busca");

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
