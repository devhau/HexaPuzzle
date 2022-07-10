import { Comodin,InventoryType,PointsManagerType } from '../interfaces';

export class DeleteComodin<T> implements Comodin{
    private _pointsManager?: PointsManagerType;

    constructor(private _inventory: InventoryType<T>, private _costo: number) { }

    use(item: T): void {
        this._inventory.removeItem(item);
        this._inventory.addItem();
        this._pointsManager?.update({type: 'use_comodin', payload: this});
    }

    get costo(): number {
        return this._costo;
    }

    set pointsManager(pointsManager: PointsManagerType){
        this._pointsManager = pointsManager;
    }

}