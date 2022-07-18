import { Subscriber } from './Subscriber';

export interface EventManagerType<E extends {type: string}> {
    subscribers: Map<E['type'],Subscriber<E>[]>;
    subscribe(subscriber: Subscriber<E>, eventType: E['type']): void;
    notify(event: E): void;
}