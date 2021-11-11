export const EventEmitter = {
    events: new Map<string, Function[]>(),

    on: (topic: string, callback: Function) => {
        const oldEvents = EventEmitter.events.get(topic);
        if (EventEmitter.events.has(topic)) {
            EventEmitter.events.set(topic, [...oldEvents, callback]);
        }
        return EventEmitter.events.set(topic, [callback]);
    },

    emit: (topic: string, data: any) => {
        const listeners = EventEmitter.events.get(topic);
        if (Array.isArray(listeners) && listeners.length) {
            listeners.forEach((event) => event(data));
        }
    },
};
