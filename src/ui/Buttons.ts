import { EventEmitter } from "../core/EventEmitter";
import { getLastSearchedPokemon } from "../index";
import { input__search } from "./DomElements";

const button__previous_view = document.getElementById("navigation-previous") as HTMLButtonElement;
const button__next_view = document.getElementById("navigation-next") as HTMLButtonElement;
const button__search = document.getElementById("botao-busca") as HTMLButtonElement;
const button__previous_pokemon = document.getElementById("pokemon-previous") as HTMLInputElement;
const button__next_pokemon = document.getElementById("pokemon-next") as HTMLInputElement;

// Buttons actions
button__search.addEventListener("click", () => {
    EventEmitter.emit("search", input__search.value);
})

button__next_view.addEventListener("click", () => {
    EventEmitter.emit("nextView", null);
})

button__previous_view.addEventListener("click", () => {
    EventEmitter.emit("previousView", null);
})

button__next_pokemon.addEventListener("click", () => {
    EventEmitter.emit("nextPokemon", null);
})

button__previous_pokemon.addEventListener("click", () => {
    EventEmitter.emit("previousPokemon", null);
})

export { button__next_view, button__previous_view, button__search, button__next_pokemon, button__previous_pokemon };
