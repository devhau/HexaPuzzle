import { FichaHexagonal } from './FichaHexagonal';
import { FichaHexagonalFactory } from './FichaHexagonalFactory';
import { Inventory } from './Inventory';


export class FichaHexagonalInventory extends Inventory<FichaHexagonal> {

    constructor(factory: FichaHexagonalFactory, numberOfItems: number) {
        super(factory, numberOfItems);
    }

    public add(): void {
        this.items.push(this.factory.generate());
    }

    public remove(item: FichaHexagonal): void {
        this.items = this.items.filter(i => i !== item);
    }

}