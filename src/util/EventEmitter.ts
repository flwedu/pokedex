export default class EventEmitter {
	private events: Map<string, Function[]>;

	constructor() {
		this.events = new Map();
	}

	on(topic: string, callback: Function): void {
		const existing = this.events.get(topic) ?? [];
		this.events.set(topic, [...existing, callback]);
	}

	emit(topic: string, data?: unknown): void {
		const listeners = this.events.get(topic);
		if (Array.isArray(listeners) && listeners.length) {
			listeners.forEach((fn) => fn(data));
		}
	}
}
