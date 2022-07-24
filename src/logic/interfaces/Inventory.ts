import { Factory } from './';

export interface InventoryType<T> {
    items: T[];
    addItem(item: T): void;
    removeItem(item: T): void;
    populate(factory: Factory<T>, numberOfItems: number): void;
}