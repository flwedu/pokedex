import formatText from "../../src/util/text"

describe("Format text functions", () => {

    test("Formatting the text correctly", () => {

        expect(formatText("aaa")).toBe("Aaa");

        expect(formatText("AAA")).toBe("Aaa");

        expect(formatText("Aaa")).toBe("Aaa");
    })

})