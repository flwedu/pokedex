import Pokemon from "../../js/model/Pokemon";
import { dittoData } from "../TestData.js";

test("should create a Pokemon right id", () => {
  let pokemon = new Pokemon(dittoData);
  expect(pokemon.id).toBe(dittoData.id);
});

test("should create a Pokemon with right name", () => {
  let pokemon = new Pokemon(dittoData);
  expect(pokemon.nomeOcidental).toBe(dittoData.name);
});
