import { Restriction } from '../interfaces';
import { CasillaType, Event } from '../types';
import { RestrictionManager } from './RestrictionManager';

export abstract class CasillaRestriction implements Restriction {

    constructor(private _casillas: CasillaType[], private _manager: RestrictionManager<CasillaRestriction>) { }

    abstract get cumple(): boolean;
    abstract get eventType(): Event['type'];

    get casillas(){
        return this._casillas;
    }

    update(): void {
        if(this.cumple) this._manager.check();
    }

    triggerAction(): void {
        this.vaciarCasillas();
    }

    protected vaciarCasillas(){
        this._casillas.forEach(casilla => casilla.vaciar());
    }

}