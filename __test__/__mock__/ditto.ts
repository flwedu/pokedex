import { IPokemon } from "../../src/model/Pokemon"

const ditto: IPokemon = {
    id: 132,
    name: "ditto",
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    },
    weight: "40",
    stats: [{
        base_stat: 48,
        effort: 1,
        stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
        }
    }],
    types: [{
        slot: 1,
        type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/"
        }
    }],
    abilities: [
        {
            ability: {
                name: "limber",
                url: "https://pokeapi.co/api/v2/ability/7/"
            },
            is_hidden: false,
            slot: 1
        }
    ]
}

export { ditto };