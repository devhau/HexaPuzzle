import { Comodin,EventManagerType,FichaType } from '../interfaces';
import { Event } from '../types';

export class TrashComodin implements Comodin<FichaType>{
    private _eventManager?: EventManagerType<Event>;

    constructor(private _costo: number) { }

    use(ficha: FichaType): void {
        this._eventManager?.notify({type: 'remove_ficha', payload: ficha});
        this._eventManager?.notify({type: 'use_comodin', payload: this});
    }

    get costo(): number {
        return this._costo;
    }

    set costo(costo: number) {
        this._costo = costo;
    }

    setEventManager(pointsManager: EventManagerType<Event>){
        this._eventManager = pointsManager;
    }

}