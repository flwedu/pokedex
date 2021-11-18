//@ts-nocheck
import { IAbility } from "../../model/Ability";
import { IPokemon } from "../../model/Pokemon";
import { searchInAPIforMoreData } from "../../service/SearchService";
import { errorWithResponseCode } from "./ErrorWithResponseCode";

export async function pokemonAbilities(pokemon: IPokemon) {

    try {
        const ability: IAbility = await searchInAPIforMoreData([pokemon.abilities[0].ability.url]);
        return renderPokemonAbilities(ability);
    }
    catch (err) {
        return errorWithResponseCode(err);
    }
}

function renderPokemonAbilities(ability: IAbility) {
    return `
    <h3>Ability:</h3>
    <h2>${ability.name}</h2>
        <p>"${ability.effect_entries[1].short_effect}"</p>
    `
}