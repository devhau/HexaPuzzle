import { InventoryType,Factory } from '../interfaces';

export class Inventory<T> implements InventoryType<T>{
    private _items: T[] = [];

    constructor(){}

    public addItem(item: T){
        this._items.push(item);
    }

    public removeItem = (item: T) => this._items = this._items.filter(i => i !== item);

    public populate(factory: Factory<T>, numberOfItems: number){
        for(let i = 0; i < numberOfItems; i++){
            this.addItem(factory.generate());
        }
    }

    get items(): T[]{
        return this._items
    }
    
}