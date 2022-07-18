import { EventManagerType, Subscriber } from '../interfaces';

export class EventManager<E extends {type: string}> implements EventManagerType<E>{
    private _subscribers: Map<Event['type'],Subscriber<E>[]> = new Map();

    public subscribe(subscriber: Subscriber<E>, eventType: E['type']): void {
        if(!this._subscribers.has(eventType)) this._subscribers.set(eventType, [subscriber]);
        else this._subscribers.get(eventType)?.push(subscriber);
    }

    public notify(event: E): void {
        this._subscribers.get(event.type)?.forEach(subscriber => subscriber.update(event));
    }

    get subscribers(): Map<E['type'],Subscriber<E>[]> {
        return this._subscribers;
    }
}