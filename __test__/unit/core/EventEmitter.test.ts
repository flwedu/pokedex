import { EventEmitter } from "../../../src/core/EventEmitter"

it("Should add a listner", () => {

    EventEmitter.on("A", () => { return });

    expect(EventEmitter.events.has("A")).toBe(true);
})

it("Should trigger the function", () => {

    const functions = {

        newFunction: (arg: any) => { return arg }
    }

    const spy = jest.spyOn(functions, "newFunction");

    EventEmitter.on("A", functions.newFunction);
    EventEmitter.emit("A", "Test");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("Test");
})