export interface Inventory<T> {
    add(): void;
    remove(item: T): void;
    getItems(): T[];
}