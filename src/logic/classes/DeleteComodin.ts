import { Comodin,EventManagerType,InventoryType } from '../interfaces';
import { Event } from '../types';

export class DeleteComodin<T> implements Comodin{
    private _eventManager?: EventManagerType<Event>;

    constructor(private _inventory: InventoryType<T>, private _costo: number) { }

    use(item: T): void {
        this._inventory.removeItem(item);
        this._inventory.addItem();
        this._eventManager?.notify({type: 'use_comodin', payload: this});
    }

    get costo(): number {
        return this._costo;
    }

    setEventManager(pointsManager: EventManagerType<Event>){
        this._eventManager = pointsManager;
    }

}