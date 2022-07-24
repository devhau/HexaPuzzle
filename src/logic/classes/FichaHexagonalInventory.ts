import { Inventory } from './Inventory';
import { FichaHexagonal } from './FichaHexagonal';
import { Subscriber } from '../interfaces';
import { Event } from '../types';

export class FichaHexagonalInventory<V> extends Inventory<FichaHexagonal<V>> implements Subscriber<Event<FichaHexagonal<V>>>{
    
    update(event: Event<FichaHexagonal<V>>): void {
        if(event.type === 'insert_ficha' || event.type === 'remove_ficha'){
            this.removeItem(event.payload);
        }else if(event.type === 'generate_ficha'){
            this.addItem(event.payload);
        }
    }

}