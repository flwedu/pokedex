import { EventEmitter } from "../core/EventEmitter";
import { input__search } from "./DomElements";

const button__previous_view = document.getElementById("button__previous_view") as HTMLButtonElement;
const button__next_view = document.getElementById("button__next_view") as HTMLButtonElement;
const button__search = document.getElementById("button__search") as HTMLButtonElement;
const button__previous_pokemon = document.getElementById("button__previous_pokemon") as HTMLInputElement;
const button__next_pokemon = document.getElementById("button__next_pokemon") as HTMLInputElement;

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
