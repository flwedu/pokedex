const getById = (id: string) => document.getElementById(id);

const Buttons = {
	previousView: getById("button__previous_view") as HTMLInputElement,
	nextView: getById("button__next_view") as HTMLInputElement,
	search: getById("button__search") as HTMLInputElement,
	previousPokemon: getById("button__previous_pokemon") as HTMLInputElement,
	nextPokemon: getById("button__next_pokemon") as HTMLInputElement,
};

export default Buttons;
