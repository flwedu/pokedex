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
  let urlBusca = `https://pokeapi.co/api/v2/pokemon/${busca.toLowerCase()}`;

  let resultados = fetch(urlBusca);
  resultados.then(
    (Response) => {
      if (Response.ok) {
        Response.json().then(exibirResultados, erroNaChamada);
      } else {
        exibirErroNaTela(Response);
      }
    },
    () => erroNaChamada("Promise não retornou")
  );
}

// Função que exibe os resultados do Pokémon Recebidos
function exibirResultados(resultado) {
  let nomeOcidental = formatarNome(resultado.name);
  let spriteFrontal = resultado.sprites?.front_default;
  let tipo1 = resultado.types[0].type.name;

  // Verificando se há um tipo 2
  let tipo2 = resultado.types[1]?.type.name;
  if (tipo2) {
    tipo2 = "/" + tipo2;
  } else {
    tipo2 = "";
  }

  resultsWindowData.innerHTML = `
    <h2>${nomeOcidental}</h2>
    <img src=${spriteFrontal}></img>
    <p>Tipo: ${tipo1}${tipo2}</p>
    <p>Peso: ${resultado.weight}</p>
    <p>Stats Iniciais:</p>
    ${tabelaDeStats(resultado)}
    `;
}

// Função que cria uma tabela com os stats iniciais do pokémon
function tabelaDeStats(resultado) {
  let atributos = [...resultado.stats];
  let nomeAtributos = ["HP", "ATK", "DEF", "SP.ATK", "SP.DEF", "SPEED"];
  let valoresAtributos = atributos.map((atributo) => atributo.base_stat);

  return `
  <table>
  <thead>
  ${nomeAtributos.map((stats) => `<td>${stats}</td>`)}
  </thead>
  <tbody>
  ${valoresAtributos.map((valor) => `<td>${valor}</td>`)}
  </tbody>
  </table>
  `;
}

// Função que exibe erros na tela
function exibirErroNaTela(Response) {
  resultsWindowData.innerHTML = `
    <h2>Erro ${Response.status}:</h2>
    <h2>Nenhum pokémon encontrado</h2>
  `;

  erroNaChamada(Response);
}

function erroNaChamada(erro) {
  console.error(erro);
}
