import { Event } from '../types';
import { Subscriber } from './Subscription';

export interface Restriction extends Subscriber{
    cumple: boolean;
    eventType?: Event['type'];
    manager?: Manager<Restriction>;
    triggerAction(): void;
}

export interface Manager<R extends Restriction> {
    restrictions: R[];
    check(): void;
}