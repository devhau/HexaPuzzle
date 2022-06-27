import { Factory } from '../interfaces';

export class Inventory<T> implements Inventory<T> {
    private items: T[] = [];

    constructor(protected readonly factory: Factory<T>, protected readonly numberOfItems: number) { 
        for (let i = 0; i < numberOfItems; i++) {
            this.add();
        }
    }

    public add = () => this.items.push(this.factory.generate());;
    public remove = (item: T) => this.items = this.items.filter(i => i !== item);
    public getItems = (): T[] => this.items;
    
}