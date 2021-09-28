// Classe responsável por funções de manipulação de texto
function formatText(texto) {
  let primeiraLetra = texto.slice(0, 1).toUpperCase();
  let restanteDoTexto = texto.slice(1, texto.length).toLowerCase();
  return primeiraLetra.concat("", restanteDoTexto);
}

module.exports = formatText;
