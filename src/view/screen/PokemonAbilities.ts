//@ts-nocheck
import { IAbility } from "../../model/Ability";
import { IPokemon } from "../../model/Pokemon";
import { searchInAPIforMoreData } from "../../service/SearchService";
import { errorScreen } from "./ErrorScreen";

export async function pokemonAbilities(pokemon: IPokemon) {
  try {
    const ability: IAbility = await searchInAPIforMoreData([
      pokemon.abilities[0].ability.url,
    ]);
    return renderPokemonAbilities(ability);
  } catch (err) {
    return errorScreen(err);
  }
}

function renderPokemonAbilities(ability: IAbility) {
  const abilityInEnglish = ability.effect_entries.filter(
    (ability) => ability.language.name === "en"
  )[0];

  return `
    <h3>Ability:</h3>
    <h2>${ability.name}</h2>
        <p>"${abilityInEnglish.short_effect}"</p>
    `;
}
