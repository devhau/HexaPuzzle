export interface Subscription {
    notify(): void;
}

export interface Subscriber {
    update(): void;
}