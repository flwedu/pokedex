import Pokemon from "../../js/model/Pokemon.js";
import DadosPokemonView from "../../js/view/DadosPokemonView.js";

const dittoData = {
  id: 132,
  name: "Ditto",
  sprites: null,
  weight: 40,
  stats: [
    {
      base_stat: 48,
      effort: 1,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/",
      },
    },
  ],
};

const expectedHtmlWithPokemonData = `
    <h2>Nº:132 / Ditto</h2>
    <img src="">
    <p>Tipo: normal</p>
    <p>Peso: 40</p>
    `;

describe("Should create a View with pokemon data", () => {
  test("Should throw error while passing incorrect CSS selector information", () => {
    expect(() => {
      const view = new DadosPokemonView(".");
    }).toThrowError();
  });

  test("Should create an View object", () => {
    const htmlElement = document.createElement("div");
    const view = new DadosPokemonView(htmlElement);

    expect(view).toBeInstanceOf(DadosPokemonView);
  });
});

describe("Should render the correct pokemon data", () => {
  test("InnerHTML of View Element is correct", () => {
    const htmlElement = document.createElement("div");
    const view = new DadosPokemonView(htmlElement);

    view.update(new Pokemon(dittoData));

    expect(htmlElement.innerHTML).toBe(expectedHtmlWithPokemonData);
  });
});
