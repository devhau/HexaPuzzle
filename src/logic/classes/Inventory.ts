import { Factory } from '../interfaces';
import { InventoryType } from '../types';

export class Inventory<T> implements InventoryType<T> {
    private _items: T[] = [];

    constructor(private readonly factory: Factory<T>, protected readonly numberOfItems: number) { 
        for (let i = 0; i < numberOfItems; i++) {
            this.addItem();
        }
    }

    public addItem = () => this._items.length < this.numberOfItems && 
    this._items.push(this.factory.generate());

    public removeItem = (item: T) => this._items = this._items.filter(i => i !== item);

    get items(): T[]{
        return this._items
    };
}