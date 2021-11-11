import { EventEmitter } from "../core/EventEmitter";

const searchTextField = document.getElementById("search-text") as HTMLInputElement;
const display__data = document.querySelector(".display__data") as HTMLDivElement;
const display__autocomplete = document.getElementById("display__autocomplete") as HTMLDivElement;

// Monitorando teclas digitadas no campo de texto
searchTextField.addEventListener("keydown", (event) => {
    if (keyMapper.has(event.key.toString())) keyMapper.get(event.key.toString())();
    else keyMapper.get("Default")();
});

// Mapeamento de todas as keys e ações disparadas
const keyMapper = new Map();
keyMapper.set("Enter", () => EventEmitter.emit("search", searchTextField.value));
keyMapper.set("Default", () => EventEmitter.emit("autoComplete", searchTextField.value));
keyMapper.set("Backspace", () => {
    //@ts-ignore
    if (searchTextField.value.length < 2) {
        EventEmitter.emit("closeAutoComplete", null);
    }
})

export { searchTextField, display__data, display__autocomplete }