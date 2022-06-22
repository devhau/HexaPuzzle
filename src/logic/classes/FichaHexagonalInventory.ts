import { Inventory } from './FichaInventory';
import { FichaHexagonal } from './FichaHexagonal';
import { FichaHexagonalFactory } from './FichaHexagonalFactory';

export class FichaHexagonalInventory extends Inventory<FichaHexagonal> {

    constructor(factory: FichaHexagonalFactory) {
        super(factory);
    }

    public add(): void {
        this.items.push(this.factory.generate());
    }

    public remove(item: FichaHexagonal): void {
        this.items = this.items.filter(i => i !== item);
    }

}