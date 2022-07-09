import { EventEmitter } from "../../../src/core/EventEmitter";

it("Should add a listener", () => {
  EventEmitter.on("A", () => {
    return;
  });

  expect(EventEmitter.events.has("A")).toBe(true);
});

it("Should trigger the function", () => {
  const testFunction = jest.fn().mockImplementation((args) => args);

  EventEmitter.on("A", (args: any) => testFunction(args));
  EventEmitter.emit("A", "Test");

  expect(testFunction).toHaveBeenCalledTimes(1);
  expect(testFunction).toHaveBeenCalledWith("Test");
});
