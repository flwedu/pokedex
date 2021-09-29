import Pokemon from "../../js/model/Pokemon";
import { dittoData } from "../TestData.js";

describe("Creating a pokemon", () => {
  test("should throw an error while receiving empty data", () => {
    expect(() => {
      const pokemon = new Pokemon();
    }).toThrowError();
  });

  test("create a pokemon object", () => {
    const pokemon = new Pokemon(dittoData);
    expect(pokemon).toBeInstanceOf(Pokemon);
  });
});

describe("Checking pokemon attributes", () => {
  test("should create a Pokemon right id", () => {
    const pokemon = new Pokemon(dittoData);
    expect(pokemon.id).toBe(dittoData.id);
  });

  test("should create a Pokemon with right name", () => {
    const pokemon = new Pokemon(dittoData);
    expect(pokemon.nomeOcidental).toBe(dittoData.name);
  });
});
