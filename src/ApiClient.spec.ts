import { vi, describe, it, expect, beforeEach } from "vitest";
import { ApiClient } from "./ApiClient";
import { ditto } from "./util/mock_data";
import { NotFoundError, BadRequestError } from "./util/custom-errors";

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

const pokeApiResponse = {
	id: 132,
	name: "ditto",
	sprites: ditto.sprites,
	height: 3,
	weight: 40,
	stats: ditto.stats,
	types: ditto.types,
	abilities: [
		{
			ability: { name: "limber", url: "https://pokeapi.co/api/v2/ability/7/" },
			is_hidden: false,
			slot: 1,
		},
	],
};

const abilityApiResponse = {
	id: 7,
	name: "limber",
	effect_entries: [
		{
			effect: "Prevents paralysis.",
			language: { name: "en", url: "" },
			short_effect: "Prevents paralysis.",
		},
	],
};

function mockSuccess() {
	mockFetch
		.mockResolvedValueOnce({ status: 200, json: async () => pokeApiResponse })
		.mockResolvedValueOnce({ status: 200, json: async () => abilityApiResponse });
}

describe("ApiClient", () => {
	let client: ApiClient;

	beforeEach(() => {
		client = new ApiClient();
		mockFetch.mockReset();
	});

	it("fetches and returns a pokemon with ability details", async () => {
		mockSuccess();
		const pokemon = await client.get("ditto");
		expect(pokemon.name).toBe("ditto");
		expect(pokemon.abilityDetails).toHaveLength(1);
		expect(pokemon.abilityDetails?.[0].name).toBe("limber");
	});

	it("throws NotFoundError on 404", async () => {
		mockFetch.mockResolvedValueOnce({ status: 404, json: async () => ({}) });
		await expect(client.get("missingno")).rejects.toBeInstanceOf(NotFoundError);
	});

	it("throws BadRequestError on 400", async () => {
		mockFetch.mockResolvedValueOnce({ status: 400, json: async () => ({}) });
		await expect(client.get("???")).rejects.toBeInstanceOf(BadRequestError);
	});

	it("returns cached result on subsequent calls without re-fetching", async () => {
		mockSuccess();
		const first = await client.get("ditto");
		const callCount = mockFetch.mock.calls.length;

		const second = await client.get("ditto");
		expect(mockFetch.mock.calls.length).toBe(callCount);
		expect(first).toBe(second);
	});

	it("caches by ID as well as name", async () => {
		mockSuccess();
		await client.get("ditto");
		const callCountAfterFirst = mockFetch.mock.calls.length;

		await client.get("132");
		expect(mockFetch.mock.calls.length).toBe(callCountAfterFirst);
	});
});
