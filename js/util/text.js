// Classe responsável por funções de manipulação de texto
export default function formatText(texto) {
    var primeiraLetra = texto.slice(0, 1).toUpperCase();
    var restanteDoTexto = texto.slice(1, texto.length).toLowerCase();
    return primeiraLetra.concat("", restanteDoTexto);
}
