export function formatarNome(texto) {
  let primeiraLetra = texto.slice(0, 1).toUpperCase();
  let restanteDoTexto = texto.slice(0, texto.length);
  return primeiraLetra.concat("", restanteDoTexto);
}
