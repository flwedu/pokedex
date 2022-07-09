import EventEmitter from "./EventEmitter";

it("Emit event should execute the function", () => {
  const testFunction = jest.fn();
  const emitter = new EventEmitter();

  emitter.on("A", (args: any) => testFunction(args));
  emitter.emit("A", "Test");

  expect.assertions(2);
  expect(testFunction).toHaveBeenCalledTimes(1);
  expect(testFunction).toHaveBeenCalledWith("Test");
});
