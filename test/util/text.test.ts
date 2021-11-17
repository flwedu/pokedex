import formatText from "../../src/util/text";

test("function should format to uppercase only the first letter of a full lowcase text", () => {
  expect(formatText("eeve")).toBe("Eeve");
});

test("function should format to uppercase only the first letter of a full uppercase text", () => {
  expect(formatText("PIKACHU")).toBe("Pikachu");
});

test("function should format to uppercase only the first letter of a text", () => {
  expect(formatText("Pikachu")).toBe("Pikachu");
});
