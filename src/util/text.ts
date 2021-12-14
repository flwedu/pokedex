export function formatFirstLetterToUppercase(texto: string) {

  const [firstLetter, ...rest] = texto;
  return rest.reduce((previus, next) => previus + next.toLowerCase(), firstLetter.toUpperCase());
}

export function removeInvalidCharacters(text: string) {

  const number = Number.parseInt(text);
  if (!Number.isNaN(number)) return number;

  const symbolRegex = /[^a-z]/g;
  return text.toLowerCase().replace(symbolRegex, '');

}