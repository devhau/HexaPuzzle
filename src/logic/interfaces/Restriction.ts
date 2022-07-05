import { Subscriber } from './Subscription';

export interface Restriction extends Subscriber{
    cumple: boolean;
    triggerAction(): void;
}

export interface Manager<R extends Restriction> {
    restrictions: R[];
    check(): void;
}