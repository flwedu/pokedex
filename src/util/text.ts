export function formatFirstLetterToUppercase(texto: string) {

  const [firstLetter, ...rest] = texto;
  return rest.reduce((previus, next) => previus + next.toLowerCase(), firstLetter.toUpperCase());
}

export function removeInvalidCharacters(text: string) {

  const number = Number.parseInt(text);
  if (!Number.isNaN(number)) return number;

  const letters = [...text];
  return letters.reduce((previous, next) => {
    return previous + next.toLowerCase();
  }, '');

}