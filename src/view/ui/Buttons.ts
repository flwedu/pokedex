const getById = (id: string) => document.getElementById(id);

const Buttons = {
  previousView: getById("button__previous_view") as HTMLButtonElement,
  nextView: getById("button__next_view") as HTMLButtonElement,
  search: getById("button__search") as HTMLButtonElement,
  previousPokemon: getById("button__previous_pokemon") as HTMLButtonElement,
  nextPokemon: getById("button__next_pokemon") as HTMLButtonElement,
};

export default Buttons;
