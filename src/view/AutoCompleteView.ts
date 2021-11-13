import { EventEmitter } from "../core/EventEmitter";
import AutoCompleteService from "../service/AutoCompleteService";
import { display__autocomplete, input__search } from "../ui/DomElements";

// Autocomplete
const autoCompleteService = new AutoCompleteService("assets/data/pokemon_names.json");

EventEmitter.on("autoComplete", (text: string) => {
    display__autocomplete.innerHTML = "";

    autoCompleteService.listarPorAproximacao(text).map(pokemon => {
        const p = document.createElement("p");
        p.textContent = pokemon;

        p.addEventListener("click", () => {
            input__search.value = p.textContent;
            EventEmitter.emit("closeAutoComplete", null);
        })

        display__autocomplete.appendChild(p);
    })
    display__autocomplete.classList.remove("invisible");
})

EventEmitter.on("closeAutoComplete", () => {
    display__autocomplete.innerHTML = "";
    display__autocomplete.classList.add("invisible");
})