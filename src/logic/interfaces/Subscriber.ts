export interface Subscriber<E extends {type: string}> {
    update(event: E): void;
}