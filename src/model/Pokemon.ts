import type { Pokemon, Ability } from "pokenode-ts";

export type IPokemon = Pokemon & {
	ability?: Ability;
	abilityDetails?: Ability[];
};
