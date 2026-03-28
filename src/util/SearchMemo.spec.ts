import { SearchMemo } from "./SearchMemo";
import { ditto } from "./mock_data";

describe("SearchMemo", () => {
	it("has() returns false for unknown key", () => {
		const memo = new SearchMemo();
		expect(memo.has("pikachu")).toBe(false);
	});

	it("add() and get() store and retrieve a pokemon", () => {
		const memo = new SearchMemo();
		memo.add("ditto", ditto);
		expect(memo.get("ditto")).toBe(ditto);
	});

	it("has() returns true after add()", () => {
		const memo = new SearchMemo();
		memo.add("132", ditto);
		expect(memo.has("132")).toBe(true);
	});

	it("get() returns undefined for unknown key", () => {
		const memo = new SearchMemo();
		expect(memo.get("missing")).toBeUndefined();
	});

	it("clear() removes all entries", () => {
		const memo = new SearchMemo();
		memo.add("ditto", ditto);
		memo.clear();
		expect(memo.has("ditto")).toBe(false);
	});

	it("stores the same pokemon under multiple keys", () => {
		const memo = new SearchMemo();
		memo.add("ditto", ditto);
		memo.add("132", ditto);
		expect(memo.get("ditto")).toBe(memo.get("132"));
	});
});
