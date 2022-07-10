import { Event } from '../types';
import { Subscriber } from './Subscription';

export interface Restriction extends Subscriber{
    cumple: boolean;
    eventType?: Event['type'];
    manager?: Manager;
    triggerAction(): void;
}

export interface Manager {
    restrictions: Restriction[];
    check(): void;
}