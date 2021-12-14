import { formatFirstLetterToUppercase, removeInvalidCharacters } from "../../src/util/text"

describe("Format text case functions", () => {

    it("First letter Uppercase", () => {

        expect(formatFirstLetterToUppercase("abcd")).toBe("Abcd");

        expect(formatFirstLetterToUppercase("ABCD")).toBe("Abcd");

        expect(formatFirstLetterToUppercase("Efgh")).toBe("Efgh");
    })
})

describe("Remove invalid characters functions", () => {

    it("Doesn't removes any character", () => {

        expect(removeInvalidCharacters("pikachu")).toBe("pikachu");
        expect(removeInvalidCharacters("eeve")).toBe("eeve");
    })

    it("Removing first caracter if is equal to 0 and returning a number", () => {

        expect(removeInvalidCharacters("020")).toBe(20);
        expect(removeInvalidCharacters("001")).toBe(1);
    })

    it("Removing symbols and returning only lowercase string", () => {

        expect(removeInvalidCharacters("Pika#ch@u")).toBe("pikachu");
        expect(removeInvalidCharacters("dIt!to")).toBe("ditto");
        expect(removeInvalidCharacters("C$HARM+AN**DER")).toBe("charmander");
        expect(removeInvalidCharacters("------zubat------")).toBe("zubat");
    })

    it("Returning only lowercase string", () => {

        expect(removeInvalidCharacters("Pikachu")).toBe("pikachu");
        expect(removeInvalidCharacters("dItto")).toBe("ditto");
        expect(removeInvalidCharacters("CHARMANDER")).toBe("charmander");
    })
})