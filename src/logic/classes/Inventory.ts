import { Factory, InventoryType } from '../interfaces';

export class Inventory<T> implements InventoryType<T> {
    private _items: T[] = [];

    constructor(private readonly _factory: Factory<T>, private readonly _numberOfItems: number) { 
        for (let i = 0; i < _numberOfItems; i++) {
            this.addItem();
        }
    }

    public addItem = () => this._items.length < this._numberOfItems && 
    this._items.push(this._factory.generate());

    public removeItem = (item: T) => this._items = this._items.filter(i => i !== item);

    get items(): T[]{
        return this._items
    }
    
}