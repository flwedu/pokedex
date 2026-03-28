import EventEmitter from "./EventEmitter";

it("emit() should execute the registered function", () => {
	const fn = vi.fn();
	const emitter = new EventEmitter();

	emitter.on("A", (args: unknown) => fn(args));
	emitter.emit("A", "Test");

	expect(fn).toHaveBeenCalledTimes(1);
	expect(fn).toHaveBeenCalledWith("Test");
});

it("multiple listeners on the same topic are all called", () => {
	const fn1 = vi.fn();
	const fn2 = vi.fn();
	const emitter = new EventEmitter();

	emitter.on("B", fn1);
	emitter.on("B", fn2);
	emitter.emit("B", "data");

	expect(fn1).toHaveBeenCalledTimes(1);
	expect(fn2).toHaveBeenCalledTimes(1);
});

it("emitting an unregistered topic does nothing", () => {
	const emitter = new EventEmitter();
	expect(() => emitter.emit("unknown")).not.toThrow();
});

it("listeners on different topics do not interfere", () => {
	const fn1 = vi.fn();
	const fn2 = vi.fn();
	const emitter = new EventEmitter();

	emitter.on("C", fn1);
	emitter.on("D", fn2);
	emitter.emit("C", "payload");

	expect(fn1).toHaveBeenCalledTimes(1);
	expect(fn2).not.toHaveBeenCalled();
});
