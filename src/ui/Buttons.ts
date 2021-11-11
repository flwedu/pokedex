import { EventEmitter } from "../core/EventEmitter";
import { searchTextField } from "./DomElements";

const buttonPrevious = document.getElementById("navigation-previous") as HTMLButtonElement;
const buttonNext = document.getElementById("navigation-next") as HTMLButtonElement;
const buttonSearch = document.getElementById("botao-busca") as HTMLButtonElement;

export { buttonNext, buttonPrevious, buttonSearch }