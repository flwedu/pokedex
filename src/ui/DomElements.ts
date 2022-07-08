import { EventEmitter } from "../core/EventEmitter";

const input__search = document.getElementById(
  "input__search"
) as HTMLInputElement;
const display__data = document.getElementById(
  "display__data"
) as HTMLDivElement;
const display__autocomplete = document.getElementById(
  "display__autocomplete"
) as HTMLDivElement;

// Monitorando teclas digitadas no campo de texto
input__search.addEventListener("keydown", (event) => {
  if (keyMapper.has(event.key.toString()))
    keyMapper.get(event.key.toString())();
  else keyMapper.get("Default")();
});

// Mapeamento de todas as keys e ações disparadas
const keyMapper = new Map();
keyMapper.set("Enter", () => EventEmitter.emit("search", input__search.value));
keyMapper.set("Default", () =>
  EventEmitter.emit("autoComplete", input__search.value)
);
keyMapper.set("Backspace", () => {
  //@ts-ignore
  if (input__search.value.length < 2) {
    EventEmitter.emit("closeAutoComplete", null);
  }
});

export { input__search, display__data, display__autocomplete };
