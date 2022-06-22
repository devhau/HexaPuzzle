export interface Observer<T> {
    subscribe(subscriber: T): void;
    notifySubscribers(): void;
}