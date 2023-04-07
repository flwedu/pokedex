import { formatFirstLetterToUppercase, removeInvalidCharacters } from "./text";

describe("Format text case functions", () => {
	test.each([["abcd", "Abcd", "ABCD"]])(
		"First letter Uppercase",
		(value: string) => {
			expect(formatFirstLetterToUppercase(value)).toEqual("Abcd");
		}
	);
});

describe("Remove invalid characters functions", () => {
	test.each(["pikachu", "eeve", "abc"])(
		"Doesn't removes any character",
		(value: string) => {
			expect(removeInvalidCharacters(value)).toEqual(value);
		}
	);

	test.each([
		["020", 20],
		["001", 1],
		["40", 40],
	])(
		"Removing first character if is equal to 0 and returning a number",
		(value, expected) => {
			expect(removeInvalidCharacters(value)).toEqual(expected);
		}
	);

	test.each([
		["Pika#ch@u", "pikachu"],
		["dIt!to", "ditto"],
		["C$HARM+AN**DER", "charmander"],
		["------zubat------", "zubat"],
	])(
		"Removing symbols and returning only lowercase string",
		(input, expected) => {
			expect(removeInvalidCharacters(input)).toEqual(expected);
		}
	);
});
