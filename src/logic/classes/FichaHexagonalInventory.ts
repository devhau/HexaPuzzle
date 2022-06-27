import { FichaHexagonal } from './FichaHexagonal';
import { FichaHexagonalFactory } from './FichaHexagonalFactory';
import { Inventory } from './Inventory';


export class FichaHexagonalInventory extends Inventory<FichaHexagonal> {

    constructor(numberOfItems: number) {
        super(new FichaHexagonalFactory(), numberOfItems);
    }

}