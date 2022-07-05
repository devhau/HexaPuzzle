import { Event } from '../types';

export interface Subscription {
    notify(): void;
}

export interface Subscriber {
    update(event?: Event): void;
}