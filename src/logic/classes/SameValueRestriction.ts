import { Event } from '../types';
import { CasillaType, Manager, Restriction } from '../interfaces';

export class SameValueRestriction implements Restriction {

    private _processingCheck: boolean = false;

    constructor(private _casillas: CasillaType[], private _manager: Manager) { }

    public update(): void {
        if(this._processingCheck || !this.cumple) return;
        this._processingCheck = true;
        setTimeout(() => {
            this._manager.check();
            this._processingCheck = false;
        },100);
    }

    get cumple(): boolean {
        return this.isSameValue();
    }

    private isSameValue(): boolean {
        const value = this._casillas[0].value;
        if(!value) return false;
        return this._casillas.every(casilla => casilla.value === value);
    }

    public triggerAction(): void {
        this.vaciarCasillas();
    }

    private vaciarCasillas(){
        this._casillas.forEach(casilla => casilla.vaciar());
    }

    get eventType(): Event['type'] {
        return 'make_hexagon';
    }

    get casillas(){
        return this._casillas;
    }

}