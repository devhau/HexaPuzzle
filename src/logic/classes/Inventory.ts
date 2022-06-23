import { Factory } from '../interfaces';

export abstract class Inventory<T>{
    protected items: T[] = [];

    constructor(protected factory: Factory<T>, protected numberOfItems: number) { 
        for (let i = 0; i < numberOfItems; i++) {
            this.add();
        }
    }

    public abstract add(): void;
    public abstract remove(item: T): void;
    public getItems = (): T[] => this.items;
    
}