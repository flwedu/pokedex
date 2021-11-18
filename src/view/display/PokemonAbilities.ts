import { IAbility } from "../../model/Ability";
import { IPokemon } from "../../model/Pokemon";
import { searchInAPIforMoreData } from "../../service/SearchService"
import { errorWithResponseCode } from "./ErrorWithResponseCode";

export async function pokemonAbilities(pokemon: IPokemon) {

    try {
        const ability: IAbility = await searchInAPIforMoreData([pokemon.abilities[0].ability.url]);
        return renderPokemonAbilities(ability);
    }
    catch {
        return "";
    }
}

function renderPokemonAbilities(ability: IAbility) {
    return `
        <h2>Ability name: ${ability.name}</h2>
        <p>Effects: "${ability.effect_entries[0].effect}"</p>
    `
}