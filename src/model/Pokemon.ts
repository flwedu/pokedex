import { IAbility } from "./Ability";

export type IPokemon = {
	id: number;
	name: string;
	sprites: {
		front_default: string;
		back_default: string;
		front_shiny?: string;
		back_shiny?: string;
		other?: {
			"official-artwork": {
				front_default: string;
				front_shiny?: string;
			};
		};
	};
	height: number;
	weight: number;
	stats: [
		{
			base_stat: number;
			effort: number;
			stat: {
				name: string;
				url: string;
			};
		}
	];
	types: [
		{
			slot: number;
			type: {
				name: string;
				url: string;
			};
		}
	];
	abilities: [
		{
			ability: {
				name: string;
				url: string;
			};
			is_hidden: boolean;
			slot: number;
		}
	];
	ability?: IAbility;
	abilityDetails?: IAbility[];
};
