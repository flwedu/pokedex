export default class EventEmitter {
  private events;

  constructor() {
    this.events = new Map<string, Function[]>();
  }

  on(topic: string, callback: Function) {
    const oldEvents = this.events.get(topic);
    if (this.events.has(topic)) {
      this.events.set(topic, [...oldEvents, callback]);
    }
    return this.events.set(topic, [callback]);
  }

  emit(topic: string, data: any) {
    const listeners = this.events.get(topic);
    if (Array.isArray(listeners) && listeners.length) {
      listeners.forEach((event) => event(data));
    }
  }
}
