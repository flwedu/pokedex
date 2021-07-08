// Set elementos html
const campoBusca = document.querySelector("#search-text");
const botaoBusca = document.querySelector("#botao-busca");
const resultsWindowData = document.querySelector(".results-window-data");

const campoResultados = document.querySelector(".resultados");

// Monitorando o clique
botaoBusca.addEventListener(
  "click",
  () => {
    buscarDadosNaApi(campoBusca.value);
  },
  true
);

// Formatar nome
function formatarNome(texto) {
  let primeiraLetra = texto.slice(0, 1).toUpperCase();
  let restanteDoTexto = texto.slice(1, texto.length);
  return primeiraLetra.concat("", restanteDoTexto);
}

// Função de busca
function buscarDadosNaApi(busca) {
  let urlBusca = `https://pokeapi.co/api/v2/pokemon/${busca}`;

  let resultados = fetch(urlBusca);
  resultados.then(
    (Response) => {
      if (Response.ok) {
        Response.json().then(exibirResultados, erroNaChamada);
      } else {
        erroNaChamada(Response.status);
      }
    },
    () => erroNaChamada("Promise não retornou")
  );
}

function exibirResultados(resultado) {
  let nomeOcidental = formatarNome(resultado.name);

  resultsWindowData.innerHTML = `
    <h2>${nomeOcidental}</h2>
    <img src=${resultado.sprites?.front_default}></img>
    `;
}

function erroNaChamada(erro) {
  console.error(erro);
}
