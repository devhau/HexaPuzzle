export interface InventoryType<T> {
    items: T[];
    addItem(): void;
    removeItem(item: T): void;
}