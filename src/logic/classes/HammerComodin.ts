import { Comodin, CasillaType, EventManagerType } from '../interfaces';
import { Event } from '../types';

export class HammerComodin implements Comodin<CasillaType> {
    private _eventManager?: EventManagerType<Event>;

    constructor(private _costo: number) { }

    use(casilla: CasillaType): void {
        casilla.vaciar();
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