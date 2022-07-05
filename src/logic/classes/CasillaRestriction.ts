import { Restriction } from '../interfaces';
import { CasillaType, Event } from '../types';
import { RestrictionManager } from './RestrictionManager';

export abstract class CasillaRestriction implements Restriction {
    private _processingCheck: boolean = false;

    constructor(private _casillas: CasillaType[], private _manager: RestrictionManager<CasillaRestriction>) { }

    abstract get cumple(): boolean;
    abstract get eventType(): Event['type'] | undefined;

    get casillas(){
        return this._casillas;
    }

    update(): void {
        if(this._processingCheck || !this.cumple) return;
        this._processingCheck = true;
        setTimeout(() => {
            this._manager.check();
            this._processingCheck = false;
        },100);
    }

    triggerAction(): void {
        this.vaciarCasillas();
    }

    protected vaciarCasillas(){
        this._casillas.forEach(casilla => casilla.vaciar());
    }

}