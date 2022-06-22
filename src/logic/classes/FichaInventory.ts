import { Factory } from '../interfaces';

export abstract class Inventory<T>{
    protected items: T[] = [];

    constructor(protected factory: Factory<T>) { }

    public abstract add(): void;
    public abstract remove(item: T): void;
}