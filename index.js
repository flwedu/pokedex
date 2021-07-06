// Set elementos html
const campoBusca = document.querySelector("#campo-busca");
const botaoBusca = document.querySelector("#botao-busca");

const campoResultados = document.querySelector(".resultados");

// Monitorando o clique
botaoBusca.addEventListener(
  "click",
  () => {
    buscarDadosNaApi(campoBusca.value);
  },
  true
);

// Função de busca
function buscarDadosNaApi(nomePokemon) {
  let resultados = fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
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
  let resultadoFormatado = document.createElement("div");
  resultadoFormatado.classList.add("dados-resultado");

  resultadoFormatado.innerHTML = `
    <h3>Nome do pokémon:</h3>
    <p>${resultado.name}</p>
    <h3>Imagem:</h3>
    <img src=${resultado.sprites?.front_default}></img>
    `;

  campoResultados.appendChild(resultadoFormatado);
}

function erroNaChamada(erro) {
  console.error(erro);
}
